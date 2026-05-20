'use client'

import { motion } from 'framer-motion'

const SRIXON_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/b906a6cdb50fb6de0f3e067f0155358a24149354-6098x1950.png'
const CLEVELAND_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/847bd002ed8b4e5d096ee77506af04cb84692135-3725x1196.png'
const GOLFN_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/01993a36b5ab01fe29dba0492dd66aea65b2482d-3798x860.png'
const HERO_IMAGE = 'https://cdn.sanity.io/images/e3wja34v/production/3490ece88940e68c4c8879d747b85bc5b8a668e2-1920x1080.png'

interface NavItem { label: string; href: string }

const navItems: NavItem[] = [
  { label: 'Executive Summary', href: '#summary' },
  { label: 'Sweepstakes', href: '#sweepstakes' },
  { label: 'Multi-Channel Reach', href: '#channels' },
  { label: 'Feature Effect', href: '#feature-effect' },
  { label: 'Marketplace Sales', href: '#sales' },
]

function scrollToSection(e: React.MouseEvent&lt;HTMLAnchorElement&gt;, href: string) {
  e.preventDefault()
  const target = document.getElementById(href.replace('#', ''))
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function SrixonHero() {
  return (
    &lt;section className="relative overflow-hidden"&gt;
      &lt;div className="absolute inset-0 z-0"&gt;
        {/* eslint-disable-next-line @next/next/no-img-element */}
        &lt;img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-30" /&gt;
        &lt;div className="absolute inset-0 bg-gradient-to-b from-[#0f1217]/60 via-[#0f1217]/80 to-[#0f1217]" /&gt;
      &lt;/div&gt;
      &lt;div className="relative z-10 pt-16 md:pt-24 pb-12 md:pb-20"&gt;
        &lt;div className="max-w-7xl mx-auto px-6 md:px-12"&gt;
          &lt;motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 md:gap-6 mb-10 md:mb-14"&gt;
            {/* eslint-disable-next-line @next/next/no-img-element */}
            &lt;img src={SRIXON_LOGO} alt="Srixon" className="h-7 md:h-9 w-auto" style={{ filter: 'brightness(0) invert(1)' }} /&gt;
            &lt;span className="text-[#6b7280] text-lg font-light"&gt;|&lt;/span&gt;
            {/* eslint-disable-next-line @next/next/no-img-element */}
            &lt;img src={CLEVELAND_LOGO} alt="Cleveland Golf" className="h-6 md:h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} /&gt;
            &lt;span className="text-[#00ff9d] text-xl font-bold"&gt;&amp;times;&lt;/span&gt;
            {/* eslint-disable-next-line @next/next/no-img-element */}
            &lt;img src={GOLFN_LOGO} alt="GolfN" className="h-6 md:h-8 w-auto opacity-80" /&gt;
          &lt;/motion.div&gt;
          &lt;motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-6"&gt;Brand Campaign Report&lt;/motion.p&gt;
          &lt;motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-5xl"&gt;
            Partnership Performance{' '}&lt;span className="text-gradient"&gt;— Aug 2025 to May 2026&lt;/span&gt;
          &lt;/motion.h1&gt;
          &lt;motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-6"&gt;
            Sweepstakes, multi-channel reach, and Points Exchange marketplace sales across the full Srixon &amp; Cleveland Golf portfolio.
          &lt;/motion.p&gt;
          &lt;motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b7280] mb-10 md:mb-14"&gt;
            &lt;div&gt;&lt;span className="text-[#9ca3af] font-semibold"&gt;Partner:&lt;/span&gt; Srixon / Cleveland Golf (SRI Sports)&lt;/div&gt;
            &lt;div&gt;&lt;span className="text-[#9ca3af] font-semibold"&gt;Platform:&lt;/span&gt; GolfN Mobile App&lt;/div&gt;
            &lt;div&gt;&lt;span className="text-[#9ca3af] font-semibold"&gt;Period:&lt;/span&gt; Aug 2025 – May 2026&lt;/div&gt;
            &lt;div&gt;&lt;span className="text-[#9ca3af] font-semibold"&gt;Prepared by:&lt;/span&gt; GolfN Growth Team&lt;/div&gt;
          &lt;/motion.div&gt;
          &lt;motion.nav initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="flex flex-wrap gap-3" aria-label="Page sections"&gt;
            {navItems.map((item, i) =&gt; (
              &lt;a key={item.href} href={item.href} onClick={(e) =&gt; scrollToSection(e, item.href)} className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#1a1f2e] border border-[#2a3347] text-sm md:text-base font-medium text-white hover:bg-[#00ff9d]/10 hover:border-[#00ff9d]/40 transition-all duration-200"&gt;
                &lt;span className="text-[10px] md:text-xs font-mono text-[#6b7280] group-hover:text-[#00ff9d] tracking-[0.18em] transition-colors"&gt;0{i + 1}&lt;/span&gt;
                &lt;span&gt;{item.label}&lt;/span&gt;
                &lt;svg className="w-3.5 h-3.5 text-[#6b7280] group-hover:text-[#00ff9d] transition-colors" viewBox="0 0 14 14" fill="none" aria-hidden&gt;&lt;path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /&gt;&lt;/svg&gt;
              &lt;/a&gt;
            ))}
          &lt;/motion.nav&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
