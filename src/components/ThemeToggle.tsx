"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("jordan_portfolio_theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("jordan_portfolio_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("jordan_portfolio_theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] opacity-50">
        <Moon className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#1BA098] text-[var(--text-heading)] transition-all duration-300 focus:outline-none"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4">
        <Sun
          className={`w-4 h-4 text-[#1BA098] absolute inset-0 transition-opacity duration-300 ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 pointer-events-none"
          }`}
        />
        <Moon
          className={`w-4 h-4 text-[#3B4A8C] absolute inset-0 transition-opacity duration-300 ${
            !isDark ? "opacity-100 rotate-0" : "opacity-0 rotate-90 pointer-events-none"
          }`}
        />
      </div>
    </button>
  );
}
