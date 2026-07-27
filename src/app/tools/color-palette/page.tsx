"use client";

import * as React from "react";
import { Copy, Check, RefreshCw, Palette } from "lucide-react";

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generatePalette(baseHex: string, harmony: string): string[] {
  // Simple hex to HSL
  const r = parseInt(baseHex.slice(1, 3), 16) / 255;
  const g = parseInt(baseHex.slice(3, 5), 16) / 255;
  const b = parseInt(baseHex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;
  const s = max === min ? 0 : l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  if (max !== min) {
    if (max === r) h = ((g - b) / (max - min)) * 60;
    else if (max === g) h = (2 + (b - r) / (max - min)) * 60;
    else h = (4 + (r - g) / (max - min)) * 60;
  }
  if (h < 0) h += 360;

  const sP = Math.round(s * 100);
  const lP = Math.round(l * 100);

  switch (harmony) {
    case "complementary":
      return [baseHex, hslToHex((h + 180) % 360, sP, lP), hslToHex(h, sP, Math.min(lP + 20, 95)), hslToHex((h + 180) % 360, sP, Math.min(lP + 20, 95)), hslToHex(h, sP, Math.max(lP - 15, 10))];
    case "analogous":
      return [hslToHex((h - 30 + 360) % 360, sP, lP), baseHex, hslToHex((h + 30) % 360, sP, lP), hslToHex((h + 60) % 360, sP, lP), hslToHex((h - 60 + 360) % 360, sP, lP)];
    case "triadic":
      return [baseHex, hslToHex((h + 120) % 360, sP, lP), hslToHex((h + 240) % 360, sP, lP), hslToHex(h, sP, Math.min(lP + 15, 95)), hslToHex(h, sP, Math.max(lP - 15, 10))];
    case "shades":
    default:
      return [hslToHex(h, sP, 90), hslToHex(h, sP, 70), baseHex, hslToHex(h, sP, 35), hslToHex(h, sP, 15)];
  }
}

export default function ColorPalettePage() {
  const [baseColor, setBaseColor] = React.useState("#7C3AED");
  const [harmony, setHarmony] = React.useState("shades");
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);
  const [copiedAll, setCopiedAll] = React.useState(false);

  const palette = React.useMemo(() => generatePalette(baseColor, harmony), [baseColor, harmony]);

  const handleCopyColor = (hex: string, idx: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const handleCopyAll = () => {
    const css = palette.map((c, i) => `  --color-${i + 1}: ${c};`).join("\n");
    navigator.clipboard.writeText(`:root {\n${css}\n}`);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const randomize = () => {
    setBaseColor("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Palette className="w-4 h-4" /> Color Palette
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Color Palette <span className="text-gradient">Generator</span>
          </h1>
        </div>

        {/* Controls Row */}
        <div className="flex flex-wrap items-end gap-4 p-6 rounded-2xl bg-gray-900 border border-gray-800">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Base Color</label>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl border border-gray-700 overflow-hidden">
                <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="w-full h-full cursor-pointer" />
              </div>
              <span className="text-xs font-mono text-purple-400">{baseColor}</span>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Harmony</label>
            <div className="flex gap-2">
              {["shades", "complementary", "analogous", "triadic"].map((h) => (
                <button
                  key={h}
                  onClick={() => setHarmony(h)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize cursor-pointer ${
                    harmony === h ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <button onClick={randomize} className="px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 text-xs font-semibold hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
            <RefreshCw className="w-3.5 h-3.5" /> Random
          </button>
        </div>

        {/* Palette Preview */}
        <div className="grid grid-cols-5 gap-4">
          {palette.map((hex, i) => (
            <button
              key={i}
              onClick={() => handleCopyColor(hex, i)}
              className="group rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <div className="h-28 sm:h-36" style={{ backgroundColor: hex }} />
              <div className="p-3 bg-gray-900 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-300">{hex}</span>
                {copiedIdx === i ? (
                  <Check className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* CSS Export */}
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">CSS Variables Export</label>
            <button onClick={handleCopyAll} className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
              {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? "Copied" : "Copy CSS Variables"}
            </button>
          </div>
          <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-purple-300">
{`:root {
${palette.map((c, i) => `  --color-${i + 1}: ${c};`).join("\n")}
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
