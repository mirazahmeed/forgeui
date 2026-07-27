"use client";

import * as React from "react";
import { Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hover3DCard({
  title = "3D Interactive Card",
  subtitle = "Hover mouse over to tilt in 3D perspective space.",
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 10, y: x / 10 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={cn(
        "p-6 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950/60 border border-gray-800 hover:border-purple-500/50 shadow-2xl transition-transform duration-150 ease-out cursor-pointer",
        className
      )}
    >
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <h4 className="text-base font-extrabold text-white">{title}</h4>
        <p className="text-xs text-gray-400 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
