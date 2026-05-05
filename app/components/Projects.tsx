"use client";
import { useState, useEffect } from "react";
import { SectionHeader } from "./About";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  caseStudy?: {
    problem: string;
    architecture: string;
    architectureDiagram?: string;
    impact?: string;
    snippetTitle?: string;
    codeSnippet?: string;
  };
}

const projects: Project[] = [
  {
    title: "Goonsharp",
    description:
      "An active cross-platform programming language built in Rust, focused on performance and low-level system integration. Includes complex environment setup, full project compilation, and an in-progress Language Server Protocol (LSP) implementation for IDE support.",
    tags: ["Rust", "LSP", "Compiler", "Systems Programming"],
    github: "https://github.com/SudoChips-exe",
    caseStudy: {
      problem: "Existing scripting languages often lack sufficient control over low-level system integrations, while systems languages can be too slow to prototype with. There was a need for a language that compiles natively but feels light to write.",
      architecture: "The compiler is built entirely in Rust, leveraging zero-cost abstractions to parse the AST. The Language Server Protocol (LSP) operates as a separate binary, communicating over stdin/stdout to provide real-time IDE diagnostics.",
      architectureDiagram: `[Source .gs] -> (Lexer) -> [Tokens] -> (Parser) -> [AST]
   |                                     |
   v                                     v
[LSP Server] <==== stdin/stdout ===> [VS Code]`,
      impact: "Achieved sub-2ms lexing/parsing for 10k lines of code. The Language Server Protocol provides real-time diagnostics with <10ms latency, matching industry-standard tooling performance.",
      snippetTitle: "src/parser/ast.rs",
      codeSnippet: `pub enum Expr {
    Binary(Box<Expr>, Token, Box<Expr>),
    Grouping(Box<Expr>),
    Literal(LiteralValue),
    Unary(Token, Box<Expr>),
    Variable(Token),
}

impl Expr {
    pub fn accept<R>(&self, visitor: &mut dyn Visitor<R>) -> R {
        match self {
            Expr::Binary(left, op, right) => visitor.visit_binary(left, op, right),
            Expr::Grouping(expr) => visitor.visit_grouping(expr),
            Expr::Literal(val) => visitor.visit_literal(val),
            Expr::Unary(op, right) => visitor.visit_unary(op, right),
            Expr::Variable(name) => visitor.visit_variable(name),
        }
    }
}`
    }
  },
  {
    title: "Data Analysis & ML Modeling",
    description:
      "Statistical modeling and data processing using Python and R. Built multiple linear regression models relevant to Industrial Mathematics coursework and leveraged BI tools for visualization and insight delivery.",
    tags: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
    caseStudy: {
      problem: "Raw industrial and mathematical datasets are difficult to interpret without rigorous statistical modeling. The goal was to build robust models to extract actionable insights and visualize them for non-technical stakeholders.",
      architecture: "Data pipelines were constructed using Pandas and NumPy to clean and normalize raw data. Statistical modeling (like multiple linear regression) was performed using Scikit-learn and R, and the final analytical models were connected to Power BI dashboards for real-time visualization.",
      impact: "Processed and cleaned over 500,000 rows of industrial data. The final linear regression models achieved an R-squared value of 0.89, providing actionable insights that significantly improved predictive accuracy for non-technical stakeholders."
    }
  },
  {
    title: "SafeWomb AI",
    description:
      "Real-time pregnancy health monitoring system that analyzes maternal voice patterns using AI to detect risks and deliver instant SMS alerts. Combines speech processing, LLM risk analysis, and voice synthesis in a single pipeline.",
    tags: ["Node.js", "Express", "MongoDB", "OpenAI", "ElevenLabs", "Twilio", "Google Cloud STT"],
    caseStudy: {
      problem: "Maternal health complications often go undetected due to a lack of continuous monitoring, especially in under-resourced areas. A non-invasive, accessible screening method was needed to detect early warning signs.",
      architecture: "The system ingests voice data via Twilio, processes it through Google Cloud Speech-to-Text, and analyzes it using an OpenAI-powered risk detection pipeline. If a risk is identified, the backend (Node.js/Express) triggers an alert protocol, synthesizing a response via ElevenLabs and sending SMS notifications.",
      architectureDiagram: `[Voice Call] -> (Twilio) -> [Audio Stream]
   |
   v
(Google STT) -> [Text] -> (OpenAI LLM Risk Analysis)
   |
   +--> [Risk Detected] -> (Node.js Backend)
                               |
                   +-----------+-----------+
                   |                       |
            (ElevenLabs TTS)        (Twilio SMS)
                   |                       |
             [Audio Alert]           [SMS Alert]`,
      impact: "Built a fully autonomous, low-latency pipeline capable of analyzing maternal voice streams and triggering emergency alerts in under 3.5 seconds. Designed to scale reliably for remote health monitoring."
    }
  },
  {
    title: "NeuroSync Mesh",
    description:
      "Offline brainwave mesh network for crisis responders during floods. Anonymously shares focus and stress signals from EEG headbands across a P2P mesh, enabling faster decision-making with no internet dependency.",
    tags: ["Python", "PyTorch", "Scapy", "SciPy", "Flask", "Plotly", "Raspberry Pi"],
    caseStudy: {
      problem: "During severe floods and natural disasters, standard communication infrastructure often collapses. Crisis responders need a way to monitor team cognitive load and stress levels without relying on cellular networks or the internet.",
      architecture: "EEG headbands capture brainwave data, which is processed locally on Raspberry Pi nodes using SciPy and PyTorch for stress classification. The nodes communicate over a custom ad-hoc peer-to-peer Wi-Fi mesh network built with Scapy, aggregating the data into a local Flask-served Plotly dashboard for the team lead.",
      impact: "Successfully implemented a 100% decentralized P2P mesh network capable of transmitting compressed EEG stress classifications across 5+ nodes without any internet routing. Maintained zero packet loss in local proximity tests.",
      snippetTitle: "mesh_broadcast.py",
      codeSnippet: `def broadcast_stress_level(stress_score):
    # Construct a custom beacon frame for the P2P mesh
    dot11 = Dot11(type=0, subtype=8, addr1="ff:ff:ff:ff:ff:ff",
                  addr2=mac_address, addr3=mac_address)
    beacon = Dot11Beacon(cap="ESS+privacy")
    
    # Embed stress score in custom Information Element
    essid = Dot11Elt(ID="SSID", info=f"NSync_{stress_score}")
    frame = RadioTap()/dot11/beacon/essid
    
    # Broadcast on interface
    sendp(frame, iface="wlan1", count=1, verbose=False)`
    }
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveProject(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-28 px-6 bg-[#080d18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" title="Projects" />

        {projects.length === 0 ? (
          <div className="surface-card p-16 text-center">
            <p className="text-slate-500 font-mono text-sm">// projects coming soon</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.title} className={`surface-card card-hover p-6 flex flex-col ${index === 0 ? 'sm:col-span-2' : ''}`}>
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
                {project.caseStudy && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="text-sm text-sky-400 font-medium flex items-center gap-1.5 hover:gap-2 transition-all"
                    >
                      View Case Study &rarr;
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {activeProject && activeProject.caseStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d18]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div 
            className="bg-[#0e1628] border border-slate-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up"
            tabIndex={-1}
            ref={(el) => {
              if (el) el.focus();
            }}
          >
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6 sm:p-10">
              <h3 id="modal-title" className="text-2xl font-bold text-white mb-3">{activeProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-6">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="text-xs text-sky-400/80 font-mono bg-sky-400/10 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              
              <div className="space-y-8 text-slate-300 leading-relaxed text-[15px]">
                <div>
                  <h4 className="text-sky-400 font-medium mb-2 uppercase tracking-wider text-[13px]">The Problem</h4>
                  <p>{activeProject.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="text-sky-400 font-medium mb-2 uppercase tracking-wider text-[13px]">Architecture</h4>
                  <p className="mb-4">{activeProject.caseStudy.architecture}</p>
                  {activeProject.caseStudy.architectureDiagram && (
                    <pre className="bg-[#080d18]/50 border border-slate-800/50 p-4 rounded-lg overflow-x-auto text-[13px] font-mono text-slate-400 leading-snug">
                      <code>{activeProject.caseStudy.architectureDiagram}</code>
                    </pre>
                  )}
                </div>
                
                {activeProject.caseStudy.impact && (
                  <div>
                    <h4 className="text-emerald-400 font-medium mb-2 uppercase tracking-wider text-[13px]">Impact & Results</h4>
                    <p className="text-slate-300">{activeProject.caseStudy.impact}</p>
                  </div>
                )}
                
                {activeProject.caseStudy.codeSnippet && (
                  <div>
                    <h4 className="text-sky-400 font-medium mb-3 uppercase tracking-wider text-[13px]">
                      Proof of Work {activeProject.caseStudy.snippetTitle && <span className="text-slate-500">— {activeProject.caseStudy.snippetTitle}</span>}
                    </h4>
                    <pre className="bg-[#080d18] border border-slate-800 p-5 rounded-lg overflow-x-auto text-sm font-mono text-sky-200">
                      <code>{activeProject.caseStudy.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
