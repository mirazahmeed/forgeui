"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { GithubIcon, TwitterIcon, DiscordIcon } from "./icons";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800/80 bg-slate-100 dark:bg-gray-950 text-gray-600 dark:text-gray-400 text-sm mt-auto relative overflow-hidden transition-colors">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Forge<span className="text-purple-600 dark:text-purple-400">UI</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm leading-relaxed">
              Craft Beautiful Interfaces. Premium, open-source UI ecosystem empowering developers to build stunning websites faster.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 uppercase tracking-wider block mb-2">
                Join our developer newsletter
              </span>
              {subscribed ? (
                <div className="p-3 bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800/50 rounded-xl text-purple-800 dark:text-purple-300 text-xs">
                  🎉 You are subscribed! Check your inbox for updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    placeholder="developer@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl transition-all flex items-center gap-1 shadow-lg shadow-purple-900/30"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-4">Components</h4>
            <ul className="space-y-2.5">
              <li><Link href="/components/form/button" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Buttons</Link></li>
              <li><Link href="/components/feedback/modal" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Modals & Drawers</Link></li>
              <li><Link href="/components/display/carousel" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Carousels</Link></li>
              <li><Link href="/components/commerce/pricing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing Cards</Link></li>
              <li><Link href="/components/data/table" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Data Tables</Link></li>
              <li><Link href="/components" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">Explore 100+ Components →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-4">Ecosystem</h4>
            <ul className="space-y-2.5">
              <li><Link href="/templates" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">12+ Templates</Link></li>
              <li><Link href="/themes" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">10 Preset Themes</Link></li>
              <li><Link href="/animations" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Motion Primitives</Link></li>
              <li><Link href="/ai" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1">
                AI Generator <span className="text-[9px] bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 px-1.5 py-0.5 rounded font-mono">NEW</span>
              </Link></li>
              <li><Link href="/tools" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Developer Tools</Link></li>
              <li><Link href="/admin" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-4">Documentation</h4>
            <ul className="space-y-2.5">
              <li><Link href="/docs/getting-started/introduction" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Introduction</Link></li>
              <li><Link href="/docs/getting-started/installation" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Installation</Link></li>
              <li><Link href="/docs/getting-started/cli" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">CLI Commands</Link></li>
              <li><Link href="/docs/customization/theming" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Theme Engine</Link></li>
              <li><Link href="/docs/faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">FAQ & Troubleshooting</Link></li>
              <li><Link href="/docs/changelog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Changelog v1.0</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ForgeUI Ecosystem. Released under MIT License.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for developers.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <DiscordIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
