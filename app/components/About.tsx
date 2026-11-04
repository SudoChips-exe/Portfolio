"use client";

import React from "react";

const focusItems = [
  {
    category: "Education & Core Focus",
    title: "B.Sc. Industrial Mathematics (Math & CS)",
    institution: "University of Lagos (UNILAG) • 2024 - 2028",
    description: "Core focus on algorithms, data structures, systems programming, statistical modeling, and numerical computation.",
  },
  {
    category: "Systems & Compiler Engineering",
    title: "Low-Level Systems & Tooling",
    institution: "Independent R&D",
    description: "Designing cross-platform compiled languages, custom Language Server Protocols (LSP), and packet-level networking tools in Rust, C++, and Python.",
  },
  {
    category: "Leadership & Product Engineering",
    title: "Co-Founder & Lead Engineer",
    institution: "Lunix-dv • Full-Stack & AI Infrastructure",
    description: "Leading end-to-end product engineering, cloud API integrations, and hardware-software co-design across web and embedded architectures.",
  },
];

const stats = [
  { value: "UNILAG", label: "University" },
  { value: "Math & CS", label: "Specialization" },
  { value: "20+", label: "Tech Stack" },
  { value: "Full-Spectrum", label: "Systems to AI" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About" />

        {/* Desktop Split Layout: Narrative (Left) + Stats Grid (Right) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m an{" "}
              <span className="text-zinc-950 font-medium">
                Industrial Mathematics (Mathematics &amp; Computer Science)
              </span>{" "}
              undergraduate at the University of Lagos. I learn best by building from first principles, whether that means shipping a full-stack web platform, orchestrating an agentic AI pipeline, or writing a compiler and Language Server from scratch.
            </p>
            <p>
              My work spans the full engineering spectrum: from responsive TypeScript/React interfaces and distributed backend APIs to low-level systems code in Rust and C++ and offline hardware mesh networks. Alongside my independent systems research, I co-founded Lunix-dv, where I lead full-stack architecture and developer workflows.
            </p>
          </div>

          {/* Stats Column (2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8 border-t lg:border-t-0 lg:border-l border-zinc-200 pt-8 lg:pt-0 lg:pl-12">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-zinc-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Focus Items across 3 Columns */}
        <div>
          <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mb-8">
            Core Tracks &amp; Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {focusItems.map((item) => (
              <div key={item.title} className="space-y-2.5 border-t border-zinc-200 pt-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  {item.category}
                </span>
                <h4 className="text-base font-semibold text-zinc-950 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-zinc-500">
                  {item.institution}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-zinc-950 font-normal tracking-tight mb-10 sm:mb-12">
      {title}
    </h2>
  );
}

export { SectionTitle };
