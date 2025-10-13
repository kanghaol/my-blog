import HeroPortal from "@/app/components/HeroPortal";

export default function ProjectsPage(){
    return(
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
            
        </div>
    );
}