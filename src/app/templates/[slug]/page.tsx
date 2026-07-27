"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { ArrowLeft, Terminal, Copy, Check, Sparkles, Layout, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TemplateDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const template = TEMPLATES.find((t) => t.slug === slug);
  const [copied, setCopied] = React.useState(false);

  if (!template) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">Template Not Found</h2>
        <Link href="/templates" className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold">
          Back to Templates
        </Link>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(template.installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Templates</span>
        </Link>

        {/* Template Banner */}
        <div className={`p-10 rounded-3xl bg-gradient-to-br ${template.previewGradient} border border-purple-500/30 space-y-6 shadow-2xl relative overflow-hidden`}>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/60 text-purple-300">
              {template.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
            {template.name}
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {template.description}
          </p>

          {/* CLI box */}
          <div className="p-4 rounded-2xl bg-black/80 border border-gray-800 flex items-center justify-between gap-4 max-w-md font-mono text-xs">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-semibold">{template.installCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Template Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading">Included Page Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {template.features.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-900 border border-gray-800 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
            <h4 className="text-sm font-bold text-white">Template Stack</h4>
            <div className="flex flex-wrap gap-2">
              {template.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-lg bg-purple-950 border border-purple-800 text-purple-300 font-mono">
                  {t}
                </span>
              ))}
            </div>
            <Button onClick={handleCopy} className="w-full">
              Copy Install Command
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
