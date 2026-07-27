import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  fallback = "UI",
  status,
  className,
}: {
  src?: string;
  fallback?: string;
  status?: "online" | "offline" | "busy";
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-md">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
          {src ? <img src={src} alt="Avatar" className="w-full h-full object-cover" /> : fallback}
        </div>
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-950",
            status === "online" && "bg-green-500",
            status === "offline" && "bg-gray-500",
            status === "busy" && "bg-red-500"
          )}
        />
      )}
    </div>
  );
}
