import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, maxLength, value, ...props }, ref) => {
    const currentLength = typeof value === "string" ? value.length : 0;
    return (
      <div className="w-full space-y-1.5">
        <div className="flex justify-between items-center">
          {label && <label className="block text-xs font-semibold text-gray-300">{label}</label>}
          {maxLength && (
            <span className="text-[10px] font-mono text-gray-500">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          maxLength={maxLength}
          value={value}
          className={cn(
            "w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all min-h-[90px] resize-y",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
