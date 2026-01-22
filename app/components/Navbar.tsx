"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import {Icon} from "@iconify/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "AnimeList", href: "/anime" },
  { name: "Tools", href: "/tool" },

];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

      <div className=" px-6 py-3">
        <div className="flex justify-center item-center">

          {/* Nav Links desktop*/}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-[19px] font-extrabold tracking-wide text-white/80 hover:text-pink-400 transition-all duration-300 ${pathname === item.href ? "text-white" : ""
                  }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-pink-400 transition-all duration-500 ease-in-out ${pathname === item.href
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
      
        {/* Nav links mobile toggle */}
        <div className="flex relative ">
          <button onClick={() => setMenu(!menuOpen)}
            className="absolute  left-1/2 -translate-x-1/2 -translate-y-3.5  md:hidden text-white hover:text-pink-400 transition-all "
            >
            <Icon icon="mdi:menu"
              className="w-7 h-7"
            />
          </button>
          {/* Nav links mobile */}
          {menuOpen && (
            <div className="flex flex-col md:hidden mt-4 gap-3 text-center relative">
              <button
                onClick={() => setMenu(false)}
                className="absolute top-4 left-4 text-white hover:text-pink-400 transition-all"
              >
              </button>
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenu(false)}
                  className={`text-lg font-medium text-white/80 hover:text-pink-400 transition-colors ${
                  pathname === item.href ? "text-white" : ""
                }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center mt-1">
                <ThemeToggle/>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </nav>
  );
}
