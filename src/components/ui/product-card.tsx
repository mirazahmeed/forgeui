import * as React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductCard({
  title,
  price,
  rating = 4.8,
  category,
  imageSrc,
  className,
}: {
  title: string;
  price: string;
  rating?: number;
  category?: string;
  imageSrc?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all", className)}>
      <div className="h-44 bg-gradient-to-tr from-purple-950 via-gray-900 to-cyan-950 flex items-center justify-center relative">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <span className="text-3xl font-extrabold text-purple-400 font-heading">Forge</span>
        )}
        {category && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-gray-950/80 border border-gray-800 text-[10px] font-mono text-purple-300">
            {category}
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">{title}</h3>
          <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> {rating}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-extrabold text-white font-mono">{price}</span>
          <Button variant="primary" size="sm">
            <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
}
