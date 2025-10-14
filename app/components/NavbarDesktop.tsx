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
                className={`group relative text-[20px] font-extrabold tracking-wide text-white/80 hover:text-pink-400 transition-all duration-300 ${pathname === item.href ? "text-white" : ""
                  }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-pink-400 transition-all duration-500 ease-in-out ${pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-1/2"
                    }`}
                ></span>
              </Link>
            ))}            
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
