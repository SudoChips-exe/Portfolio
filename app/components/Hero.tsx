"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/${id}`);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#080d18]">
      {/* Professional Interactive Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`,
        }}
      />
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <h1 className="text-5xl md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
          Chibueze Emmanuel{" "}
          <span className="text-sky-400">Amechi</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6">
          <h2 className="text-xl font-medium text-slate-300 tracking-wide">
            Software & Systems Engineer
          </h2>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <svg className="w-4 h-4 text-sky-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Lagos, Nigeria
          </div>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
          Industrial Mathematics undergraduate at UNILAG, building at the intersection of
          software, systems, and data. Long-term goal: PhD in Computer Engineering with a
          focus on hardware-software integration.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}
            className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-[#080d18] font-semibold text-sm rounded-lg transition-colors duration-200">
            View Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}
            className="px-6 py-2.5 border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 text-sm rounded-lg transition-colors duration-200">
            Contact Me
          </a>
          <a href="/cv.pdf" download
            className="px-6 py-2.5 border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 text-sm rounded-lg transition-colors duration-200 flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>

        {/* Subtle divider line at bottom */}

      </div>
    </section>
  );
}
