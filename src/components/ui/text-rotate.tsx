"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function TextRotate({
  words = ["Fast", "Accessible", "Modern", "Beautiful"],
  interval = 2000,
  className,
}: {
  words?: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={cn("inline-block font-extrabold text-purple-400 transition-all duration-300 font-heading", className)}>
      {words[index]}
    </span>
  );
}
