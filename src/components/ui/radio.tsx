import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export function RadioGroup({
  options,
  value,
  onChange,
  className,
}: {
  options: RadioOption[];
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label
            key={opt.value}
            onClick={() => onChange?.(opt.value)}
            className={cn(
              "flex items-start gap-3 p-3 rounded-xl border bg-gray-900/60 transition-all cursor-pointer select-none",
              isSelected
                ? "border-purple-500/80 bg-purple-950/30 shadow-md shadow-purple-950/40"
                : "border-gray-800 hover:border-gray-700"
            )}
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full border border-gray-700 mt-0.5 flex items-center justify-center transition-all",
                isSelected && "border-purple-500 bg-purple-600"
              )}
            >
              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">{opt.label}</span>
              {opt.description && <span className="text-[10px] text-gray-400 leading-tight block mt-0.5">{opt.description}</span>}
            </div>
          </label>
        );
      })}
    </div>
  );
}
