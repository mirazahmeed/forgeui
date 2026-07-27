"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function OtpInput({
  length = 4,
  onComplete,
  className,
}: {
  length?: number;
  onComplete?: (code: string) => void;
  className?: string;
}) {
  const [code, setCode] = React.useState<string[]>(Array(length).fill(""));

  const handleChange = (val: string, idx: number) => {
    const next = [...code];
    next[idx] = val.slice(-1);
    setCode(next);

    if (next.every((c) => c !== "") && next.join("").length === length) {
      onComplete?.(next.join(""));
    }
  };

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {Array.from({ length }, (_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          value={code[idx]}
          onChange={(e) => handleChange(e.target.value, idx)}
          className="w-12 h-14 rounded-2xl bg-gray-900 border border-gray-800 text-center text-xl font-mono font-extrabold text-purple-300 focus:border-purple-500 focus:outline-none transition-all shadow-inner"
        />
      ))}
    </div>
  );
}
