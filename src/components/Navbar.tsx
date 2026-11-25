"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Materiales", href: "#materiales" },
    { label: "Ventaja Logística", href: "#ventaja" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-carbon-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" id="logo-link">
          {/* Copper ingot icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <rect
              x="4"
              y="8"
              width="24"
              height="16"
              rx="2"
              fill="#B87333"
              opacity="0.9"
            />
            <rect
              x="6"
              y="10"
              width="20"
              height="12"
              rx="1"
              fill="#D4955A"
              opacity="0.5"
            />
            <path
              d="M8 12h16M8 16h16M8 20h16"
              stroke="#B87333"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-copper">Welding</span>
            <span className="text-text-light"> Colombia</span>
            <span className="text-text-muted text-sm font-normal ml-1">
              SAS
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-light/80 hover:text-copper transition-colors duration-300 text-sm font-medium tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            id="cta-navbar"
            className="ml-4 bg-copper hover:bg-copper-light text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-copper/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-text-light p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú de navegación"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-carbon-dark/98 backdrop-blur-lg border-t border-white/5 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-text-light/80 hover:text-copper transition-colors text-base py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block bg-copper text-white text-center px-6 py-3 rounded-lg font-semibold mt-4"
          >
            Cotizar Ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
