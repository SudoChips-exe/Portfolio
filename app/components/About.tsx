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
    <section id="about" className="bg-white py-20 px-6 border-b border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About" />

        {/* Narrative Paragraphs - Zero Em Dashes */}
        <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-16">
          <p>
            I&apos;m an{" "}
            <span className="text-zinc-900 font-medium">
              Industrial Mathematics (Mathematics &amp; Computer Science)
            </span>{" "}
            undergraduate at the University of Lagos. I learn best by building from first principles, whether that means shipping a full-stack web platform, orchestrating an agentic AI pipeline, or writing a compiler and Language Server from scratch.
          </p>
          <p>
            My work spans the full engineering spectrum: from responsive TypeScript/React interfaces and distributed backend APIs to low-level systems code in Rust and C++ and offline hardware mesh networks. Alongside my independent systems research, I co-founded Lunix-dv, where I lead full-stack architecture and developer workflows.
          </p>
        </div>

        {/* 3 Focus Areas - Plain, Seamless Minimalist Layout */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6">
            Core Tracks &amp; Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {focusItems.map((item) => (
              <div key={item.title} className="space-y-2 border-t border-zinc-200 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  {item.category}
                </span>
                <h4 className="text-sm font-semibold text-zinc-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-zinc-500">
                  {item.institution}
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Stats - Subtle, Plain Minimalist Row */}
        <div className="border-t border-zinc-100 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  {s.label}
                </div>
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
    <h2 className="font-display text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mb-8">
      {title}
    </h2>
  );
}

export { SectionTitle };
