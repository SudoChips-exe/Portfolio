export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-slate-800/60 bg-[#080d18]">
      <div className="max-w-5xl mx-auto flex items-center justify-center text-slate-600 text-xs font-mono">
        <span>© {new Date().getFullYear()} Chibueze Emmanuel Amechi</span>
      </div>
    </footer>
  );
}
