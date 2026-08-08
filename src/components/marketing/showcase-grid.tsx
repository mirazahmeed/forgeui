"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Grid3X3, ExternalLink } from "lucide-react";
import Link from "next/link";

const showcaseItems = [
  {
    title: "Dashboard",
    category: "Template",
    gradient: "from-purple-400/12 via-purple-300/5 to-transparent",
    description: "Full-featured admin dashboard with charts, tables, and real-time data.",
    cols: "md:col-span-2",
    rows: "md:row-span-2",
    href: "/templates",
    previewContent: (
      <div className="p-4 space-y-3 h-full flex flex-col justify-between">
        {/* Mini dashboard preview */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Live Preview</span>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-white/60 rounded-lg p-3 border border-gray-200/60 backdrop-blur-sm">
            <div className="text-[9px] text-gray-400 mb-1">Revenue</div>
            <div className="text-lg font-bold text-gray-900">$48.2k</div>
            <div className="mt-2 flex gap-0.5">
              {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-100 rounded-sm" style={{ height: 24 }}>
                  <div className="w-full bg-purple-400/60 rounded-sm" style={{ height: `${h}%`, marginTop: `${100 - h}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-3 border border-gray-200/60 backdrop-blur-sm">
            <div className="text-[9px] text-gray-400 mb-1">Users</div>
            <div className="text-lg font-bold text-gray-900">2,847</div>
            <div className="mt-2 w-full h-1 bg-gray-100 rounded-full">
              <div className="h-full w-3/4 bg-cyan-400/60 rounded-full" />
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-3 border border-gray-200/60 col-span-2 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[9px] text-gray-400">Recent Activity</div>
              <div className="text-[8px] text-purple-500">View All</div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-t border-gray-100 first:border-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shrink-0" />
                <div className="flex-1 h-1.5 bg-gray-100 rounded" />
                <div className="w-8 h-1.5 bg-gray-100 rounded" />
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
    gradient: "from-fuchsia-400/12 via-fuchsia-300/5 to-transparent",
    description: "Beautiful HSL-based color palette with live editor.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/themes",
    previewContent: (
      <div className="p-4">
        <div className="grid grid-cols-5 gap-1.5">
          {["bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
          {["bg-cyan-300", "bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
          {["bg-fuchsia-300", "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600", "bg-fuchsia-700"].map((c, i) => (
            <div key={i} className={`h-6 rounded ${c}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Components",
    category: "Library",
    gradient: "from-cyan-400/12 via-cyan-300/5 to-transparent",
    description: "100+ production-ready components with variants.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/components",
    previewContent: (
      <div className="p-4 space-y-2">
        <div className="flex gap-1.5">
          <div className="px-2.5 py-1 rounded-full bg-purple-500 text-[8px] text-white font-medium">Button</div>
          <div className="px-2.5 py-1 rounded-full bg-gray-100 text-[8px] text-gray-500 font-medium">Input</div>
          <div className="px-2.5 py-1 rounded-full bg-gray-100 text-[8px] text-gray-500 font-medium">Card</div>
        </div>
        <div className="p-2 rounded-lg bg-white/60 border border-gray-200/60">
          <div className="h-1.5 w-3/4 bg-gray-200 rounded mb-1.5" />
          <div className="h-1.5 w-1/2 bg-gray-100 rounded" />
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 h-6 rounded bg-purple-500/30" />
          <div className="flex-1 h-6 rounded bg-white border border-gray-200/60" />
        </div>
      </div>
    ),
  },
  {
    title: "Animations",
    category: "Motion",
    gradient: "from-amber-400/12 via-amber-300/5 to-transparent",
    description: "Framer Motion primitives — scroll reveals, magnetic effects, particles.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/animations",
    previewContent: (
      <div className="p-4 flex items-center justify-center h-full">
        <div className="relative">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-cyan-400 shadow-xl shadow-purple-500/20"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["25%", "50%", "25%", "50%", "25%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 shadow-md"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-fuchsia-400 shadow-md"
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
    gradient: "from-emerald-400/12 via-emerald-300/5 to-transparent",
    description: "Prompt-to-UI engine for React & more.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    href: "/ai",
    previewContent: (
      <div className="p-4 space-y-2">
        <div className="p-2 rounded-lg bg-white/60 border border-gray-200/60 font-mono text-[8px] text-gray-500">
          <span className="text-purple-500">prompt:</span> Create a pricing card...
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[8px] text-emerald-600 font-mono">Generating...</span>
        </div>
        <div className="p-2 rounded-lg bg-white/60 border border-emerald-200/60">
          <div className="h-1 w-full bg-gray-100 rounded mb-1" />
          <div className="h-1 w-3/4 bg-gray-100 rounded mb-1" />
          <div className="h-1 w-1/2 bg-gray-100 rounded" />
        </div>
      </div>
    ),
  },
];

export function ShowcaseGrid() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-purple-200/60 backdrop-blur-sm shadow-sm"
          >
            <Grid3X3 className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading"
          >
            See what you can{" "}
            <span className="text-gradient">build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg"
          >
            Live previews of the ForgeUI ecosystem — dashboards, color systems, animations, and AI tools.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px] perspective-1200">
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
                className="h-full flex flex-col rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5 relative card-3d"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Preview content area */}
                <div className="flex-1 relative z-10 overflow-hidden">
                  {item.previewContent}
                </div>

                {/* Bottom label */}
                <div className="relative z-10 px-4 py-3 border-t border-gray-200/60 bg-white/40 backdrop-blur-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200/60">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.description}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-500 transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
