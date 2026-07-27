import * as React from "react";
import { cn } from "@/lib/utils";

export function Status({
  state = "online",
  label = "System Operational",
  className,
}: {
  state?: "online" | "busy" | "offline" | "warning";
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300", className)}>
      <span
        className={cn(
          "w-2 h-2 rounded-full animate-pulse",
          state === "online" && "bg-emerald-400",
          state === "busy" && "bg-rose-500",
          state === "warning" && "bg-amber-400",
          state === "offline" && "bg-gray-500"
        )}
      />
      <span>{label}</span>
    </div>
  );
}
