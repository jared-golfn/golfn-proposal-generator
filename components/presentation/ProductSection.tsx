"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { productDistinctions, dailyGrindPhases } from "@/lib/content";

function ProductCard({ product, index }: { product: typeof productDistinctions.dailyGrind; index: number }) {
  return (
    <Reveal delay={0.1 + index * 0.15}>
      <div className="bg-gn-card border border-gn-grid rounded-2xl p-8 relative overflow-hidden group hover:border-gn-green-dark/30 transition-colors">
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: index === 0 ? "linear-gradient(90deg, #17A455, #68C072)" : "linear-gradient(90deg, #8DC54A, #BFC951)" }} />
        <div className="mb-6">
          <h3 className="font-display text-2xl font-bold text-gn-white mb-1">{product.name}</h3>
          <p className="text-sm font-mono text-gn-green-web">{product.tagline}</p>
        </div>
        <p className="text-gn-white-dim leading-relaxed mb-6">{product.description}</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gn-bg border border-gn-grid rounded-lg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 4L5.5 9.5L3 7" stroke="#BFC951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="text-sm text-gn-white-faint">{product.notThis}</span>
        </div>
      </div>
    </Reveal>
  );
}

function DailyGrindEvolution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="mt-20">
      <Reveal>
        <h3 className="font-display text-2xl font-semibold mb-3">Daily Grind Economics Evolution</h3>
        <p className="text-gn-white-dim mb-8 max-w-2xl">Billing structure evolves as partnership matures — from managed to performance-led.</p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {dailyGrindPhases.map((phase, i) => (
          <motion.div key={phase.phase} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }} className="relative bg-gn-card border border-gn-grid rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: `linear-gradient(135deg, ${i === 0 ? "#17A455" : i === 1 ? "#68C072" : "#8DC54A"}, ${i === 0 ? "#68C072" : i === 1 ? "#8DC54A" : "#BFC951"})`, color: "#0F0F10" }}>{i + 1}</div>
              <div><div className="font-display font-semibold text-gn-white">{phase.phase}</div><div className="text-xs font-mono text-gn-green-web">{phase.model}</div></div>
            </div>
            <p className="text-sm text-gn-white-dim leading-relaxed">{phase.description}</p>
            {i < dailyGrindPhases.length - 1 && (
              <div className="hidden md:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-gn-bg border border-gn-grid items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1L7 5L3 9" stroke="#4A4A4C" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProductSection() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gn-grid to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">04 — Core Products</span></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">Two Activation Engines</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard product={productDistinctions.dailyGrind} index={0} />
          <ProductCard product={productDistinctions.learnAndEarn} index={1} />
        </div>
        <DailyGrindEvolution />
      </div>
    </section>
  );
}
