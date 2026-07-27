import * as React from "react";
import { cn } from "@/lib/utils";

export function MockupCode({
  code = `npx forgeui init\nnpx forgeui add button\nnpx forgeui add modal`,
  className,
}: {
  code?: string;
  className?: string;
}) {
  const lines = code.split("\n");

  return (
    <div className={cn("w-full rounded-2xl bg-gray-950 border border-gray-800 shadow-2xl p-4 font-mono text-xs text-purple-300 space-y-1.5 overflow-x-auto", className)}>
      {lines.map((line, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="text-gray-600 select-none w-4 text-right">{idx + 1}</span>
          <span className="text-purple-400 font-bold">$</span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
}
