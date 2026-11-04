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
    <section id="hero" className="bg-white pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-32 px-6 sm:px-8 lg:px-12 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        {/* Subtle, plain location & specialization metadata */}
        <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mb-6">
          Lagos, Nigeria &bull; UNILAG Math &amp; CS
        </div>

        {/* Name Title - Confident & Expansive on Desktop */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-zinc-950 tracking-tight leading-[1.04] mb-4">
          Chibueze Emmanuel Amechi
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-zinc-700 tracking-tight mb-8">
          Software, Systems &amp; AI Engineer
        </p>

        {/* Hero Bio */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mb-10">
          Industrial Mathematics &amp; Computer Science undergraduate at UNILAG. I engineer across the stack, from low-latency systems and compilers in Rust and C++ to production AI pipelines and full-stack web architectures.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded text-xs sm:text-sm tracking-wide"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 rounded text-xs sm:text-sm tracking-wide"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-950 underline underline-offset-4 px-2 py-2"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
