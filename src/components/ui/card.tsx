import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  title,
  description,
  children,
  footer,
  className,
}: {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl space-y-4", className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && <h3 className="text-base font-bold text-white font-heading">{title}</h3>}
          {description && <p className="text-xs text-gray-400">{description}</p>}
        </div>
      )}
      {children}
      {footer && <div className="pt-4 border-t border-gray-800/80">{footer}</div>}
    </div>
  );
}
