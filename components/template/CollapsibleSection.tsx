'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CollapsibleSectionProps {
  number?: string
  label?: string
  labelColor?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  defaultOpen?: boolean
  id?: string
}

export function CollapsibleSection({ number, label, labelColor, title, subtitle, children, defaultOpen = false, id }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const lColor = labelColor || '#00ff9d'

  return (
    <div id={id} className="border-b border-[#2a3347]/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 md:py-10 flex items-center justify-between gap-4 group text-left max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex items-center gap-5 min-w-0">
          {number && (
            <span className="text-4xl md:text-5xl lg:text-6xl font-black font-mono leading-none shrink-0" style={{ color: lColor }}>{number}</span>
          )}
          <div className="min-w-0">
            {label && <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-1" style={{ color: lColor }}>{label}</p>}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h2>
            {subtitle && <p className="text-base text-[#6b7280] mt-1">{subtitle}</p>}
          </div>
        </div>
        <div className={`w-10 h-10 rounded-full border border-[#2a3347] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#00ff9d]/50 ${open ? 'bg-[#00ff9d]/10 border-[#00ff9d]/30' : ''}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180 text-[#00ff9d]' : 'text-[#6b7280]'}`} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4">
          {children}
        </div>
      </div>
    </div>
  )
}
