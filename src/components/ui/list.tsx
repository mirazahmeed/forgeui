import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function List({
  items = ["Tailwind CSS v4 styling", "TypeScript type definitions", "Framer Motion animations"],
  className,
}: {
  items?: string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2 text-xs text-gray-300", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 shrink-0">
            <Check className="w-2.5 h-2.5" />
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
