"use client";
import Typewriter from "./components/Typewriter";
import HeroPortal from "./components/HeroPortal";
import SideCard from "./components/SideCard";

export default function HomePage({ posts }) {

  return (
    <>
      {/* Typewriter overlay inside hero */}
      <HeroPortal>
        <div className=" text-center text-white">
          <h1 className="mb-4 drop-shadow-lg">
            <h1 className="text-7xl font-bold pb-8">Kang's Blog</h1>
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

            {/* --- Blog list section --- */}
            {posts.map((post) => (
              <article key={post.slug} className="p-5 bg-[var(--card-bg)] border border-neutral-300/40 shadow-md rounded-2xl transition hover:shadow-lg">
                <a href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-2 text-[var(--text)] hover:text-[var(--accent)] transition">
                    {post.title}
                  </h2>
                </a>

                <div className="flex items-center gap-2 text-sm opacity-70 mb-3">
                  <span>🗓️ {post.date}</span>
                  <span>•</span>
                  <span>{post.tags.join(", ")}</span>
                </div>

                <p className="text-sm opacity-80 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-500/40 text-blue-700 dark:text-blue-400 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl overflow-hidden">
                  <img src={post.thumbnail} alt={post.title} className="w-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </article>
            ))}
          </main>

          {/* --- SIDEBAR --- */}
          <SideCard/>
        </div>
      </div>
    </>
  );
}
