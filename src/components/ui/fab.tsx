"use client";

import * as React from "react";
import { Plus, X, MessageSquare, Share2, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FabAction {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

export function Fab({
  actions = [
    { icon: MessageSquare, label: "Chat" },
    { icon: Share2, label: "Share" },
    { icon: Heart, label: "Like" },
  ],
  className,
}: {
  actions?: FabAction[];
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("relative inline-block", className)}>
      {/* Speed Dial Actions */}
      <div
        className={cn(
          "absolute bottom-16 right-0 space-y-2 transition-all duration-200",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <button
              key={idx}
              onClick={act.onClick}
              className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-800 shadow-xl cursor-pointer transition-all ml-auto group whitespace-nowrap"
            >
              <span className="text-xs font-medium text-gray-300 group-hover:text-purple-300">{act.label}</span>
              <div className="w-8 h-8 rounded-full bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-400">
                <Icon className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-950 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
    </div>
  );
}
