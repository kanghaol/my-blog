"use client"
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";
import Image from "next/image";
import { Icon } from "@iconify/react";

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

                        {/* Anime Pilgrimage App */}
                        <div className="relative flex flex-col items-center gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md mb-4">
                            <video src="/Anime-pilgrimage-demo.mp4" autoPlay muted loop></video>
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