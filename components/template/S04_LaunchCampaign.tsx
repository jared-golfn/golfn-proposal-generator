'use client'

import { Flag, DollarSign, Layers, Video } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { galleryAssets } from '@/lib/images'
import { Fade } from './Fade'
import { Expand } from './Expand'
import { GalleryTabs } from './GalleryTabs'

const campaignTypes = [
  'Sweepstakes', 'Product launch campaign', 'Seasonal activation',
  'Brand spotlight campaign', 'Offer-led campaign',
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
  'Partner promo video production for campaign kickoff',
]

export function S04_LaunchCampaign({ partner }: { partner: PartnerData }) {
  const tabs = [
    { id: 'sweepstakes', label: 'Sweepstakes', images: galleryAssets.sweepstakes },
    { id: 'email', label: 'Email', images: galleryAssets.email },
    { id: 'inapp', label: 'In-App', images: galleryAssets.inApp },
    { id: 'banners', label: 'Banners', images: galleryAssets.banners },
    { id: 'social', label: 'Social Co-Promo', images: galleryAssets.social },
    { id: 'video', label: 'Promo Video', images: galleryAssets.video },
    { id: 'blog', label: 'Blog', images: galleryAssets.blog, fullWidth: true },
  ] as const

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <Flag className="w-6 h-6 text-[#00ff9d]" />
            <span className="text-2xl font-mono font-bold text-[#00ff9d]">01</span>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Launch</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-5">Launch a <span className="text-gradient">premium campaign</span></h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-4xl leading-9 mb-10">
            GolfN launch campaigns are designed to create awareness, showcase your brand and product, and generate the first wave of meaningful attention and participation.
          </p>
        </Fade>

        {/* Prize Budget */}
        <Fade delay={0.05}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-xl p-6 md:p-8 mb-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/15 flex items-center justify-center shrink-0 mt-0.5">
              <DollarSign className="w-5 h-5 text-[#00ff9d]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Prize Budget</h4>
              <p className="text-base md:text-lg text-[#d1d5db] leading-8">
                You (the brand) provide the sweepstakes prize budget (recommended <span className="text-[#00ff9d] font-semibold">$5,000</span> total for strongest participation and best cohort signal).
              </p>
            </div>
          </div>
        </Fade>

        {/* Startup Fee */}
        <Fade delay={0.07}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-xl p-6 md:p-8 mb-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5 text-[#00ff9d]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Startup Fee: <span className="text-[#00ff9d]">$2,500 &ndash; $7,500</span> <span className="text-[#6b7280] text-base font-normal">(one-time)</span></h4>
              <p className="text-base text-[#d1d5db] leading-8">
                Covers strategy, creative production, campaign setup, and full launch execution. GolfN creates <strong className="text-white">all</strong> assets: emails, in-app messages, banners, social co-promo, blog with backlink, and promo video. Tiered by extras (executive endorsement, custom creative, AI lookalike, priority support). <strong className="text-white">30 days post-campaign follow-up included free.</strong>
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
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/30 rounded-2xl p-8 md:p-10 mb-14">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3">This is your chance to showcase your brand and develop your cohort of users</h4>
            <p className="text-lg md:text-xl text-[#d1d5db] leading-9">The launch creates the first wave of verified behavioral signal and sets up the strongest possible cohort. Everything that follows &mdash; activation, commerce, education, re-engagement &mdash; is built on this foundation. A strong launch with a compelling prize drives higher participation, better qualification signal, and a bigger, more engaged cohort from day one.</p>
          </div>
        </Fade>

        {/* Campaign Examples Gallery */}
        <Fade delay={0.3}>
          <div className="bg-[#1a1f2e]/50 border border-[#2a3347] rounded-2xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-6 h-6 text-[#00ff9d]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Campaign Examples</h3>
            </div>
            <p className="text-lg text-[#9ca3af] mb-8 max-w-3xl leading-8">Every launch includes multi-channel creative production. Here are real examples from recent partner campaigns across every distribution surface.</p>
            <GalleryTabs tabs={tabs} accentColor="#00ff9d" />
          </div>
        </Fade>
      </div>
    </section>
  )
}
