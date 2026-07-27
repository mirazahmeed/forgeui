import Link from "next/link";
import { Sparkles, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-lg">
        <div className="text-8xl font-extrabold text-gradient font-heading">404</div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Try browsing our components, templates, or docs.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-purple-900/30 transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/components"
            className="px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 text-gray-200 font-semibold text-sm flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            Browse Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
