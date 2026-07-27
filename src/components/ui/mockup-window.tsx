import * as React from "react";
import { cn } from "@/lib/utils";

export function MockupWindow({
  title = "ForgeUI Studio App",
  children,
  className,
}: {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden", className)}>
      <div className="px-4 py-2.5 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-xs font-mono font-bold text-gray-400">{title}</span>
        <div className="w-12" />
      </div>
      <div className="p-6 bg-gray-950/40 min-h-[140px] flex items-center justify-center">
        {children || <p className="text-xs text-gray-300 font-mono">Desktop Window Container</p>}
      </div>
    </div>
  );
}
