import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItemData {
  title: string;
  date: string;
  description: string;
}

export function Timeline({ items, className }: { items: TimelineItemData[]; className?: string }) {
  return (
    <div className={cn("relative border-l border-gray-800 ml-3 space-y-6 py-2", className)}>
      {items.map((item, i) => (
        <div key={i} className="relative pl-6">
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-gray-950" />
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white">{item.title}</h4>
            <span className="text-[10px] font-mono text-purple-400 font-semibold">{item.date}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
