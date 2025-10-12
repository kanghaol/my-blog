"use client";
import { useEffect, useState } from "react";
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";

interface Anime {
  name: string;
  poster_path: string;
  rating: number;
  type: string;
}

export default function AnimePage() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("/tmdb_sorted_combined.json") 
      .then((res) => res.json())
      .then(setAnimeList)
      .catch((err) => console.error("Failed to load anime list:", err));
  }, []);

  const averageRating =
    animeList.length > 0
      ? (animeList.reduce((a, b) => a + (b.rating || 0), 0) / animeList.length).toFixed(2)
      : "N/A";

  return (
    <div>
      {/* --- Hero Section --- */}
      <HeroPortal>
        <div className="text-center text-white">
          <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
            Anime List
          </h1>
          <span className="text-4xl font-light">Record and Share</span>
        </div>
      </HeroPortal>

      {/* --- Main Content --- */}
      <div className="w-full flex-grow max-w-7xl mx-auto pt-12 pb-16 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6">
          {/* Left Sidebar */}
          <SideCard />

          {/* Anime Gallery */}
          <div className="flex flex-col gap-4 bg-transparent col-span-3 order-2">
            {/* Summary box */}
            <div className="flex items-center gap-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text)] shadow-md mb-4">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-lg font-bold shadow">
                Total: {animeList.length}
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-lg font-bold shadow">
                Average Rating: {averageRating}
              </span>
            </div>

            {/* Anime Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {animeList.map((anime, i) => (
              <div key={i} className="col-span-1 bg-[var(--card-bg)] rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-[var(--border-color)]">
                <div className="relative group">
                  <img src={anime.poster_path} alt={anime.name} className="w-full h-[280px] object-cover group-hover:opacity-90 transition-all"/>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  </div>
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[var(--text)] truncate">
                    {anime.name}
                  </h2>
                  <p className="text-gray-400 font-semibold mt-2">
                    {anime.type}
                  </p>
                  <p className="text-yellow-400 font-bold mt-2">
                    Rating: {anime.rating}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
