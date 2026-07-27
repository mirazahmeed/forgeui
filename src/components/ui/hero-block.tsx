import * as React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroBlock({
  badge = "Next-Gen Component Ecosystem",
  title = "Build Better Apps in Half the Time",
  description = "A curated collection of production-ready components, templates, and developer tools built with Next.js 15 and Tailwind CSS.",
  primaryAction = "Get Started",
  secondaryAction = "Documentation",
  className,
}: {
  badge?: string;
  title?: string;
  description?: string;
  primaryAction?: string;
  secondaryAction?: string;
  className?: string;
}) {
  return (
    <div className={cn("py-16 px-6 text-center space-y-6 max-w-3xl mx-auto relative", className)}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
        <span>{badge}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading leading-tight">
        {title}
      </h1>

      <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Button variant="glow" size="lg">
          {primaryAction} <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>
        <Button variant="outline" size="lg">
          {secondaryAction}
        </Button>
      </div>
    </div>
  );
}
