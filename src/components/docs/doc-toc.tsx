"use client";

import * as React from "react";
import { ListTree } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function DocToc({ content }: { content: string }) {
  const [activeId, setActiveId] = React.useState<string>("");

  // Extract headings from content
  const headings: TocItem[] = React.useMemo(() => {
    const matches = content.match(/^#{2,3}\s.+$/gm);
    if (!matches) return [];
    return matches.map((match) => {
      const level = match.startsWith("### ") ? 3 : 2;
      const text = match.replace(/^#{2,3}\s/, "").replace(/`/g, "");
      const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
      return { id, text, level };
    });
  }, [content]);

  // Simple scroll spy
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
      <div className="flex items-center gap-2 mb-3">
        <ListTree className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">On This Page</span>
      </div>
      <nav className="space-y-0.5">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block text-xs py-1 transition-all border-l-2 ${
              h.level === 3 ? "pl-5" : "pl-3"
            } ${
              activeId === h.id
                ? "text-purple-300 border-purple-500 font-semibold"
                : "text-gray-500 border-transparent hover:text-gray-200 hover:border-gray-700"
            }`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
