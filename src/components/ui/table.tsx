import * as React from "react";
import { cn } from "@/lib/utils";

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  className,
}: {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden", className)}>
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="bg-gray-950 border-b border-gray-800 text-gray-400 font-mono uppercase tracking-wider">
            {columns.map((col) => (
              <th key={col.key} className="py-3 px-4">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/60">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-850/50 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-4 text-gray-300">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
