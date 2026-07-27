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
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderHover: "hover:border-purple-500/50",
      iconBg: "bg-purple-500/15",
      iconColor: "text-purple-400",
      badge: "100+ Items",
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-800/50",
    },
    {
      title: "12 Full-Page Templates",
      description: "Complete landing pages, SaaS apps, dashboards, portfolios, and e-commerce stores ready to deploy.",
      icon: Layout,
      href: "/templates",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderHover: "hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/15",
      iconColor: "text-cyan-400",
      badge: "12 Ready",
      badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-800/50",
    },
    {
      title: "10 Preset Themes & Builder",
      description: "Instant theme switching — Glass, Neon, Cyberpunk, Luxury, Monochrome. Live CSS variable editor.",
      icon: Palette,
      href: "/themes",
      gradient: "from-fuchsia-500/20 to-purple-500/20",
      borderHover: "hover:border-fuchsia-500/50",
      iconBg: "bg-fuchsia-500/15",
      iconColor: "text-fuchsia-400",
      badge: "10 Themes",
      badgeColor: "bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-800/50",
    },
    {
      title: "Framer Motion Primitives",
      description: "Magnetic buttons, card stacks, scroll reveals, particle effects, and mouse-follow animations.",
      icon: Zap,
      href: "/animations",
      gradient: "from-amber-500/20 to-orange-500/20",
      borderHover: "hover:border-amber-500/50",
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-400",
      badge: "Motion",
      badgeColor: "bg-amber-950/80 text-amber-300 border-amber-800/50",
    },
    {
      title: "CLI Component Installer",
      description: "Run npx forgeui add button directly from your terminal. Zero config, instant integration.",
      icon: Terminal,
      href: "/docs/getting-started/cli",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderHover: "hover:border-emerald-500/50",
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-400",
      badge: "npx CLI",
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/50",
    },
    {
      title: "AI UI Generator",
      description: "Prompt-to-UI engine that crafts React, Tailwind, Next.js, HTML, Vue, and Svelte code on demand.",
      icon: Wand2,
      href: "/ai",
      gradient: "from-purple-500/20 to-cyan-500/20",
      borderHover: "hover:border-purple-500/50",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
      iconColor: "text-purple-300",
      badge: "AI Engine",
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-800/50",
      highlight: true,
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40"
          >
            <Blocks className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Complete Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-heading tracking-tight"
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
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Replace fragmented tools with a cohesive, beautifully engineered design system built for production.
          </motion.p>
        </div>

        {/* Bento Grid Layout — inspired by reference images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isLarge = idx === 0 || idx === 5;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative ${isLarge ? "lg:col-span-1" : ""}`}
              >
                <Link
                  href={feature.href}
                  className={`block h-full p-7 rounded-2xl bg-gray-900/40 border border-gray-800/80 ${feature.borderHover} backdrop-blur-xl transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1.5 relative overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl ${feature.iconBg} ${feature.iconColor} ring-1 ring-white/5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-white transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Highlight glow for special cards */}
                  {feature.highlight && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-full blur-[60px] pointer-events-none" />
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
