import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ActivityItemData {
  action: string;
  item: string;
  time: string;
  type?: string;
}

export function ActivityLog({ items, className }: { items: ActivityItemData[]; className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-gray-900 border border-gray-800 p-5 space-y-3", className)}>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Activity Feed</h4>
      <div className="divide-y divide-gray-800/80">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div>
                <span className="text-xs font-medium text-gray-200">{item.action}</span>
                <span className="text-xs text-purple-400 ml-1.5 font-semibold">{item.item}</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" /> {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
