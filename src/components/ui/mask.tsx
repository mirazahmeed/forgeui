import * as React from "react";
import { cn } from "@/lib/utils";

export function Mask({
  shape = "squircle",
  children,
  className,
}: {
  shape?: "circle" | "squircle" | "hexagon";
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-24 h-24 overflow-hidden flex items-center justify-center bg-purple-950 border border-purple-800/60 shadow-xl",
        shape === "circle" && "rounded-full",
        shape === "squircle" && "rounded-[28px]",
        shape === "hexagon" && "rounded-2xl rotate-45",
        className
      )}
    >
      {children || <span className="text-xs font-mono font-bold text-purple-300">Mask Shape</span>}
    </div>
  );
}
