"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Filter({
  options = ["All", "Components", "Templates", "Themes"],
  defaultSelected = "All",
  onSelect,
  className,
}: {
  options?: string[];
  defaultSelected?: string;
  onSelect?: (opt: string) => void;
  className?: string;
}) {
  const [selected, setSelected] = React.useState(defaultSelected);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    onSelect?.(opt);
  };

  return (
    <div className={cn("inline-flex items-center p-1 rounded-2xl bg-gray-900 border border-gray-800 gap-1", className)}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleSelect(opt)}
          className={cn(
            "px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all",
            selected === opt ? "bg-purple-600 text-white font-bold shadow-md" : "text-gray-400 hover:text-white"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
