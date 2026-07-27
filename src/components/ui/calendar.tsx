"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Calendar({ className }: { className?: string }) {
  const [selectedDay, setSelectedDay] = React.useState(25);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className={cn("p-4 rounded-2xl bg-gray-900 border border-gray-800 space-y-3 max-w-xs", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white">July 2026</span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono text-gray-500">
        {weekDays.map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day) => {
          const isSelected = day === selectedDay;
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={cn(
                "h-7 rounded-lg font-mono transition-all flex items-center justify-center cursor-pointer",
                isSelected
                  ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-950"
                  : "text-gray-300 hover:bg-gray-800"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
