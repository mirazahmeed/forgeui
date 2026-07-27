import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Loading({
  variant = "spinner",
  size = "md",
  className,
}: {
  variant?: "spinner" | "dots" | "ring" | "bars";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  if (variant === "dots") {
    return (
      <div className={cn("inline-flex items-center gap-1.5", className)}>
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" />
      </div>
    );
  }

  if (variant === "ring") {
    return (
      <div className={cn("relative inline-block", sizeMap[size], className)}>
        <div className="w-full h-full rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
      </div>
    );
  }

  return (
    <Loader2 className={cn("animate-spin text-purple-400", sizeMap[size], className)} />
  );
}
