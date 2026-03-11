"use client";

import { Reveal, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";
import { positioning, platformMetrics } from "@/lib/content";

export function PositioningSection() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">01 — Platform</span></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-8">{positioning.headline}</h2></Reveal>
        <Reveal delay={0.2}><p className="text-xl text-gn-white-dim max-w-2xl mb-16 leading-relaxed">{positioning.subhead}</p></Reveal>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Reveal delay={0.3}>
            <div>
              <h3 className="font-display text-lg font-semibold text-gn-white-faint uppercase tracking-wider mb-6">What GolfN is not</h3>
              <StaggerChildren className="space-y-4" staggerDelay={0.08}>
                {positioning.notList.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-4 group">
                      <div className="w-8 h-[2px] bg-gn-muted group-hover:bg-red-400/60 transition-colors" />
                      <span className="text-lg text-gn-white-dim group-hover:text-gn-white-faint transition-colors line-through decoration-gn-muted">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div>
              <h3 className="font-display text-lg font-semibold text-gn-green-web uppercase tracking-wider mb-6">What GolfN is</h3>
              <div className="space-y-4">
                {["Verified golfer demand generation", "First-party intent signal platform", "Measurable progression tracking", "Fuller-funnel attribution engine"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-[2px]" style={{ background: "linear-gradient(90deg, #17A455, #8DC54A)" }} />
                    <span className="text-lg text-gn-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}><h3 className="font-display text-2xl font-semibold mb-8">Platform at a Glance</h3></Reveal>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.06}>
          {platformMetrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="bg-gn-card border border-gn-grid rounded-xl p-6 hover:border-gn-green-dark/40 transition-colors group">
                <div className="text-2xl md:text-3xl font-display font-bold text-gn-white group-hover:text-gradient transition-all mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gn-white-faint mb-1">{metric.label}</div>
                {metric.detail && <div className="text-xs text-gn-muted">{metric.detail}</div>}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
