'use client'

import { Flag, Mail, Smartphone, Image, Share2, BookOpen, Award } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { galleryAssets } from '@/lib/images'
import { Fade } from './Fade'
import { Expand } from './Expand'
import { GalleryTabs } from './GalleryTabs'

const campaignTypes = [
  'Sweepstakes', 'Product launch campaign', 'Seasonal activation',
  'Brand spotlight campaign', 'Offer-led campaign', 'Executive Endorsement module',
]

const distributionChannels = [
  'Email', 'In-App Messaging', 'Push Notifications', 'In-App Banners',
  'Social Feed Placement', 'Co-Promotion on Instagram', 'Co-Promotion on X',
  'Co-Promotion on Facebook', 'Campaign blog post with backlink',
]

const tabIcons = [Flag, Mail, Smartphone, Image, Share2, BookOpen, Award]

export function S04_LaunchCampaign({ partner }: { partner: PartnerData }) {
  const tabs = [
    { id: 'sweepstakes', label: 'Sweepstakes', images: galleryAssets.sweepstakes },
    { id: 'email', label: 'Email', images: galleryAssets.email },
    { id: 'inapp', label: 'In-App', images: galleryAssets.inApp },
    { id: 'banners', label: 'Banners', images: galleryAssets.banners },
    { id: 'social', label: 'Social Co-Promo', images: galleryAssets.social },
    { id: 'blog', label: 'Blog', images: galleryAssets.blog },
    { id: 'exec', label: 'Executive Endorsement', images: galleryAssets.pointsExchange },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Flag className="w-6 h-6 text-[#00ff9d]" />
            <span className="text-2xl font-mono font-bold text-[#00ff9d]">01</span>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Launch</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">Launch a <span className="text-gradient">premium campaign</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl leading-8 mb-10">
            GolfN launch campaigns are designed to create awareness, showcase your brand and product, and generate the first wave of meaningful attention and participation.
          </p>
        </Fade>

        <div className="space-y-3 mb-14">
          <Fade delay={0.1}>
            <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">What a launch campaign can include</span>}>
              <div className="flex flex-wrap gap-2 pt-2">
                {campaignTypes.map(t => (
                  <span key={t} className="text-base px-4 py-2 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20 text-[#d1d5db]">{t}</span>
                ))}
              </div>
            </Expand>
          </Fade>

          <Fade delay={0.15}>
            <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">Distribution channels</span>}>
              <div className="flex flex-wrap gap-2 pt-2">
                {distributionChannels.map(c => (
                  <span key={c} className="text-base px-4 py-2 rounded-full bg-[#1a1f2e] border border-[#2a3347] text-[#d1d5db]">{c}</span>
                ))}
              </div>
            </Expand>
          </Fade>

          <Fade delay={0.2}>
            <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">Campaign duration</span>}>
              <p className="text-lg text-[#9ca3af] pt-2 leading-8">Typical campaign window: <strong className="text-[#00ff9d]">14 to 30 days</strong>. Campaign length depends on prize quality, creative strength, and participation goals.</p>
            </Expand>
          </Fade>
        </div>

        <Fade delay={0.3}>
          <p className="text-base font-mono tracking-wider uppercase mb-5 text-[#00ff9d]">Campaign Examples</p>
          {/* GALVIN GREEN: Replace sweepstakes with waterproof jacket prize mockups */}
          {/* GALVIN GREEN: Replace email with "Never Compromise" headline email mockups */}
          {/* GALVIN GREEN: Replace in-app with GORE-TEX product feature cards */}
          {/* GALVIN GREEN: Replace banner with seasonal capsule collection banners */}
          {/* GALVIN GREEN: Replace social with Swedish-design co-promo visuals */}
          {/* GALVIN GREEN: Replace blog with rain jacket editorial photography */}
          {/* GALVIN GREEN: Replace exec with founder/brand story content */}
          <GalleryTabs tabs={tabs} accentColor="#00ff9d" />
        </Fade>
      </div>
    </section>
  )
}
