import type { Metadata } from "next";
import SkipToContent from "./components/SkipToContent";
import CommandPalette from "./components/CommandPalette";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sudochips.dev"),
  title: "Chibueze Emmanuel Amechi | Software, Systems & AI Engineer",
  description: "Portfolio of Chibueze Emmanuel Amechi. Software, Systems & AI Engineer. Mathematics & Computer Science at UNILAG.",
  keywords: ["Software Engineer", "Systems Programmer", "Rust", "C++", "Compilers", "AI Engineer", "Next.js", "Lagos", "Nigeria"],
  authors: [{ name: "Chibueze Emmanuel Amechi" }],
  creator: "Chibueze Emmanuel Amechi",
  openGraph: {
    title: "Chibueze Emmanuel Amechi | Software, Systems & AI Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi. Software, Systems & AI Engineer. Mathematics & Computer Science at UNILAG.",
    url: "https://sudochips.dev",
    siteName: "Chibueze Emmanuel Amechi",
    images: [
      {
        url: "/favicon.svg",
        alt: "Chibueze Emmanuel Amechi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://sudochips.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibueze Emmanuel Amechi | Software, Systems & AI Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi. Software, Systems & AI Engineer. Mathematics & Computer Science at UNILAG.",
    images: ["/favicon.svg"],
    creator: "@AEmmanuel61947",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chibueze Emmanuel Amechi",
  jobTitle: "Software, Systems & AI Engineer",
  url: "https://sudochips.dev",
  sameAs: [
    "https://github.com/SudoChips-exe",
    "https://linkedin.com/in/sudochipsdv",
    "https://x.com/AEmmanuel61947"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
        <SkipToContent />
        <CommandPalette />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
