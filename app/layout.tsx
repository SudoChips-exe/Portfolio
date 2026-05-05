import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SkipToContent from "./components/SkipToContent";
import CommandPalette from "./components/CommandPalette";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sudochips.dev"),
  title: "Chibueze Emmanuel Amechi | Full-Stack Developer",
  description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst",
  keywords: ["Software Engineer", "Systems Programmer", "Rust", "Data Analyst", "Next.js", "Lagos", "Nigeria"],
  authors: [{ name: "Chibueze Emmanuel Amechi" }],
  creator: "Chibueze Emmanuel Amechi",
  openGraph: {
    title: "Chibueze Emmanuel Amechi | Software & Systems Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst from Lagos, Nigeria.",
    url: "https://sudochips.dev",
    siteName: "Chibueze Emmanuel Amechi Portfolio",
    images: [
      {
        url: "/favicon.svg",
        alt: "Chibueze Emmanuel Amechi - Portfolio Preview",
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
    title: "Chibueze Emmanuel Amechi | Software & Systems Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst.",
    images: ["/favicon.svg"],
    creator: "@AEmmanuel61947",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chibueze Emmanuel Amechi",
  jobTitle: "Software & Systems Engineer",
  url: "https://sudochips.dev",
  sameAs: [
    "https://github.com/SudoChips-exe",
    "https://www.linkedin.com/in/amaechi-chibueze-23580a3a0",
    "https://x.com/AEmmanuel61947"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
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
