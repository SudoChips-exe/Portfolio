export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100 text-xs sm:text-sm font-mono text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Chibueze Emmanuel Amechi</span>
          <span className="mx-2">&bull;</span>
          <span>Lagos, Nigeria</span>
        </div>

        <div className="flex items-center gap-6 text-zinc-500">
          <a
            href="https://github.com/SudoChips-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sudochipsdv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/AEmmanuel61947"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            X
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-zinc-950 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
