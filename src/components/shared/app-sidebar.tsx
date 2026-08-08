"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Layers,
  Layout,
  Palette,
  Zap,
  BookOpen,
  Sparkles,
  Wrench,
  Navigation,
  MessageSquare,
  FileText,
  Database,
  ShoppingBag,
  Smartphone,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPONENT_REGISTRY } from "@/lib/registry";
import { DOC_SECTIONS } from "@/lib/docs";

/* ──────────────────────────────────────────────────────────────
 * Component taxonomy — groups for the Components drill-down
 * ────────────────────────────────────────────────────────────── */
const COMPONENT_GROUPS: {
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

/* ──────────────────────────────────────────────────────────────
 * Top-level sidebar navigation items
 * ────────────────────────────────────────────────────────────── */
type SidebarView = "main" | "docs" | "components";

const TOP_NAV = [
  { name: "Docs", href: "/docs", icon: BookOpen, drilldown: "docs" as const },
  { name: "Components", href: "/components", icon: Layers, drilldown: "components" as const },
  { name: "Templates", href: "/templates", icon: Layout },
  { name: "Themes", href: "/themes", icon: Palette },
  { name: "Animations", href: "/animations", icon: Zap },
  { name: "AI Generator", href: "/ai", icon: Sparkles, badge: "New" },
  { name: "Tools", href: "/tools", icon: Wrench },
];

/* ──────────────────────────────────────────────────────────────
 * AppSidebar — global site sidebar à la DaisyUI
 * ────────────────────────────────────────────────────────────── */
export function AppSidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Auto-detect which drill-down view to show based on current URL
  const autoView: SidebarView = React.useMemo(() => {
    if (pathname.startsWith("/docs")) return "docs";
    if (pathname.startsWith("/components/")) return "components";
    return "main";
  }, [pathname]);

  const [activeView, setActiveView] = React.useState<SidebarView>(autoView);

  // Sync view when URL changes
  React.useEffect(() => {
    setActiveView(autoView);
  }, [autoView]);

  // ⌘K to focus search
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

  // Search filter across everything
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { label: string; href: string; badge?: string }[] = [];

    // Search top nav
    TOP_NAV.forEach((item) => {
      if (item.name.toLowerCase().includes(q)) {
        results.push({ label: item.name, href: item.href });
      }
    });

    // Search components
    COMPONENT_REGISTRY.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.slug.includes(q)) {
        results.push({
          label: c.name,
          href: `/components/${c.category}/${c.slug}`,
        });
      }
    });

    // Search docs
    DOC_SECTIONS.forEach((section) => {
      section.items.forEach((page) => {
        if (page.title.toLowerCase().includes(q) || page.slug.includes(q)) {
          results.push({
            label: page.title,
            href: `/docs/${section.slug}/${page.slug}`,
          });
        }
      });
    });

    return results.slice(0, 20);
  }, [searchQuery]);

  return (
    <aside className="app-sidebar">
      {/* ── Search ── */}
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

      {/* ── Search Results overlay ── */}
      {searchResults !== null ? (
        <div className="sidebar-search-results">
          {searchResults.length === 0 ? (
            <p className="sidebar-no-results">No results for &quot;{searchQuery}&quot;</p>
          ) : (
            searchResults.map((r, i) => (
              <Link
                key={`${r.href}-${i}`}
                href={r.href}
                onClick={() => setSearchQuery("")}
                className={cn("sidebar-item", pathname === r.href && "sidebar-item-active")}
              >
                <span>{r.label}</span>
              </Link>
            ))
          )}
        </div>
      ) : activeView === "main" ? (
        /* ═══════ MAIN MENU ═══════ */
        <div className="sidebar-main-nav">
          {TOP_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const hasDrilldown = !!item.drilldown;

            return (
              <div key={item.name} className="sidebar-nav-item-wrapper">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (hasDrilldown) {
                      e.preventDefault();
                      setActiveView(item.drilldown!);
                    }
                  }}
                  className={cn(
                    "sidebar-nav-item",
                    isActive && "sidebar-nav-item-active"
                  )}
                >
                  <div className="sidebar-nav-item-left">
                    <Icon className="sidebar-nav-icon" />
                    <span>{item.name}</span>
                  </div>
                  <div className="sidebar-nav-item-right">
                    {item.badge && <span className="sidebar-nav-badge">{item.badge}</span>}
                    {hasDrilldown && <ChevronRight className="sidebar-nav-chevron" />}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : activeView === "docs" ? (
        /* ═══════ DOCS DRILL-DOWN ═══════ */
        <div className="sidebar-drilldown">
          <button onClick={() => setActiveView("main")} className="sidebar-back-link">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="sidebar-divider" />

          <div className="sidebar-groups">
            {DOC_SECTIONS.map((section) => (
              <div key={section.slug} className="sidebar-group">
                <div className="sidebar-group-header">
                  <span>{section.title}</span>
                </div>
                <div className="sidebar-group-items">
                  {section.items.map((page) => {
                    const href = `/docs/${section.slug}/${page.slug}`;
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={page.slug}
                        href={href}
                        className={cn("sidebar-item", isActive && "sidebar-item-active")}
                      >
                        <span>{page.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ═══════ COMPONENTS DRILL-DOWN ═══════ */
        <div className="sidebar-drilldown">
          <button onClick={() => setActiveView("main")} className="sidebar-back-link">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="sidebar-divider" />

          <div className="sidebar-groups">
            {COMPONENT_GROUPS.map((group) => {
              const items = COMPONENT_REGISTRY.filter((c) =>
                group.registryCategories.includes(c.category)
              ).sort((a, b) => a.name.localeCompare(b.name));

              if (items.length === 0) return null;

              const CategoryIcon = group.icon;
              return (
                <div key={group.title} className="sidebar-group">
                  <div className="sidebar-group-header">
                    <CategoryIcon className="sidebar-group-icon" />
                    <span>{group.title}</span>
                  </div>
                  <div className="sidebar-group-items">
                    {items.map((item) => {
                      const override = group.overrides?.[item.slug];
                      const label = override?.label || item.name;
                      const badge = override?.badge;
                      const href = `/components/${item.category}/${item.slug}`;
                      const isActive = pathname === href || pathname.endsWith(`/${item.slug}`);

                      return (
                        <Link
                          key={item.slug}
                          href={href}
                          className={cn("sidebar-item", isActive && "sidebar-item-active")}
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
        </div>
      )}
    </aside>
  );
}
