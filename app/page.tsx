// app/page.tsx — Server Component
import { getAllPosts } from "@/utils/markdown";
import HomePage from "./HomePage";

export default function Page() {
  const posts = getAllPosts(); 
  return <HomePage posts={posts} />;
}
