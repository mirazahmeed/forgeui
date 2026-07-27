import * as React from "react";
import { cn } from "@/lib/utils";

export function RadialProgress({
  value = 75,
  size = 80,
  strokeWidth = 8,
  showLabel = true,
  className,
}: {
  value?: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-800 fill-none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-purple-500 fill-none transition-all duration-500 ease-out"
        />
      </svg>
      {showLabel && (
        <span className="absolute text-xs font-mono font-bold text-white">
          {Math.round(value)}%
        </span>
      )}
    </div>
  );
}
