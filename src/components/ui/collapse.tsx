"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Collapse({
  title = "Collapsible Header Panel",
  children = "Detailed expandable panel content.",
  defaultOpen = false,
  className,
}: {
  title?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-xs font-bold text-white flex items-center justify-between hover:bg-gray-850 cursor-pointer"
      >
        <span>{title}</span>
        <ChevronDown className={cn("w-4 h-4 text-purple-400 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-xs text-gray-300 border-t border-gray-800/60 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
