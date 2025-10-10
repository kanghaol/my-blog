"use client";
import Typewriter from "./components/Typewriter";
import HeroPortal from "./components/HeroPortal";
import {siGithub} from "simple-icons";
import {FaSteam} from "react-icons/fa";

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

      {/* Main layout */}
      <div className="w-full flex-grow max-w-6xl mx-auto bg-[var(--background)]">
        <div className="gap-4 grid lg:grid-cols-4 grid-cols-1 h-full md:grid-cols-5 pb-4 px-4 pt-6">

          {/* --- MAIN CONTENT --- */}
          <main className="flex flex-col gap-4 col-span-1 bg-transparent lg:col-span-3 md:col-span-4 md:order-2 order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-neutral-300/40 shadow-sm hover:shadow-md hover:-translate-y-2 hover:translate-x-1 transition">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-pink-200/50 text-pink-600">
                  🗂️
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)] ">Folder</h3>
                  <p className="text-sm opacity-70">collection of all blog</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-neutral-300/40 shadow-sm hover:shadow-md hover:-translate-y-2 hover:translate-x-1 transition">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-200/50 text-blue-600">
                  🏷️
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)  transition">Tags</h3>
                  <p className="text-sm opacity-70">explore all the tags used</p>
                </div>
              </div>
            </div>

            {/* --- Blog Post Card --- */}
            <article className="p-5 bg-[var(--card-bg)] border border-neutral-300/40 shadow-md rounded-2xl transition hover:shadow-lg">
              <h2 className="text-xl font-bold mb-2 text-[var(--text)] hover:text-[var(--accent)] transition">
                Testing Mathematical Formulas in Markdown
              </h2>

              <div className="flex items-center gap-2 text-sm opacity-70 mb-3">
                <span>🗓️ 5月 31 2025</span>
                <span>•</span>
                <span>LaTeX</span>
                <span>•</span>
                <span>浏览量 12 · 访问数 7</span>
              </div>

              <p className="text-sm opacity-80 mb-4">
                A demonstration of various mathematical formulas rendered using LaTeX within Markdown.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded-md">Documentation</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs rounded-md">Examples</span>
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 text-xs rounded-md">Markdown</span>
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-md">LaTeX</span>
                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs rounded-md">Mathematics</span>
              </div>

              {/* Thumbnail */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/notebook.jpg"
                  alt="Notebook"
                  className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </article>
          </main>

           {/* --- SIDEBAR --- */}
          <aside className="md:top-4 bg-transparent col-span-1 md:order-1 order-2">
            <div className="relative mb-4">
              <div className="mb-4 p-3 bg-[var(--card-bg)] border border-neutral-300/40 shadow-md rounded-xl transition">
                <a href="/about/" className="relative group overflow-hidden active:scale-95 block lg:max-w-none lg:mt-0 lg:mx-0 max-w-[12rem] mb-3 mt-1 mx-auto rounded-xl" aria-label="Go to About Page">
                  <div className="relative overflow-hidden lg:mt-0 mx-auto h-full image-wrapper lg:w-full"> 
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 ease-in-out pointer-events-none"></div>
                    <img src="/icon.png" alt="icon" className="w-full h-full object-cover duration-500 ease-in-out transform group-hover:-translate-y-2" loading="eager" height="250" width="250"/>
                  </div>
                </a>
                <div className="px-2 card-bg">
                  <div></div>
                  <div className="text-xl font-bold text-[var(--text)] mb-1 text-center transition hover:scale-105 hover:text-[var(--accent)]">
                    Kang
                  </div>
                  <div className="text-center font-bold transition bg-clip-text bg-gradient-to-r from-pink-300 to-blue-400 text-transparent hover:from-blue-400 hover:to-pink-300 hover:scale-105 mb-2.5 tracking-wide">
                  <span>{"(＾-＾)つロ Cheers~"}</span> 
                  </div>
                  <div className="mt-4 border-t border-[var(--border-color)] pt-3">
                    <div className="flex justify-center gap-6">
                      <a href="https://github.com/kanghaol" target="_blank" className="hover:scale-110 transition-transform" aria-label="GitHub">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:drop-shadow-[0_0_5px_#f97316] transition-all" fill="currentColor">
                          <title>GitHub</title>
                          <path d={siGithub.path}/>
                        </svg>
                      </a>
                      <a href="https://steamcommunity.com/profiles/76561198304350400/" target="_blank" aria-label="Steam" className="hover:scale-110 transition-transform">
                        <FaSteam className="w-6 h-6 hover:text-[#66c0f4] transition-colors"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
