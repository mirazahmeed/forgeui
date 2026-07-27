"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Command, Layers, Layout, Palette, Zap, BookOpen, Wrench } from "lucide-react";
import { GithubIcon } from "./icons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommand: () => void;
}

export function MobileSidebar({ isOpen, onClose, onOpenCommand }: MobileSidebarProps) {
  const navLinks = [
    { name: "Components", href: "/components", icon: Layers, count: "100+" },
    { name: "Templates", href: "/templates", icon: Layout, count: "12" },
    { name: "Themes", href: "/themes", icon: Palette, count: "10" },
    { name: "Animations", href: "/animations", icon: Zap, count: "13+" },
    { name: "Docs", href: "/docs", icon: BookOpen },
    { name: "AI Generator", href: "/ai", icon: Sparkles, badge: "NEW" },
    { name: "Tools", href: "/tools", icon: Wrench },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-gray-950 border-l border-gray-800 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
                    <div className="w-full h-full bg-gray-950 rounded-[7px] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">
                    Forge<span className="text-purple-400">UI</span>
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Command palette search bar button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCommand();
                }}
                className="w-full mt-6 flex items-center justify-between p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 text-xs hover:border-purple-600/50 hover:text-gray-200 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-purple-400" />
                  <span>Search components, docs...</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-800 text-gray-400 rounded">⌘K</kbd>
              </button>

              {/* Links */}
              <div className="mt-6 space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/40 hover:text-purple-300 text-gray-300 font-medium text-sm transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </div>
                      {link.badge ? (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
                          {link.badge}
                        </span>
                      ) : link.count ? (
                        <span className="text-xs font-mono text-gray-500">{link.count}</span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer actions inside drawer */}
            <div className="pt-6 border-t border-gray-800 space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-200 font-semibold text-xs hover:bg-purple-900/60 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>Star on GitHub (12.4k)</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
