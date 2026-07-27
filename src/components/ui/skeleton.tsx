import * as React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-gray-800/80 animate-pulse rounded-xl", className)} />
  );
}
