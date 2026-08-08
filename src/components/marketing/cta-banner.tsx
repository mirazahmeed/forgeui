"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Terminal, Check, Copy, Rocket } from "lucide-react";

export function CtaBanner() {
  const [copied, setCopied] = React.useState(false);

  const command = "npx forgeui init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-3d"
        >
          {/* Glass gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-white to-cyan-50/90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />

          {/* Animated glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-32 -left-32 w-80 h-80 bg-purple-400/15 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-purple-200/40" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-purple-200/60 text-purple-600 text-xs font-semibold backdrop-blur-sm shadow-sm">
                <Rocket className="w-3.5 h-3.5" />
                <span>Production Ready Ecosystem</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-heading leading-[1.1] tracking-tight">
                Start building{" "}
                <br className="hidden sm:block" />
                stunning websites{" "}
                <span className="text-gradient">today.</span>
              </h2>

              <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                Copy-paste components, install via CLI, or generate UI with AI. Completely free and open-source.
              </p>
            </div>

            <div className="space-y-5 shrink-0 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/components"
                  className="btn-water w-full sm:w-auto flex items-center justify-center gap-2.5"
                >
                  <span className="relative z-10">Browse Components</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/docs"
                  className="btn-water-secondary w-full sm:w-auto flex items-center justify-center"
                >
                  <span className="relative z-10">Read Docs</span>
                </Link>
              </div>

              <div className="p-3.5 bg-white/60 rounded-xl border border-gray-200/80 flex items-center justify-between gap-4 text-sm font-mono text-gray-600 backdrop-blur-xl shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-400">$</span>
                  <span className="text-purple-600 font-semibold">{command}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer"
                  title="Copy Command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
