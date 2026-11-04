"use client";

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/${id}`);
    }
  };

  return (
    <section id="hero" className="bg-white pt-32 pb-20 px-6 border-b border-zinc-100">
      <div className="max-w-4xl mx-auto">
        {/* Clean, Plain Metadata - No pill badges, no pulsing dots */}
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6">
          Lagos, Nigeria &bull; UNILAG Math &amp; CS
        </div>

        {/* Name Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 tracking-tight leading-[1.08] mb-3">
          Chibueze Emmanuel Amechi
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-zinc-700 tracking-tight mb-6">
          Software, Systems &amp; AI Engineer
        </p>

        {/* Hero Bio - Completely free of Em dashes */}
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mb-8">
          Industrial Mathematics &amp; Computer Science undergraduate at UNILAG. I engineer across the stack, from low-latency systems and compilers in Rust and C++ to production AI pipelines and full-stack web architectures.
        </p>

        {/* Plain, clean action links */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded text-xs tracking-wide"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-4 py-2 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 rounded text-xs tracking-wide"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-4 px-2 py-2"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
