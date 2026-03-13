'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
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
  const [downloading, setDownloading] = useState(false)

  const downloadPDF = async () => {
    setDownloading(true)
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])
      const content = document.getElementById('main-content')
      if (!content) return
      const canvas = await html2canvas(content, { scale: 2, logging: false, useCORS: true })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const imgWidth = pdfWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdf.internal.pageSize.getHeight()
      while (heightLeft > 0) {
        position -= pdf.internal.pageSize.getHeight()
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pdf.internal.pageSize.getHeight()
      }
      pdf.save(`GolfN-${partner.partnerName.replace(/\\s+/g, '-')}-Partnership-Proposal.pdf`)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <main id="main-content" className="relative bg-[#0f1217]">
      <div className="accent-line fixed top-0 left-0 right-0 z-50" />

      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-5">
        {navSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-4 justify-end">
            <span className="text-base font-medium text-[#4b5563] opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">{s.label}</span>
            <span className="block w-2.5 h-2.5 rounded-full bg-[#2a3347] group-hover:bg-[#00ff9d] transition-colors shrink-0" />
          </a>
        ))}
      </nav>

      {/* S1: Hero */}
      <div id="top"><S01_Hero partner={partner} /></div>
      <SectionDivider />

      {/* S2: Why Brands */}
      <S02_WhyBrands partner={partner} />
      <SectionDivider label="See the process" targetId="how-it-works" />

      {/* S3: How It Works */}
      <S03_HowItWorks partner={partner} />
      <SectionDivider />

      {/* S4: Launch Campaign */}
      <S04_LaunchCampaign partner={partner} />
      <SectionDivider />

      {/* S5: Attention, Intent, Cohort */}
      <S05_QualifiedInterest partner={partner} />
      <SectionDivider />

      {/* S6: Post-Campaign Activation */}
      <S06_PostCampaign partner={partner} />
      <SectionDivider />

      {/* S7: Monthly Reporting */}
      <S07_MonthlyReporting partner={partner} />
      <SectionDivider />

      {/* S8: What We Need (was S09) */}
      <S09_WhatWeNeed partner={partner} />
      <SectionDivider label="See pricing" targetId="ways-to-work" />

      {/* S9: Ways to Work / Pricing (was S08) */}
      <S08_WaysToWork partner={partner} />
      <SectionDivider />

      {/* S10: Data Difference */}
      <S10_DataDifference partner={partner} />
      <SectionDivider />

      {/* S11: FAQ */}
      <div id="faq-section"><S11_FAQ partner={partner} /></div>
      <SectionDivider />

      {/* S12: Final CTA */}
      <S12_FinalCTA partner={partner} />

      <footer className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 text-center border-t border-[#2a3347]/50">
        <img src={images.logo} alt="GolfN" className="h-8 md:h-10 w-auto mx-auto mb-4 opacity-30" />
        <p className="text-[#4b5563] text-base">Confidential &mdash; Prepared for {partner.partnerName} by GolfN</p>
        <p className="text-[#2a3347] text-sm mt-2 font-mono">Verified Golfers &middot; Measurable Progression &middot; Aligned Incentives</p>
      </footer>

      {/* Download PDF button */}
      <button
        onClick={downloadPDF}
        disabled={downloading}
        className="fixed bottom-8 right-8 bg-[#00ff9d] text-black font-semibold px-6 py-3 rounded-full shadow-2xl hover:bg-[#00e08a] transition z-50 flex items-center gap-2 disabled:opacity-50"
      >
        <Download className="w-5 h-5" />
        {downloading ? 'Generating...' : 'Download PDF'}
      </button>
    </main>
  )
}
