"use client";
import React, { useEffect, useRef, useState } from "react";

const Typewriter: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const [isClient, setIsClient] = useState(false);

  const phrases = [
    "你好呀，欢迎来到这里!",
    "Welcome to my website!",
    "愿每一岁都能奔走在自己的热爱里",
    "May your days be filled chasing what brings you joy",
  ];

  const typingSpeed = 60;
  const pauseTime = 1500;
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
    // wait until after hydration before running animation
    setIsClient(true);
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
};

export default Typewriter;
