"use client";

import * as React from "react";
import { BarChart3, TrendingUp, Users, Globe, Clock, ArrowUpRight, Eye, Download, Layers } from "lucide-react";

const WEEKLY_DATA = [
  { day: "Mon", views: 4200, installs: 340 },
  { day: "Tue", views: 5100, installs: 420 },
  { day: "Wed", views: 4800, installs: 390 },
  { day: "Thu", views: 6300, installs: 510 },
  { day: "Fri", views: 7100, installs: 620 },
  { day: "Sat", views: 3800, installs: 280 },
  { day: "Sun", views: 3200, installs: 240 },
];

const TOP_PAGES = [
  { page: "/components", views: "142K", bounce: "18%" },
  { page: "/", views: "98K", bounce: "22%" },
  { page: "/docs/getting-started/installation", views: "67K", bounce: "12%" },
  { page: "/templates", views: "54K", bounce: "26%" },
  { page: "/themes", views: "41K", bounce: "19%" },
  { page: "/animations", views: "38K", bounce: "15%" },
  { page: "/tools/gradient-generator", views: "29K", bounce: "31%" },
  { page: "/ai", views: "24K", bounce: "24%" },
];

const COUNTRIES = [
  { name: "United States", pct: 34, flag: "🇺🇸" },
  { name: "India", pct: 18, flag: "🇮🇳" },
  { name: "Germany", pct: 9, flag: "🇩🇪" },
  { name: "United Kingdom", pct: 7, flag: "🇬🇧" },
  { name: "Brazil", pct: 6, flag: "🇧🇷" },
  { name: "Canada", pct: 5, flag: "🇨🇦" },
  { name: "Others", pct: 21, flag: "🌍" },
];

export default function AdminAnalyticsPage() {
  const maxViews = Math.max(...WEEKLY_DATA.map((d) => d.views));

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-2xl font-extrabold text-white font-heading">Analytics</h1>
        <p className="text-xs text-gray-400 mt-1">Traffic, engagement, and ecosystem performance metrics</p>
      </div>

      {/* Quick Stat Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "This Week", value: "34.5K", sub: "page views", icon: Eye, color: "text-purple-400" },
          { label: "CLI Installs", value: "2.8K", sub: "this week", icon: Download, color: "text-cyan-400" },
          { label: "New Users", value: "1.2K", sub: "this week", icon: Users, color: "text-fuchsia-400" },
          { label: "Avg. Session", value: "3m 42s", sub: "duration", icon: Clock, color: "text-amber-400" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-4 rounded-2xl bg-gray-900 border border-gray-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="text-xl font-extrabold text-white">{stat.value}</div>
              <span className="text-[10px] text-gray-500">{stat.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-400" /> Weekly Page Views
            </h3>
            <span className="text-[10px] font-mono text-gray-500">Last 7 days</span>
          </div>

          <div className="flex items-end gap-3 h-44">
            {WEEKLY_DATA.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] font-mono text-gray-500">{(d.views / 1000).toFixed(1)}K</span>
                <div className="w-full rounded-t-lg bg-purple-600/80 transition-all hover:bg-purple-500" style={{ height: `${(d.views / maxViews) * 100}%` }} />
                <span className="text-[10px] font-mono text-gray-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-400" /> Top Countries
          </h3>
          <div className="space-y-3">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span>{c.flag}</span> {c.name}
                  </span>
                  <span className="font-mono text-gray-400">{c.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400" /> Top Pages
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono uppercase tracking-wider">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Page URL</th>
                <th className="py-2.5 px-3 text-right">Views</th>
                <th className="py-2.5 px-3 text-right">Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {TOP_PAGES.map((p, i) => (
                <tr key={p.page} className="hover:bg-gray-850/50">
                  <td className="py-2.5 px-3 text-gray-500 font-mono">{i + 1}</td>
                  <td className="py-2.5 px-3 font-semibold text-purple-300 font-mono">{p.page}</td>
                  <td className="py-2.5 px-3 text-right text-gray-300 font-mono">{p.views}</td>
                  <td className="py-2.5 px-3 text-right text-gray-400 font-mono">{p.bounce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
