"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Tooltip({
  content,
  children,
  position = "top",
}: {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const [show, setShow] = React.useState(false);

  const posClasses = {
    top: "-top-9 left-1/2 -translate-x-1/2",
    bottom: "-bottom-9 left-1/2 -translate-x-1/2",
    left: "top-1/2 -left-2 -translate-x-full -translate-y-1/2",
    right: "top-1/2 -right-2 translate-x-full -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={cn(
            "absolute z-50 px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-700 text-white text-[11px] font-medium shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-150",
            posClasses[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
