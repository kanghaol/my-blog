"use client";
import { useEffect } from "react";

interface FallingLeavesProps {
  count?: number;      // number of leaves
  minSize?: number;    // minimum size multiplier
  maxSize?: number;    // maximum size multiplier
  fallSpeed?: number; // speed of falling (1 or lower is perferred)
}

export default function FallingLeavesCanvas({
  count = 12,
  minSize = 0.8,
  maxSize = 1.4,
  fallSpeed = 0.5, //smaller = slower
}: FallingLeavesProps) {
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
    img.src = "/maple.png";

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
  }, [count, minSize, maxSize]);

  return null;
}
