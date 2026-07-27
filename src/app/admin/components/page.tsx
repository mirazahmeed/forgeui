"use client";

import * as React from "react";
import { COMPONENT_REGISTRY } from "@/lib/registry";
import { Search, Plus, Edit, Trash2, Eye, Layers } from "lucide-react";

export default function AdminComponentsPage() {
  const [search, setSearch] = React.useState("");

  const filtered = COMPONENT_REGISTRY.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">Components</h1>
          <p className="text-xs text-gray-400 mt-1">Manage the component registry ({COMPONENT_REGISTRY.length} total)</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-950">
          <Plus className="w-4 h-4" /> Add Component
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-950 border-b border-gray-800 text-gray-400 font-mono uppercase tracking-wider">
              <th className="py-3.5 px-4">Component</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4">Variants</th>
              <th className="py-3.5 px-4">CLI Command</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60">
            {filtered.map((comp) => (
              <tr key={comp.slug} className="hover:bg-gray-850/50 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm">{comp.name}</span>
                      <span className="block text-[10px] text-gray-500 truncate max-w-[200px]">{comp.description}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300 text-[10px] font-mono uppercase">{comp.category}</span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-mono text-purple-300">{comp.variants.length}</span>
                </td>
                <td className="py-3.5 px-4">
                  <code className="text-[10px] font-mono text-cyan-300 bg-gray-800 px-2 py-0.5 rounded">{comp.installCmd}</code>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-purple-400 cursor-pointer" title="View">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-cyan-400 cursor-pointer" title="Edit">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-red-400 cursor-pointer" title="Delete">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
