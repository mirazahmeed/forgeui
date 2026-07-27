import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "underline" | "external" | "purple";
  external?: boolean;
}

export function CustomLink({
  href,
  children,
  variant = "underline",
  external = false,
  className,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-xs transition-all duration-200 cursor-pointer group",
        variant === "underline" && "text-purple-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-400 hover:after:w-full after:transition-all",
        variant === "external" && "text-cyan-400 hover:text-cyan-300",
        variant === "purple" && "text-purple-400 hover:text-purple-300 font-mono",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {external && <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
    </Link>
  );
}
