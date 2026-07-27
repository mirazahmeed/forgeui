"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-gray-800/50 animate-pulse" />;
  }

  return (
    <div className="flex items-center gap-1 bg-gray-900/60 p-1 rounded-xl border border-gray-800">
      <button
        onClick={() => setTheme("dark")}
        title="Dark Theme"
        className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
          theme === "dark"
            ? "bg-purple-600/30 text-purple-400 border border-purple-500/30 shadow-sm"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("light")}
        title="Light Theme"
        className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
          theme === "light"
            ? "bg-purple-600/30 text-purple-400 border border-purple-500/30 shadow-sm"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        title="System Theme"
        className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
          theme === "system"
            ? "bg-purple-600/30 text-purple-400 border border-purple-500/30 shadow-sm"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
        }`}
      >
        <Laptop className="w-4 h-4" />
      </button>
    </div>
  );
}
