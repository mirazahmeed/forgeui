import * as React from "react";
import { cn } from "@/lib/utils";

export function Indicator({
  badge = "NEW",
  children,
  className,
}: {
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      {children}
      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-purple-600 text-white font-mono text-[9px] font-bold shadow-lg shadow-purple-950 z-10">
        {badge}
      </span>
    </div>
  );
}
