import { getAllPosts } from "@/lib/markdown";
import BlogTagsClient from "./BlogTagsClient";

export default function BlogTagsPage() {
  const posts = getAllPosts();

  return <BlogTagsClient posts={posts} />;
}
