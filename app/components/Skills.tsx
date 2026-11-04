import { SectionTitle } from "./About";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Systems & Low-Level",
    items: [
      "Rust",
      "C++",
      "Compiler Design",
      "LSP / JSON-RPC",
      "Scapy (Packet Routing)",
      "Linux / Embedded",
    ],
  },
  {
    category: "Backend, Cloud & Databases",
    items: [
      "Python",
      "Node.js",
      "Express",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Supabase",
      "Firebase",
      "Docker",
      "GCP",
    ],
  },
  {
    category: "AI, LLMs & Data Pipelines",
    items: [
      "OpenAI API",
      "Gemini API",
      "Agentic Workflows & Tool Calling",
      "PyTorch",
      "SciPy",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    category: "Frontend & Product Engineering",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Plotly",
    ],
  },
  {
    category: "Real-Time APIs & Tooling",
    items: [
      "Twilio",
      "ElevenLabs",
      "Google Cloud STT",
      "Git / GitHub CI/CD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 px-6 border-b border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Technical Skills" />

        <div className="space-y-8">
          {skillCategories.map((group) => (
            <div key={group.category} className="border-t border-zinc-100 pt-4 grid sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
              <div className="sm:col-span-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  {group.category}
                </h3>
              </div>
              <div className="sm:col-span-8 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono text-zinc-700">
                {group.items.map((skill, i) => (
                  <span key={skill} className="inline-flex items-center">
                    <span className="hover:text-zinc-950 transition-colors">{skill}</span>
                    {i < group.items.length - 1 && (
                      <span className="text-zinc-300 ml-2.5 select-none">&bull;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
