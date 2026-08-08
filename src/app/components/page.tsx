"use client";

import * as React from "react";
import Link from "next/link";
import { COMPONENT_REGISTRY, ComponentItem } from "@/lib/registry";
import { Search, Layers, Layout, Navigation, MessageSquare, Database, ShoppingBag, FileText, Shield, ArrowRight, Sparkles, Terminal, Zap, Smartphone } from "lucide-react";


export default function ComponentBrowserPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredComponents = COMPONENT_REGISTRY.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-gray-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100+ Production Ready Primitives</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Component <span className="text-gradient">Library</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Beautifully designed, accessible, and customizable React components. Copy code or install directly with the ForgeUI CLI.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search components (e.g. Button, Modal, Pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all shadow-inner"
            />
          </div>

          <div className="text-xs text-gray-400 font-mono">
            Showing <span className="text-purple-400 font-bold">{filteredComponents.length}</span> components
          </div>
        </div>

        {/* Component Grid */}
        <div>
          <main>
            {filteredComponents.length === 0 ? (
              <div className="p-12 text-center bg-gray-900/40 rounded-2xl border border-gray-800 space-y-3">
                <p className="text-gray-400 text-sm">No components matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-purple-600 text-white text-xs font-semibold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredComponents.map((component) => (
                  <Link
                    key={component.slug}
                    href={`/components/${component.category}/${component.slug}`}
                    className="group block p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/90 transition-all duration-200 space-y-4 shadow-lg hover:shadow-purple-950/40 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-800/60 text-purple-300 uppercase">
                          {component.category}
                        </span>
                        <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-purple-400" /> CLI Ready
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {component.name}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {component.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-mono">
                        {component.variants.length} Variants
                      </span>
                      <span className="text-purple-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Code & Preview <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
