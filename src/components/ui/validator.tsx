import * as React from "react";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Validator({
  isValid = true,
  validMessage = "Email address is valid.",
  errorMessage = "Please enter a valid developer email.",
  children,
  className,
}: {
  isValid?: boolean;
  validMessage?: string;
  errorMessage?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5 w-full", className)}>
      {children}
      <div className={cn("flex items-center gap-1.5 text-[11px] font-medium", isValid ? "text-emerald-400" : "text-rose-400")}>
        {isValid ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
        <span>{isValid ? validMessage : errorMessage}</span>
      </div>
    </div>
  );
}
