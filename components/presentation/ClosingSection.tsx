"use client";

import { Reveal } from "@/components/ui/Reveal";

export function ClosingSection({ partnerName }: { partnerName?: string }) {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gn-grid to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gn-green-dark/5 blur-[150px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Reveal><span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-gn-green-web mb-6">Next Steps</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            {partnerName ? (<>Let&rsquo;s Build <span className="text-gradient">{partnerName}&rsquo;s</span><br />Program Together</>) : (<>Ready to <span className="text-gradient">Get Started</span>?</>)}
          </h2>
        </Reveal>
        <Reveal delay={0.2}><p className="text-xl text-gn-white-dim leading-relaxed mb-12 max-w-2xl mx-auto">GolfN partnerships are custom-built for each brand. The framework above defines the structure — the specifics are designed around your goals, your products, and your audience.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="mailto:jared@golfn.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-gn-bg transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #17A455, #8DC54A)" }}>
              Contact Jared Phillips
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <span className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-medium border border-gn-grid text-gn-white-dim">jared@golfn.com</span>
          </div>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-24 pt-8 border-t border-gn-grid/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gn-muted">&copy; {new Date().getFullYear()} GolfN Inc. Confidential.</div>
              <div className="text-sm text-gn-muted font-mono">golfn.com</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
