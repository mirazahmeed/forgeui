"use client";

import * as React from "react";
import {
  Layers, Layout, Users, Download, Eye, TrendingUp,
  ArrowUpRight, ArrowDownRight, BarChart3, Activity,
  Globe, Clock, Sparkles
} from "lucide-react";

const STATS = [
  { label: "Total Components", value: "108", change: "+12", trend: "up", icon: Layers },
  { label: "Templates", value: "12", change: "+3", trend: "up", icon: Layout },
  { label: "Active Users", value: "24.8K", change: "+18.4%", trend: "up", icon: Users },
  { label: "CLI Installs", value: "142K", change: "+31.2%", trend: "up", icon: Download },
  { label: "Page Views", value: "1.2M", change: "+8.7%", trend: "up", icon: Eye },
  { label: "GitHub Stars", value: "12.4K", change: "+924", trend: "up", icon: TrendingUp },
];

const RECENT_ACTIVITY = [
  { action: "New component published", item: "DatePicker", time: "2 min ago", type: "component" },
  { action: "Template updated", item: "SaaS Landing v2", time: "18 min ago", type: "template" },
  { action: "Theme submitted", item: "Ocean Breeze", time: "1 hour ago", type: "theme" },
  { action: "Documentation edited", item: "Installation Guide", time: "2 hours ago", type: "doc" },
  { action: "Sponsor onboarded", item: "Vercel", time: "5 hours ago", type: "sponsor" },
  { action: "Bug report resolved", item: "Modal focus trap", time: "8 hours ago", type: "bug" },
  { action: "CLI version released", item: "v1.0.4", time: "1 day ago", type: "release" },
];

const POPULAR_COMPONENTS = [
  { name: "Button", installs: "42.1K", growth: "+12%" },
  { name: "Modal", installs: "28.7K", growth: "+18%" },
  { name: "Input", installs: "26.3K", growth: "+9%" },
  { name: "Pricing Cards", installs: "19.8K", growth: "+24%" },
  { name: "Avatar", installs: "15.2K", growth: "+7%" },
  { name: "Badge", installs: "14.6K", growth: "+11%" },
];

const TRAFFIC_SOURCES = [
  { source: "Organic Search", pct: 42, color: "bg-purple-500" },
  { source: "GitHub", pct: 28, color: "bg-cyan-500" },
  { source: "Direct", pct: 15, color: "bg-fuchsia-500" },
  { source: "Social Media", pct: 10, color: "bg-amber-500" },
  { source: "Referrals", pct: 5, color: "bg-green-500" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-extrabold text-white font-heading">Dashboard</h1>
        <p className="text-xs text-gray-400">Welcome back, Admin. Here&apos;s your ForgeUI ecosystem overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/30 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                <span className={`text-xs font-semibold flex items-center gap-0.5 ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {stat.trend === "up" ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lower Grid: Activity + Popular + Traffic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" /> Recent Activity
            </h3>
            <span className="text-[10px] font-mono text-gray-500">Last 24 hours</span>
          </div>
          <div className="divide-y divide-gray-800/80">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    item.type === "component" ? "bg-purple-500" :
                    item.type === "template" ? "bg-cyan-500" :
                    item.type === "theme" ? "bg-fuchsia-500" :
                    item.type === "release" ? "bg-green-500" :
                    item.type === "bug" ? "bg-red-500" :
                    "bg-gray-500"
                  }`} />
                  <div>
                    <span className="text-xs font-medium text-gray-200">{item.action}</span>
                    <span className="text-xs text-purple-400 ml-1.5 font-semibold">{item.item}</span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Popular Components */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Top Components
            </h3>
            <div className="space-y-3">
              {POPULAR_COMPONENTS.map((comp, i) => (
                <div key={comp.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono text-gray-500 w-4">{i + 1}.</span>
                    <span className="text-xs font-semibold text-gray-200">{comp.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">{comp.installs}</span>
                    <span className="text-[10px] text-green-400 font-semibold">{comp.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" /> Traffic Sources
            </h3>
            <div className="space-y-3">
              {TRAFFIC_SOURCES.map((src) => (
                <div key={src.source} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300">{src.source}</span>
                    <span className="font-mono text-gray-400">{src.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${src.color}`} style={{ width: `${src.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
