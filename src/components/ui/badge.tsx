import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  variant = "purple",
  children,
  className,
}: {
  variant?: "purple" | "cyan" | "success" | "warning" | "danger";
  children: React.ReactNode;
  className?: string;
}) {
  const styles = {
    purple: "bg-purple-950/80 border-purple-800/60 text-purple-300",
    cyan: "bg-cyan-950/80 border-cyan-800/60 text-cyan-300",
    success: "bg-green-950/80 border-green-800/60 text-green-300",
    warning: "bg-amber-950/80 border-amber-800/60 text-amber-300",
    danger: "bg-red-950/80 border-red-800/60 text-red-300",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono border",
        styles[variant] || styles.purple,
        className
      )}
    >
      {children}
    </span>
  );
}
