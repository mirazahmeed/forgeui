"use client";

import * as React from "react";
import Link from "next/link";
import { Home, Layers, Sparkles, Settings, Compass, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DockItem {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

export function Dock({
  items = [
    { icon: Home, label: "Home", href: "/", active: true },
    { icon: Layers, label: "Components", href: "/components" },
    { icon: Sparkles, label: "AI Generator", href: "/ai" },
    { icon: Compass, label: "Explore", href: "/templates" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ],
  className,
}: {
  items?: DockItem[];
  className?: string;
}) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-900/90 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-purple-950/40",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isHovered = hoveredIdx === idx;
        return (
          <Link
            key={item.label}
            href={item.href}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={cn(
              "relative p-2.5 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer group",
              item.active
                ? "bg-purple-600 text-white shadow-md shadow-purple-950"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            )}
          >
            <Icon className={cn("w-5 h-5 transition-transform duration-200", isHovered && "scale-125")} />
            <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 border border-gray-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xl whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
