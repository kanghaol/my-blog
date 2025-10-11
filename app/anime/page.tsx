"use client";
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";

export default function anime(){
    return(
      <div>
        <HeroPortal>
          <div className=" text-center text-white">
          <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
              Anime List
          </h1>
          <span className="text-4xl font-light">
              Record and Share
          </span>
          </div>
        </HeroPortal>
        <div className="w-full flex-grow max-w-6xl mx-auto pt-8 pb-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6 px-4">
              <SideCard />
            
          </div>
        </div>
      </div>
    );
}