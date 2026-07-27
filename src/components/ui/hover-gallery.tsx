import * as React from "react";
import { cn } from "@/lib/utils";

export function HoverGallery({
  images = [
    { title: "Glassmorphism", color: "from-purple-900 to-indigo-950" },
    { title: "Cyberpunk", color: "from-cyan-900 to-blue-950" },
    { title: "Emerald Forest", color: "from-emerald-900 to-teal-950" },
  ],
  className,
}: {
  images?: { title: string; color: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2 w-full h-40", className)}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={cn(
            "flex-1 hover:flex-[3] transition-all duration-300 h-full rounded-2xl bg-gradient-to-br border border-gray-800 p-4 flex items-end cursor-pointer overflow-hidden group",
            img.color
          )}
        >
          <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors whitespace-nowrap">
            {img.title}
          </span>
        </div>
      ))}
    </div>
  );
}
