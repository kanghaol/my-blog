"use client"
import { siGithub } from "simple-icons";
import { FaSteam, FaLinkedin, FaRegFilePdf} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function SideCard() {
    const [copied, setCopied] = useState(false);
    const handleCopy = () =>{
        navigator.clipboard.writeText("kanghaolin2002@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <aside className="md:top-4 bg-transparent col-span-1 md:order-1 order-2">
            <div className="relative mb-4">
                <div className="mb-4 p-3 bg-(--card-bg) border border-neutral-300/40 shadow-md rounded-xl transition">
                    <a href="/about/" className="relative group overflow-hidden active:scale-95 block lg:max-w-none lg:mt-0 lg:mx-0 max-w-48 mb-3 mt-1 mx-auto rounded-xl" aria-label="Go to About Page">
                        <div className="relative overflow-hidden lg:mt-0 mx-auto h-full image-wrapper lg:w-full">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 ease-in-out pointer-events-none"></div>
                            <Image src="/icon.png" alt="icon" className="w-full h-full object-cover duration-500 ease-in-out transform group-hover:-translate-y-2" loading="eager" height="250" width="250" />
                        </div>
                    </a>
                    <div className="px-2 card-bg">
                        <div></div>
                        <div className="text-xl font-bold text-(--text) mb-1 text-center transition hover:scale-105 hover:text-(--accent)">
                            Kang
                        </div>
                        <div className="text-center font-bold transition bg-clip-text bg-linear-to-r from-pink-300 to-blue-400 text-transparent hover:from-blue-400 hover:to-pink-300 hover:scale-105 mb-2.5 tracking-wide">
                            <span>{"(＾-＾)つロ Cheers~"}</span>
                        </div>
                        <div className="mt-4 border-t border-(--border-color) pt-3">
                            <div className="flex justify-center gap-6 flex-wrap">

                                {/* GitHub */}
                                <a href="https://github.com/kanghaol" target="_blank" className="hover:scale-110 transition-transform" aria-label="GitHub">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:drop-shadow-[0_0_5px_#f97316] transition-all" fill="currentColor">
                                        <title>GitHub</title>
                                        <path d={siGithub.path} />
                                    </svg>
                                </a>

                                {/* Steam */}
                                <a href="https://steamcommunity.com/profiles/76561198304350400/" target="_blank" aria-label="Steam" className="hover:scale-110 transition-transform">
                                    <FaSteam className="w-6 h-6 hover:text-[#66c0f4] hover:drop-shadow-[0_0_5px_#f97316] transition-colors"/> 
                                </a>

                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/kanghaolin/" target="_blank" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                                    <FaLinkedin className="w-6 h-6 hover:text-[#66c0f4] hover:drop-shadow-[0_0_5px_#f97316] transision-colors"/>
                                </a>

                                {/* Resume */}
                                <a href="/KangHao_Lin_Resume_0126.pdf" download aria-label="Download Resume" className="hover:scale-110 transition-transform">
                                    <FaRegFilePdf  className="w-6 h-6 hover:text-(--accent) hover:drop-shadow-[0_0_5px_#f97316] transition-color"/>
                                </a>
                                
                                <button onClick={handleCopy} aria-label="Copy Gmail to clipboard" className="hover:scale-110 transition-transform focus:outline-none">
                                    <span className="text-(--accent) hover:drop-shadow-[0_0_5px_#f97316] transition-color">
                                        Kanghaolin2002@gmail.com
                                    </span>
                                </button>
                            </div>
                                {copied && (
                                <p className="text-xs text-center mt-2 text-orange-400 transition">
                                    Copied to clipboard!
                                </p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

