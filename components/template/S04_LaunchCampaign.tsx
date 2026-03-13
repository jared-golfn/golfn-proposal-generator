'use client'

import { Flag, Mail, Smartphone, Image, Share2, BookOpen, Award, DollarSign } from 'lucide-react'
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

const golfnHandles = [
  'Full creative production (emails, in-app messages, push notifications, banners, social co-promotion, blog post with SEO backlink)',
  'Campaign distribution across all channels',
  'Asset creation and approval workflow',
  'Executive Endorsement module (optional add-on during launch)',
]

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

        {/* Prize Budget Callout */}
        <Fade delay={0.05}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-6 md:p-8 mb-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0 mt-0.5">
              <DollarSign className="w-5 h-5 text-[#00ff9d]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Prize Budget</h4>
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">
                You (the brand) provide the sweepstakes prize budget (recommended <span className="text-[#00ff9d] font-semibold">$5,000</span> total for strongest participation and best cohort signal). GolfN does <strong className="text-white">all</strong> execution.
              </p>
            </div>
          </div>
        </Fade>

        <div className="space-y-3 mb-10">
          <Fade delay={0.1}>
            <Expand accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">What GolfN handles</span>}>
              <ul className="pt-2 space-y-2">
                {golfnHandles.map(item => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#d1d5db] leading-7">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1.5 shrink-0"><path d="M3 8l3.5 3.5L13 5" stroke="#00ff9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Expand>
          </Fade>

          <Fade delay={0.12}>
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

        {/* Why the launch matters */}
        <Fade delay={0.25}>
          <div className="bg-[#1a1f2e] border-l-2 border-[#00ff9d] rounded-r-xl p-6 md:p-8 mb-14">
            <h4 className="text-lg font-semibold text-white mb-2">Why the launch matters</h4>
            <p className="text-base md:text-lg text-[#d1d5db] leading-8">This creates the first wave of verified behavioral signal and sets up the strongest possible cohort. Everything that follows — activation, commerce, education, re-engagement — is built on top of this foundation.</p>
          </div>
        </Fade>

        {/* Pricing Note */}
        <Fade delay={0.27}>
          <div className="bg-[#0f1217] border border-[#2a3347] rounded-xl px-6 py-4 mb-14">
            <p className="text-base text-[#6b7280] leading-7">
              <span className="text-[#9ca3af] font-medium">Pricing note:</span> You provide the sweepstakes prize budget (recommended $5,000). GolfN handles all creative execution, distribution, asset creation, qualification, and ongoing activation. Ongoing management is billed monthly per qualified user added to your cohort (starting at $5/user, tiering down to $1).
            </p>
          </div>
        </Fade>

        <Fade delay={0.3}>
          <p className="text-base font-mono tracking-wider uppercase mb-5 text-[#00ff9d]">Campaign Examples</p>
          <GalleryTabs tabs={tabs} accentColor="#00ff9d" />
        </Fade>
      </div>
    </section>
  )
}
