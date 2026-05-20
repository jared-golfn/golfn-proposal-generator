'use client'

import { motion } from 'framer-motion'

const GOLFN_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/01993a36b5ab01fe29dba0492dd66aea65b2482d-3798x860.png'

interface NavItem { label: string; href: string }

const navItems: NavItem[] = [
  { label: 'Executive Summary', href: '#summary' },
  { label: 'Why This Is Working', href: '#highlights' },
  { label: 'Sweepstakes', href: '#sweepstakes' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Audiences', href: '#audiences' },
]

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  const target = document.getElementById(href.replace('#', ''))
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HypericeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2a1e] to-[#1a3d2b]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full bg-white/[0.03]" />
        <div className="absolute bottom-[-120px] left-[-60px] w-[500px] h-[500px] rounded-full bg-white/[0.02]" />
      </div>
      <div className="relative z-10 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 md:gap-6 mb-10 md:mb-14">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">Hyperice</span>
            <span className="text-[#6fcf97] text-xl font-bold">&times;</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={GOLFN_LOGO} alt="GolfN" className="h-6 md:h-8 w-auto opacity-80" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#6fcf97] mb-6">Master Campaign Wrap Report</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-5xl text-white">
            Partnership Performance{' '}<span className="text-[#6fcf97]">&mdash; Nov 2025 to Apr 2026</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg md:text-xl text-white/60 max-w-3xl leading-8 mb-6">
            Two sweepstakes activations, marketplace storefront performance, and verified-golfer audience profile &mdash; all powered by first-party data.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/40 mb-10 md:mb-14">
            <div><span className="text-white/60 font-semibold">Partner:</span> Hyperice</div>
            <div><span className="text-white/60 font-semibold">Platform:</span> GolfN Mobile App</div>
            <div><span className="text-white/60 font-semibold">Period:</span> Nov 2025 &ndash; Apr 2026</div>
            <div><span className="text-white/60 font-semibold">Audience:</span> 100% verified golfers</div>
          </motion.div>
          <motion.nav initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="flex flex-wrap gap-3" aria-label="Page sections">
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-white hover:bg-[#6fcf97]/10 hover:border-[#6fcf97]/40 transition-all duration-200">
                <span className="text-[10px] md:text-xs font-mono text-white/40 group-hover:text-[#6fcf97] tracking-[0.18em] transition-colors">0{i + 1}</span>
                <span>{item.label}</span>
                <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#6fcf97] transition-colors" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  )
}
