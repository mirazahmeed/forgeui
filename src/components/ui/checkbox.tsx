import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checkbox({
  label,
  checked,
  onChange,
  className,
}: {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}) {
  return (
    <label className={cn("inline-flex items-center gap-2.5 cursor-pointer select-none", className)}>
      <div
        onClick={() => onChange?.(!checked)}
        className={cn(
          "w-5 h-5 rounded-lg border border-gray-700 bg-gray-900 flex items-center justify-center transition-all",
          checked && "bg-purple-600 border-purple-500 shadow-md shadow-purple-950"
        )}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      {label && <span className="text-xs font-medium text-gray-300">{label}</span>}
    </label>
  );
}
