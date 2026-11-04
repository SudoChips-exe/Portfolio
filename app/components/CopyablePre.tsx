"use client";

import { useState } from "react";

export default function CopyablePre({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className={className || "bg-zinc-950 p-4 rounded text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed"}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2.5 right-2.5 px-2 py-1 bg-zinc-800 text-zinc-300 hover:text-white rounded text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy to clipboard"
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
