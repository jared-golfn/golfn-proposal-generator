'use client'

import { motion } from 'framer-motion'

const GOLFN_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/01993a36b5ab01fe29dba0492dd66aea65b2482d-3798x860.png'

export function SrixonFooter() {
  return (
    <footer className="py-16 md:py-20 border-t border-[#2a3347]/40 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={GOLFN_LOGO} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-6 opacity-60" />
          <p className="text-sm text-[#9ca3af] mb-2">Prepared for <span className="text-white font-semibold">Srixon / Cleveland Golf</span> &middot; May 2026</p>
          <p className="text-sm text-[#6b7280] mb-4">Questions? Contact <a href="mailto:jared@golfn.com" className="text-[#00ff9d] hover:underline">jared@golfn.com</a></p>
          <p className="text-xs text-[#4b5563]">Data sources: Shopify Admin, Amplitude Analytics, Meta Ads Manager, Braze CRM, GolfN Sweepstakes Admin</p>
        </motion.div>
      </div>
    </footer>
  )
}
