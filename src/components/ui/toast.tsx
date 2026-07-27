"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "info" | "success" | "error";
}

export function ToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: ToastMessage[];
  onDismiss?: (id: string) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 space-y-2.5 max-w-sm w-full">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "p-4 rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-200",
            t.type === "success" && "border-green-500/40",
            t.type === "error" && "border-red-500/40",
            t.type === "info" && "border-purple-500/40"
          )}
        >
          {t.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />}
          {t.type === "error" && <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
          {(!t.type || t.type === "info") && <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />}

          <div className="flex-1 space-y-0.5">
            <h4 className="text-xs font-bold text-white">{t.title}</h4>
            {t.description && <p className="text-[11px] text-gray-400 leading-relaxed">{t.description}</p>}
          </div>

          {onDismiss && (
            <button onClick={() => onDismiss(t.id)} className="text-gray-500 hover:text-white p-1">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
