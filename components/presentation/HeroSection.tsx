"use client";

import { motion } from "framer-motion";
import { platformMetrics } from "@/lib/content";

export function HeroSection({ partnerName }: { partnerName?: string }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gn-green-dark/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gn-green-light/6 blur-[100px]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="h-[3px] w-32 mb-12 origin-left" style={{ background: "linear-gradient(90deg, #17A455, #8DC54A)" }} />
        {partnerName && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium font-mono tracking-wider uppercase bg-gn-card border border-gn-grid text-gn-white-dim">Prepared for {partnerName}</span>
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          <span className="text-gn-white">Partner</span><br /><span className="text-gradient">Presentation</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="text-xl md:text-2xl text-gn-white-dim max-w-2xl leading-relaxed font-light mb-16">
          Premium golf-specific demand generation, activation, and customer progression — built for verified golfers.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platformMetrics.slice(0, 4).map((metric, i) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }} className="bg-gn-card/80 backdrop-blur-sm border border-gn-grid rounded-xl p-5">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{metric.value}</div>
              <div className="text-sm text-gn-white-faint font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gn-white-faint font-mono uppercase tracking-widest">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-5 h-8 rounded-full border-2 border-gn-grid flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-gn-green-web" />
        </motion.div>
      </motion.div>
    </section>
  );
}
