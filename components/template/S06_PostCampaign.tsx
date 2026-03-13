'use client'

import type { PartnerData } from '@/lib/template-types'
import { images } from '@/lib/images'
import { Fade } from './Fade'
import { Badge } from './Badge'
import { Expand } from './Expand'

const activationPaths = [
  {
    id: 'sweepstakes',
    title: 'Sweepstakes & Premium Campaigns',
    desc: 'High-attention launch activations that generate massive first-touch awareness and capture the first wave of behavioral signal.',
    badges: ['Campaign-Led', 'Awareness Driver'],
    detail: 'Sweepstakes and premium campaigns create urgency and participation. The campaign window generates thousands of entries and captures qualified behavioral data that feeds every downstream activation.',
  },
  {
    id: 'learnAndEarn',
    title: 'Learn & Earn Education',
    desc: 'Verified comprehension modules that teach golfers why your product matters. Points incentivize completion. Wrong answers mean no points.',
    badges: ['Education', 'Verified Comprehension'],
    detail: 'Learn & Earn modules live in the More Ways to Earn section. Golfers answer questions about your brand and product. Correct answers earn points. Wrong answers reduce or eliminate points. Education becomes measurable.',
  },
  {
    id: 'dailyGrind',
    title: 'Daily Grind Check-Ins',
    desc: 'Real-world location-based activation. Golfers check in at courses, demo days, retail locations, and partner activations.',
    badges: ['Real-World', 'Location-Based'],
    detail: 'Daily Grind drives and verifies real-world participation. Triple points for partner-specific check-ins. Demo day attendance, retail visits, and course use are all tracked and incentivized.',
  },
  {
    id: 'socialActivation',
    title: 'Social Activation (OAuth)',
    desc: 'Verified social follows and engagement through OAuth integrations with Instagram, X, and Facebook.',
    badges: ['Social Proof', 'OAuth-Verified'],
    detail: 'GolfN drives verified social actions from golfers whose identity, play behavior, and purchase history are known. This is not anonymous social engagement. Every follow and interaction is attributed.',
  },
  {
    id: 'pointsCommerce',
    title: 'Points Commerce & Marketplace',
    desc: 'Golfers redeem earned points toward partner products. The brand fulfills and drop-ships directly. Zero inventory risk for GolfN.',
    badges: ['Requires Affiliate Structure', 'Vendor-Funded Rewards'],
    detail: 'Points function as acquisition and activation currency. Users redeem points toward purchases through affiliate-tracked links or the GolfN marketplace. The brand fulfills directly. No inventory held by GolfN.',
  },
  {
    id: 'offerLed',
    title: 'Offer-Led Campaigns',
    desc: 'Exclusive offers and incentives targeted at the qualified cohort. Points-backed mechanics create conversion pressure standard media cannot replicate.',
    badges: ['Conversion', 'Points-Backed'],
    detail: 'Exclusive offers are targeted to golfers who showed interest during the campaign. Points-back mechanics layer additional incentive on top. All conversions are tracked through affiliate or marketplace attribution.',
  },
]

export function S06_PostCampaign({ partner }: { partner: PartnerData }) {
  const highlighted = partner.highlightedActivations || []

  return (
    <section className="py-20 md:py-28">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold" style={{ color: partner.primaryColor }}>03</span>
            <p className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: partner.primaryColor }}>Activation</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[0.95] mb-4">Post-campaign<br /><span className="text-gradient">activation paths</span></h2>
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-12">
            Within 30 days of campaign close, GolfN activates the qualified cohort through multiple measurable channels. Each path has specific economics and requirements.
          </p>
        </Fade>

        <div className="space-y-4">
          {activationPaths.map((path, i) => {
            const isHighlighted = highlighted.includes(path.id)
            return (
              <Fade key={path.id} delay={0.06 * i}>
                <Expand
                  accentColor={partner.primaryColor}
                  trigger={
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-base md:text-lg font-bold text-white">{path.title}</h3>
                        {isHighlighted && <Badge label="RECOMMENDED" color={partner.primaryColor} />}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {path.badges.map(b => <Badge key={b} label={b} color="#6b7280" />)}
                      </div>
                      <p className="text-sm text-[#9ca3af]">{path.desc}</p>
                    </div>
                  }
                >
                  <p className="text-base text-[#d1d5db] leading-relaxed pt-2">{path.detail}</p>
                </Expand>
              </Fade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
