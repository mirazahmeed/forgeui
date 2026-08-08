"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Zap,
  Layers,
  Navigation,
  MessageSquare,
  FileText,
  Layout,
  Smartphone,
  Database,
  ShoppingBag,
  Shield,
  Search,
  ChevronLeft,
  Command,
} from "lucide-react";
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Keyboard shortcut ⌘K to focus search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Flatten all items for search filtering
  const allItems = React.useMemo(() => {
    return TAXONOMY_GROUPS.flatMap((group) => {
      const items = COMPONENT_REGISTRY.filter((c) =>
        group.registryCategories.includes(c.category)
      ).sort((a, b) => a.name.localeCompare(b.name));

      return items.map((item) => {
        const override = group.overrides?.[item.slug];
        return {
          slug: item.slug,
          category: item.category,
          label: override?.label || item.name,
          badge: override?.badge,
          groupTitle: group.title,
          groupIcon: group.icon,
          href: `/components/${item.category}/${item.slug}`,
        };
      });
    });
  }, []);

  // Filter items by search query
  const filteredGroups = React.useMemo(() => {
    if (!searchQuery.trim()) return null; // null = show normal grouped view

    const q = searchQuery.toLowerCase();
    return allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.groupTitle.toLowerCase().includes(q)
    );
  }, [searchQuery, allItems]);

  return (
    <aside className="sidebar-daisy hidden lg:block w-60 shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto select-none font-sans">
      {/* ── Search Bar ── */}
      <div className="sidebar-search-bar">
        <div className="sidebar-search-wrapper">
          <Search className="sidebar-search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sidebar-search-input"
          />
          <div className="sidebar-search-kbd">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </div>
        </div>
      </div>

      {/* ── Back link ── */}
      <Link href="/components" className="sidebar-back-link">
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </Link>

      {/* ── Divider ── */}
      <div className="sidebar-divider" />

      {/* ── Search Results ── */}
      {filteredGroups !== null ? (
        <div className="sidebar-search-results">
          {filteredGroups.length === 0 ? (
            <p className="sidebar-no-results">
              No components matching &quot;{searchQuery}&quot;
            </p>
          ) : (
            filteredGroups.map((item) => {
              const isActive =
                pathname === item.href || pathname.endsWith(`/${item.slug}`);
              return (
                <Link
                  key={`${item.groupTitle}-${item.slug}`}
                  href={item.href}
                  className={cn(
                    "sidebar-item",
                    isActive && "sidebar-item-active"
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        "sidebar-badge",
                        item.badge === "new" && "sidebar-badge-new",
                        item.badge === "updated" && "sidebar-badge-updated"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })
          )}
        </div>
      ) : (
        /* ── Grouped Component List ── */
        <div className="sidebar-groups">
          {TAXONOMY_GROUPS.map((group) => {
            const items = COMPONENT_REGISTRY.filter((c) =>
              group.registryCategories.includes(c.category)
            ).sort((a, b) => a.name.localeCompare(b.name));

            if (items.length === 0) return null;

            const CategoryIcon = group.icon;
            return (
              <div key={group.title} className="sidebar-group">
                {/* Category Header */}
                <div className="sidebar-group-header">
                  <CategoryIcon className="sidebar-group-icon" />
                  <span>{group.title}</span>
                </div>

                {/* Component Items */}
                <div className="sidebar-group-items">
                  {items.map((item) => {
                    const override = group.overrides?.[item.slug];
                    const label = override?.label || item.name;
                    const badge = override?.badge;
                    const href = `/components/${item.category}/${item.slug}`;
                    const isActive =
                      pathname === href || pathname.endsWith(`/${item.slug}`);

                    return (
                      <Link
                        key={item.slug}
                        href={href}
                        className={cn(
                          "sidebar-item",
                          isActive && "sidebar-item-active"
                        )}
                      >
                        <span>{label}</span>
                        {badge && (
                          <span
                            className={cn(
                              "sidebar-badge",
                              badge === "new" && "sidebar-badge-new",
                              badge === "updated" && "sidebar-badge-updated"
                            )}
                          >
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
        </div>
      )}
    </aside>
  );
}
