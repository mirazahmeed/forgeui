"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, LayoutGrid, Palette, Zap, BookOpen, Wrench, Code2, ArrowRight } from "lucide-react";

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  const items = [
    { name: "Button Component", category: "Components", href: "/components/form/button", icon: Code2 },
    { name: "Input & Forms", category: "Components", href: "/components/form/input", icon: Code2 },
    { name: "Modal & Dialog", category: "Components", href: "/components/feedback/modal", icon: Code2 },
    { name: "SaaS Landing Template", category: "Templates", href: "/templates/saas", icon: LayoutGrid },
    { name: "Dashboard Template", category: "Templates", href: "/templates/dashboard", icon: LayoutGrid },
    { name: "Glassmorphism Theme", category: "Themes", href: "/themes#glass", icon: Palette },
    { name: "Cyberpunk Theme", category: "Themes", href: "/themes#cyberpunk", icon: Palette },
    { name: "Magnetic Button Animation", category: "Animations", href: "/animations#magnetic", icon: Zap },
    { name: "Card Stack Animation", category: "Animations", href: "/animations#card-stack", icon: Zap },
    { name: "Getting Started Guide", category: "Docs", href: "/docs/getting-started/introduction", icon: BookOpen },
    { name: "CLI Quickstart", category: "Docs", href: "/docs/getting-started/cli", icon: BookOpen },
    { name: "AI UI Generator", category: "AI Tools", href: "/ai", icon: Sparkles },
    { name: "Gradient Generator", category: "Tools", href: "/tools/gradient-generator", icon: Wrench },
    { name: "Shadow Generator", category: "Tools", href: "/tools/shadow-generator", icon: Wrench },
  ];

  const filtered = query.trim() === "" 
    ? items 
    : items.filter((item) => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div 
        className="bg-gray-900 border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-800 flex items-center gap-3 bg-gray-950/50">
          <Search className="w-5 h-5 text-purple-400" />
          <input
            type="text"
            placeholder="Type a command, search components, docs, templates..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-gray-100 placeholder-gray-500 focus:outline-none text-sm"
            autoFocus
          />
          <kbd className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-md border border-gray-700">ESC</kbd>
        </div>

        <div className="overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">No matching components or docs found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/40 hover:border-purple-800/40 border border-transparent transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-800/60 group-hover:bg-purple-600/20 text-purple-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-200 group-hover:text-purple-300">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
                </button>
              );
            })
          )}
        </div>

        <div className="p-3 border-t border-gray-800 bg-gray-950/80 text-xs text-gray-500 flex justify-between items-center">
          <span>Navigate with mouse or click item</span>
          <span className="text-purple-400 font-mono">ForgeUI Engine v1.0</span>
        </div>
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
