"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Layers, Layout, Palette, BookOpen, Users,
  Heart, Settings, ChevronRight, Sparkles, BarChart3, LogOut
} from "lucide-react";

const ADMIN_NAV = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Components", href: "/admin/components", icon: Layers },
  { name: "Templates", href: "/admin/templates", icon: Layout },
  { name: "Themes", href: "/admin/themes", icon: Palette },
  { name: "Documentation", href: "/admin/docs", icon: BookOpen },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Sponsors", href: "/admin/sponsors", icon: Heart },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-gray-950 border-r border-gray-800 min-h-[calc(100vh-4rem)] sticky top-16 flex flex-col justify-between p-4">
      <div className="space-y-6">
        {/* Admin Header */}
        <div className="px-3 pt-2 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-gray-950 rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-white">ForgeUI</span>
              <span className="block text-[10px] text-gray-500 font-mono">ADMIN PANEL</span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1">
          {ADMIN_NAV.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-950 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight className="w-3 h-3" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-800 space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
            AD
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Admin User</span>
            <span className="text-[10px] text-gray-500">admin@forgeui.dev</span>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 text-xs hover:text-red-400 hover:border-red-800/50 transition-colors cursor-pointer">
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
