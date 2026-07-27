"use client";

import * as React from "react";
import { Copy, Check, RefreshCw, Paintbrush } from "lucide-react";

export default function GradientGeneratorPage() {
  const [color1, setColor1] = React.useState("#7C3AED");
  const [color2, setColor2] = React.useState("#06B6D4");
  const [color3, setColor3] = React.useState("#EC4899");
  const [angle, setAngle] = React.useState(135);
  const [type, setType] = React.useState<"linear" | "radial" | "conic">("linear");
  const [useThreeColors, setUseThreeColors] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const gradientValue = React.useMemo(() => {
    const colors = useThreeColors ? `${color1}, ${color2}, ${color3}` : `${color1}, ${color2}`;
    if (type === "linear") return `linear-gradient(${angle}deg, ${colors})`;
    if (type === "radial") return `radial-gradient(circle, ${colors})`;
    return `conic-gradient(from ${angle}deg, ${colors})`;
  }, [color1, color2, color3, angle, type, useThreeColors]);

  const cssCode = `background: ${gradientValue};`;
  const tailwindCode = `bg-gradient-to-r from-[${color1}] ${useThreeColors ? `via-[${color2}] ` : ""}to-[${useThreeColors ? color3 : color2}]`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const randomize = () => {
    const hex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor1(hex());
    setColor2(hex());
    setColor3(hex());
    setAngle(Math.floor(Math.random() * 360));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Paintbrush className="w-4 h-4" /> Gradient Generator
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            CSS Gradient <span className="text-gradient">Builder</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="space-y-4">
            <div
              className="w-full h-72 rounded-2xl border border-gray-800 shadow-2xl"
              style={{ background: gradientValue }}
            />
            <div className="flex gap-2">
              <button
                onClick={randomize}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Randomize
              </button>
              <button
                onClick={() => handleCopy(cssCode)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy CSS"}
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-6">
            {/* Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Type</label>
              <div className="flex gap-2">
                {(["linear", "radial", "conic"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize cursor-pointer ${
                      type === t ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Angle */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Angle</label>
                <span className="text-xs font-mono text-purple-400">{angle}°</span>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Colors</label>
                <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useThreeColors}
                    onChange={(e) => setUseThreeColors(e.target.checked)}
                    className="accent-purple-500"
                  />
                  3-stop gradient
                </label>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                  <div className="w-full h-10 rounded-xl border border-gray-700 overflow-hidden">
                    <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-full cursor-pointer" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 text-center block">{color1}</span>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="w-full h-10 rounded-xl border border-gray-700 overflow-hidden">
                    <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-full cursor-pointer" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 text-center block">{color2}</span>
                </div>
                {useThreeColors && (
                  <div className="flex-1 space-y-1">
                    <div className="w-full h-10 rounded-xl border border-gray-700 overflow-hidden">
                      <input type="color" value={color3} onChange={(e) => setColor3(e.target.value)} className="w-full h-full cursor-pointer" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 text-center block">{color3}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Code Output */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">CSS Output</label>
              <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-purple-300 overflow-x-auto">
                {cssCode}
              </pre>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Tailwind</label>
              <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono text-cyan-300 overflow-x-auto">
                {tailwindCode}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
