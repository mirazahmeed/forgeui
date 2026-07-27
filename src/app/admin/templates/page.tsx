"use client";

import * as React from "react";
import { TEMPLATES } from "@/lib/templates";
import { Search, Plus, Edit, Trash2, Eye, Layout, Terminal } from "lucide-react";

export default function AdminTemplatesPage() {
  const [search, setSearch] = React.useState("");

  const filtered = TEMPLATES.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">Templates</h1>
          <p className="text-xs text-gray-400 mt-1">Manage full-page templates ({TEMPLATES.length} total)</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-950">
          <Plus className="w-4 h-4" /> Add Template
        </button>
      </div>

      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((template) => (
          <div key={template.slug} className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/30 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${template.previewGradient} flex items-center justify-center shadow-md`}>
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{template.name}</h3>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{template.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-purple-400 cursor-pointer"><Eye className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-cyan-400 cursor-pointer"><Edit className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-red-400 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2">{template.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {template.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">{tag}</span>
                ))}
              </div>
              <code className="text-[10px] font-mono text-purple-300 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> {template.slug}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
