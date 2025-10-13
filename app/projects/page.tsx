"use client"
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";

export default function ProjectsPage() {
    return (
        <div>
            {/* --- Hero Section --- */}
            <HeroPortal>
                <div className="text-center text-white">
                    <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
                        My Projects
                    </h1>
                    <span className="text-4xl font-light"></span>
                </div>
            </HeroPortal>
            {/* --- Main Content --- */}
            <div className="w-full flex-grow max-w-7xl mx-auto pt-12 pb-16 px-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6">
                    {/* Left Sidebar */}
                    <SideCard />

                    {/* Projects */}
                    <div className="flex flex-col gap-4 bg-transparent col-span-3 order-2">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    );
}