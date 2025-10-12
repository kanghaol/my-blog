"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "AnimeList", href: "/anime" },
  { name: "Tools", href: "/tool" },

];

export default function NavbarDesktop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      let timeoutId: NodeJS.Timeout;
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 90) {
        setVisible(false); // hide when scrolling down
      } else {
        setVisible(true); // show when scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-2 left-1/2 -translate-x-1/2 transform z-50 transition-all rounded-2xl flex content-center duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}>

      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-center py-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="text--accent text-2xl font-extrabold tracking-tight">
              <span className="text--accent font-bold text-3xl tracking-tight"></span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[20px] font-extrabold tracking-wide transition-all duration-200 ${pathname === item.href
                    ? "text-white border-b-2 border-pink-400 pb-1"
                    : "text-white/80 hover:text-pink-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Search Box */}
            <div className="relative ml-4 ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 w-44 h-9 focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white placeholder-white/60 backdrop-blur-md"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z"
                />
              </svg>
            </div>

            {/* Theme Toggle */}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
