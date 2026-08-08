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
      borderColor: "border-amber-200/60 hover:border-amber-300/80",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200/60",
      iconBg: "bg-amber-100 text-amber-600",
    },
    {
      tier: "Silver",
      sponsors: [
        { name: "Resend", icon: "R" },
        { name: "Linear", icon: "L" },
        { name: "Raycast", icon: "R" },
      ],
      borderColor: "border-gray-200/60 hover:border-gray-300/80",
      badgeColor: "bg-gray-100 text-gray-600 border-gray-200/60",
      iconBg: "bg-gray-100 text-gray-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-red-200/60 backdrop-blur-sm shadow-sm"
          >
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Sponsors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading"
          >
            Supported by modern{" "}
            <span className="text-gradient">tech leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base"
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
                <Award className={`w-4 h-4 ${tierGroup.tier === "Gold" ? "text-amber-500" : "text-gray-400"}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${tierGroup.tier === "Gold" ? "text-amber-600" : "text-gray-400"}`}>
                  {tierGroup.tier} Sponsors
                </span>
                <div className="flex-1 h-px bg-gray-200/60" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tierGroup.sponsors.map((sponsor, idx) => (
                  <div
                    key={idx}
                    className={`group p-5 rounded-2xl glass-card ${tierGroup.borderColor} transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4 shadow-3d-hover`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${tierGroup.iconBg} flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform`}>
                      {sponsor.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{sponsor.name}</div>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${tierGroup.badgeColor} inline-block mt-1`}>
                        {tierGroup.tier}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-500 transition-colors" />
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
            className="btn-water inline-flex items-center gap-2.5"
            style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.75) 0%, rgba(249, 115, 22, 0.65) 50%, rgba(239, 68, 68, 0.55) 100%)' }}
          >
            <Heart className="w-4 h-4 fill-white relative z-10" />
            <span className="relative z-10">Become a Sponsor</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
