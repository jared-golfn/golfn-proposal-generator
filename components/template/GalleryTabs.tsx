'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface GalleryTab {
  id: string
  label: string
  images: readonly { readonly src: string; readonly alt: string }[]
  fullWidth?: boolean
}

export function GalleryTabs({ tabs, accentColor = '#00ff9d' }: { tabs: readonly GalleryTab[]; accentColor?: string }) {
  const [active, setActive] = useState(tabs[0]?.id || '')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const activeTab = tabs.find(t => t.id === active)
  const isFull = activeTab && ('fullWidth' in activeTab) && activeTab.fullWidth

  return (
    <>
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
              className={isFull ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}
            >
              {activeTab.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                  className={`bg-[#161a21] rounded-xl overflow-hidden border border-[#1e2128] hover:border-[#00ff9d]/40 hover:shadow-xl transition-all duration-300 cursor-zoom-in ${isFull ? 'w-full' : ''}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                </button>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
