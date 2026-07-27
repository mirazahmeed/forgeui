"use client";

import * as React from "react";
import { Sun, Moon, Volume2, VolumeX, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Swap({
  onIcon = Sun,
  offIcon = Moon,
  defaultSwapped = false,
  onChange,
  className,
}: {
  onIcon?: React.ElementType;
  offIcon?: React.ElementType;
  defaultSwapped?: boolean;
  onChange?: (swapped: boolean) => void;
  className?: string;
}) {
  const [swapped, setSwapped] = React.useState(defaultSwapped);
  const OnIcon = onIcon;
  const OffIcon = offIcon;

  const handleToggle = () => {
    const next = !swapped;
    setSwapped(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all cursor-pointer inline-flex items-center justify-center group",
        className
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <OnIcon
          className={cn(
            "w-5 h-5 absolute transition-all duration-200 text-purple-400",
            swapped ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90 pointer-events-none"
          )}
        />
        <OffIcon
          className={cn(
            "w-5 h-5 absolute transition-all duration-200 text-gray-400",
            !swapped ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90 pointer-events-none"
          )}
        />
      </div>
    </button>
  );
}
