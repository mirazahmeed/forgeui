"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, RefreshCw, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASING_PRESETS = [
  { name: "ease", value: "ease" },
  { name: "ease-in", value: "ease-in" },
  { name: "ease-out", value: "ease-out" },
  { name: "ease-in-out", value: "ease-in-out" },
  { name: "linear", value: "linear" },
  { name: "spring", value: "spring" },
];

export default function AnimationPlaygroundPage() {
  const [duration, setDuration] = React.useState(0.6);
  const [delay, setDelay] = React.useState(0);
  const [easing, setEasing] = React.useState("ease-out");
  const [animType, setAnimType] = React.useState<"fadeUp" | "scale" | "rotate" | "slide">("fadeUp");
  const [key, setKey] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const getAnimProps = () => {
    switch (animType) {
      case "fadeUp":
        return { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
      case "scale":
        return { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 } };
      case "rotate":
        return { initial: { rotate: -180, opacity: 0 }, animate: { rotate: 0, opacity: 1 } };
      case "slide":
        return { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
    }
  };

  const codeOutput = `<motion.div
  initial={${JSON.stringify(getAnimProps().initial)}}
  animate={${JSON.stringify(getAnimProps().animate)}}
  transition={{ duration: ${duration}, delay: ${delay}, ease: "${easing}" }}
>
  Animated Content
</motion.div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Animation Playground
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Animation <span className="text-gradient">Playground</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="flex flex-col items-center justify-center min-h-[360px] bg-gray-900/40 rounded-2xl border border-gray-800 p-8 relative">
            <button
              onClick={() => setKey((k) => k + 1)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white flex items-center gap-1 text-xs cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" /> Replay
            </button>

            <motion.div
              key={key}
              {...getAnimProps()}
              transition={{
                duration,
                delay,
                ease: easing === "spring" ? undefined : easing as "easeIn" | "easeOut" | "easeInOut" | "linear",
                type: easing === "spring" ? "spring" : "tween",
              }}
              className="px-10 py-8 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm shadow-2xl text-center"
            >
              Animated Element
            </motion.div>
          </div>

          {/* Controls */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-5">
            {/* Animation Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Animation</label>
              <div className="flex flex-wrap gap-2">
                {(["fadeUp", "scale", "rotate", "slide"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setAnimType(t); setKey((k) => k + 1); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize cursor-pointer ${
                      animType === t ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-300 uppercase tracking-wider">Duration</span>
                <span className="font-mono text-purple-400">{duration}s</span>
              </div>
              <input type="range" min={0.1} max={3} step={0.1} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full accent-purple-500" />
            </div>

            {/* Delay */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-300 uppercase tracking-wider">Delay</span>
                <span className="font-mono text-purple-400">{delay}s</span>
              </div>
              <input type="range" min={0} max={2} step={0.1} value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="w-full accent-purple-500" />
            </div>

            {/* Easing */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Easing</label>
              <div className="flex flex-wrap gap-2">
                {EASING_PRESETS.map((e) => (
                  <button
                    key={e.value}
                    onClick={() => { setEasing(e.value); setKey((k) => k + 1); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                      easing === e.value ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {e.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Output */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Framer Motion Code</label>
              <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-purple-300 overflow-x-auto">
                {codeOutput}
              </pre>
            </div>

            <button onClick={handleCopy} className="w-full px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer">
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
