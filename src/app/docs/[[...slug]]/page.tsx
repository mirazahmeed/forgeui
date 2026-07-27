"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { findDocPage, getDocNavigation, DOC_SECTIONS } from "@/lib/docs";
import { DocSidebar } from "@/components/docs/doc-sidebar";
import { DocToc } from "@/components/docs/doc-toc";
import { DocContent } from "@/components/docs/doc-content";
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";

export default function DocsPage() {
  const params = useParams();
  const slugArray = (params?.slug as string[] | undefined) || [];

  const result = findDocPage(slugArray);

  if (!result) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <BookOpen className="w-10 h-10 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-gray-400 text-sm">The requested documentation page does not exist.</p>
        <Link href="/docs/getting-started/introduction" className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold">
          Go to Introduction
        </Link>
      </div>
    );
  }

  const { section, page } = result;
  const { prev, next } = getDocNavigation(section.slug, page.slug);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-10">
          {/* Left Sidebar */}
          <DocSidebar />

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-6">
              <Link href="/docs" className="hover:text-purple-400 transition-colors">Docs</Link>
              <span>/</span>
              <span className="text-gray-400">{section.title}</span>
              <span>/</span>
              <span className="text-purple-300">{page.title}</span>
            </div>

            {/* Page Header */}
            <div className="mb-8 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                {page.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                {page.description}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors font-mono"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Edit on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Rendered Doc Content */}
            <DocContent content={page.content} />

            {/* Previous / Next Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/docs/${prev.section.slug}/${prev.page.slug}`}
                  className="p-4 rounded-2xl border border-gray-800 hover:border-purple-500/50 bg-gray-900/60 hover:bg-gray-900/90 transition-all group text-left"
                >
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mt-1 block">
                    {prev.page.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {next && (
                <Link
                  href={`/docs/${next.section.slug}/${next.page.slug}`}
                  className="p-4 rounded-2xl border border-gray-800 hover:border-purple-500/50 bg-gray-900/60 hover:bg-gray-900/90 transition-all group text-right"
                >
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center justify-end gap-1">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mt-1 block">
                    {next.page.title}
                  </span>
                </Link>
              )}
            </div>
          </main>

          {/* Right Table of Contents */}
          <DocToc content={page.content} />
        </div>
      </div>
    </div>
  );
}
