"use client";

import * as React from "react";
import { Copy, Check, Radius } from "lucide-react";

export default function BorderRadiusPage() {
  const [topLeft, setTopLeft] = React.useState(12);
  const [topRight, setTopRight] = React.useState(12);
  const [bottomRight, setBottomRight] = React.useState(12);
  const [bottomLeft, setBottomLeft] = React.useState(12);
  const [linked, setLinked] = React.useState(true);
  const [copied, setCopied] = React.useState(false);

  const setAll = (val: number) => {
    setTopLeft(val);
    setTopRight(val);
    setBottomRight(val);
    setBottomLeft(val);
  };

  const radiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
  const cssCode = `border-radius: ${radiusValue};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const corners = [
    { label: "Top Left", value: topLeft, set: setTopLeft },
    { label: "Top Right", value: topRight, set: setTopRight },
    { label: "Bottom Right", value: bottomRight, set: setBottomRight },
    { label: "Bottom Left", value: bottomLeft, set: setBottomLeft },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Radius className="w-4 h-4" /> Border Radius
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Border Radius <span className="text-gradient">Builder</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="flex items-center justify-center min-h-[320px] bg-gray-900/40 rounded-2xl border border-gray-800 p-12">
            <div
              className="w-48 h-48 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 shadow-2xl transition-all duration-200"
              style={{ borderRadius: radiusValue }}
            />
          </div>

          {/* Controls */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-5">
            <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
              <input type="checkbox" checked={linked} onChange={(e) => setLinked(e.target.checked)} className="accent-purple-500" />
              Link all corners
            </label>

            {linked ? (
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-gray-300 uppercase tracking-wider">All Corners</span>
                  <span className="font-mono text-purple-400">{topLeft}px</span>
                </div>
                <input type="range" min={0} max={100} value={topLeft} onChange={(e) => setAll(Number(e.target.value))} className="w-full accent-purple-500" />
              </div>
            ) : (
              corners.map((c) => (
                <div key={c.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-gray-300 uppercase tracking-wider">{c.label}</span>
                    <span className="font-mono text-purple-400">{c.value}px</span>
                  </div>
                  <input type="range" min={0} max={100} value={c.value} onChange={(e) => c.set(Number(e.target.value))} className="w-full accent-purple-500" />
                </div>
              ))
            )}

            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">CSS Output</label>
              <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-purple-300">{cssCode}</pre>
            </div>

            <button onClick={handleCopy} className="w-full px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer">
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy CSS"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
