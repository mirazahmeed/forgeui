import * as React from "react";
import { cn } from "@/lib/utils";

export function MockupBrowser({
  url = "https://forgeui.dev/components",
  children,
  className,
}: {
  url?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden", className)}>
      <div className="px-4 py-3 bg-gray-950 border-b border-gray-800 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-xl bg-gray-900 border border-gray-800 text-[11px] font-mono text-gray-400 text-center truncate">
          {url}
        </div>
      </div>
      <div className="p-6 bg-gray-950/60 min-h-[160px] flex items-center justify-center">
        {children || <p className="text-xs text-gray-400 font-mono">Browser Preview Area</p>}
      </div>
    </div>
  );
}
