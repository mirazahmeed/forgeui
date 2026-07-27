import * as React from "react";
import { cn } from "@/lib/utils";

export interface FeatureGridItemData {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function FeatureGrid({ items, className }: { items: FeatureGridItemData[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-3 hover:border-purple-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center">
              <Icon className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="text-sm font-bold text-white">{item.title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
