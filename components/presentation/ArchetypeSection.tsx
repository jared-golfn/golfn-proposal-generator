"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { archetypes, thresholds } from "@/lib/content";

function ArchetypeTabs() {
  const [active, setActive] = useState(0);
  const current = archetypes[active];
  return (
    <div className="mb-20">
      <div className="flex flex-wrap gap-2 mb-8">
        {archetypes.map((arch, i) => (
          <button key={arch.name} onClick={() => setActive(i)} className={`relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${active === i ? "bg-gn-card border border-gn-green-dark/40 text-gn-white" : "bg-transparent border border-gn-grid text-gn-white-faint hover:text-gn-white-dim hover:border-gn-muted"}`}>
            {active === i && <motion.div layoutId="activeTab" className="absolute inset-0 rounded-xl border border-gn-green-dark/40 bg-gn-card" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
            {arch.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="bg-gn-card border border-gn-grid rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${active === 0 ? "#17A455" : active === 1 ? "#68C072" : "#8DC54A"}, ${active === 0 ? "#68C072" : active === 1 ? "#8DC54A" : "#BFC951"})` }} />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono text-gn-green-web mb-2">{current.subtitle}</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{current.name}</h3>
              <p className="text-gn-white-dim leading-relaxed mb-8">{current.description}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-gn-bg border border-gn-grid rounded-xl p-5"><div className="text-xs font-mono text-gn-white-faint uppercase tracking-wider mb-2">Stages Covered</div><div className="text-gn-white font-medium">{current.stages}</div></div>
              <div className="bg-gn-bg border border-gn-grid rounded-xl p-5"><div className="text-xs font-mono text-gn-white-faint uppercase tracking-wider mb-2">Management Tier</div><div className="text-gn-white font-medium">{current.managementTier}</div></div>
              <div className="bg-gn-bg border border-gn-grid rounded-xl p-5"><div className="text-xs font-mono text-gn-white-faint uppercase tracking-wider mb-2">Daily Grind Model</div><div className="text-gn-white font-medium">{current.dailyGrind}</div></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Thresholds() {
  return (
    <div>
      <Reveal><h3 className="font-display text-2xl font-semibold mb-8">Partnership Thresholds</h3></Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {thresholds.map((t, i) => (
          <Reveal key={t.label} delay={0.05 * i}>
            <div className="bg-gn-card border border-gn-grid rounded-xl p-6 text-center">
              <div className="text-2xl font-display font-bold text-gradient mb-2">{t.value}</div>
              <div className="text-sm font-medium text-gn-white-faint mb-1">{t.label}</div>
              {t.detail && <div className="text-xs text-gn-muted">{t.detail}</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ArchetypeSection() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gn-grid to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">05 — Partnership Models</span></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-4">Three Partnership<br /><span className="text-gradient">Archetypes</span></h2></Reveal>
        <Reveal delay={0.15}><p className="text-lg text-gn-white-dim max-w-2xl mb-16 leading-relaxed">Every partnership starts somewhere. The model scales with ambition.</p></Reveal>
        <ArchetypeTabs />
        <Thresholds />
      </div>
    </section>
  );
}
