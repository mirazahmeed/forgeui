"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ANIMATIONS, AnimationItem } from "@/lib/animations";
import { Zap, Sparkles, Copy, Check, Play, RefreshCw } from "lucide-react";

export default function AnimationsPage() {
  const [activeAnim, setActiveAnim] = React.useState<AnimationItem>(ANIMATIONS[0]);
  const [copied, setCopied] = React.useState(false);
  const [key, setKey] = React.useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeAnim.framerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center border-b border-gray-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>13+ Motion Primitives Powered by Framer Motion</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            Animation <span className="text-gradient">Playground</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Smooth, performance-optimized Framer Motion primitives ready to copy into your Next.js project.
          </p>
        </div>

        {/* Animation Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ANIMATIONS.map((anim) => {
            const isSelected = activeAnim.slug === anim.slug;
            return (
              <button
                key={anim.slug}
                onClick={() => {
                  setActiveAnim(anim);
                  setKey((prev) => prev + 1);
                }}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer space-y-3 flex flex-col justify-between ${
                  isSelected
                    ? "bg-purple-950/40 border-purple-500 shadow-xl glow-purple"
                    : "bg-gray-900/60 border-gray-800 hover:border-gray-700"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300">
                      {anim.category}
                    </span>
                    <Play className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{anim.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{anim.description}</p>
                </div>

                <div className="text-[10px] font-mono text-purple-400 font-semibold pt-2 border-t border-gray-800">
                  {isSelected ? "Active Motion Demo ✓" : "Click to Test Demo →"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Animation Tester Box */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Interactive Visual Canvas */}
          <div className="p-10 min-h-[360px] flex flex-col items-center justify-center bg-gray-950/80 border-b lg:border-b-0 lg:border-r border-gray-800 relative">
            <button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs"
              title="Replay Animation"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Replay
            </button>

            <div key={key} className="w-full max-w-sm flex items-center justify-center">
              {activeAnim.slug === "fade-up" && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-base shadow-2xl glow-purple text-center"
                >
                  <Sparkles className="w-6 h-6 mx-auto mb-2" />
                  Fade Up Animation Render
                </motion.div>
              )}

              {activeAnim.slug === "scale-bounce" && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="p-8 rounded-2xl bg-purple-600 text-white font-bold text-base shadow-2xl text-center"
                >
                  Spring Physics Scale Bounce
                </motion.div>
              )}

              {activeAnim.slug === "magnetic-button" && (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-bold text-sm shadow-xl cursor-pointer"
                >
                  Hover Magnetic Interactive Button
                </motion.button>
              )}

              {activeAnim.slug === "glow-pulse" && (
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="p-8 rounded-2xl bg-purple-950 border border-purple-500 text-purple-200 font-bold text-base shadow-2xl glow-purple text-center"
                >
                  Continuous Glowing Pulse Aura
                </motion.div>
              )}

              {activeAnim.slug === "text-stagger" && (
                <div className="text-2xl font-extrabold text-white tracking-widest font-heading">
                  {"ForgeUI Motion".split("").map((letter, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="inline-block text-purple-400"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              )}

              {activeAnim.slug === "flip-card" && (
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-56 h-36 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-6 text-white font-bold flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  Hover to Flip Card 3D
                </motion.div>
              )}
            </div>
          </div>

          {/* Framer Code Box */}
          <div className="p-8 space-y-4 flex flex-col justify-between bg-gray-950">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white font-mono">Framer Motion Code</h4>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Motion Code"}</span>
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Copy and drop directly into any React / Next.js component wrapped with Framer Motion.
              </p>
            </div>

            <pre className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-purple-300 overflow-x-auto">
              <code>{activeAnim.framerCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
