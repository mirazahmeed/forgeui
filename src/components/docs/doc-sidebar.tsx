"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_SECTIONS } from "@/lib/docs";
import { ChevronRight, BookOpen } from "lucide-react";

export function DocSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-thin pr-2">
      <div className="flex items-center gap-2 px-3 pb-4 border-b border-gray-800">
        <BookOpen className="w-4 h-4 text-purple-400" />
        <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Documentation</span>
      </div>

      {DOC_SECTIONS.map((section) => (
        <div key={section.slug} className="space-y-1">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3 pb-1">
            {section.title}
          </h4>
          {section.items.map((item) => {
            const href = `/docs/${section.slug}/${item.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.slug}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-950 font-bold"
                    : "text-gray-300 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? "text-white" : "text-gray-600"}`} />
                {item.title}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
