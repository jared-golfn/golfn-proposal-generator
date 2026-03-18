// Sub 70 partner configuration
// Based on call with Jay Armour (Dir. Marketing) -- March 4, 2026
// Copy refined for Sub 70's DTC equipment buyer profile

import { sub70Campaigns } from './sub-70-campaigns'
import type { PartnerConfig } from './presentation-data'

const TIMELAPSE_VIDEO = 'https://cdn.sanity.io/files/e3wja34v/production/44254c3ed5b70a03c02f5b64556d3b247781f86e.mp4'

export const sub70Config: PartnerConfig = {
  slug: 'sub-70',
  partnerName: 'Sub 70',
  password: 'sub702026',
  logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/df468f0d2f3c35c20c835d71dceaad9df734746c-340x100.webp',
  primaryColor: '#1a1a1a',
  secondaryColor: '#4a4a4a',
  productCategory: 'Direct-to-Consumer Golf Equipment',
  productNames: ['Drivers', 'Iron Sets', 'Wedges', 'Putters', 'Fairway Woods', 'Hybrids'],
  heroHeadline: 'Help Sub 70 Reach the Golfers Most Likely to Care',
  heroSubtitle: 'Prepared for Jay Armour -- March 2026. GolfN gives Sub 70 access to verified, golf-native audiences inside an intent-rich environment built around real golfer behavior -- helping you reach research-driven players who care about performance, fitting, and value. Not broad impressions. Qualified demand from serious golfers.',
  heroVideoUrl: TIMELAPSE_VIDEO,
  howItWorksIntro: 'Golfers don\'t buy custom equipment on impulse. They research, compare, and need trust before committing. GolfN creates a path from discovery to consideration to conversion inside a golf-native ecosystem -- giving Sub 70 repeated, meaningful touchpoints with the kind of golfer who actually buys direct-to-consumer clubs.',
  pricingIntro: 'Sub 70 provides prize product for the campaign (recommended ~$4,500 total value). GolfN charges a one-time startup fee that covers the campaign and 30 days of post-campaign follow-up. After that, ongoing activation is optional and billed per qualified user added to your cohort.',
  keyMarkets: ['United States'],
  defaultPath: 'pilot',
  defaultCohortSize: 250,
  campaigns: sub70Campaigns,
  commerceNotes: [
    'Sub 70\'s direct-to-consumer model means every GolfN-driven purchase goes straight to golfsub70.com -- no middleman, no channel conflict. GolfN\'s UID tracking captures attribution regardless of backend, so it works on Magento today and will carry over cleanly after the Shopify migration.',
    'GolfN\'s points-back mechanic gives golfers a reason to purchase through tracked links -- earning rewards while Sub 70 gets measurable, attributable sales from verified golfers. This sidesteps current affiliate tracking limitations with a system built for reliable attribution.',
    'GolfN\'s audience skews toward younger, engaged golfers building their bags -- the kind of players who represent long-term customer value for a brand that earns loyalty through product quality and service. GolfN knows what clubs they play, when they last upgraded, and what content they engage with.',
  ],
}
