"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

/**
 * Renders markdown-like doc content into styled HTML.
 * Supports: headings (##, ###), code blocks (```), inline code (`),
 * tables, bold (**), links, lists (-, 1.), blockquotes (>), and ---
 */
export function DocContent({ content }: { content: string }) {
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  // Parse content into blocks
  const blocks = React.useMemo(() => {
    const lines = content.split("\n");
    const result: { type: string; content: string; lang?: string; idx: number }[] = [];
    let i = 0;
    let blockIdx = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Fenced code block
      if (line.startsWith("```")) {
        const lang = line.slice(3).trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        result.push({ type: "code", content: codeLines.join("\n"), lang, idx: blockIdx++ });
        i++; // skip closing ```
        continue;
      }

      // Table detection
      if (line.includes("|") && i + 1 < lines.length && lines[i + 1]?.match(/^\|[\s-|]+\|$/)) {
        const tableLines: string[] = [line];
        i++;
        while (i < lines.length && lines[i].includes("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        result.push({ type: "table", content: tableLines.join("\n"), idx: blockIdx++ });
        continue;
      }

      // Heading
      if (line.startsWith("## ")) {
        result.push({ type: "h2", content: line.slice(3), idx: blockIdx++ });
        i++;
        continue;
      }
      if (line.startsWith("### ")) {
        result.push({ type: "h3", content: line.slice(4), idx: blockIdx++ });
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === "---") {
        result.push({ type: "hr", content: "", idx: blockIdx++ });
        i++;
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Block of text (paragraph, list, etc.)
      const textLines: string[] = [line];
      i++;
      while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("```") && !lines[i].startsWith("## ") && !lines[i].startsWith("### ") && lines[i].trim() !== "---") {
        // Check if this might be a table
        if (lines[i].includes("|") && i + 1 < lines.length && lines[i + 1]?.match(/^\|[\s-|]+\|$/)) break;
        textLines.push(lines[i]);
        i++;
      }
      result.push({ type: "text", content: textLines.join("\n"), idx: blockIdx++ });
    }

    return result;
  }, [content]);

  function renderInlineMarkdown(text: string): React.ReactNode {
    // Process inline formatting: **bold**, `code`, [link](url)
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Inline code
      const codeMatch = remaining.match(/`([^`]+)`/);
      // Link
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

      // Find earliest match
      const matches = [
        boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
        codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
        linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      ].filter(Boolean).sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;
      if (first.index > 0) {
        parts.push(remaining.slice(0, first.index));
      }

      if (first.type === "bold") {
        parts.push(<strong key={key++} className="text-white font-bold">{first.match[1]}</strong>);
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "code") {
        parts.push(
          <code key={key++} className="px-1.5 py-0.5 rounded bg-gray-800 text-purple-300 text-[11px] font-mono border border-gray-700">
            {first.match[1]}
          </code>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      } else if (first.type === "link") {
        parts.push(
          <a key={key++} href={first.match[2]} className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
            {first.match[1]}
          </a>
        );
        remaining = remaining.slice(first.index + first.match[0].length);
      }
    }

    return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : <>{parts}</>;
  }

  function renderTextBlock(text: string): React.ReactNode {
    const lines = text.split("\n");

    // Check if it's a list
    if (lines.every((l) => l.startsWith("- ") || l.startsWith("  "))) {
      return (
        <ul className="space-y-1.5 text-sm text-gray-300 leading-relaxed">
          {lines.filter((l) => l.startsWith("- ")).map((l, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
              <span>{renderInlineMarkdown(l.slice(2))}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Ordered list
    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol className="space-y-1.5 text-sm text-gray-300 leading-relaxed list-none">
          {lines.map((l, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{renderInlineMarkdown(l.replace(/^\d+\.\s/, ""))}</span>
            </li>
          ))}
        </ol>
      );
    }

    // Regular paragraph
    return (
      <p className="text-sm text-gray-300 leading-relaxed">
        {renderInlineMarkdown(text)}
      </p>
    );
  }

  function renderTable(tableText: string): React.ReactNode {
    const rows = tableText.split("\n").filter((r) => r.trim());
    if (rows.length < 2) return null;

    const headers = rows[0].split("|").map((c) => c.trim()).filter(Boolean);
    const dataRows = rows.slice(2); // skip header & separator

    return (
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-950 text-purple-400 font-mono border-b border-gray-800">
              {headers.map((h, i) => (
                <th key={i} className="py-3 px-4 font-bold">{renderInlineMarkdown(h)}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60 text-gray-300">
            {dataRows.map((row, i) => {
              const cells = row.split("|").map((c) => c.trim()).filter(Boolean);
              return (
                <tr key={i} className="hover:bg-gray-900/50">
                  {cells.map((cell, j) => (
                    <td key={j} className="py-2.5 px-4">{renderInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="space-y-5 max-w-none">
      {blocks.map((block) => {
        if (block.type === "h2") {
          const id = block.content.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
          return (
            <h2 key={block.idx} id={id} className="text-2xl font-extrabold text-white font-heading pt-6 pb-1 border-b border-gray-800/60 scroll-mt-24">
              {renderInlineMarkdown(block.content)}
            </h2>
          );
        }
        if (block.type === "h3") {
          const id = block.content.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
          return (
            <h3 key={block.idx} id={id} className="text-lg font-bold text-white font-heading pt-4 scroll-mt-24">
              {renderInlineMarkdown(block.content)}
            </h3>
          );
        }
        if (block.type === "code") {
          return (
            <div key={block.idx} className="relative group rounded-xl border border-gray-800 overflow-hidden">
              {block.lang && (
                <div className="px-4 py-2 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">{block.lang}</span>
                  <button
                    onClick={() => handleCopy(block.content, block.idx)}
                    className="px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    {copiedIdx === block.idx ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedIdx === block.idx ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              )}
              <pre className="p-4 bg-gray-950/60 overflow-x-auto">
                <code className="text-xs font-mono text-purple-200/90 leading-relaxed">{block.content}</code>
              </pre>
            </div>
          );
        }
        if (block.type === "table") {
          return <React.Fragment key={block.idx}>{renderTable(block.content)}</React.Fragment>;
        }
        if (block.type === "hr") {
          return <hr key={block.idx} className="border-gray-800 my-6" />;
        }
        if (block.type === "text") {
          return <React.Fragment key={block.idx}>{renderTextBlock(block.content)}</React.Fragment>;
        }
        return null;
      })}
    </div>
  );
}
