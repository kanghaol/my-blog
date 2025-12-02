---
title: "Typewriter component"
date: "2025-12-1"
tags: ["react", "component", "typewriter"]
description: "Typewriter React Component with tailwindcss"
thumbnail: "/typewriter.png"
---

```tsx

"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Typewriter({
  phrases,
  typingSpeed = 60,
  pauseTime,
}: {
  phrases: string[];
  typingSpeed?: number;
  pauseTime?: number;
}) {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const [isClient, setIsClient] = useState(false);

  const erasingSpeed = typingSpeed / 2;

  const type = () => {
    const el = typewriterRef.current;
    if (!el) return;

    const phrase = phrases[phraseIndex.current];
    el.textContent = phrase.slice(0, charIndex.current);

    if (charIndex.current < phrase.length) {
      charIndex.current++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pauseTime);
    }
  };

  const erase = () => {
    const el = typewriterRef.current;
    if (!el) return;

    const phrase = phrases[phraseIndex.current];
    if (charIndex.current > 0) {
      charIndex.current--;
      el.textContent = phrase.slice(0, charIndex.current);
      setTimeout(erase, erasingSpeed);
    } else {
      phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      setTimeout(type, typingSpeed);
    }
  };

  useEffect(() => {
    setIsClient(true); // prevent hydration mismatch
  }, []);

  useEffect(() => {
    if (isClient) type();
  }, [isClient]);

  return (
    <div className="flex justify-center items-center text-white text-2xl font-semibold">
      <span ref={typewriterRef} className="text-4xl font-light"></span>
      <span className="cursor-blink text-5xl">|</span>
    </div>
  );
}
