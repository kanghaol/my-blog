"use client";

import { useState, useMemo, useDeferredValue} from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function BlogTagsClient({ posts }: { posts: any[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  // Build tag dictionary
  const tagMap: Record<string, typeof posts> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag: string) => {
      if (!tagMap[tag]) tagMap[tag] = [];
      tagMap[tag].push(post);
    });
  });

  // Filter tags
  const filteredTags = useMemo(() => {
    const lower = deferredQuery.toLowerCase();
    return Object.entries(tagMap).filter(([tag]) =>
      tag.toLowerCase().includes(lower)
    );
  }, [deferredQuery, tagMap]);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      {/* Title + Search */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <h1 className="text-4xl font-bold text-(--accent)">🏷️ Tags</h1>

        <div className="relative w-full sm:w-80">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-(--border-color) bg-(--card-bg) text-(--text) focus:outline-none focus:ring-2 focus:ring-(--accent) transition-all"
          />
        </div>
      </div>
      
        <Link
          href="/"
          className="relative flex mb-10 gap-2 px-3 py-1.5 rounded-lg bg-(--accent)/10 border border-(--accent) text-(--accent) hover:bg-blue-200 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm font-medium shadow-md"
        >
          <Icon icon="material-symbols:arrow-back-rounded" className="w-5 h-5" />
          Home
        </Link>
    
      {/* Tag list */}
      <div className="space-y-10">
        {filteredTags.length === 0 && (
          <p className="text-gray-500">No matching tags found.</p>
        )}

        {filteredTags.map(([tag, posts]) => (
          <div key={tag}>
            <h2 className="text-2xl font-semibold text-(--text) mb-4 flex items-center gap-2">
              <Icon icon="mdi:tag" className="text-(--accent)" /> #{tag}
              <span className="text-sm text-gray-500 font-normal">
                ({posts.length})
              </span>
            </h2>

            <div className="grid gap-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-4 p-4 border border-(--border-color) bg-(--card-bg) rounded-lg hover:bg-(--accent)/5 hover:scale-[1.02] transition-all duration-300"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-20 h-14 object-cover rounded border border-(--border-color)"
                  />
                  <div>
                    <p className="font-semibold text-(--text)">{post.title}</p>
                    <p className="text-sm text-gray-500">🗓️ {post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
