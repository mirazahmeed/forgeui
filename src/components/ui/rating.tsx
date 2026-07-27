"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  max = 5,
  defaultValue = 4,
  onChange,
  className,
}: {
  max?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  className?: string;
}) {
  const [val, setVal] = React.useState(defaultValue);

  const handleSelect = (idx: number) => {
    setVal(idx);
    onChange?.(idx);
  };

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      {Array.from({ length: max }, (_, i) => i + 1).map((idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => handleSelect(idx)}
          className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer"
        >
          <Star className={cn("w-5 h-5", idx <= val ? "fill-amber-400 text-amber-400" : "text-gray-700 fill-none")} />
        </button>
      ))}
    </div>
  );
}
