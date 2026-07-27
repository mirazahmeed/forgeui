"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heart, Award, ExternalLink } from "lucide-react";

export function Sponsors() {
  const tiers = [
    {
      tier: "Gold",
      sponsors: [
        { name: "Vercel Labs", icon: "▲" },
        { name: "Supabase", icon: "⚡" },
        { name: "Stripe", icon: "S" },
      ],
      borderColor: "border-amber-700/40 hover:border-amber-500/60",
      badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/40",
      iconBg: "bg-amber-500/15 text-amber-400",
    },
    {
      tier: "Silver",
      sponsors: [
        { name: "Resend", icon: "R" },
        { name: "Linear", icon: "L" },
        { name: "Raycast", icon: "R" },
      ],
      borderColor: "border-gray-600/40 hover:border-gray-500/60",
      badgeColor: "bg-gray-800/60 text-gray-300 border-gray-700/40",
      iconBg: "bg-gray-700/40 text-gray-300",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/40"
          >
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Sponsors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white font-heading"
          >
            Supported by modern{" "}
            <span className="text-gradient">tech leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            ForgeUI is open source and free forever, thanks to our generous GitHub Sponsors.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {tiers.map((tierGroup, tierIdx) => (
            <motion.div
              key={tierGroup.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIdx * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className={`w-4 h-4 ${tierGroup.tier === "Gold" ? "text-amber-400" : "text-gray-400"}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${tierGroup.tier === "Gold" ? "text-amber-400" : "text-gray-400"}`}>
                  {tierGroup.tier} Sponsors
                </span>
                <div className="flex-1 h-px bg-gray-800/60" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tierGroup.sponsors.map((sponsor, idx) => (
                  <div
                    key={idx}
                    className={`group p-5 rounded-2xl bg-gray-900/40 border ${tierGroup.borderColor} transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${tierGroup.iconBg} flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform`}>
                      {sponsor.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{sponsor.name}</div>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${tierGroup.badgeColor} inline-block mt-1`}>
                        {tierGroup.tier}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sponsors"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm shadow-xl shadow-amber-950/30 hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Become a Sponsor</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
