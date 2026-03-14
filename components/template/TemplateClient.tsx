'use client'

import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { S01_Hero } from './S01_Hero'
import { S02_WhyBrands } from './S02_WhyBrands'
import { S03_HowItWorks } from './S03_HowItWorks'
import { S04_LaunchCampaign } from './S04_LaunchCampaign'
import { S05_QualifiedInterest } from './S05_QualifiedInterest'
import { S06_PostCampaign } from './S06_PostCampaign'
import { S07_MonthlyReporting } from './S07_MonthlyReporting'
import { S08_WaysToWork } from './S08_WaysToWork'
import { S09_WhatWeNeed } from './S09_WhatWeNeed'
import { S10_DataDifference } from './S10_DataDifference'
import { S11_FAQ } from './S11_FAQ'
import { S12_FinalCTA } from './S12_FinalCTA'
import { SectionDivider } from './SectionDivider'

const navSections = [
  { id: 'top', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'ways-to-work', label: 'Pricing' },
  { id: 'faq-section', label: 'FAQ' },
]

export function TemplateClient({ partner }: { partner: PartnerData }) {
  const [generating, setGenerating] = useState(false)

  const downloadPDF = async () => {
    if (generating) return
    setGenerating(true)

    try {
      const html2pdf = (await import('html2pdf.js')).default

      const element = document.getElementById('proposal-content')
      if (!element) {
        setGenerating(false)
        return
      }

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `GolfN-${partner.partnerName.replace(/\s+/g, '-')}-Partnership-Proposal.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0f1217',
          logging: false,
          letterRendering: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: element.scrollWidth,
          onclone: (clonedDoc: Document) => {
            const clonedEl = clonedDoc.getElementById('proposal-content')
            if (clonedEl) clonedEl.style.background = '#0f1217'
            const pdfBtn = clonedDoc.getElementById('pdf-download-btn')
            if (pdfBtn) pdfBtn.style.display = 'none'
            const nav = clonedDoc.querySelector('nav[class*="fixed"]') as HTMLElement
            if (nav) nav.style.display = 'none'
            const accentLine = clonedDoc.querySelector('.accent-line') as HTMLElement
            if (accentLine) accentLine.style.display = 'none'
            const allEls = clonedDoc.querySelectorAll('*') as NodeListOf<HTMLElement>
            allEls.forEach(el => {
              const style = window.getComputedStyle(el)
              if (parseFloat(style.opacity) < 1) el.style.opacity = '1'
              el.style.transform = 'none'
              el.style.transition = 'none'
              el.style.animation = 'none'
            })
            const gradientEls = clonedDoc.querySelectorAll('.text-gradient') as NodeListOf<HTMLElement>
            gradientEls.forEach(el => {
              el.style.background = 'none'
              el.style.webkitBackgroundClip = 'unset'
              el.style.webkitTextFillColor = '#00ff9d'
              el.style.color = '#00ff9d'
            })
          },
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      }

      await html2pdf().from(element).set(opt).save()
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <main className="relative bg-[#0f1217]">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      {/* Right-side nav (desktop only) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8">
        {navSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-5 justify-end">
            <span className="text-lg font-semibold text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
            <img src={images.logoIcon} alt="" className="block w-7 h-7 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        ))}
      </nav>

      <div id="proposal-content">
        <div id="top"><S01_Hero partner={partner} /></div>
        <SectionDivider />
        <S02_WhyBrands partner={partner} />
        <SectionDivider label="See the process" targetId="how-it-works" />
        <S03_HowItWorks partner={partner} />
        <SectionDivider />
        <S04_LaunchCampaign partner={partner} />
        <SectionDivider />
        <S05_QualifiedInterest partner={partner} />
        <SectionDivider />
        <S06_PostCampaign partner={partner} />
        <SectionDivider />
        <S07_MonthlyReporting partner={partner} />
        <SectionDivider />
        <S09_WhatWeNeed partner={partner} />
        <SectionDivider label="See pricing" targetId="ways-to-work" />
        <S08_WaysToWork partner={partner} />
        <SectionDivider />
        <S10_DataDifference partner={partner} />
        <SectionDivider />
        <div id="faq-section"><S11_FAQ partner={partner} /></div>
        <SectionDivider />
        <S12_FinalCTA partner={partner} />

        <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
          <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
          <p className="text-[#4b5563] text-base">Confidential &mdash; Prepared for {partner.partnerName} by GolfN</p>
          <p className="text-[#2a3347] text-sm mt-2 font-mono">partners.golfn.com</p>
        </footer>
      </div>

      {/* PDF button - icon only on mobile, full text on md+ */}
      <button
        id="pdf-download-btn"
        onClick={downloadPDF}
        disabled={generating}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#00ff9d] text-black font-semibold rounded-full shadow-2xl hover:bg-[#00e08a] transition z-50 flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait px-4 py-3 md:px-6 md:py-3"
      >
        {generating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="hidden md:inline">Generating PDF...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span className="hidden md:inline">Download Proposal as PDF</span>
          </>
        )}
      </button>
    </main>
  )
}
