"use client";

const stats = [
  { label: "University", value: "UNILAG" },
  { label: "Degree", value: "Ind. Math" },
  { label: "Tech Stack", value: "20+" },
  { label: "Long-term Goal", value: "PhD" },
];

export default function About() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/${id}`);
    }
  };

  return (
    <section id="about" className="py-28 px-6 bg-[#080d18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
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
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-200">Education & Core Focus</h3>
              
              <div className="relative border-l border-slate-800 ml-3 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-sky-500 rounded-full ring-4 ring-[#080d18]"></div>
                  <h4 className="text-slate-200 font-medium text-base">BSc. Industrial Mathematics</h4>
                  <p className="text-sm text-sky-400 mb-2">University of Lagos (UNILAG) • Lagos, Nigeria</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Core coursework bridging theoretical mathematics, statistics, and computer science. Building a strong foundation for advanced computational research.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-slate-700 rounded-full ring-4 ring-[#080d18]"></div>
                  <h4 className="text-slate-200 font-medium text-base">Systems Programming & R&D</h4>
                  <p className="text-sm text-sky-400 mb-2">Independent Focus</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Developing cross-platform compiled languages, custom Language Server Protocols (LSP), and low-level tools in Rust and C++.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-slate-700 rounded-full ring-4 ring-[#080d18]"></div>
                  <h4 className="text-slate-200 font-medium text-base">Future Direction</h4>
                  <p className="text-sm text-sky-400 mb-2">PhD in Computer Engineering</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Actively working towards graduate research focused on hardware-software integration, robotics, and embedded systems architecture.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}
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
