import * as React from "react";
import { cn } from "@/lib/utils";

export function Switch({
  checked = false,
  onChange,
  label,
  className,
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
}) {
  return (
    <label className={cn("inline-flex items-center gap-3 cursor-pointer select-none", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "w-10 h-6 rounded-full p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer",
          checked ? "bg-purple-600 shadow-md shadow-purple-950" : "bg-gray-800 border border-gray-700"
        )}
      >
        <div
          className={cn(
            "w-5 h-5 rounded-full bg-white shadow-md transition-transform",
            checked ? "translate-x-4" : "translate-x-0"
          )}
        />
      </button>
      {label && <span className="text-xs font-semibold text-gray-300">{label}</span>}
    </label>
  );
}
