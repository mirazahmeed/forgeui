"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Carousel({
  slides = [
    { title: "Glassmorphism UI", desc: "Built for React 19 & Next.js 15." },
    { title: "Custom Theme Engine", desc: "Export CSS variables seamlessly." },
    { title: "CLI Speed Scaffolding", desc: "npx forgeui add <component>" },
  ],
  className,
}: {
  slides?: { title: string; desc: string }[];
  className?: string;
}) {
  const [currentIdx, setCurrentIdx] = React.useState(0);

  const prev = () => setCurrentIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrentIdx((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className={cn("relative p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl text-center space-y-4 overflow-hidden", className)}>
      <div className="py-8 space-y-2">
        <h4 className="text-lg font-extrabold text-white">{slides[currentIdx].title}</h4>
        <p className="text-xs text-gray-400">{slides[currentIdx].desc}</p>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={prev} className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={cn("w-2 h-2 rounded-full transition-all", idx === currentIdx ? "bg-purple-500 w-5" : "bg-gray-700")}
            />
          ))}
        </div>

        <button onClick={next} className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white cursor-pointer">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
