'use client'

import { motion } from 'framer-motion'
import { images } from '@/lib/images'

interface NavItem {
  label: string
  href: string
  /** When present, the pill renders this logo image instead of the text label.
   *  Used for partner-branded sections (e.g. the Miura case study) so we
   *  honor the partner's actual brand mark in the navigation. */
  logoUrl?: string
  logoAlt?: string
}

const navItems: NavItem[] = [
  { label: 'The System', href: '#system' },
  { label: 'The Precedent', href: '#precedent' },
  { label: 'In Practice', href: '#in-practice' },
  { label: 'Miura', href: '#miura', logoUrl: images.miuraLogo, logoAlt: 'Miura Golf' },
]

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function EightAMHero() {
  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-6"
        >
          GolfN, Distilled
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight mb-8 max-w-6xl"
        >
          GolfN is the <span className="text-gradient">first rewards-native</span> golf platform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10 md:mb-12"
        >
          A short walk through what GolfN actually is, why it works, and what makes it defensible — punctuated by one real campaign. Read in five minutes.
        </motion.p>

        {/* Section nav pills — smooth-scroll to anchors below.
            Branded pills (e.g. Miura) render the partner logo in place of the
            text label so the partner's brand is honored in the nav. */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-wrap gap-3"
          aria-label="Page sections"
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#1a1f2e] border border-[#2a3347] text-sm md:text-base font-medium text-white hover:bg-[#00ff9d]/10 hover:border-[#00ff9d]/40 transition-all duration-200"
            >
              <span className="text-[10px] md:text-xs font-mono text-[#6b7280] group-hover:text-[#00ff9d] tracking-[0.18em] transition-colors">
                0{i + 1}
              </span>

              {item.logoUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logoUrl}
                    alt={item.logoAlt || item.label}
                    className="h-5 md:h-6 w-auto"
                    style={{ filter: 'invert(1)' }}
                  />
                  {/* Hidden text for screen readers — keeps the pill accessible
                      since the logo image alone doesn't convey "Miura section". */}
                  <span className="sr-only">{item.label}</span>
                </>
              ) : (
                <span>{item.label}</span>
              )}

              <svg
                className="w-3.5 h-3.5 text-[#6b7280] group-hover:text-[#00ff9d] transition-colors"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  )
}
