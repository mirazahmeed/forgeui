"use client";

import * as React from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Diff({
  leftLabel = "Before (Raw HTML)",
  rightLabel = "After (ForgeUI)",
  className,
}: {
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}) {
  const [sliderPos, setSliderPos] = React.useState(50);

  return (
    <div className={cn("relative w-full h-48 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden select-none", className)}>
      {/* Right Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 to-gray-900 flex items-center justify-center p-6 text-center">
        <span className="text-sm font-bold text-purple-300 font-mono">{rightLabel}</span>
      </div>

      {/* Left Content (Clipped) */}
      <div
        className="absolute inset-y-0 left-0 bg-gray-950 border-r border-purple-500/60 overflow-hidden flex items-center justify-center p-6 text-center"
        style={{ width: `${sliderPos}%` }}
      >
        <span className="text-sm font-bold text-gray-400 font-mono whitespace-nowrap">{leftLabel}</span>
      </div>

      {/* Interactive Slider Bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
    </div>
  );
}
