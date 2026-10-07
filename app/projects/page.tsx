"use client"
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Span } from "next/dist/trace";

export default function ProjectsPage() {
    const techIcon = (name: string) => (
    <Icon icon={name} className="text-4xl" color={"currentColor"} />
    );
    return (
        <div>
            {/* --- Hero Section --- */}
            <HeroPortal>
                <div className="text-center text-white">
                    <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
                        🧑‍💻Projects
                    </h1>
                    <span className="text-4xl font-light"></span>
                </div>
            </HeroPortal>
            {/* --- Main Content --- */}
            <div className="w-full grow max-w-7xl mx-auto pt-12 pb-16 px-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6">
                    {/* Left Sidebar */}
                    <SideCard />

                    {/* Projects */}
                    <div className="flex flex-col gap-4 bg-transparent col-span-3 order-2">
                        {/* LyricFlow */}
                        <div className="relative flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <div className="font-semibold text-xl text-center display: flex align-items: center justify-content: center gap-2">
                                <Image src="/lyricsflow.png" alt="LyricFlow Logo" className="rounded-lg" height={30} width={30} /> 
                                <span>LyricFlow — Chrome Extension that display lyrics as an overlay across all browser tabs.</span>
                            
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 mt2">
                                <div>
                                    Available on the Chrome Web Store and Microsoft Edge Add-ons Store
                                </div>
                                <a href= "https://chromewebstore.google.com/detail/lyricflow/onfinbognhiboggdmbpohjgfnddpnnen?authuser=0&hl=en" target="_blank" className="hover:scale-105 transition-transform"> {techIcon("logos:chrome")}</a>
                                <a href= "https://microsoftedge.microsoft.com/addons/detail/lyricflow/jjoibnmdijpjkfndlbgboilkchncjkcb" target="_blank" className="hover:scale-105 transition-transform"> {techIcon("logos:microsoft-edge")}</a>
                            </div>
                            <a href= "https://chromewebstore.google.com/detail/lyricflow/onfinbognhiboggdmbpohjgfnddpnnen?authuser=0&hl=en" target="_blank" className="hover:scale-105 transition-transform">
                                <Image src="/Lyricflow.jpeg" alt="LyricFlow" width={400} height={225} className="w-full h-auto" />
                            </a>
                            
                            <p className="text-center text-(--accent)">
                                <span>LyricFlow enhances the music listening experience by providing lyrics for Spotify tracks displayed across all browser tabs.</span>
                                <br />
                                <span className="text-(--text) text-sm text-muted-foreground">
                                    Lyrics powered by LRCLIB
                                </span>
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt2">
                                {techIcon("logos:spotify")}
                                {techIcon("logos:react")}
                                {techIcon("logos:typescript-icon")}
                                {techIcon("logos:chrome")}
                                {techIcon("logos:microsoft-edge")}
                            </div>
                        </div>
                        {/* file parser/visualization tool*/}
                        <div className="relative flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <div className="font-semibold text-xl text-center">
                                📁File Parser/Visualization Tool -in development
                            </div>
                            <p className="text-center text-(--accent)">
                                A windows desktop application that parses and visualizes various file formats.
                            </p>
                        </div>
                        {/* Anime Pilgrimage App */}
                        <div className="relative flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <video src="/Anime-pilgrimage-shorter-demo.mp4" autoPlay muted loop className="w-full h-svh max-h-150 rounded-lg"></video>
                            <div className="font-semibold text-xl text-center">
                                🗺️Anime Pilgrimage — Mobile App (New Features in Progress)
                            </div>
                            <p className="text-center text-(--accent)">
                                Discover and explore real world locations featured in your favorite anime series
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt2">
                                {techIcon("logos:expo")}
                                {techIcon("logos:react")}
                                {techIcon("logos:typescript-icon")}
                                {techIcon("logos:express")}
                            </div>
                        </div>

                        {/* Movie Recommendation System */}
                        <div className="flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <video src="/Movie_Recommendation-demo.mp4" autoPlay muted loop></video>
                            <div className="font-semibold text-xl text-center">
                                🧠AI-powered Movie Recommender
                            </div>
                            <p className="text-center text-(--accent)">
                                Personalizes movie suggestions based on user taste.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt2">
                                {techIcon("logos:pytorch-icon")}
                                {techIcon("logos:flask")}
                                {techIcon("logos:react")}
                                {techIcon("logos:mongodb-icon")}
                                {techIcon("logos:docker-icon")}
                            </div>
                        </div>

                        {/* Schedule Sync */}
                        <div className="flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <video src="/ScheduleSync-demo.mp4" autoPlay muted loop></video>
                            <div className="font-semibold text-xl text-center">
                                📋Schedule Sync - Queue Management Web App
                            </div>
                            <p className="text-center text-(--accent)">
                                Built for barbers and service shops managin customer queues.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt2">
                                {techIcon("logos:react")}
                                {techIcon("logos:php")}
                                {techIcon("logos:mysql")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}