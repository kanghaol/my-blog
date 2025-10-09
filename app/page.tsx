"use client";
import Typewriter from "./components/Typewriter";
import HeroPortal from "./components/HeroPortal";

export default function HomePage() {
  return (
    <>
      {/* Typewriter overlay inside hero */}
      <HeroPortal>
        <div className=" text-center text-white">
          <h1 className="mb-4 drop-shadow-lg">
            <Typewriter />
          </h1>
        </div>
      </HeroPortal>

      {/* Main content below hero */}
      <section className="flex justify-center flex-col items-center mx-auto max-w-screen-lg px-6 py-20 bg-[var(--bg)] text-[var(--fg)] transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4 text-accent">
          Welcome to My Blog
        </h2>
        <p className="text-lg text-[var(--fg)] mb-8">
          Sharing codes, anime, and thoughts.
        </p>
        <div className="bg-card p-6 rounded-lg shadow-lg border border-accent">
          <p>This card changes color automatically when you toggle theme.</p>
        </div>
      </section>
    </>
  );
}
