"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, Layout, Palette, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Megamenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const sections = [
    {
      title: "UI Components",
      items: [
        { icon: Layers, label: "Form & Inputs", desc: "Buttons, inputs, selects, switches" },
        { icon: Layout, label: "Layout Blocks", desc: "Hero, auth cards, pricing tables" },
      ],
    },
    {
      title: "Ecosystem Tools",
      items: [
        { icon: Palette, label: "Theme Engine", desc: "Dynamic color tokens & variables" },
        { icon: Zap, label: "Animation Studio", desc: "Framer Motion micro-animations" },
      ],
    },
  ];

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div className="p-6 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ecosystem Megamenu</h4>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60 uppercase">
            NEW
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="text-[11px] font-mono font-semibold text-gray-400 uppercase">{section.title}</h5>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href="#"
                      className="p-3 rounded-2xl bg-gray-950/60 border border-gray-800/80 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1">
                          <span>{item.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                        </div>
                        <p className="text-[10px] text-gray-400 leading-tight">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
