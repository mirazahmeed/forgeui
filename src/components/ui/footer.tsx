import * as React from "react";
import Link from "next/link";
import { Sparkles, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("w-full bg-gray-950 border-t border-gray-800 py-8 px-6 text-gray-400 text-xs", className)}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="font-extrabold text-white font-heading">ForgeUI Platform</span>
          <span className="text-gray-600">© 2026 MIT License</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <Link href="/docs" className="hover:text-white">Documentation</Link>
          <Link href="/components" className="hover:text-white">Components</Link>
          <Link href="/themes" className="hover:text-white">Themes</Link>
        </div>
      </div>
    </footer>
  );
}
