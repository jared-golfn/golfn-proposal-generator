'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, Upload } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { useBusinessNeed } from '@/lib/business-need-context'
import { getNeedById, type ChecklistItem } from '@/lib/business-needs'
import { Fade } from './Fade'

const golfnHandles = [
  'Strategy and campaign architecture',
  'Creative production and distribution',
  'Audience qualification and cohort building',
  'Reporting and optimization',
  'Follow-on activation logic',
  'Monthly management and creative refreshes',
]

const defaultItems: ChecklistItem[] = [
  { id: 'prizes', label: 'Prize inventory (~$4,500 product value)', detail: 'Product for the sweepstakes. Recommended 6 prize tiers.', required: true },
  { id: 'startup', label: 'Startup fee ($2,500 one-time)', detail: 'Covers campaign build, creative, distribution, and 30 days management.', required: true },
  { id: 'assets', label: 'Brand assets (logos, product photos, guidelines)', detail: 'High-res product shots, brand guidelines, approved copy.', required: true },
  { id: 'contact', label: 'Decision-maker point of contact', detail: 'Someone who can approve creative and sign off on launches.', required: true },
  { id: 'affiliate', label: 'Affiliate or wholesale terms (if applicable)', detail: '20%+ affiliate commission or 30%+ wholesale margin.', required: false },
  { id: 'social', label: 'Social handles for co-promotion (optional)', detail: 'Cross-posting amplifies sweepstakes reach.', required: false },
]

export function PitchChecklist({ partner }: { partner: PartnerData }) {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const { selectedNeed } = useBusinessNeed()
  const need = getNeedById(selectedNeed)
  const items = need?.checklistItems || defaultItems

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  const requiredCount = items.filter(i => i.required).length
  const requiredChecked = items.filter(i => i.required && checked.has(i.id)).length
  const allRequiredDone = requiredChecked === requiredCount

  return (
    <section id="next-steps" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4"><Upload className="w-5 h-5 text-[#00ff9d]" /><p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">What We Need</p></div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-4">Ready to go?<br /><span className="text-[#00ff9d]">Let us check.</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-10">GolfN handles strategy, creative, distribution, qualification, and reporting. Here is what we need from you.</p>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-3">
            {items.map((item, i) => (
              <Fade key={item.id} delay={i * 0.04}>
                <button onClick={() => toggle(item.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 group ${
                    checked.has(item.id) ? 'bg-[#001a14]/60 border-[#00ff9d]/30' : 'bg-[#1a1f2e] border-[#2a3347] hover:border-[#00ff9d]/20'
                  }`}>
                  <div className="mt-0.5 shrink-0">
                    {checked.has(item.id) ? (<motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}><CheckCircle className="w-6 h-6 text-[#00ff9d]" /></motion.div>) : (<Circle className="w-6 h-6 text-[#4b5563] group-hover:text-[#6b7280] transition-colors" />)}
                  </div>
                  <div>
                    <p className={`text-base font-semibold transition-colors ${checked.has(item.id) ? 'text-[#00ff9d]' : 'text-white'}`}>
                      {item.label}{!item.required && <span className="text-xs font-normal text-[#6b7280] ml-2">optional</span>}
                    </p>
                    <p className="text-sm text-[#9ca3af] mt-1">{item.detail}</p>
                  </div>
                </button>
              </Fade>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Fade delay={0.2}>
              <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-5"><CheckCircle className="w-5 h-5 text-[#00ff9d]" /><p className="text-lg font-semibold text-white">GolfN Handles</p></div>
                <ul className="space-y-3">
                  {golfnHandles.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[#d1d5db]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#2a3347]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#6b7280]">Required items</span>
                    <span className={`text-sm font-mono font-bold ${allRequiredDone ? 'text-[#00ff9d]' : 'text-white'}`}>{requiredChecked}/{requiredCount}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0f1217] overflow-hidden">
                    <motion.div className="h-full rounded-full bg-[#00ff9d]" initial={{ width: 0 }} animate={{ width: `${requiredCount > 0 ? (requiredChecked / requiredCount) * 100 : 0}%` }} transition={{ duration: 0.3 }} />
                  </div>
                  {allRequiredDone && (<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#00ff9d] font-semibold mt-3">Ready to launch.</motion.p>)}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
