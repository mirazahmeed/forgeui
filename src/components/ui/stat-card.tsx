import * as React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  className,
}: {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon?: React.ElementType;
  className?: string;
}) {
  return (
    <div className={cn("p-5 rounded-2xl bg-gray-900 border border-gray-800 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center">
            <Icon className="w-4 h-4 text-purple-400" />
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-extrabold text-white">{value}</span>
        {change && (
          <span className={cn("text-xs font-semibold flex items-center gap-0.5", isPositive ? "text-green-400" : "text-red-400")}>
            {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
