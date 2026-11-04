"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (["about", "skills", "projects", "contact"].includes(path)) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "hero") {
              window.history.replaceState(null, "", "/");
            } else if (id) {
              window.history.replaceState(null, "", `/${id}`);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (id === "top" || id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/${id}`);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-zinc-200/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "top")}
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600"
        >
          Chibueze Emmanuel Amechi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-3.5 w-px bg-zinc-200" aria-hidden="true" />

          <a
            href="/resume.pdf"
            download
            className="text-xs font-medium text-zinc-900 hover:text-zinc-500 underline underline-offset-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-zinc-600 hover:text-zinc-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3 shadow-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100">
            <a
              href="/resume.pdf"
              download
              className="block text-xs font-medium text-zinc-900 underline underline-offset-4 py-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
