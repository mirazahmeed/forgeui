"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "left" | "right";
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex">
      <div
        className={cn(
          "bg-gray-900 border-gray-800 w-full max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between animate-in duration-200",
          position === "right" && "ml-auto border-l slide-in-from-right",
          position === "left" && "mr-auto border-r slide-in-from-left"
        )}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          {title && <h3 className="text-sm font-bold text-white">{title}</h3>}
          <button onClick={onClose} className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
