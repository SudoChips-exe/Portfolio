const stats = [
  { label: "University", value: "UNILAG" },
  { label: "Degree", value: "Ind. Math" },
  { label: "Tech Stack", value: "20+" },
  { label: "Long-term Goal", value: "PhD" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#080d18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4 text-slate-400 leading-relaxed text-[15px]">
            <p>
              I&apos;m an{" "}
              <span className="text-slate-200 font-medium">
                Industrial Mathematics (Mathematics &amp; Computer Science)
              </span>{" "}
              undergraduate at the University of Lagos. I learn best by building — whether
              that&apos;s a full-stack web app, a data pipeline, or a compiler from scratch.
            </p>
            <p>
              My work spans the full spectrum: from polished user interfaces to low-level
              systems code in Rust and C++. I&apos;m drawn to problems that sit at the edge
              of what&apos;s been done before, especially where software meets hardware.
            </p>
            <p>
              Long-term, I&apos;m working toward a{" "}
              <span className="text-slate-200 font-medium">PhD in Computer Engineering</span>,
              with a focus on hardware-software integration, robotics, and embedded systems.
            </p>
            <div className="pt-2">
              <a href="#contact"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors group">
                Get in touch
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="surface-card card-hover p-5 text-center">
                <div className="text-xl font-bold text-sky-400 mb-1 font-mono">{s.value}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-14">
      <span className="text-sky-400 font-mono text-xs">{index}.</span>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-slate-800" />
    </div>
  );
}

export { SectionHeader };
