import { siGithub } from "simple-icons";
import { FaSteam } from "react-icons/fa";

export default function SideCard() {
    return (
        <aside className="md:top-4 bg-transparent col-span-1 md:order-1 order-2">
            <div className="relative mb-4">
                <div className="mb-4 p-3 bg-[var(--card-bg)] border border-neutral-300/40 shadow-md rounded-xl transition">
                    <a href="/about/" className="relative group overflow-hidden active:scale-95 block lg:max-w-none lg:mt-0 lg:mx-0 max-w-[12rem] mb-3 mt-1 mx-auto rounded-xl" aria-label="Go to About Page">
                        <div className="relative overflow-hidden lg:mt-0 mx-auto h-full image-wrapper lg:w-full">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 ease-in-out pointer-events-none"></div>
                            <img src="/icon.png" alt="icon" className="w-full h-full object-cover duration-500 ease-in-out transform group-hover:-translate-y-2" loading="eager" height="250" width="250" />
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
                                        <path d={siGithub.path} />
                                    </svg>
                                </a>
                                <a href="https://steamcommunity.com/profiles/76561198304350400/" target="_blank" aria-label="Steam" className="hover:scale-110 transition-transform">
                                    <FaSteam className="w-6 h-6 hover:text-[#66c0f4] transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

