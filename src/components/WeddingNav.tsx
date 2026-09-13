import { useState } from "react";
import { Heart } from "./Visuals";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wedding Day", href: "#wedding-day" },
];

export default function WeddingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-6 text-white">
        <nav className="hidden md:flex gap-8 mx-auto text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Heart className="hidden md:block w-4 h-4 absolute right-10 top-8" />
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-8 text-white text-lg">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            X
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
