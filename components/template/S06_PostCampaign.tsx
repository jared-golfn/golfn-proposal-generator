'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Badge } from './Badge'
import { Expand } from './Expand'

const activationPaths = [
  {
    id: 'customOffer',
    title: 'Custom Offer Follow-Up',
    desc: 'Deliver a targeted follow-up offer to users who showed verified interest and intent.',
    badges: ['Requires Affiliate Structure'],
    detail: 'Link to partner website with option to add GolfN points as cashback. Ideal for conversion-oriented follow-up. If linking externally, affiliate economics of 20%+ required.',
  },
  {
    id: 'socialPush',
    title: 'Social Audience Push',
    desc: 'Drive verified golfers to follow your brand across Instagram, TikTok, Facebook, X, and YouTube.',
    badges: ['Optional Module'],
    detail: 'Built from campaign responders. Supports owned audience growth. Strong post-campaign nurture path for brands building social presence among verified golfers.',
  },
  {
    id: 'learnAndEarn',
    title: 'Learn & Earn',
    desc: 'Allow qualified users to watch videos, read materials, and complete quizzes on your content in exchange for points.',
    badges: ['Coming Q2', 'Vendor-Funded Rewards'],
    detail: 'Educational storytelling with verified comprehension. Useful for technical product education and brand differentiation. Rewards are funded by the vendor. When points are depleted, the campaign pauses until re-filled. Points are billed based on actual points served and invoiced net 30.',
  },
  {
    id: 'marketplace',
    title: 'Marketplace Integration',
    desc: 'Add products to the GolfN Marketplace and activate qualified users through commerce-linked experiences.',
    badges: ['Commerce-Enabled', 'Requires Wholesale Setup'],
    detail: 'Direct product discovery inside GolfN. Strong for purchase intent and conversion. Supports follow-on merchandising. Minimum 30% wholesale margin plus dropship arrangement required.',
    proofPoint: '$271,000 in products redeemed from June 2025 to date',
  },
  {
    id: 'executiveEndorsement',
    title: 'Executive Endorsement',
    desc: 'Use founder, executive, athlete, or expert-led content to create stronger trust, better product context, and more persuasive brand storytelling.',
    badges: ['Premium Storytelling Module'],
    detail: 'Strong for premium brands and technical or high-consideration products. Can be layered into launch or nurture campaigns. Best for founder-led brands, technical products, and brands where authority and trust matter.',
  },
  {
    id: 'dailyGrind',
    title: 'Daily Grind Event Activation',
    desc: 'If your brand hosts real-world events, GolfN can activate the qualified cohort to drive attendance and check-ins.',
    badges: ['Post-Campaign Option', 'Real-World Activation'],
    detail: 'Daily Grind can drive qualified or loosely qualified users to real-world brand events after the initial campaign. The commercial model is performance-oriented: fees are only triggered when a user actually shows up and checks in through the GolfN app.',
  },
  {
    id: 'cohortReengagement',
    title: 'Ongoing Cohort Re-Engagement',
    desc: 'As new users enter GolfN and resemble those who showed strong campaign interest, GolfN continues adding them to your audience and activating them.',
    badges: ['Core Long-Term Value Driver'],
    detail: 'Extends campaign life beyond the initial window. Builds a future prospect universe that grows over time. Supports long-term growth beyond launch as GolfN continuously identifies additional qualifying users.',
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
          <p className="text-base md:text-lg text-[#9ca3af] max-w-2xl mb-6">
            Once the initial audience is qualified, GolfN can continue activating those users through multiple follow-on pathways depending on your goals.
          </p>
        </Fade>

        {/* 30-day included band */}
        <Fade delay={0.05}>
          <div className="mb-8 bg-[#131619] border border-[#1e2128] rounded-xl px-5 py-4 flex items-start gap-3">
            <Badge label="30 Days Included" color={partner.primaryColor} />
            <p className="text-sm text-[#d1d5db]">
              30 days of post-campaign follow-up and management are included after the launch campaign closes. Ongoing activation and management beyond that window move into a recurring structure.
            </p>
          </div>
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
                  {'proofPoint' in path && path.proofPoint && (
                    <p className="text-sm font-semibold mt-3" style={{ color: partner.primaryColor }}>{path.proofPoint}</p>
                  )}
                </Expand>
              </Fade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
