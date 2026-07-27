"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const [openIds, setOpenIds] = React.useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-2.5", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden transition-all">
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 text-xs font-bold text-left text-white flex items-center justify-between hover:bg-gray-850 transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown className={cn("w-4 h-4 text-purple-400 transition-transform duration-200", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-gray-800/60 pt-3">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
