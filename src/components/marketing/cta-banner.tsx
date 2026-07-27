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
      <div className="absolute inset-0 bg-gray-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-gray-900 to-cyan-950/90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          
          {/* Animated glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/25 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/25 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-purple-800/30" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-700/50 text-purple-200 text-xs font-semibold">
                <Rocket className="w-3.5 h-3.5" />
                <span>Production Ready Ecosystem</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-heading leading-[1.1] tracking-tight">
                Start building{" "}
                <br className="hidden sm:block" />
                stunning websites{" "}
                <span className="text-gradient">today.</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Copy-paste components, install via CLI, or generate UI with AI. Completely free and open-source.
              </p>
            </div>

            <div className="space-y-5 shrink-0 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/components"
                  className="group w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-gray-900 font-bold text-sm shadow-2xl flex items-center justify-center gap-2.5 hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Browse Components</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/docs"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:bg-white/20"
                >
                  Read Docs
                </Link>
              </div>

              <div className="p-3.5 bg-gray-950/60 rounded-xl border border-gray-800/80 flex items-center justify-between gap-4 text-sm font-mono text-gray-300 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-500">$</span>
                  <span className="text-purple-300 font-semibold">{command}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 transition-colors cursor-pointer"
                  title="Copy Command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
