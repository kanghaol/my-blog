"use client";
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";
import TechStack from "@/app/components/TechStack";
import Timeline from "../components/Timeline";

export default function AboutMe(){
    return(
        <div>
            {/* Hero Section */}
            <HeroPortal>
                <div className="text-center text-white">
                <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
                    About Me
                </h1>
                <span className="text-4xl font-light">✨An Person Who Loves Coding&Technology</span>
                </div>
            </HeroPortal>

            {/* Main Content */}
            <div className="w-full grow max-w-7xl mx-auto pt-12 pb-16 px-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6">
                    <SideCard/>

                    {/* About me box */}
                    <div className="flex flex-col col-span-3 gap-4 order-2 bg-transparent ">
                        <div className="flex flex-col gap-4 bg-(--card-bg) border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md">
                            <h1 className="underline text-(--accent) font-bold text-shadow-2xs text-left">About Me</h1>
                            <span>{"I'm KangHao Lin, B.S Computer Science, Graduated at the University at Buffalo (Class of 2025)| GPA: 3.84."}</span>
                            <span>{"I have a strong foundation in software development, data structures, algorithms, and web technologies."}</span>
                            <span>{"I'm passionate about building efficient, scalable applications and continuously learning new technologies."}</span>
                            <span>{"I'm eager to apply my skills in real world projects and contribute to innovative solutions in the tech industry."}</span>
                            <span>Feel free to explore my projects and get in touch!</span>
                        </div>
                        <div>
                            <TechStack/>
                        </div>
                        <div className="bg-(--card-bg)]border border-(--border-color) rounded-xl p-4 text-(--text) shadow-md">
                            <Timeline/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}