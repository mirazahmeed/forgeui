"use client";

import * as React from "react";
import { Code2, Sparkles } from "lucide-react";

export default function CodePlaygroundPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Code Playground
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Code <span className="text-gradient">Playground</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            An isolated sandbox environment for testing ForgeUI components.
          </p>
        </div>

        <div className="p-12 rounded-2xl bg-gray-900 border border-gray-800 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-950 border border-purple-800 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Coming Soon</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            The full Code Playground with live preview, hot-reload, and component composition will be available in ForgeUI v1.1.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <span>Estimated: August 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
