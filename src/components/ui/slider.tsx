import * as React from "react";
import { cn } from "@/lib/utils";

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  label,
  className,
}: {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (val: number) => void;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <div className="flex justify-between text-xs">
        {label && <span className="font-semibold text-gray-300">{label}</span>}
        <span className="font-mono text-purple-400 font-bold">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full accent-purple-500 bg-gray-800 rounded-lg cursor-pointer h-2"
      />
    </div>
  );
}
