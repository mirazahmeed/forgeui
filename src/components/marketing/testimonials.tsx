"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Lead Frontend Engineer @ Veloce",
      avatar: "AR",
      content: "ForgeUI completely transformed how fast we ship landing pages and web apps. The component quality and Framer Motion integration are unmatched.",
      rating: 5,
      gradient: "from-purple-500 to-fuchsia-400",
    },
    {
      name: "Sarah Chen",
      role: "Founder & Product Designer",
      avatar: "SC",
      content: "The dark mode styling and glassmorphic aesthetic look so good right out of the box. No more spending hours tweaking Tailwind classes.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      name: "Marcus Vance",
      role: "Fullstack Developer",
      avatar: "MV",
      content: "The npx forgeui CLI makes adding components seamless into existing Next.js 15 projects. It's like shadcn/ui meets Magic UI.",
      rating: 5,
      gradient: "from-fuchsia-500 to-purple-400",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/50" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-purple-300/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-cyan-300/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-amber-200/60 backdrop-blur-sm shadow-sm"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Developer Praise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-heading"
          >
            Loved by developers{" "}
            <span className="text-gradient">worldwide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg"
          >
            Here is what engineers and creators say about building with ForgeUI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1200">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative"
            >
              <div className="h-full p-7 rounded-2xl glass-card transition-all duration-500 space-y-5 flex flex-col justify-between hover:-translate-y-2 shadow-3d-hover card-3d">
                {/* Quote icon */}
                <div className="absolute top-5 right-5 text-gray-200 group-hover:text-purple-200 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-gray-200/60">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.gradient} flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/10`}>
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
