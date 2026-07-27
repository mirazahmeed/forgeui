import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

export function Breadcrumb({ items, className }: { items: BreadcrumbItemData[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-xs text-gray-400 font-medium", className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-purple-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast && "text-white font-bold")}>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
