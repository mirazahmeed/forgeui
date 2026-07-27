import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
  className,
}: {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            onClick={() => onPageChange?.(p)}
            className={cn(
              "w-8 h-8 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer",
              isActive
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-950"
                : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
            )}
          >
            {p}
          </button>
        );
      })}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
