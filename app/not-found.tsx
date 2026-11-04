import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-neutral-900">
      <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">Error 404</span>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Coordinate Not Found</h1>
      <p className="text-sm text-neutral-500 mb-6 font-mono">The requested path does not exist on this host.</p>
      <Link href="/" className="px-4 py-2 bg-neutral-900 text-white rounded text-xs font-mono">
        Return to Root
      </Link>
    </div>
  );
}
