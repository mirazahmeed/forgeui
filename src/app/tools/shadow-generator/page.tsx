"use client";

import * as React from "react";
import { Copy, Check, RefreshCw, Square } from "lucide-react";

export default function ShadowGeneratorPage() {
  const [offsetX, setOffsetX] = React.useState(0);
  const [offsetY, setOffsetY] = React.useState(8);
  const [blur, setBlur] = React.useState(24);
  const [spread, setSpread] = React.useState(0);
  const [color, setColor] = React.useState("#7C3AED");
  const [opacity, setOpacity] = React.useState(40);
  const [inset, setInset] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
  };

  const shadowValue = `${inset ? "inset " : ""}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;
  const cssCode = `box-shadow: ${shadowValue};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const randomize = () => {
    setOffsetX(Math.floor(Math.random() * 40) - 20);
    setOffsetY(Math.floor(Math.random() * 40));
    setBlur(Math.floor(Math.random() * 60));
    setSpread(Math.floor(Math.random() * 20) - 5);
    setOpacity(Math.floor(Math.random() * 60) + 20);
    const hex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(hex());
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Square className="w-4 h-4" /> Shadow Generator
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Box Shadow <span className="text-gradient">Builder</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="flex items-center justify-center min-h-[320px] bg-gray-900/40 rounded-2xl border border-gray-800">
            <div
              className="w-48 h-48 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center transition-all"
              style={{ boxShadow: shadowValue }}
            >
              <span className="text-xs text-gray-400 font-mono">Preview</span>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-5">
            {[
              { label: "Offset X", value: offsetX, set: setOffsetX, min: -50, max: 50 },
              { label: "Offset Y", value: offsetY, set: setOffsetY, min: -50, max: 50 },
              { label: "Blur", value: blur, set: setBlur, min: 0, max: 100 },
              { label: "Spread", value: spread, set: setSpread, min: -20, max: 50 },
              { label: "Opacity", value: opacity, set: setOpacity, min: 0, max: 100 },
            ].map((ctrl) => (
              <div key={ctrl.label} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-gray-300 uppercase tracking-wider">{ctrl.label}</span>
                  <span className="font-mono text-purple-400">{ctrl.value}{ctrl.label === "Opacity" ? "%" : "px"}</span>
                </div>
                <input type="range" min={ctrl.min} max={ctrl.max} value={ctrl.value} onChange={(e) => ctrl.set(Number(e.target.value))} className="w-full accent-purple-500" />
              </div>
            ))}

            <div className="flex items-center gap-4">
              <div className="space-y-1 flex-1">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Color</label>
                <div className="w-full h-10 rounded-xl border border-gray-700 overflow-hidden">
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-full cursor-pointer" />
                </div>
              </div>
              <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer pt-4">
                <input type="checkbox" checked={inset} onChange={(e) => setInset(e.target.checked)} className="accent-purple-500" />
                Inset
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">CSS Output</label>
              <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-purple-300 overflow-x-auto">{cssCode}</pre>
            </div>

            <div className="flex gap-2">
              <button onClick={randomize} className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 text-xs font-semibold hover:bg-gray-700 flex items-center justify-center gap-2 cursor-pointer">
                <RefreshCw className="w-3.5 h-3.5" /> Randomize
              </button>
              <button onClick={handleCopy} className="flex-1 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer">
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy CSS"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
