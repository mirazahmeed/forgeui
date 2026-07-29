"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Layers, Navigation, MessageSquare, FileText, Layout, Smartphone, Database, ShoppingBag, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPONENT_REGISTRY } from "@/lib/registry";

/* ──────────────────────────────────────────────────────────────
 * Taxonomy ordering — defines the visual group name, icon,
 * and which *registry* category IDs map into it.
 * Every sidebar link href is built from the component's
 * actual registry category so the URL always resolves.
 * ────────────────────────────────────────────────────────────── */
const TAXONOMY_GROUPS: {
  title: string;
  icon: React.ElementType;
  registryCategories: string[];
  overrides?: Record<string, { label?: string; badge?: "new" | "updated" }>;
}[] = [
  {
    title: "Actions",
    icon: Zap,
    registryCategories: ["actions"],
    overrides: {
      button: { label: "Button" },
      dropdown: { label: "Dropdown" },
      fab: { label: "FAB / Speed Dial" },
      modal: { label: "Modal", badge: "updated" },
      swap: { label: "Swap" },
      "theme-controller": { label: "Theme Controller" },
    },
  },
  {
    title: "Data display",
    icon: Layers,
    registryCategories: ["display"],
    overrides: {
      accordion: { label: "Accordion" },
      avatar: { label: "Avatar" },
      aura: { label: "Aura", badge: "new" },
      badge: { label: "Badge" },
      card: { label: "Card" },
      carousel: { label: "Carousel" },
      "chat-bubble": { label: "Chat bubble" },
      collapse: { label: "Collapse" },
      countdown: { label: "Countdown" },
      diff: { label: "Diff" },
      "hover-3d-card": { label: "Hover 3D card" },
      "hover-gallery": { label: "Hover Gallery" },
      kbd: { label: "Kbd" },
      list: { label: "List" },
      "stat-card": { label: "Stat" },
      status: { label: "Status" },
      table: { label: "Table" },
      "text-rotate": { label: "Text Rotate" },
      timeline: { label: "Timeline" },
    },
  },
  {
    title: "Navigation",
    icon: Navigation,
    registryCategories: ["navigation"],
    overrides: {
      breadcrumb: { label: "Breadcrumbs" },
      dock: { label: "Dock" },
      link: { label: "Link" },
      megamenu: { label: "Megamenu", badge: "new" },
      menu: { label: "Menu" },
      navbar: { label: "Navbar" },
      pagination: { label: "Pagination" },
      stepper: { label: "Steps" },
      tabs: { label: "Tab" },
    },
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    registryCategories: ["feedback"],
    overrides: {
      alert: { label: "Alert" },
      loading: { label: "Loading" },
      progress: { label: "Progress" },
      "radial-progress": { label: "Radial progress" },
      skeleton: { label: "Skeleton" },
      toast: { label: "Toast" },
      tooltip: { label: "Tooltip", badge: "updated" },
      modal: { label: "Modal" },
      drawer: { label: "Drawer" },
    },
  },
  {
    title: "Data input",
    icon: FileText,
    registryCategories: ["form"],
    overrides: {
      button: { label: "Button" },
      input: { label: "Input field" },
      checkbox: { label: "Checkbox" },
      radio: { label: "Radio" },
      select: { label: "Select" },
      textarea: { label: "Textarea" },
      switch: { label: "Toggle" },
      slider: { label: "Range", badge: "updated" },
      calendar: { label: "Calendar", badge: "updated" },
      fieldset: { label: "Fieldset" },
      "file-input": { label: "File Input" },
      filter: { label: "Filter" },
      label: { label: "Label" },
      rating: { label: "Rating", badge: "updated" },
      validator: { label: "Validator" },
      otp: { label: "OTP", badge: "new" },
    },
  },
  {
    title: "Data & Charts",
    icon: Database,
    registryCategories: ["data"],
    overrides: {
      table: { label: "Table" },
      "stat-card": { label: "Stat Card" },
      calendar: { label: "Calendar" },
    },
  },
  {
    title: "Layout",
    icon: Layout,
    registryCategories: ["layout"],
    overrides: {
      divider: { label: "Divider" },
      footer: { label: "Footer" },
      indicator: { label: "Indicator" },
      join: { label: "Join (group items)" },
      mask: { label: "Mask" },
      stack: { label: "Stack" },
    },
  },
  {
    title: "Commerce & Pricing",
    icon: ShoppingBag,
    registryCategories: ["commerce"],
    overrides: {
      pricing: { label: "Pricing Card" },
      "product-card": { label: "Product Card" },
      "feature-grid": { label: "Feature Grid" },
    },
  },
  {
    title: "Page Sections",
    icon: Layout,
    registryCategories: ["pages"],
    overrides: {
      "hero-block": { label: "Hero Block" },
      "auth-card": { label: "Auth Card" },
    },
  },
  {
    title: "Mockup",
    icon: Smartphone,
    registryCategories: ["mockup"],
    overrides: {
      "mockup-browser": { label: "Browser" },
      "mockup-code": { label: "Code" },
      "mockup-phone": { label: "Phone" },
      "mockup-window": { label: "Window" },
    },
  },
  {
    title: "Admin Tools",
    icon: Shield,
    registryCategories: ["admin"],
    overrides: {
      "activity-log": { label: "Activity Log" },
    },
  },
];

export function ComponentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-56 shrink-0 space-y-6 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto pr-3 py-2 select-none font-sans">
      <div className="px-3 text-xs font-bold text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-200 dark:border-gray-800/80">
        Components
      </div>

      {TAXONOMY_GROUPS.map((group) => {
        // Pull components from registry that belong to this group's categories
        const items = COMPONENT_REGISTRY.filter((c) =>
          group.registryCategories.includes(c.category)
        ).sort((a, b) => a.name.localeCompare(b.name));

        if (items.length === 0) return null;

        const CategoryIcon = group.icon;
        return (
          <div key={group.title} className="space-y-1.5">
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <CategoryIcon className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
              <span>{group.title}</span>
            </div>

            <div className="space-y-0.5 pl-2">
              {items.map((item) => {
                const override = group.overrides?.[item.slug];
                const label = override?.label || item.name;
                const badge = override?.badge;
                // Use the component's actual registry category for the URL
                const href = `/components/${item.category}/${item.slug}`;
                const isActive = pathname === href || pathname.endsWith(`/${item.slug}`);

                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={cn(
                      "flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer",
                      isActive
                        ? "bg-purple-600 text-white font-bold shadow-md dark:bg-purple-950/80 dark:text-purple-300 dark:ring-1 dark:ring-purple-800/50"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900/60"
                    )}
                  >
                    <span>{label}</span>
                    {badge && (
                      <span className={cn(
                        "text-[9px] font-mono px-1.5 py-0.5 rounded font-normal",
                        isActive
                          ? "bg-purple-700 dark:bg-purple-900 text-purple-100"
                          : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      )}>
                        {badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
