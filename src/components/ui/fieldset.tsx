import * as React from "react";
import { cn } from "@/lib/utils";

export function Fieldset({
  legend = "User Account Credentials",
  children,
  className,
}: {
  legend?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <fieldset className={cn("p-4 rounded-2xl border border-gray-800 bg-gray-900/60 space-y-3", className)}>
      <legend className="px-2 text-xs font-bold text-purple-400 font-mono uppercase">{legend}</legend>
      {children}
    </fieldset>
  );
}
