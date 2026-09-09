"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-nav)] border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Initials Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group font-bold tracking-tight text-[var(--text-heading)]"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--color-navy)] border border-[#1BA098]/30 flex items-center justify-center text-[#1BA098] group-hover:border-[#1BA098] transition-colors font-mono text-xs shadow-sm">
            JP
          </div>
          <span className="text-base sm:text-lg font-extrabold tracking-tight">
            Jordan<span className="text-[#1BA098]">.Pene</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-muted)] hover:text-[#1BA098] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {/* Résumé Download Button (href links to /resume.pdf placeholder file) */}
          <MagneticButton
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1BA098] hover:bg-[#148079] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1BA098] focus:ring-offset-2"
          >
            <Download className="w-3.5 h-3.5" />
            Résumé
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-heading)] hover:border-[#1BA098] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-card)] px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium py-2 text-[var(--text-body)] hover:text-[#1BA098] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-color)]">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-[#1BA098] rounded-lg hover:bg-[#148079] transition-all"
            >
              <Download className="w-4 h-4" />
              Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
