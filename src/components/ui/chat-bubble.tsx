import * as React from "react";
import { cn } from "@/lib/utils";

export function ChatBubble({
  message = "Hello! ForgeUI components are now live.",
  sender = "ForgeUI Bot",
  time = "12:45 PM",
  position = "left",
  className,
}: {
  message?: string;
  sender?: string;
  time?: string;
  position?: "left" | "right";
  className?: string;
}) {
  const isRight = position === "right";

  return (
    <div className={cn("flex flex-col space-y-1 max-w-xs", isRight ? "ml-auto items-end" : "mr-auto items-start", className)}>
      <span className="text-[10px] font-mono text-gray-500">{sender} • {time}</span>
      <div
        className={cn(
          "px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-lg",
          isRight ? "bg-purple-600 text-white rounded-br-none" : "bg-gray-900 border border-gray-800 text-gray-200 rounded-bl-none"
        )}
      >
        {message}
      </div>
    </div>
  );
}
