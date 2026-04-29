"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software & systems Engineer" , 
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#080d18]">


      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <h1 className="text-5xl md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
          Chibueze Emmanuel{" "}
          <span className="text-sky-400">Amechi</span>
        </h1>

        <div className="flex items-center gap-3 mb-6 h-8">
          <span className="text-slate-500 font-mono text-sm">~/</span>
          <span className="text-slate-300 font-mono text-base">
            {displayed}
            <span className="text-sky-400 animate-pulse">▋</span>
          </span>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
          Industrial Mathematics undergraduate at UNILAG, building at the intersection of
          software, systems, and data. Long-term goal: PhD in Computer Engineering with a
          focus on hardware-software integration.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects"
            className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-[#080d18] font-semibold text-sm rounded-lg transition-colors duration-200">
            View Projects
          </a>
          <a href="#contact"
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
