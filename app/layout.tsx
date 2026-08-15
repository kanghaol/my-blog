// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import FallingLeavesCanvas from "./components/FallingLeavesCanvas";
import Navbar from "./components/Navbar";
import AnimatedHero from "./components/AnimatedHero";
import NixieClock from "./components/NixieClock";
import { Analytics } from '@vercel/analytics/next';
import { Orbitron } from "next/font/google";

export const metadata: Metadata = {
  title: "Blog",
  description: "K's Personal Blog",
};

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/background-house.webp" />
      </head>
      <body className="{`${orbitron.className} relative bg-(--background) text-(--text) transition-colors duration-300">
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
