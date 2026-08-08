"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Layers, Copy, Check, Star, Zap, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";

const floatingOrbs = [
  { top: "8%", left: "8%", size: 180, color: "bg-purple-400/20", blur: "blur-[80px]", delay: 0, duration: 10 },
  { top: "15%", left: "80%", size: 140, color: "bg-cyan-400/15", blur: "blur-[70px]", delay: 2, duration: 8 },
  { top: "60%", left: "5%", size: 120, color: "bg-fuchsia-400/12", blur: "blur-[60px]", delay: 1, duration: 9 },
  { top: "65%", left: "85%", size: 100, color: "bg-purple-300/15", blur: "blur-[50px]", delay: 3, duration: 11 },
  { top: "35%", left: "45%", size: 200, color: "bg-violet-300/10", blur: "blur-[100px]", delay: 1.5, duration: 12 },
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
      {/* White gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-gray-50/80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} ${orb.blur} pointer-events-none`}
          style={{ top: orb.top, left: orb.left, width: orb.size, height: orb.size }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 border border-purple-200/60 backdrop-blur-xl shadow-lg shadow-purple-500/5"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
            </motion.div>
            <span className="text-xs font-semibold text-purple-700 tracking-wide">ForgeUI v1.0 Ecosystem is Here</span>
            <span className="text-[10px] bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-bold px-2.5 py-0.5 rounded-full shadow-md">NEW</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 font-heading leading-[1.05]"
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

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Beautiful UI components, templates, themes, and developer tools — combining{" "}
            <span className="text-purple-600 font-medium">speed</span>,{" "}
            <span className="text-cyan-600 font-medium">elegance</span>, and{" "}
            <span className="text-fuchsia-600 font-medium">AI workflows</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/components"
              className="btn-water flex items-center gap-2.5"
            >
              <Layers className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Browse Components</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/docs/getting-started/introduction"
              className="btn-water-secondary flex items-center gap-2.5"
            >
              <BookIcon className="w-4 h-4 text-purple-500 relative z-10" />
              <span className="relative z-10">Get Started</span>
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-water-outline flex items-center gap-2.5"
            >
              <GithubIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">GitHub</span>
              <span className="relative z-10 flex items-center gap-1 text-xs text-purple-600 font-mono bg-purple-50/60 px-2.5 py-1 rounded-lg border border-purple-200/40">
                <Star className="w-3 h-3 fill-purple-400 text-purple-400" /> 12.4k
              </span>
            </a>
          </motion.div>

          {/* Quick CLI command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/60 border border-gray-200/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 font-mono text-sm text-gray-600 hover:border-purple-300 transition-all group">
              <Terminal className="w-4 h-4 text-purple-500" />
              <span className="text-gray-400">$</span>
              <span className="text-purple-600 font-semibold">{installCommand}</span>
              <button
                onClick={handleCopy}
                className="ml-2 p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                title="Copy Command"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Bento Grid Showcase — 3D Glass */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-6xl mx-auto perspective-1200"
        >
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Main preview — large glass card */}
            <div className="col-span-12 md:col-span-7 rounded-2xl glass-card shadow-3d overflow-hidden group hover:border-purple-300/60 transition-all duration-500 card-3d">
              {/* Window chrome */}
              <div className="p-3.5 border-b border-gray-200/60 bg-white/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-xs font-mono text-gray-400">ForgeUI — Dashboard.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "code"
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Preview body */}
              <div className="p-6 md:p-8 min-h-[320px] flex items-center justify-center bg-gradient-to-br from-gray-50/80 via-white to-gray-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {activeTab === "preview" ? (
                  <div className="w-full max-w-lg space-y-4 relative z-10">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl glass-card space-y-2 hover:border-purple-300/60 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">Revenue</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/60">+24%</span>
                        </div>
                        <div className="text-2xl font-extrabold text-gray-900">$48.2k</div>
                        <div className="flex gap-1">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-gray-100 rounded-sm overflow-hidden" style={{ height: 32 }}>
                              <div
                                className="w-full bg-gradient-to-t from-purple-500 to-purple-300 rounded-sm transition-all"
                                style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl glass-card space-y-2 hover:border-cyan-300/60 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wider">Users</span>
                          <div className="flex -space-x-1.5">
                            <div className="w-5 h-5 rounded-full bg-purple-400 text-[8px] text-white font-bold flex items-center justify-center border-2 border-white">A</div>
                            <div className="w-5 h-5 rounded-full bg-cyan-400 text-[8px] text-white font-bold flex items-center justify-center border-2 border-white">B</div>
                            <div className="w-5 h-5 rounded-full bg-fuchsia-400 text-[8px] text-white font-bold flex items-center justify-center border-2 border-white">+</div>
                          </div>
                        </div>
                        <div className="text-2xl font-extrabold text-gray-900">2,847</div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "78%" }}
                            transition={{ duration: 1.5, delay: 1 }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="btn-water btn-water-sm flex-1 flex items-center justify-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 relative z-10" /><span className="relative z-10">Deploy Now</span>
                      </button>
                      <button className="btn-water-outline btn-water-sm flex-1 flex items-center justify-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 relative z-10" /><span className="relative z-10">View Source</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full text-left font-mono text-xs text-gray-700 overflow-x-auto p-4 bg-white/80 rounded-xl border border-gray-200/80 space-y-1 backdrop-blur-sm">
                    <div className="text-purple-600">import <span className="text-gray-800">&#123; Button, Card, Badge &#125;</span> from <span className="text-emerald-600">&quot;@/components/ui&quot;</span>;</div>
                    <div className="text-purple-600">import <span className="text-gray-800">&#123; motion &#125;</span> from <span className="text-emerald-600">&quot;framer-motion&quot;</span>;</div>
                    <br />
                    <div className="text-purple-600">export default function <span className="text-amber-600">Dashboard</span>() &#123;</div>
                    <div className="pl-4 text-gray-500">&lt;<span className="text-cyan-600">Card</span> className=<span className="text-emerald-600">&quot;p-6 glass glow-purple&quot;</span>&gt;</div>
                    <div className="pl-8 text-gray-500">&lt;<span className="text-cyan-600">Badge</span> variant=<span className="text-emerald-600">&quot;purple&quot;</span>&gt;Revenue&lt;/<span className="text-cyan-600">Badge</span>&gt;</div>
                    <div className="pl-8 text-gray-500">&lt;<span className="text-cyan-600">motion.h2</span> className=<span className="text-emerald-600">&quot;text-3xl font-bold&quot;</span>&gt;</div>
                    <div className="pl-12 text-gray-800">$48,200</div>
                    <div className="pl-8 text-gray-500">&lt;/<span className="text-cyan-600">motion.h2</span>&gt;</div>
                    <div className="pl-4 text-gray-500">&lt;/<span className="text-cyan-600">Card</span>&gt;</div>
                    <div className="text-purple-600">&#125;</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right column — stacked glass cards */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">
              {/* Stat card */}
              <div className="flex-1 p-5 rounded-2xl glass-card shadow-3d-hover overflow-hidden relative group card-3d">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-400/10 rounded-full blur-[40px] group-hover:bg-purple-400/20 transition-colors" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Performance
                    </span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">Optimized</span>
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 tracking-tight">99.8<span className="text-lg text-gray-400 font-normal">%</span></div>
                  <p className="text-xs text-gray-500">Lighthouse score with zero runtime overhead. Tree-shakeable components.</p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200/80 font-mono">React 19</span>
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200/80 font-mono">RSC Ready</span>
                  </div>
                </div>
              </div>

              {/* Tech stack card */}
              <div className="flex-1 p-5 rounded-2xl glass-card shadow-3d-hover overflow-hidden relative group card-3d">
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] group-hover:bg-cyan-400/20 transition-colors" />
                <div className="relative z-10 space-y-3">
                  <span className="text-[11px] font-semibold text-cyan-600 uppercase tracking-wider">Built With</span>
                  <div className="grid grid-cols-3 gap-2">
                    {["Next.js 15", "Tailwind v4", "Framer", "TypeScript", "Radix UI", "MDX"].map((tech) => (
                      <div key={tech} className="px-2.5 py-2 rounded-xl bg-white/60 border border-gray-200/60 text-center hover:border-cyan-300/60 hover:bg-white/80 transition-all cursor-default shadow-sm">
                        <span className="text-[10px] font-semibold text-gray-600">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick action card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50/80 to-cyan-50/80 border border-purple-200/40 backdrop-blur-xl hover:border-purple-300/60 transition-all duration-500 overflow-hidden relative group shadow-lg shadow-purple-500/5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-gray-900">Ready to ship?</div>
                    <div className="text-xs text-gray-500">100+ components available</div>
                  </div>
                  <Link
                    href="/components"
                    className="btn-water btn-water-sm flex items-center gap-1.5"
                  >
                    <span className="relative z-10">Go</span>
                    <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-0.5 transition-transform" />
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
