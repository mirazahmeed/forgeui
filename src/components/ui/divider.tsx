import * as React from "react";
import { cn } from "@/lib/utils";

export function Divider({
  label,
  orientation = "horizontal",
  className,
}: {
  label?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  if (orientation === "vertical") {
    return <div className={cn("w-[1px] h-full bg-gray-800", className)} />;
  }

  return (
    <div className={cn("relative flex items-center w-full my-4", className)}>
      <div className="flex-grow border-t border-gray-800" />
      {label && (
        <span className="flex-shrink mx-4 text-xs font-mono font-semibold text-gray-500 uppercase">
          {label}
        </span>
      )}
      <div className="flex-grow border-t border-gray-800" />
    </div>
  );
}
