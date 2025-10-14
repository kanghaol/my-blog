import { getAllPosts } from "@/lib/markdown";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image
 from "next/image";
export default function BlogFolder() {
  const posts = getAllPosts();

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[var(--accent)] mb-8">📁 All Blog Posts</h1>
      <Link
          href="/"
          className="relative top-4 right-4 flex items-end mb-10 ml-168 gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] hover:bg-blue-200 hover:text-white transition-all duration-300 backdrop-blur-sm text-sm font-medium shadow-md"
        >
          <Icon icon="material-symbols:arrow-back-rounded" className="w-5 h-5" />
          Home
      </Link>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col md:flex-row items-center gap-6 p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <Image
              src={post.thumbnail}
              alt={post.title}
              className="w-40 h-28 object-cover rounded-lg border border-[var(--border-color)]"
              width={800}
              height={800}
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[var(--text)]">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">🗓️ {post.date}</p>
              <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
