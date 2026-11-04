"use client";

import { useState } from "react";
import { SectionTitle } from "./About";

const links = [
  { label: "Email", href: "mailto:amaechichibueze85@gmail.com", text: "amaechichibueze85@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sudochipsdv", text: "linkedin.com/in/sudochipsdv" },
  { label: "GitHub", href: "https://github.com/SudoChips-exe", text: "github.com/SudoChips-exe" },
  { label: "X", href: "https://x.com/AEmmanuel61947", text: "@AEmmanuel61947" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpqovkbk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Transmission could not be delivered. Please send an email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please reach out directly via email.");
    }
  };

  const inputClass =
    "w-full px-3.5 py-2.5 bg-white border border-zinc-200 focus:border-zinc-950 text-zinc-900 placeholder-zinc-400 rounded outline-none text-xs sm:text-sm font-sans transition-colors";

  return (
    <section id="contact" className="bg-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Open to technical conversations, systems programming research, and production AI engineering opportunities.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm font-mono">
              {links.map((link) => (
                <div key={link.label} className="flex items-baseline gap-4">
                  <span className="text-zinc-400 w-20">{link.label}</span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 hover:text-zinc-500 underline underline-offset-2"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-500 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-500 mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-500 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-700 text-xs font-mono rounded">
                  {errorMessage}
                </div>
              )}

              {status === "sent" && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-mono rounded">
                  Message sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 text-white text-xs sm:text-sm font-medium rounded transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
