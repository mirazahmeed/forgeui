"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Layout, Palette, Code2 } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsBar() {
  const stats = [
    { label: "Components", value: 100, suffix: "+", icon: Layers, description: "Accessible & responsive", color: "purple" },
    { label: "Templates", value: 50, suffix: "+", icon: Layout, description: "SaaS, Dashboard, E-commerce", color: "cyan" },
    { label: "Themes", value: 20, suffix: "+", icon: Palette, description: "Dark, Neon, Glass, Cyberpunk", color: "fuchsia" },
    { label: "Open Source", value: 100, suffix: "%", icon: Code2, description: "MIT Licensed & Free", color: "emerald" },
  ];

  const colorMap: Record<string, { icon: string; glow: string; badge: string }> = {
    purple: { icon: "text-purple-400 bg-purple-500/15", glow: "group-hover:shadow-purple-500/10", badge: "bg-purple-950/60 text-purple-300 border-purple-800/40" },
    cyan: { icon: "text-cyan-400 bg-cyan-500/15", glow: "group-hover:shadow-cyan-500/10", badge: "bg-cyan-950/60 text-cyan-300 border-cyan-800/40" },
    fuchsia: { icon: "text-fuchsia-400 bg-fuchsia-500/15", glow: "group-hover:shadow-fuchsia-500/10", badge: "bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-800/40" },
    emerald: { icon: "text-emerald-400 bg-emerald-500/15", glow: "group-hover:shadow-emerald-500/10", badge: "bg-emerald-950/60 text-emerald-300 border-emerald-800/40" },
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-7 rounded-2xl bg-gray-900/40 border border-gray-800/80 text-center hover:border-gray-700/80 transition-all duration-500 hover:-translate-y-1 ${colors.glow} hover:shadow-xl`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl ${colors.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-1.5">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
