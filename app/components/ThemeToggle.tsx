"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved
      ? (saved as "light" | "dark")
      : prefersDark
      ? "dark"
      : "light";

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    
    const btn = document.getElementById("theme-toggle-btn");
    btn?.classList.add("animate-spin-once");
    setTimeout(() => btn?.classList.remove("animate-spin-once"), 300);
  };

  if (!mounted) return null;

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 text-[var(--accent)] hover:bg-[var(--card-bg)] hover:backdrop-blur-md hover:shadow-md hover:scale-110`}
    >
      {theme === "light" ? (
        <Icon
          icon="line-md:moon-alt-to-sunny-outline-loop-transition"
          className="h-5 w-5"
        />
      ) : (
        <Icon
          icon="line-md:sunny-outline-to-moon-alt-loop-transition"
          className="h-5 w-5"
        />
      )}
    </button>
  );
}
