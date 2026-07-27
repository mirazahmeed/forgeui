import * as React from "react";
import { cn } from "@/lib/utils";

export function Progress({
  value = 0,
  max = 100,
  showValue = true,
  label,
  className,
}: {
  value?: number;
  max?: number;
  showValue?: boolean;
  label?: string;
  className?: string;
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showValue) && (
        <div className="flex justify-between text-xs">
          {label && <span className="font-semibold text-gray-300">{label}</span>}
          {showValue && <span className="font-mono text-purple-400 font-bold">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full h-2.5 bg-gray-900 border border-gray-800 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
