"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Countdown({
  initialSeconds = 3600,
  className,
}: {
  initialSeconds?: number;
  className?: string;
}) {
  const [secondsLeft, setSecondsLeft] = React.useState(initialSeconds);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className={cn("inline-flex items-center gap-3 font-mono", className)}>
      <div className="flex flex-col items-center p-2 rounded-xl bg-gray-900 border border-gray-800 min-w-12">
        <span className="text-xl font-extrabold text-purple-300">{String(hours).padStart(2, "0")}</span>
        <span className="text-[9px] uppercase text-gray-500 font-bold">Hours</span>
      </div>
      <span className="text-purple-400 font-bold">:</span>
      <div className="flex flex-col items-center p-2 rounded-xl bg-gray-900 border border-gray-800 min-w-12">
        <span className="text-xl font-extrabold text-purple-300">{String(minutes).padStart(2, "0")}</span>
        <span className="text-[9px] uppercase text-gray-500 font-bold">Min</span>
      </div>
      <span className="text-purple-400 font-bold">:</span>
      <div className="flex flex-col items-center p-2 rounded-xl bg-gray-900 border border-gray-800 min-w-12">
        <span className="text-xl font-extrabold text-purple-300">{String(seconds).padStart(2, "0")}</span>
        <span className="text-[9px] uppercase text-gray-500 font-bold">Sec</span>
      </div>
    </div>
  );
}
