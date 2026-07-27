import * as React from "react";
import { cn } from "@/lib/utils";

export function MockupPhone({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-64 h-[420px] rounded-[40px] bg-gray-950 border-4 border-gray-800 shadow-2xl p-3 relative flex flex-col justify-between overflow-hidden mx-auto", className)}>
      <div className="w-24 h-4 bg-gray-800 rounded-full mx-auto" />
      <div className="flex-1 my-3 bg-gray-900 rounded-3xl p-4 flex items-center justify-center text-center">
        {children || <p className="text-xs font-mono text-purple-300">Smartphone Screen Frame</p>}
      </div>
      <div className="w-12 h-1 bg-gray-700 rounded-full mx-auto" />
    </div>
  );
}
