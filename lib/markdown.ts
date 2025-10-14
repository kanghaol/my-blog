import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      tags: data.tags || [],
      description: data.description || content.slice(0, 120) + "...",
      thumbnail: data.thumbnail || "/notebook.jpg",
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
