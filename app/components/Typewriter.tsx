"use client";
import React, { useEffect, useRef } from "react";

const Typewriter: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  const typewriterPhrases = [
    "Hi there! I'm Kang",
    "Curiosity-driven",
    "Web Developer, Tech Enthusiast",
    "Turning ideas into code",
    "Welcome to my personal website!"
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 60; // ms per character
  const pauseTime = 1500; // ms before erase
  const erasingSpeed = typingSpeed / 2; // ms per character when erasing

  function typewriter() {
    const el = typewriterRef.current;
    if (!el) return;

    const curPhrase = typewriterPhrases[currentPhraseIndex];
    el.textContent = curPhrase.slice(0, currentCharIndex);

    if (currentCharIndex < curPhrase.length) {
      currentCharIndex++;
      setTimeout(typewriter, typingSpeed);
    } else {
      setTimeout(eraseTypewriter, pauseTime);
    }
  }

  function eraseTypewriter() {
    const el = typewriterRef.current;
    if (!el) return;

    const curPhrase = typewriterPhrases[currentPhraseIndex];
    if (currentCharIndex > 0) {
      currentCharIndex--;
      el.textContent = curPhrase.slice(0, currentCharIndex);
      setTimeout(eraseTypewriter, erasingSpeed);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % typewriterPhrases.length;
      setTimeout(typewriter, typingSpeed);
    }
  }

  useEffect(() => {
    typewriter();
  }, []);

  return (
    <div className="flex justify-center items-center text-white text-2xl font-semibold">
      <span ref={typewriterRef} id="typewriter-text" className="text-5xl font-semibold"></span>
      <span className="cursor-blink text-5xl">|</span>
    </div>
  );
};

export default Typewriter;
