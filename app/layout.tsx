import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chibueze Emmanuel Amechi | Full-Stack Developer",
  description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst",
  openGraph: {
    title: "Chibueze Emmanuel Amechi | Software & Systems Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst from Lagos, Nigeria.",
    url: "https://your-portfolio.com",
    siteName: "Chibueze Emmanuel Amechi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibueze Emmanuel Amechi | Software & Systems Engineer",
    description: "Portfolio of Chibueze Emmanuel Amechi — Full-Stack Developer, Systems Programmer & Data Analyst.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chibueze Emmanuel Amechi",
  jobTitle: "Software & Systems Engineer",
  url: "https://your-portfolio.com",
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
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-sky-500 text-[#080d18] px-4 py-2 rounded-md font-semibold shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
