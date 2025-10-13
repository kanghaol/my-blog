"use client";

export default function CourseTimeline() {
  const semesters = [
    {
      term: "Spring 2025",
      season: "Spring",
      courses: [
        {
          code: "CSE 404",
          title: "Software Project Management",
          desc: "Software lifecycle planning, scheduling, resource management, and team communication.",
        },
        {
          code: "CSE 411",
          title: "Introduction to CS Administration",
          desc: "Linux system admin, user management, file systems, shell scripting, and automation tools.",
        },
      ],
    },
    {
      term: "Fall 2024",
      season: "Fall",
      courses: [
        {
          code: "CSE 368",
          title: "Artificial Intelligence",
          desc: "Search strategies, logic and planning, knowledge representation, and basic ML techniques.",
        },
        {
          code: "CSE 474",
          title: "Introduction to Machine Learning",
          desc: "Supervised learning, model evaluation, regression, classification, and clustering.",
        },
        {
          code: "CSE 489",
          title: "Modern Network Concepts",
          desc: "TCP/IP, routing, switching, network security, and performance optimization.",
        },
      ],
    },
    {
      term: "Spring 2024",
      season: "Spring",
      courses: [
        {
          code: "CSE 312",
          title: "Web Applications",
          desc: "Full-stack development with Flask, HTTP, JavaScript, backend security, and session handling.",
        },
        {
          code: "CSE 429",
          title: "Algorithms for Modern Computing Systems",
          desc: "Algorithms for parallel, distributed, and high-performance computing.",
        },
        {
          code: "CSE 442",
          title: "Software Engineering Concepts",
          desc: "Agile practices, design patterns, Git workflows, and testing.",
        },
      ],
    },
    {
      term: "Fall 2023",
      season: "Fall",
      courses: [
        {
          code: "CSE 331",
          title: "Algorithms and Complexity",
          desc: "Algorithm design and analysis, sorting, dynamic programming, graph traversal.",
        },
        {
          code: "CSE 341",
          title: "Computer Organization",
          desc: "Assembly language, digital logic, memory architecture, CPU design, and instruction sets.",
        },
      ],
    },
    {
      term: "Spring 2023",
      season: "Spring",
      courses: [
        {
          code: "CSE 220",
          title: "Systems Programming",
          desc: "Memory management, C programming, processes, and Unix shell scripting.",
        },
        {
          code: "CSE 250",
          title: "Data Structures",
          desc: "Lists, trees, heaps, stacks, queues, hash tables, and performance analysis.",
        },
      ],
    },
    {
      term: "Fall 2022",
      season: "Fall",
      courses: [
        {
          code: "CSE 116",
          title: "Computer Science II",
          desc: "Data abstraction, recursion, inheritance, and basic data structures.",
        },
        {
          code: "CSE 191",
          title: "Discrete Structures",
          desc: "Logic, sets, relations, graphs, proofs, and combinatorics.",
        },
      ],
    },
    {
      term: "Spring 2022",
      season: "Spring",
      courses: [
        {
          code: "CSE 115",
          title: "Computer Science I",
          desc: "Intro to problem-solving, basic algorithms, and Python.",
        },
      ],
    },
  ];

  const seasonColors: Record<string, string> = {
    Spring: "bg-green-200/20 text-green-400 border-green-400/30",
    Fall: "bg-orange-200/20 text-orange-400 border-orange-400/30",
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-10 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent)] drop-shadow-md">
        Coursework Timeline
      </h2>

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-12 w-1 bg-[var(--border-color)] rounded-full"></div>

      <div className="space-y-20 relative z-10">
        {semesters.map((semester, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } relative`}
            >
              {/* Content Card */}
              <div
                className={`bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-md backdrop-blur-md p-5 w-full md:w-5/12 hover:scale-[1.02] transition-transform duration-300 ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-[var(--text)] mb-2 text-center md:text-left">
                  {semester.term}
                </h3>
                <div className="flex justify-center md:justify-start mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      seasonColors[semester.season]
                    }`}
                  >
                    {semester.season}
                  </span>
                </div>

                <ul className="space-y-3">
                  {semester.courses.map((course, j) => (
                    <li key={j}>
                      <p className="font-semibold text-[var(--text)]">
                        {course.code} - {course.title}
                      </p>
                      <p className="text-sm text-[var(--text)]/70 leading-snug">
                        {course.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-[var(--accent)] h-4 w-4 rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
