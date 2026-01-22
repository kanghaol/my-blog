"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const wallpapers = [
  "/background-house.webp",
  "/background-old.webp",
];

export default function AnimatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % wallpapers.length);
        setNextIndex((prev) => (prev + 1) % wallpapers.length);
        setIsFading(false);
      }, 1000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[75vh] overflow-hidden">

      {/* Next image layer (fade in) */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000ms ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={wallpapers[nextIndex]}
          alt="Background next"
          fill
          loading= "lazy"
          className="object-cover object-top animate-slow-zoom brightness-95"
          sizes="100vw"
        />
      </div>

      {/* Current image layer (fade out) */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000ms ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={wallpapers[currentIndex]}
          alt="Background current"
          fill
          priority
          className="object-cover object-top animate-slow-zoom brightness-95"
          sizes="100vw"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0b0b0b]/50 to-[#0b0b0b]" />
    </div>
  );
}
