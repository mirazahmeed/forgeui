import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({
  children = "Form Field Label",
  required = false,
  htmlFor,
  className,
}: {
  children?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={cn("block text-xs font-bold text-gray-200 select-none", className)}>
      {children}
      {required && <span className="text-rose-500 ml-1">*</span>}
    </label>
  );
}
