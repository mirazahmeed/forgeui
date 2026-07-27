import * as React from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Alert({
  title,
  children,
  variant = "info",
  onClose,
}: {
  title?: string;
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
  onClose?: () => void;
}) {
  const icons = {
    info: <Info className="w-4 h-4 text-cyan-400" />,
    success: <CheckCircle2 className="w-4 h-4 text-green-400" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    danger: <AlertCircle className="w-4 h-4 text-red-400" />,
  };
  const borders = {
    info: "border-cyan-500/30 bg-cyan-950/30",
    success: "border-green-500/30 bg-green-950/30",
    warning: "border-amber-500/30 bg-amber-950/30",
    danger: "border-red-500/30 bg-red-950/30",
  };
  return (
    <div className={cn("p-4 rounded-xl border flex items-start gap-3 relative text-left", borders[variant] || borders.info)} role="alert">
      {icons[variant] || icons.info}
      <div className="flex-1 space-y-1">
        {title && <h4 className="text-xs font-bold text-white">{title}</h4>}
        <div className="text-xs text-gray-300 leading-relaxed">{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
