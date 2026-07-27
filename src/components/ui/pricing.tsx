import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./button";

export function PricingCard({
  plan,
  price,
  features,
  isPopular,
}: {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-2xl bg-gray-900 border ${
        isPopular ? "border-purple-500/80 shadow-2xl glow-purple" : "border-gray-800"
      } space-y-5 relative text-left w-full`}
    >
      {isPopular && (
        <span className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
          Most Popular
        </span>
      )}
      <div>
        <h3 className="text-sm font-semibold text-gray-400">{plan}</h3>
        <div className="text-4xl font-extrabold text-white mt-1">
          {price} <span className="text-xs text-gray-500 font-normal">/ mo</span>
        </div>
      </div>
      <ul className="space-y-2.5 text-xs text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {f}
          </li>
        ))}
      </ul>
      <Button variant={isPopular ? "glow" : "primary"} className="w-full">
        Subscribe Now
      </Button>
    </div>
  );
}
