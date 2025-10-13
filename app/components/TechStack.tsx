"use client";
import { Icon } from "@iconify/react";

const techStack = [
    { name: "Python", icon: "logos:python", color: "#3776AB" },
    { name: "Java", icon: "logos:java", color: "#007396" },
    { name: "C", icon: "logos:c", color: "#00599C" },
    { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
    { name: "Scala", icon: "logos:scala", color: "#DC322F" },
    { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
    { name: "MySQL", icon: "logos:mysql", color: "#4479A1" },
    { name: "Flask", icon: "logos:flask", color: "#000000" },
    { name: "React", icon: "logos:react", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#38BDF8" },
    { name: "HTML/CSS", icon: "logos:html-5", color: "#E34F26" },
    { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
    { name: "Nginx", icon: "logos:nginx", color: "#009639" },
    { name: "Git", icon: "logos:git-icon", color: "#F05032" },
    { name: "IntelliJ IDEA", icon: "logos:intellij-idea", color: "#000000" },
    { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
];

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto py-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text)] shadow-md">
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-[var(--text)]">
        <span className="text-2xl font-mono text-[var(--accent)] px-1 rounded">&lt;/&gt;Tech Stack</span>
      </h2>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md hover:shadow-pink-400/20 hover:scale-105 transition-all duration-300"
          >
            <Icon
              icon={tech.icon}
              className="text-5xl mb-3 transition-transform duration-300 hover:rotate-6"
              color={tech.color}
            />
            <span className="text-lg font-semibold text-[var(--text)]">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
