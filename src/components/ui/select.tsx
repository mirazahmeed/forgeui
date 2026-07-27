"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: {
  options: SelectOption[];
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

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
    <div ref={ref} className={cn("relative w-full", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-left text-gray-100 flex items-center justify-between focus:outline-none focus:border-purple-500 transition-all cursor-pointer"
      >
        <span className={selectedOption ? "text-white font-medium" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 py-1">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange?.(opt.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-xs text-left flex items-center justify-between hover:bg-gray-800 transition-colors cursor-pointer",
                  isSelected ? "text-purple-300 font-semibold bg-purple-950/40" : "text-gray-300"
                )}
              >
                <span>{opt.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-purple-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
