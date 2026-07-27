"use client";

import * as React from "react";
import { Sparkles, Send, Copy, Check, Code2, Eye, Loader2, Wand2, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUGGESTIONS = [
  "Create a modern pricing section with 3 tiers",
  "Build a hero section with gradient background",
  "Design a testimonial carousel component",
  "Generate a dark mode login form",
  "Create a feature comparison table",
  "Build a newsletter signup with validation",
];

const EXAMPLE_OUTPUT = `import * as React from "react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects",
    features: ["5 Components", "1 Template", "Community Support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers",
    features: ["100+ Components", "12 Templates", "Priority Support", "CLI Access"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams and organizations",
    features: ["Everything in Pro", "Custom Themes", "Dedicated Support", "SLA"],
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={\`p-8 rounded-2xl border \${
                tier.isPopular
                  ? "border-purple-500 bg-purple-950/20 shadow-2xl"
                  : "border-gray-800 bg-gray-900"
              } space-y-6 relative\`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{tier.description}</p>
              </div>
              <div className="text-5xl font-extrabold text-white">
                {tier.price}
                <span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-purple-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={\`w-full py-3 rounded-xl font-semibold text-sm \${
                tier.isPopular
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }\`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [generatedCode, setGeneratedCode] = React.useState("");
  const [activeView, setActiveView] = React.useState<"code" | "preview">("code");
  const [copied, setCopied] = React.useState(false);
  const [framework, setFramework] = React.useState<"react" | "html" | "vue" | "svelte">("react");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedCode("");

    // Simulate AI generation with streaming effect
    await new Promise((r) => setTimeout(r, 800));
    const chars = EXAMPLE_OUTPUT.split("");
    let current = "";
    for (let i = 0; i < chars.length; i++) {
      current += chars[i];
      if (i % 3 === 0) {
        setGeneratedCode(current);
        await new Promise((r) => setTimeout(r, 8));
      }
    }
    setGeneratedCode(EXAMPLE_OUTPUT);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center border-b border-gray-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>AI-Powered Component Generation</span>
            <span className="text-[9px] bg-purple-600 text-white font-bold px-1.5 py-0.5 rounded-full">BETA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            AI <span className="text-gradient">Generator</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Describe the component you need and get production-ready React + Tailwind code instantly.
          </p>
        </div>

        {/* Prompt Input Area */}
        <div className="max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl space-y-4">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the component you want to generate... (e.g., 'Create a modern pricing section with 3 tiers')"
                rows={3}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    handleGenerate();
                  }
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Press <kbd className="px-1 py-0.5 bg-gray-800 rounded border border-gray-700 text-gray-400">⌘↵</kbd> to generate</span>
              </div>
              <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} variant="primary" size="md">
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Component
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setPrompt(s)}
                className="px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-400 hover:text-purple-300 hover:border-purple-500/40 transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Output Panel */}
        {(generatedCode || isGenerating) && (
          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
            {/* Output Header */}
            <div className="p-4 bg-gray-950 border-b border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* Framework tabs */}
                {(["react", "html", "vue", "svelte"] as const).map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setFramework(fw)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize cursor-pointer ${
                      framework === fw
                        ? "bg-purple-600 text-white"
                        : "bg-gray-850 text-gray-400 hover:text-white"
                    }`}
                  >
                    {fw === "react" ? "React / Next.js" : fw.charAt(0).toUpperCase() + fw.slice(1)}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView("code")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                    activeView === "code" ? "bg-gray-800 text-purple-300 border border-purple-500/40" : "text-gray-400"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 inline mr-1" /> Code
                </button>
                <button
                  onClick={() => setActiveView("preview")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                    activeView === "preview" ? "bg-gray-800 text-purple-300 border border-purple-500/40" : "text-gray-400"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" /> Preview
                </button>

                <button
                  onClick={handleCopy}
                  disabled={!generatedCode}
                  className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-200 text-xs hover:bg-purple-900/60 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Code"}</span>
                </button>

                <button
                  onClick={handleGenerate}
                  className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white cursor-pointer"
                  title="Regenerate"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output Body */}
            <div className="p-6 min-h-[400px] bg-gray-950/60">
              {activeView === "code" ? (
                <pre className="overflow-x-auto text-xs font-mono text-purple-200/90 leading-relaxed">
                  <code>{generatedCode || (isGenerating ? "Generating component..." : "")}</code>
                  {isGenerating && <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-0.5" />}
                </pre>
              ) : (
                <div className="flex items-center justify-center min-h-[300px]">
                  <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 text-center space-y-4">
                    <Eye className="w-8 h-8 text-purple-400 mx-auto" />
                    <p className="text-sm text-gray-400">
                      Live preview rendering is available in the full ForgeUI Studio.
                    </p>
                    <p className="text-xs text-gray-500">
                      Copy the generated code and paste it into your project to see the result.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
