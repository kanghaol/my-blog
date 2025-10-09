"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HeroPortal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const hostRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    hostRef.current = document.getElementById("hero-overlay-root") ?? null;
    if (!hostRef.current) return;

    // create a per-instance container so multiple pages/components won't conflict
    const container = document.createElement("div");
    // this element will allow pointer interactions (cursor) while root uses pointer-events-none
    container.className = ` w-full h-full flex items-center justify-center pointer-events-auto ${className}`;
    containerRef.current = container;
    hostRef.current.appendChild(container);
    setReady(true);

    return () => {
      if (hostRef.current && containerRef.current) {
        hostRef.current.removeChild(containerRef.current);
      }
    };
  }, [className]);

  if (!ready || !containerRef.current) return null;
  return createPortal(children, containerRef.current);
}
