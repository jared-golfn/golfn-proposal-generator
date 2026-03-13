'use client'

import { useState } from 'react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Badge } from './Badge'
import { Expand } from './Expand'

type GoalId = 'conversion' | 'social' | 'education' | 'commerce' | 'retention' | 'realworld'

const goals: { id: GoalId; label: string }[] = [
  { id: 'conversion', label: 'Conversion' },
  { id: 'social', label: 'Social Growth' },
  { id: 'education', label: 'Education' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'retention', label: 'Retention' },
  { id: 'realworld', label: 'Real-World' },
]

const activationPaths = [
  {
    id: 'customOffer',
    title: 'Custom Offer Follow-Up',
    desc: 'Deliver a targeted follow-up offer to users who showed verified interest and intent.',
    badges: ['Requires Affiliate Structure'],
    detail: 'Link to partner website with option to add GolfN points as cashback. Ideal for conversion-oriented follow-up. If linking externally, affiliate economics of 20%+ required.',
    goals: ['conversion', 'retention'] as GoalId[],
  },
  {
    id: 'socialPush',
    title: 'Social Audience Push',
    desc: 'Drive verified golfers to follow your brand across Instagram, TikTok, Facebook, X, and YouTube.',
    badges: ['Optional Module'],
    detail: 'Built from campaign responders. Supports owned audience growth. Strong post-campaign nurture path for brands building social presence among verified golfers.',
    goals: ['social', 'retention'] as GoalId[],
  },
  {
    id: 'learnAndEarn',
    title: 'Learn & Earn',
    desc: 'Allow qualified users to watch videos, read materials, and complete quizzes on your content in exchange for points.',
    badges: ['Coming Q2', 'Vendor-Funded Rewards'],
    detail: 'Educational storytelling with verified comprehension. Useful for technical product education and brand differentiation. Rewards are vendor-funded. Points billed as served, invoiced net 30.',
    goals: ['education', 'retention'] as GoalId[],
  },
  {
    id: 'marketplace',
    title: 'Marketplace Integration',
    desc: 'Add products to the GolfN Marketplace and activate qualified users through commerce-linked experiences.',
    badges: ['Commerce-Enabled', 'Requires Wholesale Setup'],
    detail: 'Direct product discovery inside GolfN. Strong for purchase intent and conversion. Minimum 30% wholesale margin plus dropship arrangement required.',
    proofPoint: '$271,000 in products redeemed from June 2025 to date',
    goals: ['commerce', 'conversion'] as GoalId[],
  },
  {
    id: 'executiveEndorsement',
    title: 'Executive Endorsement',
    desc: 'Use founder, executive, athlete, or expert-led content to create stronger trust and more persuasive storytelling.',
    badges: ['Premium Storytelling Module'],
    detail: 'Strong for premium brands and technical or high-consideration products. Best for founder-led brands where authority and trust matter.',
    goals: ['education', 'conversion'] as GoalId[],
  },
  {
    id: 'dailyGrind',
    title: 'Daily Grind Event Activation',
    desc: 'Activate the qualified cohort to drive attendance and check-ins at real-world brand events.',
    badges: ['Post-Campaign Option', 'Real-World Activation'],
    detail: 'Performance-oriented: fees are only triggered when a user actually shows up and checks in through the GolfN app.',
    goals: ['realworld', 'retention'] as GoalId[],
  },
  {
    id: 'cohortReengagement',
    title: 'Ongoing Cohort Re-Engagement',
    desc: 'As new users enter GolfN and resemble strong responders, GolfN continues adding them to your audience.',
    badges: ['Core Long-Term Value Driver'],
    detail: 'Extends campaign life. Builds a future prospect universe that grows over time without additional campaign spend.',
    goals: ['retention', 'conversion', 'social'] as GoalId[],
  },
]

export function S06_PostCampaign({ partner }: { partner: PartnerData }) {
  const highlighted = partner.highlightedActivations || []
  const [activeGoal, setActiveGoal] = useState<GoalId | null>(null)

  const visiblePaths = activeGoal
    ? activationPaths.filter(p => p.goals.includes(activeGoal))
    : activationPaths

  return (
    <section className="py-24 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-mono font-bold text-[#00ff9d]">03</span>
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-[#00ff9d]">Activation</p>
          </div>
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-[0.95] mb-5">Post-campaign<br /><span className="text-gradient">activation paths</span></h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mb-6">
            Once the initial audience is qualified, GolfN can continue activating those users through multiple follow-on pathways depending on your goals.
          </p>
        </Fade>

        {/* 30-day included band */}
        <Fade delay={0.05}>
          <div className="mb-8 bg-[#131619] border border-[#1e2128] rounded-xl px-5 py-4 flex items-start gap-3">
            <Badge label="30 Days Included" color="#00ff9d" />
            <p className="text-sm text-[#d1d5db]">
              30 days of post-campaign follow-up and management are included after the launch campaign closes. Ongoing activation beyond that window moves into a recurring structure.
            </p>
          </div>
        </Fade>

        {/* Goal toggle pills */}
        <Fade delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveGoal(null)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${!activeGoal ? 'bg-[#00ff9d] text-[#0f1217] border-[#00ff9d]' : 'border-[#2a2f38] text-[#9ca3af] hover:border-[#4b5563]'}`}
            >
              All
            </button>
            {goals.map(g => (
              <button
                key={g.id}
                onClick={() => setActiveGoal(activeGoal === g.id ? null : g.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${activeGoal === g.id ? 'bg-[#00ff9d] text-[#0f1217] border-[#00ff9d]' : 'border-[#2a2f38] text-[#9ca3af] hover:border-[#4b5563]'}`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Fade>

        {/* Activation cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visiblePaths.map((path, i) => {
            const isHighlighted = highlighted.includes(path.id)
            return (
              <Fade key={path.id} delay={0.04 * i}>
                <div className="card-lift bg-[#131619] border border-[#1e2128] rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <h3 className="text-base font-bold text-white">{path.title}</h3>
                    {isHighlighted && <Badge label="REC" color="#00ff9d" />}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {path.badges.map(b => <Badge key={b} label={b} color="#6b7280" />)}
                  </div>
                  <p className="text-sm text-[#9ca3af] leading-relaxed mb-4 flex-1">{path.desc}</p>
                  <Expand accentColor="#00ff9d" trigger={<span className="text-sm font-medium text-[#00ff9d]">Details &amp; Economics</span>}>
                    <p className="text-sm text-[#d1d5db] leading-relaxed pt-2">{path.detail}</p>
                    {'proofPoint' in path && path.proofPoint && (
                      <p className="text-sm font-semibold mt-3 text-[#00ff9d]">{path.proofPoint}</p>
                    )}
                  </Expand>
                </div>
              </Fade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
