export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-slate-800/60 bg-[#080d18]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs font-mono">
        <span>© {new Date().getFullYear()} Chibueze Emmanuel Amechi</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Based in Lagos, Nigeria
        </span>
      </div>
    </footer>
  );
}
