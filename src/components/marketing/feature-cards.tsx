"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Layers, Palette, Layout, Zap, Terminal, Sparkles, ArrowRight, Blocks, Wand2 } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      title: "100+ Production Components",
      description: "Accessible, dark-mode first React 19 components with full source code, variants, and props documentation.",
      icon: Layers,
      href: "/components",
      gradient: "from-purple-400/15 to-indigo-400/15",
      borderHover: "hover:border-purple-300/60",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      badge: "100+ Items",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200/60",
    },
    {
      title: "12 Full-Page Templates",
      description: "Complete landing pages, SaaS apps, dashboards, portfolios, and e-commerce stores ready to deploy.",
      icon: Layout,
      href: "/templates",
      gradient: "from-cyan-400/15 to-blue-400/15",
      borderHover: "hover:border-cyan-300/60",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      badge: "12 Ready",
      badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-200/60",
    },
    {
      title: "10 Preset Themes & Builder",
      description: "Instant theme switching — Glass, Neon, Cyberpunk, Luxury, Monochrome. Live CSS variable editor.",
      icon: Palette,
      href: "/themes",
      gradient: "from-fuchsia-400/15 to-purple-400/15",
      borderHover: "hover:border-fuchsia-300/60",
      iconBg: "bg-fuchsia-100",
      iconColor: "text-fuchsia-600",
      badge: "10 Themes",
      badgeColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/60",
    },
    {
      title: "Framer Motion Primitives",
      description: "Magnetic buttons, card stacks, scroll reveals, particle effects, and mouse-follow animations.",
      icon: Zap,
      href: "/animations",
      gradient: "from-amber-400/15 to-orange-400/15",
      borderHover: "hover:border-amber-300/60",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      badge: "Motion",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200/60",
    },
    {
      title: "CLI Component Installer",
      description: "Run npx forgeui add button directly from your terminal. Zero config, instant integration.",
      icon: Terminal,
      href: "/docs/getting-started/cli",
      gradient: "from-emerald-400/15 to-teal-400/15",
      borderHover: "hover:border-emerald-300/60",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      badge: "npx CLI",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
    },
    {
      title: "AI UI Generator",
      description: "Prompt-to-UI engine that crafts React, Tailwind, Next.js, HTML, Vue, and Svelte code on demand.",
      icon: Wand2,
      href: "/ai",
      gradient: "from-purple-400/15 to-cyan-400/15",
      borderHover: "hover:border-purple-300/60",
      iconBg: "bg-gradient-to-br from-purple-100 to-cyan-100",
      iconColor: "text-purple-600",
      badge: "AI Engine",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200/60",
      highlight: true,
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-300/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-purple-200/60 backdrop-blur-sm shadow-sm"
          >
            <Blocks className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Complete Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-heading tracking-tight"
          >
            Everything you need to{" "}
            <br className="hidden sm:block" />
            build <span className="text-gradient">modern web apps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Replace fragmented tools with a cohesive, beautifully engineered design system built for production.
          </motion.p>
        </div>

        {/* Bento Grid Layout — 3D glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 perspective-1200">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative"
              >
                <Link
                  href={feature.href}
                  className={`block h-full p-7 rounded-2xl glass-card ${feature.borderHover} transition-all duration-500 shadow-3d-hover group-hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl ${feature.iconBg} ${feature.iconColor} ring-1 ring-black/5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 group-hover:text-gray-600 transition-colors">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Highlight glow for special cards */}
                  {feature.highlight && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full blur-[60px] pointer-events-none" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
