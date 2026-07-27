"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeController({ className }: { className?: string }) {
  const [selectedTheme, setSelectedTheme] = React.useState("dark-purple");
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { id: "dark-purple", name: "Royal Purple", color: "#7C3AED" },
    { id: "cyberpunk", name: "Cyberpunk Neon", color: "#06B6D4" },
    { id: "emerald", name: "Emerald Forest", color: "#10B981" },
    { id: "luxury", name: "Gold Luxury", color: "#F59E0B" },
  ];

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-200 hover:border-purple-500/50 transition-all flex items-center gap-2 cursor-pointer"
      >
        <Palette className="w-4 h-4 text-purple-400" />
        <span>Theme: {themes.find((t) => t.id === selectedTheme)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-1.5 z-20 space-y-1">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTheme(t.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all",
                selectedTheme === t.id ? "bg-purple-950/80 text-white font-bold" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: t.color }} />
                <span>{t.name}</span>
              </div>
              {selectedTheme === t.id && <Check className="w-3.5 h-3.5 text-purple-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
