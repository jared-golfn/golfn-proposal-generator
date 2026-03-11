"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";
import { moneyMapLayers, setupTiers, contentExtensions, managementFunctions, managementTiers, impressionBanks, performanceEconomics } from "@/lib/content";

function MoneyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="mb-20">
      <Reveal><h3 className="font-display text-2xl font-semibold mb-8">Commercial Model</h3></Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {moneyMapLayers.map((layer, i) => (
          <motion.div key={layer.name} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }} transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative bg-gn-card border border-gn-grid rounded-xl p-6 overflow-hidden group hover:border-gn-green-dark/40 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${layer.color}, ${layer.color}88)` }} />
            <div className="text-xs font-mono text-gn-muted mb-4 uppercase tracking-wider">Layer {i + 1}</div>
            <div className="text-xl font-display font-bold text-gn-white mb-1">{layer.name}</div>
            <div className="text-sm text-gn-white-faint mb-4">{layer.type}</div>
            <div className="text-lg font-display font-semibold" style={{ color: layer.color }}>{layer.range}</div>
            {i < moneyMapLayers.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-gn-bg border border-gn-grid flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1L7 5L3 9" stroke="#4A4A4C" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SetupLayer() {
  return (
    <div className="mb-16">
      <Reveal>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-xs font-mono text-gn-green-dark uppercase tracking-wider">Layer 1</span>
          <h4 className="font-display text-xl font-semibold">Program Setup</h4>
          <span className="text-sm text-gn-white-faint">One-time</span>
        </div>
      </Reveal>
      <StaggerChildren className="grid md:grid-cols-3 gap-4 mb-8" staggerDelay={0.08}>
        {setupTiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <div className="bg-gn-card border border-gn-grid rounded-xl p-6 gradient-accent-top">
              <div className="font-display font-bold text-lg mb-1">{tier.name}</div>
              <div className="text-gradient text-xl font-display font-bold mb-3">{tier.range}</div>
              <div className="text-sm text-gn-white-faint">{tier.description}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <Reveal delay={0.2}>
        <div className="bg-gn-card/50 border border-gn-grid rounded-lg p-5">
          <h5 className="text-sm font-semibold text-gn-white-faint uppercase tracking-wider mb-4">Premium Content Extensions</h5>
          <div className="flex flex-wrap gap-4">
            {contentExtensions.map((ext) => (
              <div key={ext.name} className="flex items-center gap-3">
                <span className="text-sm text-gn-white-dim">{ext.name}</span>
                <span className="text-sm font-mono text-gn-green-web">{ext.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function ManagementLayer() {
  return (
    <div className="mb-16">
      <Reveal>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-xs font-mono text-gn-green-web uppercase tracking-wider">Layer 2</span>
          <h4 className="font-display text-xl font-semibold">Managed Program Delivery</h4>
          <span className="text-sm text-gn-white-faint">Recurring</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}><h5 className="text-sm font-semibold text-gn-white-faint uppercase tracking-wider mb-4">Monthly management fee funds four functions</h5></Reveal>
      <StaggerChildren className="grid md:grid-cols-2 gap-4 mb-8" staggerDelay={0.08}>
        {managementFunctions.map((fn, i) => (
          <StaggerItem key={fn.name}>
            <div className="bg-gn-card border border-gn-grid rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-gn-green-dark mt-1">0{i + 1}</span>
                <div>
                  <div className="font-semibold text-gn-white mb-1">{fn.name}</div>
                  <div className="text-sm text-gn-white-faint">{fn.description}</div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="grid md:grid-cols-2 gap-8">
        <Reveal delay={0.2}>
          <div>
            <h5 className="text-sm font-semibold text-gn-white-faint uppercase tracking-wider mb-4">Management Fee Tiers</h5>
            <div className="space-y-3">
              {managementTiers.map((tier) => (
                <div key={tier.name} className="flex items-center justify-between bg-gn-card border border-gn-grid rounded-lg px-5 py-4">
                  <span className="font-medium">{tier.name}</span>
                  <span className="font-display font-bold text-gradient">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div>
            <h5 className="text-sm font-semibold text-gn-white-faint uppercase tracking-wider mb-4">Impression Banks</h5>
            <div className="space-y-3">
              {impressionBanks.map((bank) => (
                <div key={bank.volume} className="flex items-center justify-between bg-gn-card border border-gn-grid rounded-lg px-5 py-4">
                  <span className="font-medium">{bank.volume} impressions</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gn-white-faint">{bank.cpm} CPM</span>
                    <span className="font-display font-bold text-gn-green-web">{bank.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.4}>
        <div className="mt-6 p-4 border border-gn-grid/60 rounded-lg bg-gn-card/30">
          <p className="text-sm text-gn-white-faint italic">Management fee funds people and operations. Media/impression spend funds delivery volume. These are separate by design.</p>
        </div>
      </Reveal>
    </div>
  );
}

function PerformanceLayer() {
  const pref = performanceEconomics.preferred;
  return (
    <div className="mb-16">
      <Reveal>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-xs font-mono text-gn-gold uppercase tracking-wider">Layer 3</span>
          <h4 className="font-display text-xl font-semibold">Performance Economics</h4>
          <span className="text-sm text-gn-white-faint">Variable</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="bg-gn-card border border-gn-grid rounded-xl p-8 glow-green-soft mb-6">
          <div className="flex items-center gap-2 mb-2"><span className="text-xs font-mono uppercase tracking-wider text-gn-gold">Preferred</span></div>
          <h5 className="font-display text-xl font-bold mb-2">{pref.name}</h5>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-display font-bold text-gradient">{pref.range}</span>
            <span className="text-sm text-gn-white-faint">{pref.preferredRange} preferred · {pref.floor} floor</span>
          </div>
          <p className="text-sm text-gn-white-dim leading-relaxed mb-4">{pref.description}</p>
          <p className="text-sm text-gn-white-faint italic">{pref.note}</p>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex flex-wrap gap-3">
          <span className="text-sm text-gn-white-faint mr-2">Alternative structures:</span>
          {performanceEconomics.alternatives.map((alt) => (
            <span key={alt.name} className="inline-flex items-center gap-2 px-4 py-2 bg-gn-card border border-gn-grid rounded-full text-sm">
              <span className="text-gn-white-dim">{alt.name}</span>
              <span className="font-mono text-gn-green-web">{alt.range}</span>
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function CommercialSection() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">02 — Commercial Model</span></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-4">Three-Layer<br /><span className="text-gradient">Commercial Structure</span></h2></Reveal>
        <Reveal delay={0.15}><p className="text-lg text-gn-white-dim max-w-2xl mb-16 leading-relaxed">Setup gets you started. Management keeps it running. Media drives delivery. Performance aligns incentives.</p></Reveal>
        <MoneyMap />
        <SetupLayer />
        <ManagementLayer />
        <PerformanceLayer />
      </div>
    </section>
  );
}
