"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Command, Menu, Layers, Layout, Palette, Zap, BookOpen, Wrench } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { CommandPalette } from "./command-palette";
import { MobileSidebar } from "./mobile-sidebar";
import { GithubIcon } from "./icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [commandOpen, setCommandOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Components", href: "/components", icon: Layers },
    { name: "Templates", href: "/templates", icon: Layout },
    { name: "Themes", href: "/themes", icon: Palette },
    { name: "Animations", href: "/animations", icon: Zap },
    { name: "Docs", href: "/docs", icon: BookOpen },
    { name: "AI Generator", href: "/ai", icon: Sparkles, badge: "New" },
    { name: "Tools", href: "/tools", icon: Wrench },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-800/80 bg-gray-950/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-900/30 group-hover:shadow-purple-600/40 transition-all">
              <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Forge<span className="text-purple-400">UI</span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">PREMIUM ECOSYSTEM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? "text-purple-300 bg-purple-950/50 border border-purple-800/40"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  {link.name}
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white leading-none">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 text-xs hover:border-gray-700 hover:text-gray-200 transition-all shadow-inner cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-purple-400" />
              <span>Quick Search...</span>
              <kbd className="ml-2 px-1.5 py-0.5 text-[10px] bg-gray-800 rounded border border-gray-700 text-gray-400">
                ⌘K
              </kbd>
            </button>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-200 text-xs hover:bg-purple-900/40 transition-all font-medium"
            >
              <GithubIcon className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
              <span className="px-1.5 py-0.5 bg-purple-900/60 rounded text-[10px] text-purple-300 font-mono">
                ★ 12.4k
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenCommand={() => setCommandOpen(true)}
      />

      {/* Quick Search Palette */}
      <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
