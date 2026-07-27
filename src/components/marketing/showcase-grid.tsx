"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Grid3X3, ExternalLink } from "lucide-react";
import Link from "next/link";

const showcaseItems = [
  {
    title: "Dashboard",
    category: "Template",
    gradient: "from-purple-600/30 via-purple-500/10 to-transparent",
    description: "Full-featured admin dashboard with charts, tables, and real-time data.",
    cols: "md:col-span-2",
    rows: "md:row-span-2",
    href: "/templates",
    previewContent: (
      <div className="p-4 space-y-3 h-full flex flex-col justify-between">
        {/* Mini dashboard preview */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Live Preview</span>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-gray-900/80 rounded-lg p-3 border border-gray-800/60">
            <div className="text-[9px] text-gray-500 mb-1">Revenue</div>
            <div className="text-lg font-bold text-white">$48.2k</div>
            <div className="mt-2 flex gap-0.5">
              {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-800 rounded-sm" style={{ height: 24 }}>
                  <div className="w-full bg-purple-500/60 rounded-sm" style={{ height: `${h}%`, marginTop: `${100 - h}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900/80 rounded-lg p-3 border border-gray-800/60">
            <div className="text-[9px] text-gray-500 mb-1">Users</div>
            <div className="text-lg font-bold text-white">2,847</div>
            <div className="mt-2 w-full h-1 bg-gray-800 rounded-full">
              <div className="h-full w-3/4 bg-cyan-500/60 rounded-full" />
            </div>
          </div>
          <div className="bg-gray-900/80 rounded-lg p-3 border border-gray-800/60 col-span-2">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[9px] text-gray-500">Recent Activity</div>
              <div className="text-[8px] text-purple-400">View All</div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-t border-gray-800/40 first:border-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shrink-0" />
                <div className="flex-1 h-1.5 bg-gray-800 rounded" />
                <div className="w-8 h-1.5 bg-gray-800 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Color System",
    category: "Theme",
    gradient: "from-fuchsia-600/30 via-fuchsia-500/10 to-transparent",
    description: "Beautiful HSL-based color palette with live editor.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/themes",
    previewContent: (
      <div className="p-4">
        <div className="grid grid-cols-5 gap-1.5">
          {["bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
          {["bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700", "bg-cyan-800"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
          {["bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600", "bg-fuchsia-700", "bg-fuchsia-800"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Components",
    category: "Library",
    gradient: "from-cyan-600/30 via-cyan-500/10 to-transparent",
    description: "100+ production-ready components with variants.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/components",
    previewContent: (
      <div className="p-4 space-y-2">
        {/* Mini component showcase */}
        <div className="flex gap-1.5">
          <div className="px-2.5 py-1 rounded-full bg-purple-600/60 text-[8px] text-white font-medium">Button</div>
          <div className="px-2.5 py-1 rounded-full bg-gray-800 text-[8px] text-gray-400 font-medium">Input</div>
          <div className="px-2.5 py-1 rounded-full bg-gray-800 text-[8px] text-gray-400 font-medium">Card</div>
        </div>
        <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800/60">
          <div className="h-1.5 w-3/4 bg-gray-700 rounded mb-1.5" />
          <div className="h-1.5 w-1/2 bg-gray-800 rounded" />
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-6 rounded bg-purple-600/40" />
          <div className="flex-1 h-6 rounded bg-gray-800 border border-gray-700/60" />
        </div>
      </div>
    ),
  },
  {
    title: "Animations",
    category: "Motion",
    gradient: "from-amber-600/30 via-amber-500/10 to-transparent",
    description: "Framer Motion primitives — scroll reveals, magnetic effects, particles.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/animations",
    previewContent: (
      <div className="p-4 flex items-center justify-center h-full">
        <div className="relative">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["25%", "50%", "25%", "50%", "25%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-fuchsia-400"
            animate={{ y: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "AI Generator",
    category: "AI Tool",
    gradient: "from-emerald-600/30 via-emerald-500/10 to-transparent",
    description: "Prompt-to-UI engine for React & more.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/ai",
    previewContent: (
      <div className="p-4 space-y-2">
        <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800/60 font-mono text-[8px] text-gray-400">
          <span className="text-purple-400">prompt:</span> Create a pricing card...
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[8px] text-emerald-400 font-mono">Generating...</span>
        </div>
        <div className="p-2 rounded-lg bg-gray-900/80 border border-emerald-800/40">
          <div className="h-1 w-full bg-gray-800 rounded mb-1" />
          <div className="h-1 w-3/4 bg-gray-800 rounded mb-1" />
          <div className="h-1 w-1/2 bg-gray-800 rounded" />
        </div>
      </div>
    ),
  },
];

export function ShowcaseGrid() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40"
          >
            <Grid3X3 className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white font-heading"
          >
            See what you can{" "}
            <span className="text-gradient">build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Live previews of the ForgeUI ecosystem — dashboards, color systems, animations, and AI tools.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`${item.cols} ${item.rows} group`}
            >
              <Link
                href={item.href}
                className="h-full flex flex-col rounded-2xl bg-gray-900/40 border border-gray-800/80 hover:border-gray-700/80 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Preview content area */}
                <div className="flex-1 relative z-10 overflow-hidden">
                  {item.previewContent}
                </div>

                {/* Bottom label */}
                <div className="relative z-10 px-4 py-3 border-t border-gray-800/60 bg-gray-950/40 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-gray-800/80 text-gray-400 border border-gray-700/60">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
