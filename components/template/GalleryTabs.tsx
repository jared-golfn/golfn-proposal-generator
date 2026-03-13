'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryTab {
  id: string
  label: string
  images: readonly { readonly src: string; readonly alt: string }[]
  fullWidth?: boolean
}

export function GalleryTabs({ tabs, accentColor = '#00ff9d' }: { tabs: readonly GalleryTab[]; accentColor?: string }) {
  const [active, setActive] = useState(tabs[0]?.id || '')
  const activeTab = tabs.find(t => t.id === active)
  const isFull = activeTab && ('fullWidth' in activeTab) && activeTab.fullWidth

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`text-sm md:text-base px-5 py-2.5 rounded-xl transition-all font-medium ${
              active === tab.id ? 'text-[#0f1217]' : 'text-[#9ca3af] hover:text-white bg-[#161a21] hover:bg-[#1e2128]'
            }`}
            style={active === tab.id ? { background: accentColor } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {activeTab && activeTab.images.length > 0 && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={isFull ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}
          >
            {activeTab.images.map((img, i) => (
              <div key={i} className={`bg-[#161a21] rounded-xl overflow-hidden border border-[#1e2128] hover:border-[#00ff9d]/40 hover:shadow-xl transition-all duration-300 ${isFull ? 'w-full' : ''}`}>
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </motion.div>
        )}
        {activeTab && activeTab.images.length === 0 && (
          <motion.div
            key={`${active}-empty`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#161a21] border border-[#1e2128] rounded-xl p-12 text-center"
          >
            <p className="text-[#6b7280] text-sm">Examples coming soon</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
