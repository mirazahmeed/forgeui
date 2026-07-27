"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropdownItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  className,
}: {
  trigger: React.ReactNode;
  items: DropdownItemData[];
  onSelect?: (id: string) => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 z-50 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 p-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelect?.(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2.5 transition-colors cursor-pointer text-left",
                item.danger
                  ? "text-red-400 hover:bg-red-950/40"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
