import { SectionHeader } from "./About";

const skillGroups = [
  {
    category: "Frontend & Web",
    icon: "◈",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    icon: "◈",
    skills: ["Node.js", "Firebase", "Supabase", "MongoDB", "SQL"],
  },
  {
    category: "Systems & Low-Level",
    icon: "◈",
    skills: ["Rust", "C++", "Compiler Development", "LSP"],
  },
  {
    category: "Data Science & ML",
    icon: "◈",
    skills: ["Python", "R", "Pandas", "NumPy", "SciPy", "Scikit-learn", "Power BI", "Tableau"],
  },
  {
    category: "APIs & Integrations",
    icon: "◈",
    skills: ["Gemini API", "Twilio API", "ElevenLabs API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0e1628]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="02" title="Technical Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div key={group.category} className="surface-card card-hover p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sky-400 text-xs font-mono">{group.icon}</span>
                <h3 className="text-slate-200 font-medium text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill}
                    className="px-2.5 py-1 bg-slate-800/80 text-slate-400 text-xs rounded font-mono border border-slate-700/50">
                    {skill}
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
