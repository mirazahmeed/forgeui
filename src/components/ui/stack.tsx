import * as React from "react";
import { cn } from "@/lib/utils";

export function Stack({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-64 h-32", className)}>
      <div className="absolute inset-0 rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl p-4 z-30 flex items-center justify-center">
        <span className="text-xs font-bold text-white">Top Layer Card</span>
      </div>
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-950 border border-gray-800 shadow-xl opacity-70 z-20" />
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-gray-950 border border-gray-800 shadow-lg opacity-40 z-10" />
    </div>
  );
}
