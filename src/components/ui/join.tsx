import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Join({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center rounded-2xl bg-gray-900 border border-gray-800 p-1 shadow-xl", className)}>
      <input
        type="text"
        placeholder="Enter subscriber email..."
        className="bg-transparent px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none w-64"
      />
      <Button variant="glow" size="sm" className="rounded-xl">
        Subscribe
      </Button>
    </div>
  );
}
