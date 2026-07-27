import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Aura({
  children,
  className,
  glowColor = "purple",
}: {
  children?: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "emerald";
}) {
  return (
    <div className={cn("relative group p-6 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden", className)}>
      <div
        className={cn(
          "absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none",
          glowColor === "purple" && "bg-purple-600",
          glowColor === "cyan" && "bg-cyan-400",
          glowColor === "emerald" && "bg-emerald-500"
        )}
      />
      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
          <Sparkles className="w-4 h-4" />
          <span>Aura Glass Container</span>
        </div>
        {children || <p className="text-xs text-gray-300">Ambient glowing background aura panel with glassmorphism borders.</p>}
      </div>
    </div>
  );
}
