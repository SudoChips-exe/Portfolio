import { SectionHeader } from "./About";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Goonsharp",
    description:
      "An active cross-platform programming language built in Rust, focused on performance and low-level system integration. Includes complex environment setup, full project compilation, and an in-progress Language Server Protocol (LSP) implementation for IDE support.",
    tags: ["Rust", "LSP", "Compiler", "Systems Programming"],
    github: "https://github.com/SudoChips-exe",
  },
  {
    title: "Data Analysis & ML Modeling",
    description:
      "Statistical modeling and data processing using Python and R. Built multiple linear regression models relevant to Industrial Mathematics coursework and leveraged BI tools for visualization and insight delivery.",
    tags: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
  },
  {
    title: "SafeWomb AI",
    description:
      "Real-time pregnancy health monitoring system that analyzes maternal voice patterns using AI to detect risks and deliver instant SMS alerts. Combines speech processing, LLM risk analysis, and voice synthesis in a single pipeline.",
    tags: ["Node.js", "Express", "MongoDB", "OpenAI", "ElevenLabs", "Twilio", "Google Cloud STT"],
  },
  {
    title: "NeuroSync Mesh",
    description:
      "Offline brainwave mesh network for crisis responders during floods. Anonymously shares focus and stress signals from EEG headbands across a P2P mesh, enabling faster decision-making with no internet dependency.",
    tags: ["Python", "PyTorch", "Scapy", "SciPy", "Flask", "Plotly", "Raspberry Pi"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#080d18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" title="Projects" />

        {projects.length === 0 ? (
          <div className="surface-card p-16 text-center">
            <p className="text-slate-500 font-mono text-sm">// projects coming soon</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.title} className="surface-card card-hover p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <svg className="w-7 h-7 text-sky-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub" className="text-slate-500 hover:text-sky-400 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        aria-label="Live demo" className="text-slate-500 hover:text-sky-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-sky-400/80 font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
