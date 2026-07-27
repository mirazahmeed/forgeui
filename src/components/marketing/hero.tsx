"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Layers, Copy, Check, Star, Zap, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";

const floatingShapes = [
  { top: "10%", left: "5%", size: 6, delay: 0, duration: 8, color: "bg-purple-500/30" },
  { top: "20%", left: "85%", size: 4, delay: 1, duration: 6, color: "bg-cyan-400/30" },
  { top: "60%", left: "10%", size: 5, delay: 2, duration: 7, color: "bg-fuchsia-400/20" },
  { top: "70%", left: "90%", size: 3, delay: 0.5, duration: 9, color: "bg-purple-400/25" },
  { top: "40%", left: "50%", size: 4, delay: 1.5, duration: 10, color: "bg-cyan-300/15" },
  { top: "80%", left: "30%", size: 3, delay: 3, duration: 8, color: "bg-pink-400/20" },
];

export function Hero() {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview");

  const installCommand = "npx forgeui init";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Primary Glow Orbs — more vibrant and dynamic */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-0 w-[450px] h-[450px] bg-fuchsia-500/15 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Floating particles */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} blur-[1px]`}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge — more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-950/80 to-fuchsia-950/80 border border-purple-700/50 backdrop-blur-xl shadow-2xl shadow-purple-950/60"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
            </motion.div>
            <span className="text-xs font-semibold text-purple-100 tracking-wide">ForgeUI v1.0 Ecosystem is Here</span>
            <span className="text-[10px] bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-bold px-2.5 py-0.5 rounded-full shadow-lg">NEW</span>
          </motion.div>

          {/* Headline — much larger, dramatic */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-heading leading-[1.05]"
          >
            Rapidly build{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient relative">
              modern websites
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Subheadline — more spacious */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Beautiful UI components, templates, themes, and developer tools — combining{" "}
            <span className="text-purple-300 font-medium">speed</span>,{" "}
            <span className="text-cyan-300 font-medium">elegance</span>, and{" "}
            <span className="text-fuchsia-300 font-medium">AI workflows</span>.
          </motion.p>

          {/* CTA Buttons — more prominent with glow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/components"
              className="group relative px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 text-white font-semibold text-sm shadow-2xl shadow-purple-900/50 hover:shadow-purple-600/40 transition-all duration-300 flex items-center gap-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Layers className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Browse Components</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/docs/getting-started/introduction"
              className="px-7 py-4 rounded-2xl bg-gray-900/80 border border-gray-700/80 hover:border-purple-600/60 hover:bg-gray-900 text-gray-100 font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm"
            >
              <BookIcon className="w-4 h-4 text-purple-400" />
              <span>Get Started</span>
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-4 rounded-2xl bg-gray-950/80 border border-gray-800 hover:border-gray-600 text-gray-300 font-medium text-sm transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm"
            >
              <GithubIcon className="w-4 h-4 text-gray-400" />
              <span>GitHub</span>
              <span className="flex items-center gap-1 text-xs text-purple-300 font-mono bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-800/60">
                <Star className="w-3 h-3 fill-purple-400 text-purple-400" /> 12.4k
              </span>
            </a>
          </motion.div>

          {/* Quick CLI command — sleeker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-xl shadow-inner font-mono text-sm text-gray-300 hover:border-gray-700 transition-all group">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-gray-500">$</span>
              <span className="text-purple-300 font-semibold">{installCommand}</span>
              <button
                onClick={handleCopy}
                className="ml-2 p-2 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Command"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Bento Grid Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Main preview — large card */}
            <div className="col-span-12 md:col-span-7 rounded-2xl border border-gray-800/80 bg-gray-900/60 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-purple-600/40 transition-all duration-500">
              {/* Window chrome */}
              <div className="p-3.5 border-b border-gray-800/80 bg-gray-950/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-mono text-gray-500">ForgeUI — Dashboard.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "code"
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Preview body */}
              <div className="p-6 md:p-8 min-h-[320px] flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                
                {activeTab === "preview" ? (
                  <div className="w-full max-w-lg space-y-4 relative z-10">
                    {/* Dashboard-style preview */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-gray-900/90 border border-purple-500/20 space-y-2 hover:border-purple-500/50 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-wider">Revenue</span>
                          <span className="text-[10px] text-green-400 bg-green-950/60 px-1.5 py-0.5 rounded-full border border-green-800/40">+24%</span>
                        </div>
                        <div className="text-2xl font-extrabold text-white">$48.2k</div>
                        <div className="flex gap-1">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-gray-800 rounded-sm overflow-hidden" style={{ height: 32 }}>
                              <div
                                className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm transition-all"
                                style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-900/90 border border-cyan-500/20 space-y-2 hover:border-cyan-500/50 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">Users</span>
                          <div className="flex -space-x-1.5">
                            <div className="w-5 h-5 rounded-full bg-purple-500 text-[8px] text-white font-bold flex items-center justify-center border border-gray-900">A</div>
                            <div className="w-5 h-5 rounded-full bg-cyan-500 text-[8px] text-white font-bold flex items-center justify-center border border-gray-900">B</div>
                            <div className="w-5 h-5 rounded-full bg-fuchsia-500 text-[8px] text-white font-bold flex items-center justify-center border border-gray-900">+</div>
                          </div>
                        </div>
                        <div className="text-2xl font-extrabold text-white">2,847</div>
                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "78%" }}
                            transition={{ duration: 1.5, delay: 1 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interactive button row */}
                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium text-xs shadow-lg shadow-purple-950/50 hover:opacity-90 transition-all cursor-pointer">
                        <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />Deploy Now
                      </button>
                      <button className="flex-1 py-2.5 rounded-xl border border-gray-700 text-gray-300 font-medium text-xs hover:bg-gray-800/60 transition-all cursor-pointer">
                        <Code2 className="w-3.5 h-3.5 inline mr-1.5" />View Source
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full text-left font-mono text-xs text-gray-300 overflow-x-auto p-4 bg-gray-950/80 rounded-xl border border-gray-800 space-y-1">
                    <div className="text-purple-400">import <span className="text-gray-100">&#123; Button, Card, Badge &#125;</span> from <span className="text-green-400">&quot;@/components/ui&quot;</span>;</div>
                    <div className="text-purple-400">import <span className="text-gray-100">&#123; motion &#125;</span> from <span className="text-green-400">&quot;framer-motion&quot;</span>;</div>
                    <br />
                    <div className="text-purple-400">export default function <span className="text-yellow-300">Dashboard</span>() &#123;</div>
                    <div className="pl-4 text-gray-400">&lt;<span className="text-cyan-400">Card</span> className=<span className="text-green-400">&quot;p-6 glass glow-purple&quot;</span>&gt;</div>
                    <div className="pl-8 text-gray-400">&lt;<span className="text-cyan-400">Badge</span> variant=<span className="text-green-400">&quot;purple&quot;</span>&gt;Revenue&lt;/<span className="text-cyan-400">Badge</span>&gt;</div>
                    <div className="pl-8 text-gray-400">&lt;<span className="text-cyan-400">motion.h2</span> className=<span className="text-green-400">&quot;text-3xl font-bold&quot;</span>&gt;</div>
                    <div className="pl-12 text-gray-200">$48,200</div>
                    <div className="pl-8 text-gray-400">&lt;/<span className="text-cyan-400">motion.h2</span>&gt;</div>
                    <div className="pl-4 text-gray-400">&lt;/<span className="text-cyan-400">Card</span>&gt;</div>
                    <div className="text-purple-400">&#125;</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right column — stacked cards */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">
              {/* Stat card */}
              <div className="flex-1 p-5 rounded-2xl border border-gray-800/80 bg-gray-900/60 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 overflow-hidden relative group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-600/10 rounded-full blur-[40px] group-hover:bg-purple-600/20 transition-colors" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Performance
                    </span>
                    <span className="text-[10px] text-green-400 bg-green-950/60 px-2 py-0.5 rounded-full border border-green-800/40">Optimized</span>
                  </div>
                  <div className="text-4xl font-extrabold text-white tracking-tight">99.8<span className="text-lg text-gray-400 font-normal">%</span></div>
                  <p className="text-xs text-gray-400">Lighthouse score with zero runtime overhead. Tree-shakeable components.</p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700/80 font-mono">React 19</span>
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700/80 font-mono">RSC Ready</span>
                  </div>
                </div>
              </div>

              {/* Tech stack card */}
              <div className="flex-1 p-5 rounded-2xl border border-gray-800/80 bg-gray-900/60 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 overflow-hidden relative group">
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors" />
                <div className="relative z-10 space-y-3">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Built With</span>
                  <div className="grid grid-cols-3 gap-2">
                    {["Next.js 15", "Tailwind v4", "Framer", "TypeScript", "Radix UI", "MDX"].map((tech) => (
                      <div key={tech} className="px-2.5 py-2 rounded-xl bg-gray-800/60 border border-gray-700/60 text-center hover:border-cyan-500/40 hover:bg-gray-800 transition-all cursor-default">
                        <span className="text-[10px] font-semibold text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick action card */}
              <div className="p-5 rounded-2xl border border-gray-800/80 bg-gradient-to-br from-purple-950/40 to-cyan-950/40 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 overflow-hidden relative group">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Ready to ship?</div>
                    <div className="text-xs text-gray-400">100+ components available</div>
                  </div>
                  <Link
                    href="/components"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 group/btn"
                  >
                    <span>Go</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
