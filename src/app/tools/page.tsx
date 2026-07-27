"use client";

import * as React from "react";
import Link from "next/link";
import { Wrench, Sparkles, Palette, Paintbrush, Square, Radius, Zap, Code2, ArrowRight } from "lucide-react";

const TOOLS = [
  {
    slug: "gradient-generator",
    name: "Gradient Generator",
    description: "Create stunning CSS gradients with live preview and one-click copy. Supports linear, radial, and conic gradients.",
    icon: Paintbrush,
    gradient: "from-purple-600 via-fuchsia-500 to-cyan-400",
  },
  {
    slug: "color-palette",
    name: "Color Palette Generator",
    description: "Generate harmonious color palettes from a base color. Exports CSS variables and Tailwind config.",
    icon: Palette,
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
  },
  {
    slug: "shadow-generator",
    name: "Shadow Generator",
    description: "Design layered box-shadow effects with interactive controls for blur, spread, offset, and color.",
    icon: Square,
    gradient: "from-gray-600 via-purple-600 to-fuchsia-600",
  },
  {
    slug: "border-radius",
    name: "Border Radius Generator",
    description: "Fine-tune border-radius with individual corner controls. Generates CSS and Tailwind classes.",
    icon: Radius,
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    slug: "animation-playground",
    name: "Animation Playground",
    description: "Experiment with CSS keyframe animations and Framer Motion presets. Adjust timing, easing, and delays live.",
    icon: Zap,
    gradient: "from-green-500 via-emerald-500 to-cyan-500",
  },
  {
    slug: "code-playground",
    name: "Code Playground",
    description: "Test ForgeUI components in an isolated sandbox environment with instant preview rendering.",
    icon: Code2,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center border-b border-gray-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive Developer Utilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            Developer <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Free, interactive CSS generators and design utilities. Tweak values live, copy the output, and paste into your project.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group block rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-950/30 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-28 bg-gradient-to-r ${tool.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
                    <span>Open Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
