"use client";
import { useEffect, useState } from "react";

interface FallingLeavesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  fallSpeed?: number;
}

export default function FallingLeavesCanvas({
  count = 9,
  minSize = 0.8,
  maxSize = 1.4,
  fallSpeed = 0.5,
}: FallingLeavesProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // detect current theme
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = saved ? saved : prefersDark ? "dark" : "light";
    setTheme(current);

    // listen for theme changes triggered by your toggle button
    const observer = new MutationObserver(() => {
      const attr = document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark"
        | null;
      if (attr) setTheme(attr);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "falling-leaves";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    const img = new Image();

    //  Switch image depending on theme
    img.src = theme === "dark" ? "/maple-dark.png" : "/maple-light.png";

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const leaves: any[] = [];

    img.onload = () => {
      for (let i = 0; i < count; i++) {
        leaves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 40 * (minSize + Math.random() * (maxSize - minSize)),
          speedY: fallSpeed + Math.random() * 2,
          speedX: -1 + Math.random() * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: 0.01 + Math.random() * 0.02,
        });
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const leaf of leaves) {
          leaf.x += leaf.speedX;
          leaf.y += leaf.speedY;
          leaf.rotation += leaf.rotationSpeed;
          if (leaf.y > canvas.height) {
            leaf.y = -leaf.size;
            leaf.x = Math.random() * canvas.width;
          }
          ctx.save();
          ctx.translate(leaf.x, leaf.y);
          ctx.rotate(leaf.rotation);
          ctx.drawImage(img, -leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);
          ctx.restore();
        }
        requestAnimationFrame(animate);
      }
      animate();
    };

    return () => {
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, [theme, count, minSize, maxSize, fallSpeed]);

  return null;
}
