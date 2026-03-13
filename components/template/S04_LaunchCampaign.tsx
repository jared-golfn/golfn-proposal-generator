'use client'

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

export function S04_LaunchCampaign({ partner }: { partner: PartnerData }) {
  const tabs = [
    { id: 'sweepstakes', label: 'Sweepstakes', images: galleryAssets.sweepstakes },
    { id: 'email', label: 'Email', images: galleryAssets.email },
    { id: 'inapp', label: 'In-App', images: galleryAssets.inApp },
    { id: 'banners', label: 'Banners', images: galleryAssets.banners },
    { id: 'social', label: 'Social', images: galleryAssets.social },
    { id: 'blog', label: 'Blog / Editorial', images: galleryAssets.blog },
    { id: 'exec', label: 'Executive Endorsement', images: [] },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>01</span>
            <p className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Launch</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">Launch a <span className="text-gradient">Premium Campaign</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-10">
            GolfN launch campaigns are designed to create awareness, showcase your brand and product, and generate the first wave of meaningful attention and participation.
          </p>
        </Fade>

        <div className="space-y-4 mb-12">
          <Fade delay={0.1}>
            <Expand accentColor={partner.primaryColor} trigger={<span className="text-base md:text-lg font-semibold text-white">What a launch campaign can include</span>}>
              <div className="flex flex-wrap gap-2 pt-2">
                {campaignTypes.map(t => (
                  <span key={t} className="text-sm px-4 py-2 rounded-xl bg-[#161a21] border border-[#1e2128] text-[#d1d5db]">{t}</span>
                ))}
              </div>
            </Expand>
          </Fade>

          <Fade delay={0.15}>
            <Expand accentColor={partner.primaryColor} trigger={<span className="text-base md:text-lg font-semibold text-white">Distribution channels</span>}>
              <div className="flex flex-wrap gap-2 pt-2">
                {distributionChannels.map(c => (
                  <span key={c} className="text-sm px-4 py-2 rounded-xl border text-[#d1d5db]" style={{ background: `${partner.primaryColor}08`, borderColor: `${partner.primaryColor}20` }}>{c}</span>
                ))}
              </div>
            </Expand>
          </Fade>

          <Fade delay={0.2}>
            <Expand accentColor={partner.primaryColor} trigger={<span className="text-base md:text-lg font-semibold text-white">Campaign duration</span>}>
              <p className="text-base text-[#9ca3af] pt-2">Typical campaign window: <strong className="text-white">14 to 30 days</strong>. Campaign length depends on prize quality, creative strength, and participation goals.</p>
            </Expand>
          </Fade>

          <Fade delay={0.25}>
            <Expand accentColor={partner.primaryColor} trigger={<span className="text-base md:text-lg font-semibold text-white">Why the launch matters</span>}>
              <p className="text-base text-[#9ca3af] pt-2">This is not just a promotional moment. It creates the first wave of verified behavioral signal and establishes the foundation for future audience qualification and follow-on campaigns.</p>
            </Expand>
          </Fade>
        </div>

        {/* Campaign creative gallery */}
        <Fade delay={0.3}>
          <p className="text-sm font-mono tracking-wider uppercase mb-4" style={{ color: partner.primaryColor }}>Campaign Examples</p>
          <GalleryTabs tabs={tabs} accentColor={partner.primaryColor} />
        </Fade>
      </div>
    </section>
  )
}
