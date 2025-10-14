---
title: "Search Box"
date: "2025-10-13"
tags: ["react", "component", "searchBox"]
description: "SVG search box React component with tailwindcss"
thumbnail: "/searchbox.png"
---

```tsx
{/* Search Box */}
<div className="relative ml-4 ">
    <input
        type="text"
        placeholder="Search..."
        className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 w-44 h-9 focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white placeholder-white/60 backdrop-blur-md"
    />
    <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z"
        />
    </svg>
</div>