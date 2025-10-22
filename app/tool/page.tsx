"use client";
import HeroPortal from "@/app/components/HeroPortal";
import SideCard from "@/app/components/SideCard";

export default function Tools() {
  const categories = [
    {
      title: "🧠 Development & Frameworks",
      resources: [
        {
          name: "TailwindCSS",
          url: "https://tailwindcss.com/",
          icon: "https://tailwindcss.com/favicon.ico",
        },
        {
          name: "Flask",
          url: "https://flask.palletsprojects.com/en/stable/api/",
          icon: "https://www.google.com/s2/favicons?domain=flask.palletsprojects.com",
        },
        {
          name: "daisy UI",
          url: "https://daisyui.com/components/",
          icon: "https://daisyui.com/favicon.ico",
        },
        {
          name: "MongoDB",
          url: "https://www.mongodb.com/",
          icon: "https://www.mongodb.com/favicon.ico",
        },
        
      ],
    },
    {
      title: "🧰 Developer Tools",
      resources: [
        {
          name: "Tinywow",
          url: "https://tinywow.com/",
          icon: "https://www.google.com/s2/favicons?domain=tinywow.com",
        },
        {
          name:"Magic UI",
          url:"https://magicui.design/docs/components",
          icon:"https://magicui.design/favicon.ico",
        },
        {
          name:"Aceternity UI",
          url:"https://ui.aceternity.com/components",
          icon:"https://ui.aceternity.com/favicon.ico",
        },
        {
          name:"Cult UI",
          url:"https://www.cult-ui.com/docs",
          icon:"https://www.cult-ui.com/favicon.ico",
        },
        {
          name: "Iconify",
          url: "https://iconify.design/",
          icon: "https://iconify.design/favicon.ico",
        },
        {
          name: "SVG Viewer",
          url: "https://www.svgviewer.dev/",
          icon: "https://www.svgviewer.dev/favicon.ico",
        },
        {
          name: "Google Fonts",
          url: "https://fonts.google.com/",
          icon: "https://www.google.com/s2/favicons?domain=fonts.google.com",
        },
        {
          name: "Wallhaven",
          url: "https://wallhaven.cc/",
          icon: "https://wallhaven.cc/favicon.ico",
        },
        {
          name: "CC Search",
          url: "https://search.creativecommons.org/",
          icon: "https://search.creativecommons.org/favicon.ico",
        },
      ],
    },
    {
      title: "🧩 Programming Libraries",
      resources: [
        {
          name: "React",
          url: "https://react.dev/",
          icon: "https://react.dev/favicon.ico",
        },
        {
          name: "Motion",
          url: "https://motion.dev/docs",
          icon: "https://www.google.com/s2/favicons?domain=motion.dev",
        },
        {
          name: "NumPy",
          url: "https://numpy.org/doc/stable/user/index.html",
          icon: "https://www.google.com/s2/favicons?domain=numpy.org",
        },
        {
          name: "Pandas",
          url: "https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html",
          icon: "https://www.google.com/s2/favicons?domain=pandas.pydata.org",
        },
        {
          name: "PyTorch",
          url: "https://docs.pytorch.org/docs/stable/index.html",
          icon: "https://docs.pytorch.org/favicon.ico",
        },
      ],
    },
    {
      title: "📖 Learning Resources",
      resources: [
        {
          name: "CSS-Tricks",
          url: "https://css-tricks.com/",
          icon: "https://css-tricks.com/favicon.ico",
        },
        {
          name: "QuickRef.ME",
          url: "https://quickref.me/",
          icon: "https://quickref.me/images/favicon.png",
        },
        {
          name: "TutorialsPoint",
          url: "https://www.tutorialspoint.com/",
          icon: "https://www.tutorialspoint.com/favicon.ico",
        },
      ],
    },
    {
      title: "🌐 Hosting & Services",
      resources: [
        {
          name: "NameCheap",
          url: "https://www.namecheap.com/",
          icon: "https://www.namecheap.com/favicon.ico",
        },
        {
          name: "Vercel",
          url: "https://vercel.com/",
          icon: "https://vercel.com/favicon.ico",
        },
      ],
    },
  ];

  return (
    <div>
      {/* --- Hero Section --- */}
      <HeroPortal>
        <div className="text-center text-white">
          <h1 className="mb-4 drop-shadow-lg text-7xl font-bold pb-8">
            Tools & Resources
          </h1>
          <span className="text-4xl font-light">
            📚 Useful Docs & References
          </span>
        </div>
      </HeroPortal>

      {/* --- Main Content --- */}
      <div className="w-full flex-grow max-w-7xl mx-auto pt-12 pb-16 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-6">
          {/* Left Sidebar */}
          <SideCard />

          {/* Tools Grid */}
          <div className="flex flex-col gap-8 col-span-3 order-2 bg-transparent">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-4">
                  {category.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.resources.map(({ name, url, icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--background)]/40 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={icon}
                        alt={`${name} logo`}
                        className="w-8 h-8 rounded-md"
                      />
                      <span className="text-[var(--text)] text-sm font-medium">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
