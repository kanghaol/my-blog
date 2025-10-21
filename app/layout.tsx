// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import FallingLeavesCanvas from "./components/FallingLeavesCanvas";
import Navbar from "./components/Navbar";
import AnimatedHero from "./components/AnimatedHero";
import NixieClock from "./components/NixieClock";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Blog",
  description: "K's Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/background-house.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative bg-[var(--background)] text-[var(--text)] transition-colors duration-300">
        <FallingLeavesCanvas />
        <Navbar />

        {/* hero + overlay root */}
        <div className="relative">
          <AnimatedHero />

          <div id="hero-overlay-root" className="absolute top-0 left-0 w-full h-[75vh] pointer-events-none z-30">
            {/* portal target for per-page overlay content */}
          </div>
        </div>

        {/* page content below the AnimatedHero */}
        <main className="relative z-10 justify-center items-center">
          <NixieClock />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
