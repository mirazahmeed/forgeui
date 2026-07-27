"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabItemData {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function Tabs({
  tabs,
  defaultTab,
  className,
}: {
  tabs: TabItemData[];
  defaultTab?: string;
  className?: string;
}) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex border-b border-gray-800 gap-2 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 text-xs font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap",
                isActive
                  ? "border-purple-500 text-purple-300 font-bold"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="text-xs text-gray-300">{activeContent}</div>
    </div>
  );
}
