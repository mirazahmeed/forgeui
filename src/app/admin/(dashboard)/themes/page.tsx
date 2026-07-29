"use client";

import * as React from "react";
import { THEMES } from "@/lib/themes";
import { Palette, Eye, Edit, Trash2, Plus } from "lucide-react";

export default function AdminThemesPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">Themes</h1>
          <p className="text-xs text-gray-400 mt-1">Manage theme presets ({THEMES.length} total)</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-950">
          <Plus className="w-4 h-4" /> Add Theme
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {THEMES.map((theme) => (
          <div key={theme.id} className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/30 transition-all space-y-4">
            {/* Color swatches */}
            <div className="flex gap-2">
              <div className="flex-1 h-14 rounded-xl" style={{ backgroundColor: theme.primary }} />
              <div className="flex-1 h-14 rounded-xl" style={{ backgroundColor: theme.secondary }} />
              <div className="flex-1 h-14 rounded-xl" style={{ backgroundColor: theme.accent }} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">{theme.name}</h3>
                <span className="text-[10px] text-gray-500">{theme.vibe}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-purple-400 cursor-pointer"><Eye className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-cyan-400 cursor-pointer"><Edit className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-red-400 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">{theme.primary}</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">{theme.secondary}</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">{theme.accent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
