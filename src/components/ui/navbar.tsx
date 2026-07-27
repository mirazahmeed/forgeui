"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ChevronDown, ArrowRight, Layers, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; description?: string; href: string }[];
}

export function Navbar({
  brandName = "ForgeUI",
  items = [
    { label: "Components", href: "/components" },
    {
      label: "Ecosystem",
      href: "#",
      children: [
        { label: "Templates", description: "Production ready page layouts", href: "/templates" },
        { label: "Themes", description: "Dynamic color themes & CSS generator", href: "/themes" },
        { label: "Animations", description: "Framer motion primitives library", href: "/animations" },
        { label: "AI Generator", description: "Prompt-to-UI component builder", href: "/ai" },
      ],
    },
    { label: "Docs", href: "/docs" },
    { label: "Tools", href: "/tools" },
  ],
  variant = "glass",
  className,
}: {
  brandName?: string;
  items?: NavItem[];
  variant?: "glass" | "floating" | "solid";
  className?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  return (
    <header
      className={cn(
        "w-full z-40 transition-all duration-300",
        variant === "glass" && "bg-gray-950/80 backdrop-blur-md border-b border-gray-800/80 sticky top-0",
        variant === "floating" && "sticky top-4 max-w-5xl mx-auto rounded-2xl bg-gray-900/90 backdrop-blur-xl border border-gray-800 shadow-2xl px-2",
        variant === "solid" && "bg-gray-950 border-b border-gray-800 sticky top-0",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-950">
            <div className="w-full h-full rounded-[11px] bg-gray-950 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="text-base font-extrabold text-white tracking-tight font-heading">
            {brandName}
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white hover:bg-gray-850/60 transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{item.label}</span>
                  {hasChildren && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
                </Link>

                {/* Mega Dropdown Menu */}
                {hasChildren && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 p-2 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="p-2.5 rounded-xl block hover:bg-gray-800 transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                          <span>{child.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                        </div>
                        {child.description && (
                          <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-xs">
            Sign In
          </Button>
          <Button variant="glow" size="sm" className="text-xs">
            Get Started <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 p-4 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:bg-gray-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-gray-800 space-y-2">
            <Button variant="glow" className="w-full text-xs">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
