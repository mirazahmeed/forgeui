"use client";

import * as React from "react";
import { Upload, File } from "lucide-react";
import { cn } from "@/lib/utils";

export function FileInput({
  label = "Upload Project Asset",
  helperText = "PNG, JPG, SVG up to 10MB",
  onChange,
  className,
}: {
  label?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
    onChange?.(e);
  };

  return (
    <div className={cn("space-y-1.5 w-full", className)}>
      {label && <label className="block text-xs font-semibold text-gray-300">{label}</label>}
      <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-gray-800 hover:border-purple-500/60 bg-gray-900/60 cursor-pointer transition-all group">
        <Upload className="w-6 h-6 text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all mb-2" />
        <span className="text-xs font-bold text-gray-200 group-hover:text-purple-300">
          {fileName ? fileName : "Click to select or drag and drop file"}
        </span>
        <span className="text-[10px] text-gray-500 mt-0.5">{helperText}</span>
        <input type="file" onChange={handleFileChange} className="hidden" />
      </label>
    </div>
  );
}
