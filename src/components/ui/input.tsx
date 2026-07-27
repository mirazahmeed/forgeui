import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && <label className="block text-xs font-semibold text-gray-300">{label}</label>}
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3 text-gray-400 pointer-events-none">{icon}</div>}
          <input
            ref={ref}
            className={cn(
              "w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all",
              icon && "pl-10",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
