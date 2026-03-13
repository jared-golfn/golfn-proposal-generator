'use client'

import { HelpCircle } from 'lucide-react'
import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const faqGroups = [
  { group: 'How GolfN Programs Work', items: [
    { q: 'How does a GolfN brand program begin?', a: 'Every program starts with a kickoff call to define goals, audience priorities, and campaign strategy. GolfN then handles creative production, campaign architecture, and technical setup. Typical launch timeline is 2 to 3 weeks from kickoff.' },
    { q: 'How long does a typical launch campaign run?', a: 'Typical campaign window is 14 to 30 days. Campaign length depends on prize quality, creative strength, and participation goals.' },
    { q: 'Why does the launch sweepstakes matter?', a: 'The launch sweepstakes creates the first wave of verified behavioral signal. It drives high-volume participation and establishes the foundation for audience qualification and all downstream activation.' },
    { q: 'What is included in the initial package?', a: 'Campaign strategy, creative production, launch campaign distribution (emails, in-app messages, banners, social co-promo, blog with backlink), initial reporting, initial audience qualification, initial cohort definition, and 30 days of post-campaign follow-up and management. All included in the one-time startup fee.' },
    { q: 'What happens after the first campaign ends?', a: 'Within 30 days of campaign close, GolfN activates the qualified cohort through targeted follow-on campaigns: offers, education, commerce, social activation, and progression-based experiences. The audience compounds over time.' },
  ]},
  { group: 'Audience Qualification and Cohorts', items: [
    { q: 'How does GolfN identify qualified interest?', a: 'GolfN analyzes behavioral signals across the campaign: views, clicks, entries, repeated interactions, cross-surface engagement, and return visits. Users showing the strongest interest are flagged as qualified.' },
    { q: 'What signals indicate stronger user intent?', a: 'Multiple views, multiple entries, repeated offer interaction, clicking across multiple distribution surfaces, returning engagement after initial touch, and higher-frequency interaction.' },
    { q: 'How does GolfN build audience cohorts?', a: 'GolfN uses the behavior of users who show the strongest interest to define a partner-specific cohort. That cohort is used for follow-up targeting, optimization, and as a seed model for identifying similar users over time.' },
    { q: 'How does GolfN identify future prospects?', a: 'As new users enter GolfN and exhibit behavior patterns similar to those who showed strong campaign interest, GolfN can continue adding them to the partner audience. The cohort grows over time without additional campaign spend.' },
  ]},
  { group: 'Activation Pathways', items: [
    { q: 'What post-campaign activation options are available?', a: 'Custom offer follow-up, social audience push, Learn & Earn education, marketplace integration, executive endorsement, Daily Grind event activation, and ongoing cohort re-engagement.' },
    { q: 'Can GolfN support custom offer follow-up?', a: 'Yes. Targeted follow-up offers are delivered to users who showed verified interest. External offers require an affiliate structure with 20%+ commission.' },
    { q: 'How does Learn & Earn work?', a: 'Users watch videos, read materials, and complete quizzes. Correct answers earn points. Wrong answers reduce or eliminate points. Rewards are vendor-funded and billed based on actual points served, invoiced net 30.' },
    { q: 'Can products be added to the GolfN Marketplace?', a: 'Yes. Users redeem earned points toward purchases. The brand fulfills and drop-ships directly. Requires 30% wholesale margin plus dropship arrangement.' },
    { q: 'What is Executive Endorsement?', a: 'Founder, executive, athlete, or expert-led content designed to create stronger trust, better product context, and more persuasive storytelling. Available as a startup fee add-on.' },
    { q: 'How does Daily Grind event activation work?', a: 'GolfN activates the qualified cohort to attend real-world events. Fees are performance-based and only triggered when a user checks in through the GolfN app.' },
  ]},
  { group: 'Reporting and Management', items: [
    { q: 'What reporting is included?', a: 'Monthly performance reports covering campaign metrics, cohort intelligence, progression analysis, and optimization recommendations. Plus a monthly strategy review call and raw data exports.' },
    { q: 'What is included in the first 30 days after launch?', a: 'Post-campaign follow-up, initial cohort qualification, first-wave activation across relevant channels, initial reporting, and strategic recommendations for the next phase. All included in the startup fee.' },
    { q: 'Why is there an ongoing management fee?', a: 'After the initial 30-day included period, ongoing management covers reporting, creative refreshes (up to 3 variants per message), message testing, cohort expansion, and continued program optimization. It is billed monthly per qualified user added to your cohort (First 2,000 at $5/user, 2,001\u20135,000 at $3.50, 5,001\u201310,000 at $2, 10,001+ at $1).' },
  ]},
  { group: 'Pricing and Economics', items: [
    { q: 'How does pricing work?', a: 'You provide the sweepstakes prize budget (recommended $5,000 for strongest cohort). GolfN charges a one-time startup fee of $2,500\u2013$7,500 (tiered by extras: executive endorsement, custom creative, AI lookalike, priority support). Launch campaign execution is included in startup. 30 days post-campaign follow-up is free. After that, ongoing management is billed monthly per qualified user: First 2,000 at $5.00, 2,001\u20135,000 at $3.50, 5,001\u201310,000 at $2.00, 10,001+ at $1.00.' },
    { q: 'What is the startup fee?', a: 'A one-time fee of $2,500\u2013$7,500 that covers strategy, offer design, audience definition, tracking logic, campaign implementation, full creative asset creation, and the first 30 days of post-campaign follow-up. Tiered by add-ons: executive endorsement module, custom creative packages, AI lookalike audience expansion, and priority account support.' },
    { q: 'What does a brand need to provide to launch?', a: 'Sweepstakes prize budget (recommended $5,000), startup fee, brand assets and guidelines, logos, product photography, product descriptions, landing pages or destinations, and a point of contact for approvals.' },
    { q: 'What affiliate economics are required?', a: 'Minimum 20% affiliate commission for external offer campaigns. Standard 3-5% rates are insufficient.' },
    { q: 'What wholesale requirements apply for marketplace?', a: 'Minimum 30% wholesale margin plus dropship arrangement. The brand fulfills all orders directly. GolfN holds zero inventory.' },
    { q: 'How are points billed?', a: 'Points are billed as served, invoiced net 30. No upfront bulk purchase required beyond the initial deposit. Billing scales with actual user engagement.' },
    { q: 'Are there prepay discounts?', a: 'Yes. Prepaying buys a credit balance that is deducted monthly. 3-month prepay saves 8%, 6-month saves 15%, and 12-month saves 22% on ongoing per-user management fees.' },
  ]},
]

export function S11_FAQ({ partner }: { partner: PartnerData }) {
  const customFAQ = (partner.customFAQ || []).map(f => ({ q: f.question, a: f.answer }))

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade>
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-[#00ff9d]" />
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase text-[#00ff9d]">FAQ</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight mb-14">Frequently asked<br /><span className="text-gradient">questions</span></h2>
        </Fade>

        <div className="space-y-10">
          {faqGroups.map((group, gi) => (
            <Fade key={group.group} delay={0.05 * gi}>
              <div>
                <h3 className="text-base font-mono tracking-[0.15em] uppercase mb-4 text-[#00ff9d]">{group.group}</h3>
                <div className="space-y-2">
                  {group.items.map((faq, i) => (
                    <Expand key={i} accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">{faq.q}</span>}>
                      <p className="text-lg text-[#d1d5db] leading-8 pt-1">{faq.a}</p>
                    </Expand>
                  ))}
                </div>
              </div>
            </Fade>
          ))}

          {customFAQ.length > 0 && (
            <Fade delay={0.3}>
              <div>
                <h3 className="text-base font-mono tracking-[0.15em] uppercase mb-4 text-[#00ff9d]">Partner-Specific</h3>
                <div className="space-y-2">
                  {customFAQ.map((faq, i) => (
                    <Expand key={i} accentColor="#00ff9d" trigger={<span className="text-lg font-semibold text-white">{faq.q}</span>}>
                      <p className="text-lg text-[#d1d5db] leading-8 pt-1">{faq.a}</p>
                    </Expand>
                  ))}
                </div>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </section>
  )
}
