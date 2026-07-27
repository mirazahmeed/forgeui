import * as React from "react";
import { cn } from "@/lib/utils";

export function Kbd({
  children = "⌘ K",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center px-2 py-1 rounded-md bg-gray-900 border border-gray-700/80 font-mono text-[11px] font-bold text-gray-300 shadow-sm shadow-black",
        className
      )}
    >
      {children}
    </kbd>
  );
}
