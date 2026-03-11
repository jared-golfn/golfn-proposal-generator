"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "positioning", label: "Platform" },
  { id: "commercial", label: "Commercial" },
  { id: "progression", label: "Journey" },
  { id: "products", label: "Products" },
  { id: "archetypes", label: "Models" },
  { id: "closing", label: "Next Steps" },
];

export function PresentationNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-1">
      <div className="absolute right-[5px] top-0 bottom-0 w-[2px] bg-gn-grid rounded-full overflow-hidden">
        <motion.div
          className="w-full rounded-full"
          style={{
            height: progressHeight,
            background: "linear-gradient(180deg, #17A455, #8DC54A)",
          }}
        />
      </div>

      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="relative flex items-center gap-3 py-2 pr-5 group"
          >
            <span
              className={`text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                isActive ? "text-gn-green-web opacity-100" : "text-gn-white-faint opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
            <div
              className={`relative z-10 w-[10px] h-[10px] rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-gn-green-web border-gn-green-web scale-110"
                  : "bg-gn-bg border-gn-grid group-hover:border-gn-muted"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
