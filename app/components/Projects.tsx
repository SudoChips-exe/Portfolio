"use client";

import { useState, useEffect } from "react";
import CopyablePre from "./CopyablePre";
import { SectionTitle } from "./About";

export interface Project {
  title: string;
  subtitle: string;
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
    subtitle: "Compiler & Language Server (LSP)",
    description:
      "An open-source, cross-platform compiled programming language built from scratch in Rust. Features lexical analysis, AST parsing, full project compilation, and a custom Language Server Protocol (LSP) delivering real-time IDE diagnostics and autocompletion.",
    tags: ["Rust", "Compiler Design", "LSP", "Systems Programming"],
    github: "https://github.com/SudoChips-exe",
    caseStudy: {
      problem:
        "Existing interpreted scripting languages frequently lack low-level memory control and type guarantees, while established systems languages present steep boilerplate and lack lightweight, integrated Language Server protocol ergonomics for modern code editors.",
      architecture:
        "Engineered purely in Rust leveraging zero-cost abstractions and strict memory safety. The pipeline comprises a high-throughput lexical analyzer, recursive-descent AST parser with error synchronization, semantic type-checking passes, and an independent LSP binary communicating over JSON-RPC 2.0 (stdin/stdout) to power live IDE diagnostics and hover completions.",
      architectureDiagram: `[Source Code .gs] -> (Lexer / Tokenizer) -> [Token Stream]
                                              |
                                              v
[AST Representation] <-------------- (Recursive Parser)
        |
        +--> (Semantic Analysis & Type Checking) -> [Compiled Artifact]
        |
        v
[LSP Daemon (JSON-RPC 2.0)] <==== stdin / stdout ====> [VS Code / Editor]`,
      impact:
        "Sub-2ms lexing and parsing throughput across 10,000 lines of code. The Language Server delivers live diagnostic updates and completions with sub-10ms response latency matching production tooling standards.",
      snippetTitle: "src/parser/ast.rs",
      codeSnippet: `pub enum Expr {
    Binary(Box<Expr>, Token, Box<Expr>),
    Grouping(Box<Expr>),
    Literal(LiteralValue),
    Unary(Token, Box<Expr>),
    Variable(Token),
    Call(Box<Expr>, Token, Vec<Expr>),
}

impl Expr {
    pub fn accept<R>(&self, visitor: &mut dyn Visitor<R>) -> R {
        match self {
            Expr::Binary(left, op, right) => visitor.visit_binary(left, op, right),
            Expr::Grouping(expr) => visitor.visit_grouping(expr),
            Expr::Literal(val) => visitor.visit_literal(val),
            Expr::Unary(op, right) => visitor.visit_unary(op, right),
            Expr::Variable(name) => visitor.visit_variable(name),
            Expr::Call(callee, paren, args) => visitor.visit_call(callee, paren, args),
        }
    }
}`,
    },
  },
  {
    title: "SafeWomb AI",
    subtitle: "Real-Time Voice & Agentic Alert Pipeline",
    description:
      "Distributed maternal health monitoring service that analyzes real-time patient voice streams to detect clinical risk indicators and dispatch automated SMS alerts. Orchestrates speech-to-text, LLM tool-calling evaluation, voice synthesis, and NoSQL state persistence in a low-latency pipeline.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Google Cloud STT",
      "ElevenLabs",
      "Twilio",
    ],
    github: "https://github.com/SudoChips-exe",
    caseStudy: {
      problem:
        "In remote and resource-constrained clinics, maternal health complications often escalate unchecked due to delayed clinical triage, absence of specialist clinicians, and lack of accessible continuous monitoring platforms that require no smart devices or high-speed internet.",
      architecture:
        "The backend streams incoming telephone voice audio via Twilio Media Streams into Google Cloud Speech-to-Text for real-time transcription. Transcribed medical distress signals are processed by an OpenAI agent equipped with strict function schemas (tool-calling) to assess obstetric danger symptoms. High-risk indicators automatically trigger patient record persistence in MongoDB, dispatch emergency alerts to community healthcare workers via Twilio SMS, and generate synthesized voice instructions back to the mother using ElevenLabs.",
      architectureDiagram: `[Inbound Phone Call] -> (Twilio Media Streams) -> [Raw PCM Audio]
                                                    |
                                                    v
(Google Cloud STT) <--------------------------------+
        |
        v [Live Transcript Feed]
(OpenAI Clinical Agent / Tool Calling Evaluator)
        |
        +-- [Severe Risk Flagged] -> (Express Service) -> [MongoDB Atlas]
        |                                    |
        v                                    +--> [Twilio SMS to Clinic]
(ElevenLabs Voice Synthesis) <---------------+
        |
        v
[Reassuring Real-Time Guidance Delivered over Audio Call]`,
      impact:
        "Engineered an autonomous voice-to-alert cycle completing in under 3.5 seconds from patient verbal report to clinician SMS alert, functioning reliably over standard cellular networks without requiring smartphone apps.",
      snippetTitle: "services/risk_evaluator.ts",
      codeSnippet: `export const evaluateMaternalTelemetry = async (transcript: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Clinical obstetric triage assistant." },
      { role: "user", content: transcript }
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "escalate_maternal_risk",
          description: "Trigger emergency hospital dispatch and family notification",
          parameters: {
            type: "object",
            properties: {
              riskLevel: { type: "string", enum: ["LOW", "MODERATE", "CRITICAL"] },
              symptoms: { type: "array", items: { type: "string" } },
              recommendedAction: { type: "string" }
            },
            required: ["riskLevel", "symptoms", "recommendedAction"]
          }
        }
      }
    ],
    tool_choice: "auto"
  });
  return response.choices[0].message;
};`,
    },
  },
  {
    title: "NeuroSync Mesh",
    subtitle: "Decentralized P2P Telemetry Network",
    description:
      "Offline peer-to-peer mesh network built on Raspberry Pi nodes for crisis responders during network blackouts. Crafts custom packets to route real-time EEG stress and focus telemetry across nodes into a live observability dashboard with zero internet dependency.",
    tags: [
      "Python",
      "C++",
      "PyTorch",
      "Scapy",
      "SciPy",
      "Flask",
      "Plotly",
      "Raspberry Pi",
    ],
    github: "https://github.com/SudoChips-exe",
    caseStudy: {
      problem:
        "Environmental disasters such as major floods frequently sever central cellular infrastructure and internet backbones. Emergency search-and-rescue teams operating under high hazard conditions require cognitive fatigue and stress monitoring without relying on centralized cloud infrastructure.",
      architecture:
        "Wearable EEG hardware streams raw brainwave voltages directly to Raspberry Pi tactical nodes. The edge nodes process signals using SciPy Butterworth bandpass filters and run a quantized PyTorch model to compute normalized stress and attentiveness metrics. Rather than relying on IP routes, nodes forge ad-hoc 802.11 beacon frames with custom vendor Information Elements using Scapy to broadcast biometric packets across neighboring field nodes. A command post node aggregates these broadcasts into a local Flask and Plotly web dashboard served over direct peer Wi-Fi.",
      architectureDiagram: `[Wearable EEG] -> [Raspberry Pi Node] -> (SciPy Filter + PyTorch Inference)
                                                 |
                                                 v
[Local Plotly Dashboard] <-- (Ad-Hoc Wi-Fi) <-- (Scapy 802.11 Raw Beacon Broadcast)
         ^
         |
[Peer Responder Nodes 2..N] (Decentralized Multi-hop Mesh)`,
      impact:
        "Maintained 0% packet loss across 5+ decentralized physical nodes in field proximity tests. Provided sub-second cognitive telemetry updates to team coordinators under complete cellular blackout conditions.",
      snippetTitle: "mesh_broadcast.py",
      codeSnippet: `from scapy.all import Dot11, Dot11Beacon, Dot11Elt, RadioTap, sendp

def broadcast_stress_level(stress_score: float, node_id: str, mac_addr: str):
    """Broadcast biometric telemetry via custom 802.11 beacon frames with vendor IE."""
    dot11 = Dot11(type=0, subtype=8,
                  addr1="ff:ff:ff:ff:ff:ff",
                  addr2=mac_addr,
                  addr3=mac_addr)
    beacon = Dot11Beacon(cap="ESS+privacy")
    
    # Custom vendor payload: Node ID and normalized floating stress metric
    payload = f"NS:{node_id}:{stress_score:.3f}".encode("utf-8")
    custom_elt = Dot11Elt(ID=221, info=b"\\x00\\x50\\xf2\\x04" + payload)
    
    frame = RadioTap() / dot11 / beacon / custom_elt
    sendp(frame, iface="wlan0mon", count=1, verbose=False)`,
    },
  },
  {
    title: "ClauseZero",
    subtitle: "Automated Document Evaluation Engine",
    description:
      "Full-stack document analysis and retrieval engine that parses complex legal contracts to flag high-risk clauses. Combines a high-throughput Rust lexical parser with Python evaluation pipelines and relational PostgreSQL storage to deliver structured risk insights.",
    tags: [
      "Rust",
      "Python",
      "PostgreSQL",
      "TypeScript",
      "React",
      "Next.js",
    ],
    github: "https://github.com/SudoChips-exe",
    caseStudy: {
      problem:
        "Manual contract evaluation is a major bottleneck for legal and operations teams. Enterprise service agreements and vendor contracts frequently exceed 60 pages, concealing unfavorable indemnification limits, unilateral termination rights, and non-standard warranties that take hours to dissect.",
      architecture:
        "Documents are parsed by a specialized Rust lexical analyzer that decomposes complex document structures, isolates hierarchical clause headings, and generates a structured AST of provisions at multi-megabyte-per-second speeds. The structured clause stream is ingested by Python analytical workers using semantic rule engines to score liability exposure and identify predatory covenants. Evaluated clauses are indexed into a normalized PostgreSQL schema with relational queries, powering a high-speed Next.js frontend with clause comparison, risk-level tagging, and recommended renegotiation language.",
      architectureDiagram: `[Contract PDF / Text] -> (Compiled Rust Lexical Parser)
                                      |
                                      v [Hierarchical Clause Graph]
(Python Semantic Risk Pipeline) <-----+
        |
        v [Risk Vector Scoring]
(PostgreSQL Relational Storage) -> Structured Queries & Audit Trail
        |
        v
[Next.js Responsive Dashboard: Risk Heatmaps & Clause Inspector]`,
      impact:
        "Accelerated contract pre-screening workflows by over 80%. Tokenized 60-page legal contracts in under 450ms via compiled Rust and indexed clause compliance with sub-second retrieval times in PostgreSQL.",
      snippetTitle: "src/clause_parser.rs",
      codeSnippet: `#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ClauseBlock {
    pub clause_id: String,
    pub section_number: String,
    pub title: Option<String>,
    pub body_text: String,
    pub risk_indicators: Vec<String>,
}

impl ClauseBlock {
    pub fn parse_document(content: &str) -> Vec<ClauseBlock> {
        let mut blocks = Vec::new();
        for section in content.split("\\n\\n") {
            if let Some(clause) = Self::extract_clause(section) {
                blocks.push(clause);
            }
        }
        blocks
    }
}`,
    },
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
    <section id="projects" className="bg-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" />

        {/* Desktop 2-Column Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-t border-zinc-200/90 pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-zinc-950">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-zinc-950 underline underline-offset-2"
                      aria-label={`${project.title} on GitHub`}
                    >
                      source
                    </a>
                  )}
                </div>

                <p className="text-xs font-mono text-zinc-500 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                  <div className="flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-zinc-400">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="inline-flex items-center">
                        <span>{tag}</span>
                        {i < project.tags.length - 1 && (
                          <span className="ml-2 select-none">&bull;</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {project.caseStudy && (
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs text-zinc-950 hover:text-zinc-600 font-medium underline underline-offset-4"
                    >
                      Read case study
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && activeProject.caseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/40 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div
            className="bg-white border border-zinc-200 rounded-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl"
            tabIndex={-1}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-950 p-1 text-sm font-mono"
              aria-label="Close Case Study"
            >
              [close]
            </button>

            <div className="mb-6 pr-12">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Technical Case Study
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-zinc-950">
                {activeProject.title}
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                {activeProject.subtitle}
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-zinc-100 pt-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  The Problem
                </h4>
                <p>{activeProject.caseStudy.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  System Architecture
                </h4>
                <p className="mb-3">{activeProject.caseStudy.architecture}</p>

                {activeProject.caseStudy.architectureDiagram && (
                  <CopyablePre
                    code={activeProject.caseStudy.architectureDiagram}
                    className="bg-zinc-950 p-4 rounded text-xs font-mono text-zinc-200 overflow-x-auto leading-snug"
                  />
                )}
              </div>

              {activeProject.caseStudy.impact && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Impact &amp; Results
                  </h4>
                  <p>{activeProject.caseStudy.impact}</p>
                </div>
              )}

              {activeProject.caseStudy.codeSnippet && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Implementation ({activeProject.caseStudy.snippetTitle || "Code"})
                  </h4>
                  <CopyablePre
                    code={activeProject.caseStudy.codeSnippet}
                    className="bg-zinc-950 p-4 rounded text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed"
                  />
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-100 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
