"use client";

export default function SkipToContent() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      // Shifting focus is required for screen readers when skipping content
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a 
      href="#main-content" 
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-sky-500 text-[#080d18] px-4 py-2 rounded-md font-semibold shadow-lg transition-transform"
    >
      Skip to content
    </a>
  );
}
