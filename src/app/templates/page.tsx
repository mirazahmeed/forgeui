"use client";

import * as React from "react";
import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import { Layout, Sparkles, Terminal, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [copiedSlug, setCopiedSlug] = React.useState<string | null>(null);

  const categories = ["all", "Landing Page", "AI & Tech", "Dashboard", "Personal", "Commerce", "Agency", "Content"];

  const filteredTemplates = selectedCategory === "all"
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === selectedCategory);

  const handleCopyCli = (slug: string, cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center border-b border-gray-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12 Production-Ready Full Page Templates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            Template <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Kickstart your next Next.js 15 project with beautifully crafted, responsive templates.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-950"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.slug}
              className="group rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Illustration Banner */}
                <div className={`h-44 bg-gradient-to-br ${template.previewGradient} p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-md">
                      {template.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                      <Layout className="w-4 h-4 text-purple-300" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {template.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {template.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-1 text-xs text-gray-400">
                    {template.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CLI & Action Bar */}
              <div className="p-4 border-t border-gray-800 bg-gray-950/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 truncate">
                  <Terminal className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">{template.installCmd}</span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopyCli(template.slug, template.installCmd)}
                    className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 transition-colors cursor-pointer"
                    title="Copy CLI command"
                  >
                    {copiedSlug === template.slug ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <Link
                    href={`/templates/${template.slug}`}
                    className="p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
                    title="View Template Details"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
