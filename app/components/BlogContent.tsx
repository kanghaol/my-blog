"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import regypeKatex from "rehype-katex";
import SideCard from "./SideCard";


export default function BlogContent({ data, content }: any) {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to article after small delay
    const timeout = setTimeout(() => {
      articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full grow max-w-6xl mx-auto pt-8 pb-16 relative">
      {/* Grid layout: SideCard + Article */}
      <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6 px-4">
        <SideCard />

        {/* --- Blog Article --- */}
        <article
          ref={articleRef}
          className="relative col-span-3 bg-(--card-bg) border border-(--border-color) rounded-xl px-8 py-10 shadow-md overflow-hidden"
        >
          {/* Back to Home Button */}
          <Link
            href="/"
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-(--accent)/10 border border-(--accent) text-(--accent) hover:bg-blue-200 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm font-medium shadow-md"
          >
            <Icon icon="material-symbols:arrow-back-rounded" className="w-5 h-5" />
            Home
          </Link>

          {/* --- Thumbnail --- */}
          {data.thumbnail && (
            <div className="mb-6 mt-4">
              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full max-h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Post Header */}
          <h1 className="text-3xl font-bold mb-4 text-(--text)">{data.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            🗓️ {data.date} • {data.tags?.join(", ")}
          </p>

          {/* Markdown Content */}
          <div className="prose dark:prose-invert prose-headings:mb-4 prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none">
            <Markdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeRaw, rehypeHighlight, regypeKatex]}
            >
              {content}
            </Markdown>
          </div>
        
          <div className="flex flex-row justify-between">
            {/* Back to Folder */}
            <Link
              href="/blog/folder"
              className="relative top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-(--accent)/10 border border-(--accent) text-(--accent) hover:bg-blue-200 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm font-medium shadow-md"
            >
              <Icon icon="material-symbols:arrow-back-rounded" className="w-5 h-5" />
              🗂️Blog Folder
            </Link>
            {/* Back to tags */}
            <Link
              href="/blog/tags"
              className="relative top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-(--accent)/10 border border-(--accent) text-(--accent) hover:bg-blue-200 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm font-medium shadow-md"
            >
              🏷️Tags
              <Icon icon="material-symbols:arrow-forward-rounded" className="w-5 h-5" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
