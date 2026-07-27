"use client";

import * as React from "react";
import { THEMES, ThemePreset } from "@/lib/themes";
import { Palette, Sparkles, Copy, Check, Sliders, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemesPage() {
  const [activeTheme, setActiveTheme] = React.useState<ThemePreset>(THEMES[0]);
  const [copied, setCopied] = React.useState(false);

  const handleCopyCss = () => {
    navigator.clipboard.writeText(activeTheme.cssVariables);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center border-b border-gray-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Palette className="w-3.5 h-3.5" />
            <span>10 Preset Themes + Live CSS Export</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            Theme <span className="text-gradient">Engine</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Switch between curated color palettes or export custom CSS variables directly to your `globals.css`.
          </p>
        </div>

        {/* Theme Preset Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {THEMES.map((theme) => {
            const isSelected = activeTheme.id === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-3 ${
                  isSelected
                    ? "bg-gray-900 border-purple-500 shadow-xl glow-purple ring-2 ring-purple-500/40"
                    : "bg-gray-900/60 border-gray-800 hover:border-gray-700"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.primary }} />
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.secondary }} />
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.accent }} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{theme.name}</div>
                  <div className="text-[10px] text-gray-400 line-clamp-1">{theme.vibe}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Theme Preview & Code Exporter Box */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Live Component Preview Panel */}
          <div className="p-8 space-y-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800 bg-gray-950/60">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> Live Preview — {activeTheme.name}
              </span>
              <h3 className="text-2xl font-bold text-white font-heading">
                {activeTheme.vibe}
              </h3>
            </div>

            {/* Mock Component Under Selected Theme */}
            <div className="p-6 rounded-2xl border space-y-4 shadow-xl" style={{ backgroundColor: activeTheme.card, borderColor: activeTheme.primary + "40" }}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold" style={{ backgroundColor: activeTheme.primary, color: "#fff" }}>
                  THEME ACTIVE
                </span>
                <span className="text-xs font-bold" style={{ color: activeTheme.accent }}>
                  {activeTheme.id.toUpperCase()}
                </span>
              </div>
              <h4 className="text-lg font-bold" style={{ color: activeTheme.text }}>
                ForgeUI {activeTheme.name} Preset
              </h4>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: activeTheme.text }}>
                Components automatically adapt to your chosen color variables.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-xs font-bold rounded-xl shadow-md cursor-pointer" style={{ backgroundColor: activeTheme.primary, color: "#fff" }}>
                  Primary Action
                </button>
                <button className="px-4 py-2 text-xs font-bold rounded-xl border cursor-pointer" style={{ borderColor: activeTheme.secondary, color: activeTheme.secondary }}>
                  Secondary Action
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 font-mono">
              Primary: <span style={{ color: activeTheme.primary }}>{activeTheme.primary}</span> | Secondary: <span style={{ color: activeTheme.secondary }}>{activeTheme.secondary}</span>
            </div>
          </div>

          {/* Code Exporter Panel */}
          <div className="p-8 space-y-4 flex flex-col justify-between bg-gray-950">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white font-mono">CSS Variables Output</h4>
                <button
                  onClick={handleCopyCss}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy CSS"}</span>
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Paste these CSS custom properties directly into your project&apos;s root stylesheet.
              </p>
            </div>

            <pre className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-purple-300 overflow-x-auto">
              <code>{activeTheme.cssVariables}</code>
            </pre>

            <div className="text-[11px] text-gray-500">
              💡 Tip: You can also apply themes using the CLI: <span className="font-mono text-purple-400">npx forgeui theme {activeTheme.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
