'use client'

import type { PartnerData } from '@/lib/template-types'
import { Fade } from './Fade'
import { Expand } from './Expand'

const faqGroups = [
  {
    group: 'How GolfN Programs Work',
    items: [
      { q: 'How does a GolfN brand program begin?', a: 'Every program starts with a kickoff call to define goals, audience priorities, and campaign strategy. GolfN then handles creative production, campaign architecture, and technical setup. Typical launch timeline is 2 to 3 weeks from kickoff.' },
      { q: 'How long does a typical launch campaign run?', a: 'Typical campaign window is 14 to 30 days. Campaign length depends on prize quality, creative strength, and participation goals. GolfN recommends a minimum 14-day window to generate sufficient behavioral signal.' },
      { q: 'Why does the launch sweepstakes matter?', a: 'The launch sweepstakes creates the first wave of verified behavioral signal. It drives high-volume participation and establishes the foundation for audience qualification and all downstream activation. A stronger prize drives stronger signal.' },
      { q: 'What is included in the initial package?', a: 'Campaign strategy, creative production, launch campaign distribution, blog/article support with backlink, initial reporting, initial audience qualification, initial cohort definition, and 30 days of post-campaign follow-up and management.' },
      { q: 'What happens after the first campaign ends?', a: 'Within 30 days of campaign close, GolfN activates the qualified cohort through targeted follow-on campaigns: offers, education, commerce, social activation, and progression-based experiences. The audience compounds over time as new qualifying users are identified.' },
    ],
  },
  {
    group: 'Audience Qualification and Cohorts',
    items: [
      { q: 'How does GolfN identify qualified interest?', a: 'GolfN analyzes behavioral signals across the campaign: views, clicks, entries, repeated interactions, cross-surface engagement, and return visits. Users showing the strongest campaign-relevant interest are flagged as qualified.' },
      { q: 'What signals indicate stronger user intent?', a: 'Multiple views, multiple entries, repeated offer interaction, clicking across multiple distribution surfaces, returning engagement after initial touch, and higher-frequency interaction across the campaign window.' },
      { q: 'How does GolfN build audience cohorts?', a: 'GolfN uses the behavior of users who show the strongest interest to define a partner-specific cohort. That cohort is used for follow-up targeting, optimization, and as a seed model for identifying similar users over time.' },
      { q: 'How does GolfN identify future prospects after the initial campaign?', a: 'As new users enter GolfN and exhibit behavior patterns similar to those who showed strong campaign interest, GolfN can continue adding them to the partner audience. The cohort grows over time without additional campaign spend.' },
    ],
  },
  {
    group: 'Activation Pathways',
    items: [
      { q: 'What post-campaign activation options are available?', a: 'Custom offer follow-up, social audience push, Learn & Earn education, marketplace integration, executive endorsement, Daily Grind event activation, and ongoing cohort re-engagement.' },
      { q: 'Can GolfN support custom offer follow-up?', a: 'Yes. Targeted follow-up offers are delivered to users who showed verified interest. These can link to partner websites with optional points-back cashback. External offers require an affiliate structure with 20%+ commission.' },
      { q: 'Can GolfN drive social follow campaigns?', a: 'Yes. GolfN drives verified social follows through OAuth integrations with Instagram, X, TikTok, Facebook, and YouTube. Every follow is attributed to a verified golfer with known behavior.' },
      { q: 'How does Learn & Earn work?', a: 'Users watch videos, read materials, and complete quizzes about your product. Correct answers earn points. Wrong answers reduce or eliminate points. Rewards are vendor-funded and billed based on actual points served, invoiced net 30.' },
      { q: 'Can products be added to the GolfN Marketplace?', a: 'Yes. Products are listed in the points marketplace. Users redeem earned points toward purchases. The brand fulfills and drop-ships directly. Requires 30% wholesale margin plus dropship arrangement.' },
      { q: 'What is Executive Endorsement?', a: 'Founder, executive, athlete, or expert-led content designed to create stronger trust, better product context, and more persuasive storytelling. Best for premium brands, technical products, and founder-led companies.' },
      { q: 'How does Daily Grind event activation work?', a: 'GolfN activates the qualified cohort to attend real-world events. Fees are performance-based and only triggered when a user checks in through the GolfN app. Useful for demo days, retail activations, and brand events.' },
    ],
  },
  {
    group: 'Reporting and Management',
    items: [
      { q: 'What reporting is included?', a: 'Monthly performance reports covering campaign metrics, cohort intelligence, progression analysis, and optimization recommendations. Plus a monthly strategy review call and raw data exports.' },
      { q: 'What is included in the first 30 days after launch?', a: 'Post-campaign follow-up, initial cohort qualification, first-wave activation across relevant channels, initial reporting, and strategic recommendations for the next phase.' },
      { q: 'Why is there an ongoing management fee?', a: 'After the initial 30-day included period, ongoing management covers reporting, creative refreshes (up to 3 variants per message), message testing, cohort expansion, newly qualifying user identification, and continued program optimization.' },
      { q: 'What kind of optimization happens each month?', a: 'Creative performance analysis, targeting refinements, budget reallocation suggestions, new audience segment testing, and strategic recommendations based on campaign and cohort data.' },
    ],
  },
  {
    group: 'Requirements and Economics',
    items: [
      { q: 'What does a brand need to provide to launch?', a: 'Prize package or offer, brand assets and guidelines, logos, product photography, product descriptions, landing pages or destinations, and a point of contact for approvals.' },
      { q: 'Why is setup investment required?', a: 'Every program includes real upfront work: strategy, offer design, audience definition, tracking logic, campaign implementation, and the first 30 days of post-campaign follow-up. Setup investment ensures proper program architecture.' },
      { q: 'What affiliate economics are required?', a: 'Minimum 20% affiliate commission for external offer campaigns. Standard 3-5% rates are insufficient. The margin supports points-back incentives and working margin for GolfN activation costs.' },
      { q: 'What wholesale requirements apply for marketplace?', a: 'Minimum 30% wholesale margin plus dropship arrangement. The brand fulfills all orders directly. GolfN holds zero inventory.' },
      { q: 'How are rewards funded in Learn & Earn?', a: 'Rewards are vendor-funded. The partner deposits points value upfront. When points are depleted, the campaign pauses until re-filled. Points are billed based on actual points served.' },
      { q: 'How are points billed?', a: 'Points are billed as served, invoiced net 30. No upfront bulk purchase required beyond the initial deposit. Billing scales with actual user engagement.' },
    ],
  },
]

export function S11_FAQ({ partner }: { partner: PartnerData }) {
  const customFAQ = (partner.customFAQ || []).map(f => ({ q: f.question, a: f.answer }))

  return (
    <section className="py-24 md:py-32">
      <div className="w-content px-5 md:px-12">
        <Fade>
          <p className="text-sm font-mono tracking-[0.2em] uppercase mb-4 text-[#00ff9d]">FAQ</p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-[0.95] mb-14">Frequently asked<br /><span className="text-gradient">questions</span></h2>
        </Fade>

        <div className="space-y-10">
          {faqGroups.map((group, gi) => (
            <Fade key={group.group} delay={0.05 * gi}>
              <div>
                <h3 className="text-sm font-mono tracking-[0.15em] uppercase mb-4 text-[#00ff9d]">{group.group}</h3>
                <div className="space-y-2">
                  {group.items.map((faq, i) => (
                    <Expand key={i} accentColor="#00ff9d" trigger={<span className="text-base font-semibold text-white">{faq.q}</span>}>
                      <p className="text-base text-[#d1d5db] leading-relaxed pt-1">{faq.a}</p>
                    </Expand>
                  ))}
                </div>
              </div>
            </Fade>
          ))}

          {customFAQ.length > 0 && (
            <Fade delay={0.3}>
              <div>
                <h3 className="text-sm font-mono tracking-[0.15em] uppercase mb-4 text-[#00ff9d]">Partner-Specific</h3>
                <div className="space-y-2">
                  {customFAQ.map((faq, i) => (
                    <Expand key={i} accentColor="#00ff9d" trigger={<span className="text-base font-semibold text-white">{faq.q}</span>}>
                      <p className="text-base text-[#d1d5db] leading-relaxed pt-1">{faq.a}</p>
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
