"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

type Command = {
  id: string;
  title: string;
  action: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (prev) {
            setSearch("");
            return false;
          }
          return true;
        });
      }
      if (e.key === "Escape" && isOpen) {
        closePalette();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePalette]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleScrollTo = (id: string) => {
    closePalette();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/${id}`);
      }
    }
  };

  const commands: Command[] = [
    {
      id: "home",
      title: "Home",
      action: () => handleScrollTo("top"),
    },
    {
      id: "about",
      title: "About",
      action: () => handleScrollTo("about"),
    },
    {
      id: "skills",
      title: "Technical Skills",
      action: () => handleScrollTo("skills"),
    },
    {
      id: "projects",
      title: "Projects",
      action: () => handleScrollTo("projects"),
    },
    {
      id: "contact",
      title: "Contact",
      action: () => handleScrollTo("contact"),
    },
    {
      id: "resume",
      title: "Resume (PDF)",
      action: () => {
        window.open("/resume.pdf", "_blank");
        closePalette();
      },
    },
    {
      id: "github",
      title: "GitHub",
      action: () => {
        window.open("https://github.com/SudoChips-exe", "_blank");
        closePalette();
      },
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      action: () => {
        window.open("https://linkedin.com/in/sudochipsdv", "_blank");
        closePalette();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      <div
        className="fixed inset-0 bg-zinc-900/30 backdrop-blur-xs"
        onClick={closePalette}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-white border border-zinc-200 rounded-lg shadow-lg overflow-hidden flex flex-col animate-fade-in">
        <div className="flex items-center px-4 py-3 border-b border-zinc-100">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm font-sans"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="text-[10px] font-mono text-zinc-400">ESC</span>
        </div>

        <div className="max-h-[45vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <p className="text-center text-zinc-400 text-xs font-mono py-6">
              No results found
            </p>
          ) : (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded text-left"
              >
                <span>{cmd.title}</span>
                <span className="text-[10px] font-mono text-zinc-400">Go</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
