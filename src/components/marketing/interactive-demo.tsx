"use client";

import * as React from "react";
import { Copy, Check, Sparkles, CheckCircle2, Sliders, Code2, Eye, TableProperties } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveDemo() {
  const [selectedComponent, setSelectedComponent] = React.useState<"button" | "card" | "badge" | "pricing">("button");
  const [activeTab, setActiveTab] = React.useState<"preview" | "code" | "props">("preview");
  const [copied, setCopied] = React.useState(false);
  const [buttonVariant, setButtonVariant] = React.useState<"primary" | "secondary" | "outline" | "glow">("primary");

  const codeSnippets = {
    button: `import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <Button variant="${buttonVariant}" size="lg">
      <Sparkles className="w-4 h-4 mr-2" />
      Deploy Component
    </Button>
  );
}`,
    card: `import { Card, Badge, Button } from "@/components/ui";

export default function FeatureCard() {
  return (
    <Card className="p-6 glass glow-purple">
      <Badge variant="purple">AI Engine</Badge>
      <h3 className="text-xl font-bold text-white mt-2">ForgeUI Component</h3>
      <p className="text-gray-400 text-sm mt-1">Dark mode by default, accessible & animated.</p>
      <Button className="mt-4 w-full">Explore Component</Button>
    </Card>
  );
}`,
    badge: `import { Badge } from "@/components/ui/badge";

export default function BadgesDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant="purple">Primary</Badge>
      <Badge variant="cyan">Accent</Badge>
      <Badge variant="success">Active</Badge>
    </div>
  );
}`,
    pricing: `import { PricingCard } from "@/components/ui/pricing";

export default function PricingSection() {
  return (
    <PricingCard 
      plan="Pro Developer"
      price="$29"
      features={["All 100+ Components", "12 Templates", "CLI Access"]}
      isPopular={true}
    />
  );
}`
  };

  const propDocs = {
    button: [
      { name: "variant", type: "'primary' | 'secondary' | 'outline' | 'glow'", default: "'primary'", desc: "Visual style variant" },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Button size dimensions" },
      { name: "isLoading", type: "boolean", default: "false", desc: "Shows animated loading spinner" },
    ],
    card: [
      { name: "className", type: "string", default: "''", desc: "Custom Tailwind CSS classes" },
      { name: "children", type: "ReactNode", default: "required", desc: "Card content elements" },
    ],
    badge: [
      { name: "variant", type: "'purple' | 'cyan' | 'success' | 'warning'", default: "'purple'", desc: "Color theme badge style" },
    ],
    pricing: [
      { name: "plan", type: "string", default: "required", desc: "Pricing plan tier title" },
      { name: "price", type: "string", default: "required", desc: "Formatted price string" },
      { name: "features", type: "string[]", default: "[]", desc: "Checklist array of features" },
      { name: "isPopular", type: "boolean", default: "false", desc: "Highlights card with glow border" },
    ],
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedComponent]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { key: "preview" as const, label: "Preview", icon: Eye },
    { key: "code" as const, label: "Code", icon: Code2 },
    { key: "props" as const, label: "Props", icon: TableProperties },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-purple-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Live Playground</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white font-heading"
          >
            Test drive <span className="text-gradient">components</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Toggle states, view code, explore props, and copy with one click.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-2xl border border-gray-800/80 bg-gray-900/60 shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Controls Bar */}
          <div className="p-4 border-b border-gray-800/80 bg-gray-950/90 flex flex-wrap items-center justify-between gap-4">
            {/* Component Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[10px] font-mono text-gray-500 mr-2 uppercase tracking-wider">Component</span>
              {(["button", "card", "badge", "pricing"] as const).map((comp) => (
                <button
                  key={comp}
                  onClick={() => setSelectedComponent(comp)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                    selectedComponent === comp
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800/80"
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>

            {/* View Tab & Copy */}
            <div className="flex items-center gap-1.5">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-all ${
                      activeTab === tab.key
                        ? "bg-gray-800 text-purple-300 border border-purple-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}

              <div className="w-px h-5 bg-gray-800 mx-1" />

              <button
                onClick={handleCopyCode}
                className="px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-200 text-xs hover:bg-purple-900/60 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Playground Body */}
          <div className="p-8 min-h-[380px] flex items-center justify-center bg-gray-950/40 relative">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            <AnimatePresence mode="wait">
              {activeTab === "preview" && (
                <motion.div
                  key={`preview-${selectedComponent}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md flex flex-col items-center justify-center text-center relative z-10"
                >
                  {selectedComponent === "button" && (
                    <div className="space-y-8 w-full">
                      <div className="flex justify-center gap-2">
                        {(["primary", "secondary", "outline", "glow"] as const).map((v) => (
                          <button
                            key={v}
                            onClick={() => setButtonVariant(v)}
                            className={`text-[10px] font-mono px-3 py-1.5 rounded-lg capitalize cursor-pointer transition-all ${
                              buttonVariant === v 
                                ? "bg-purple-600 text-white shadow-md" 
                                : "bg-gray-800/80 text-gray-400 hover:text-white border border-gray-700/60"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          className={`px-8 py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer ${
                            buttonVariant === "primary"
                              ? "bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-950/60"
                              : buttonVariant === "secondary"
                              ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-950/60"
                              : buttonVariant === "outline"
                              ? "border-2 border-purple-500 text-purple-300 hover:bg-purple-950/40"
                              : "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 text-white shadow-2xl glow-purple"
                          }`}
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Deploy Component</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {selectedComponent === "card" && (
                    <div className="p-7 rounded-2xl bg-gray-900/90 border border-gray-800 glass glow-purple text-left w-full space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-900/60 text-purple-300 border border-purple-800/40">
                          AI ENGINE
                        </span>
                        <span className="text-xs text-green-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">ForgeUI Feature Component</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Pre-styled with glassmorphism, responsive breakpoints, and dark mode tokens.
                      </p>
                      <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl cursor-pointer transition-all shadow-lg shadow-purple-950/40">
                        Explore Details
                      </button>
                    </div>
                  )}

                  {selectedComponent === "badge" && (
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {[
                        { label: "Primary", bg: "bg-purple-950", border: "border-purple-800", text: "text-purple-300" },
                        { label: "Accent", bg: "bg-cyan-950", border: "border-cyan-800", text: "text-cyan-300" },
                        { label: "Success", bg: "bg-green-950", border: "border-green-800", text: "text-green-300" },
                        { label: "Warning", bg: "bg-amber-950", border: "border-amber-800", text: "text-amber-300" },
                        { label: "Danger", bg: "bg-red-950", border: "border-red-800", text: "text-red-300" },
                      ].map((badge) => (
                        <span key={badge.label} className={`px-4 py-1.5 rounded-full ${badge.bg} border ${badge.border} ${badge.text} text-xs font-semibold transition-all hover:scale-105 cursor-default`}>
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {selectedComponent === "pricing" && (
                    <div className="p-7 rounded-2xl bg-gray-900/90 border border-purple-500/40 shadow-2xl text-left w-full space-y-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-cyan-400 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        Popular
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400">Pro Developer</h4>
                        <div className="text-4xl font-extrabold text-white mt-1">$29 <span className="text-sm text-gray-400 font-normal">/ month</span></div>
                      </div>
                      <ul className="space-y-2.5 text-sm text-gray-300">
                        <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-purple-400" /> 100+ Components</li>
                        <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-purple-400" /> 12 Full-Page Templates</li>
                        <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-purple-400" /> npx forgeui CLI Access</li>
                      </ul>
                      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm rounded-xl shadow-xl cursor-pointer hover:opacity-90 transition-all">
                        Get Started Now
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "code" && (
                <motion.pre
                  key="code"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full overflow-x-auto text-left font-mono text-sm text-purple-200 bg-gray-950/80 p-6 rounded-xl border border-gray-800 relative z-10"
                >
                  <code>{codeSnippets[selectedComponent]}</code>
                </motion.pre>
              )}

              {activeTab === "props" && (
                <motion.div
                  key="props"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full overflow-x-auto relative z-10"
                >
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-800 text-purple-400 font-mono">
                        <th className="py-3 px-4 font-semibold">Prop</th>
                        <th className="py-3 px-4 font-semibold">Type</th>
                        <th className="py-3 px-4 font-semibold">Default</th>
                        <th className="py-3 px-4 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 text-gray-300">
                      {propDocs[selectedComponent].map((p) => (
                        <tr key={p.name} className="hover:bg-gray-900/60 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-white">{p.name}</td>
                          <td className="py-3 px-4 font-mono text-purple-300 text-xs">{p.type}</td>
                          <td className="py-3 px-4 font-mono text-gray-400 text-xs">{p.default}</td>
                          <td className="py-3 px-4 text-gray-400">{p.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
