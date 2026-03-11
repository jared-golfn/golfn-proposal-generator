"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { progressionStages } from "@/lib/content";

function getStageColor(index: number, pos: "start" | "end") {
  const t = index / 7;
  if (pos === "start") {
    const r = Math.round(23 + t * (191 - 23));
    const g = Math.round(164 + t * (201 - 164));
    const b = Math.round(85 + t * (81 - 85));
    return `rgb(${r},${g},${b})`;
  } else {
    const r = Math.round(141 + t * (191 - 141));
    const g = Math.round(197 + t * (201 - 197));
    const b = Math.round(74 + t * (81 - 74));
    return `rgb(${r},${g},${b})`;
  }
}

function ProgressionTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeStage, setActiveStage] = useState<number | null>(null);
  return (
    <div ref={ref}>
      <div className="relative">
        <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-[2px]">
          <motion.div initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : { scaleY: 0 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full origin-top" style={{ background: "linear-gradient(180deg, #17A455, #8DC54A, #BFC951)" }} />
        </div>
        <div className="space-y-4">
          {progressionStages.map((stage, i) => {
            const isActive = activeStage === i;
            return (
              <motion.div key={stage.number} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="relative">
                <button onClick={() => setActiveStage(isActive ? null : i)} className="w-full text-left">
                  <div className={`flex items-start gap-5 md:gap-6 p-5 rounded-xl border transition-all duration-300 ${isActive ? "bg-gn-card border-gn-green-dark/40 glow-green-soft" : "bg-transparent border-transparent hover:bg-gn-card/50 hover:border-gn-grid"}`}>
                    <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${isActive ? "text-gn-bg" : "bg-gn-card border-2 border-gn-grid text-gn-white-faint"}`} style={isActive ? { background: `linear-gradient(135deg, ${getStageColor(i, "start")}, ${getStageColor(i, "end")})` } : undefined}>{stage.number}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg font-semibold text-gn-white mb-1">{stage.name}</h4>
                      <p className="text-sm text-gn-white-dim leading-relaxed">{stage.description}</p>
                      <motion.div initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="flex flex-wrap gap-2 mt-4">
                          {stage.channels.map((channel) => (<span key={channel} className="inline-block px-3 py-1 text-xs font-medium bg-gn-bg border border-gn-grid rounded-full text-gn-white-faint">{channel}</span>))}
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <motion.svg animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.2 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke={isActive ? "#68C072" : "#4A4A4C"} strokeWidth="1.5" strokeLinecap="round" /></motion.svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ProgressionSection() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gn-grid to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">03 — Golfer Journey</span></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-4">Eight-Stage<br /><span className="text-gradient">Progression Framework</span></h2></Reveal>
        <Reveal delay={0.15}><p className="text-lg text-gn-white-dim max-w-2xl mb-16 leading-relaxed">From first impression to lifelong advocate. Each stage builds on the last, creating compounding value across the golfer journey.</p></Reveal>
        <ProgressionTimeline />
      </div>
    </section>
  );
}
