// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import HeroPortal from "@/app/components/HeroPortal";
import Typewriter from "@/app/components/Typewriter";
import BlogContent from "@/app/components/BlogContent";

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), "content/blog");
    const filenames = fs.readdirSync(postsDir);
    return filenames.map((name) => ({
        slug: name.replace(/\.md$/, ""),
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
    const file = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(file);

    return (
        <div className="min-h-screen bg-(--background)">
            <HeroPortal>
                <div className="text-center text-white">
                    <h1 className="mb-4 drop-shadow-lg text-6xl font-bold pb-8">
                        Kang's Blog
                    </h1>
                    <Typewriter phrases={[
                        "你好呀，欢迎来到这里!",
                        "Welcome to my website!",
                        "愿每一岁都能奔走在自己的热爱里",
                        "May your days be filled chasing what brings you joy",
                    ]}
                    pauseTime={1500}
                    />
                </div>
            </HeroPortal>

            {/* content + metadata to client component */}
            <BlogContent data={data} content={content} />
        </div>
    );
}
