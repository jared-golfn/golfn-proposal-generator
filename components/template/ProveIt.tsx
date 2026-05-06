'use client'

import { ShieldCheck, Package, Megaphone, BarChart3, Users, ArrowRight, CheckCircle2, XCircle, Check, X, Minus } from 'lucide-react'
import { Fade } from './Fade'

const youBring = [
  { icon: Package, title: 'Product for a sweepstakes', detail: 'A set of irons, wedges, a putter — whatever you want to move. ~$1,000 retail value is the sweet spot. We give it away to build the cohort.' },
  { icon: Package, title: 'Product for the marketplace', detail: 'Your standard line available for purchase through GolfN Points Exchange. We buy at wholesale, you ship direct. Net 30 terms once proven.' },
]

const weDo = [
  { icon: Megaphone, title: 'Full campaign execution', detail: 'Creative, IAMs, push sequences, in-app cards, CRM flows, audience segmentation — the entire CRM and marketing stack.' },
  { icon: Users, title: 'Audience building + targeting', detail: 'We build the interest cohort from the sweepstakes, run AI lookalike expansion, and activate post-campaign commerce flows.' },
  { icon: BarChart3, title: 'Reporting + optimization', detail: 'Monthly performance reports with impressions, cohort growth, conversion, revenue attribution, and audience profiling from Amplitude.' },
  { icon: ShieldCheck, title: 'Fulfillment + operations', detail: 'Order processing, customer service, inventory coordination. 97% accuracy rate with Miura. Most orders shipped within two weeks.' },
]

const proofPoints = [
  { metric: '$769', label: 'Miura invested in prizes', context: '(3 forged wedges, wholesale cost)' },
  { metric: '$22K', label: 'Miura earned in wholesale revenue', context: '(45 units through GolfN)' },
  { metric: '2,764', label: 'First-party leads Miura received', context: '(verified golfers who raised their hand)' },
  { metric: '$10,856', label: 'Brand impression value delivered', context: '(271K impressions @ $40 CPM)' },
]

const comparisonRows = [
  {
    label: 'Upfront cost',
    traditional: 'High fixed fee',
    paidSocial: 'High media spend',
    golfn: 'Product only',
    traditionalGood: false,
    paidSocialGood: false,
    golfnGood: true,
  },
  {
    label: 'Audience',
    traditional: 'Broad / unverified',
    paidSocial: 'Lookalikes',
    golfn: 'Verified buyers',
    traditionalGood: false,
    paidSocialGood: null,
    golfnGood: true,
  },
  {
    label: 'Audience after campaign ends',
    traditional: 'One-and-done',
    paidSocial: 'Rented \u2014 gone when spend stops',
    golfn: 'Persistent cohort \u2014 activate anytime',
    traditionalGood: false,
    paidSocialGood: false,
    golfnGood: true,
  },
  {
    label: 'Compounding effect',
    traditional: 'One-off',
    paidSocial: 'None',
    golfn: 'Yes \u2014 points + marketplace',
    traditionalGood: false,
    paidSocialGood: false,
    golfnGood: true,
  },
  {
    label: 'Wholesale revenue',
    traditional: 'No',
    paidSocial: 'Indirect',
    golfn: 'Direct \u2014 you ship, we sell',
    traditionalGood: false,
    paidSocialGood: null,
    golfnGood: true,
  },
  {
    label: 'Attribution',
    traditional: 'Vague',
    paidSocial: 'Platform-dependent',
    golfn: 'Full-funnel, Amplitude-powered',
    traditionalGood: false,
    paidSocialGood: null,
    golfnGood: true,
  },
]

function CellIcon({ good }: { good: boolean | null }) {
  if (good === true) return <Check className="w-4 h-4 text-[#00ff9d] shrink-0" />
  if (good === false) return <X className="w-4 h-4 text-[#ef4444] shrink-0" />
  return <Minus className="w-4 h-4 text-[#6b7280] shrink-0" />
}

export function ProveIt() {
  return (
    <section id="prove-it" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d] mb-3">The Deal</p>
          <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight mb-4">
            We'll put our money<br /><span className="text-[#00ff9d]">where our mouth is</span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-3xl mb-10 leading-8">
            No startup fees. No retainers. No media buy minimums. You bring product. We bring the platform, the audience, and the execution. If it works \u2014 and the Miura numbers say it will \u2014 we scale together.
          </p>
        </Fade>

        <Fade delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8">
              <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-6">What You Bring</p>
              <div className="space-y-6">
                {youBring.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0">
                      <item.icon className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#2a3347]/50">
                <p className="text-sm text-[#6b7280]">That's it. No other upfront costs.</p>
              </div>
            </div>

            <div className="bg-[#1a1f2e] border border-[#00ff9d]/20 rounded-2xl p-8">
              <p className="text-xs font-mono text-[#00ff9d] uppercase tracking-[0.2em] mb-6">What GolfN Does</p>
              <div className="space-y-6">
                {weDo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff9d]/10 shrink-0">
                      <item.icon className="w-5 h-5 text-[#00ff9d]" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-[#9ca3af] leading-6">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* Comparison Table */}
        <Fade delay={0.05}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl overflow-hidden mb-10">
            <div className="px-6 md:px-8 py-5 border-b border-[#2a3347]">
              <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em]">How GolfN Compares</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a3347]">
                    <th className="py-4 px-6 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider w-[180px]"></th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Traditional Sponsorship</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#6b7280] uppercase tracking-wider">Paid Social Ads</th>
                    <th className="py-4 px-5 text-left text-xs font-mono text-[#00ff9d] uppercase tracking-wider bg-[#001a14]/30">GolfN Activation</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i < comparisonRows.length - 1 ? 'border-b border-[#2a3347]/40' : ''}>
                      <td className="py-4 px-6 text-sm font-semibold text-white">{row.label}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <CellIcon good={row.traditionalGood} />
                          <span className="text-sm text-[#9ca3af]">{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <CellIcon good={row.paidSocialGood} />
                          <span className="text-sm text-[#9ca3af]">{row.paidSocial}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 bg-[#001a14]/30">
                        <div className="flex items-center gap-2">
                          <CellIcon good={row.golfnGood} />
                          <span className="text-sm text-white font-medium">{row.golfn}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        <Fade delay={0.06}>
          <div className="bg-[#1a1f2e] border border-[#2a3347] rounded-2xl p-8 mb-10">
            <p className="text-xs font-mono text-[#6b7280] uppercase tracking-[0.2em] mb-4">How It Works Financially</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#00ff9d]/10 flex items-center justify-center text-[#00ff9d] font-mono font-bold text-xs">1</div>
                  <p className="text-sm font-semibold text-white">Wholesale Margin</p>
                </div>
                <p className="text-sm text-[#9ca3af] leading-6">We buy your product at wholesale, sell it through the Points Exchange at retail. The spread is how we fund the platform. You get wholesale revenue on every unit.</p>
              </div>
              <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#00ff9d]/10 flex items-center justify-center text-[#00ff9d] font-mono font-bold text-xs">2</div>
                  <p className="text-sm font-semibold text-white">Performance Commerce</p>
                </div>
                <p className="text-sm text-[#9ca3af] leading-6">The sweepstakes builds the cohort. The cohort drives commerce. We only win when you sell product. Our incentives are aligned from day one.</p>
              </div>
              <div className="bg-[#0f1217] rounded-xl p-6 border border-[#2a3347]/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#00ff9d]/10 flex items-center justify-center text-[#00ff9d] font-mono font-bold text-xs">3</div>
                  <p className="text-sm font-semibold text-white">Scale Together</p>
                </div>
                <p className="text-sm text-[#9ca3af] leading-6">Once the pilot proves out \u2014 like Miura approaching the $50K premier dealer tier in under 60 days \u2014 we discuss volume tiers, co-marketing, and deeper integration.</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade delay={0.08}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
            {proofPoints.map((p) => (
              <div key={p.label} className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-mono font-bold text-[#00ff9d] mb-1">{p.metric}</p>
                <p className="text-sm text-white font-medium">{p.label}</p>
                <p className="text-xs text-[#6b7280] mt-0.5">{p.context}</p>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-[#001a14]/60 border border-[#00ff9d]/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-3">
              We're not asking you to bet on us. <span className="text-[#00ff9d]">We're asking you to let us prove it.</span>
            </p>
            <p className="text-base text-[#9ca3af] leading-7">
              Miura provided three wedges as prizes and got back $22K in wholesale revenue, 2,764 leads, and a partnership trajectory that has them approaching premier dealer status. The only thing we need from you is product and a willingness to let us run.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}
