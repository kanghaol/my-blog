"use client";
import { useEffect, useState } from "react";


const wallpapers = [
  "/background-house.png",
  "/background-old.png",
  "/background-new.png",
];

export default function AnimatedHero({}: {
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      // Wait for fade-out duration before switching image
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
      {/* Next image layer (fades in under current) */}
      <div
        key={nextIndex}
        className="absolute inset-0 animate-slow-zoom transition-opacity duration-[2000ms]"
        style={{
          opacity: isFading ? 1 : 0,
          backgroundImage: `url(${wallpapers[nextIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "brightness(0.95)",
        }}
      />

      {/* Current image layer */}
      <div
        key={currentIndex}
        className="absolute inset-0 animate-slow-zoom transition-opacity duration-[2000ms]"
        style={{
          opacity: isFading ? 0 : 1,
          backgroundImage: `url(${wallpapers[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "brightness(0.95)",
        }}
      />

      {/* Gradient fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b]/50 to-[#0b0b0b]" />
    </div>
  );
}
