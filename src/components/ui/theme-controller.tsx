"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeController({ className }: { className?: string }) {
  const [selectedTheme, setSelectedTheme] = React.useState("dark-purple");
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { id: "dark-purple", name: "Royal Purple", color: "#7C3AED", primary: "#7C3AED", secondary: "#A855F7", accent: "#06B6D4" },
    { id: "cyberpunk", name: "Cyberpunk Neon", color: "#06B6D4", primary: "#06B6D4", secondary: "#EC4899", accent: "#FACC15" },
    { id: "emerald", name: "Emerald Forest", color: "#10B981", primary: "#10B981", secondary: "#059669", accent: "#34D399" },
    { id: "luxury", name: "Gold Luxury", color: "#F59E0B", primary: "#F59E0B", secondary: "#CA8A04", accent: "#FDE047" },
  ];

  const handleSelect = (t: typeof themes[0]) => {
    setSelectedTheme(t.id);
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--primary", t.primary);
      document.documentElement.style.setProperty("--secondary", t.secondary);
      document.documentElement.style.setProperty("--accent", t.accent);
    }
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:border-purple-500/50 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
      >
        <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Theme: {themes.find((t) => t.id === selectedTheme)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-1.5 z-20 space-y-1">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelect(t)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all",
                selectedTheme === t.id
                  ? "bg-purple-50 text-purple-700 dark:bg-purple-950/80 dark:text-white font-bold"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: t.color }} />
                <span>{t.name}</span>
              </div>
              {selectedTheme === t.id && <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
