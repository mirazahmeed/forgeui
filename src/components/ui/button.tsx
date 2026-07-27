import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glow" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    const variants = {
      primary: "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950 border border-purple-500/30",
      secondary: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-950 border border-cyan-500/30",
      outline: "border border-purple-500/50 text-purple-300 hover:bg-purple-950/40",
      glow: "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 text-white shadow-xl glow-purple animate-pulse",
      danger: "bg-red-600 hover:bg-red-500 text-white",
      ghost: "text-gray-300 hover:bg-gray-800 hover:text-white",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {isLoading && <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
