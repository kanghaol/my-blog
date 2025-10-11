// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import regypeKatex from "rehype-katex";

import HeroPortal from "@/app/components/HeroPortal";
import Typewriter from "@/app/components/Typewriter";
import SideCard from "@/app/components/SideCard";

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
        <div className="min-h-screen bg-[var(--background)]">
            <HeroPortal>
                <div className="text-center text-white">
                    <h1 className="mb-4 drop-shadow-lg">
                        <h1 className="text-6xl font-bold pb-8">Kang's Blog</h1>
                        <Typewriter />
                    </h1>
                </div>
            </HeroPortal>

            <div className="w-full flex-grow max-w-6xl mx-auto pt-8 pb-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6 px-4">
                    <SideCard />
                    <article className="col-span-3 order-2 bg-[var(--card-bg)] rounded-xl px-8 py-10 shadow-md">
                        <h1 className="text-3xl font-bold mb-4 text-[var(--text)]">
                            {data.title}
                        </h1>
                        <p className="text-sm text-gray-500 mb-6">
                            🗓️ {data.date} • {data.tags?.join(", ")}
                        </p>

                        <div className="prose dark:prose-invert prose-headings:mb-4 prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none">
                            <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeHighlight, regypeKatex]}>
                                {content}
                            </Markdown>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
