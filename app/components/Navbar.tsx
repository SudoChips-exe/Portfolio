"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Handle initial direct visits to /about, /skills, etc.
    const path = window.location.pathname.replace("/", "");
    if (["about", "skills", "projects", "contact"].includes(path)) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Watch sections to update URL dynamically
    const sections = document.querySelectorAll("section");
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
      { threshold: 0.5 } // 50% visibility required to change URL
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
    if (id === "top") {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#080d18]/90 backdrop-blur-md border-b border-slate-800/60" : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" onClick={(e) => handleNavClick(e, "top")} className="text-white text-sm font-semibold tracking-tight">
          Chibueze <span className="text-sky-400">Amechi</span>
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="text-slate-500 hover:text-slate-200 transition-colors text-sm">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-slate-500 hover:text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#080d18]/95 backdrop-blur-md border-b border-slate-800/60 px-6 pb-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="block py-2 text-slate-500 hover:text-slate-200 transition-colors text-sm">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
