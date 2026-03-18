// Sub 70 partner configuration
// Based on call with Jay Armour (Dir. Marketing) -- March 4, 2026
// NOTE: logoUrl should be migrated to Sanity CDN for consistency

import type { BrandCampaign } from './template-types'
import { sub70Campaigns } from './sub-70-campaigns'

export const sub70Config = {
  slug: 'sub-70' as const,
  partnerName: 'Sub 70',
  password: 'sub702026',
  // Sub 70 logo -- dark wordmark, works with brightness(0) invert(1) filter
  // TODO: Upload to Sanity CDN and replace this URL
  logoUrl: 'https://www.golfsub70.com/skin/frontend/ultimo/default/images/tlogoNT_m314.webp',
  primaryColor: '#1a1a1a',
  secondaryColor: '#4a4a4a',
  productCategory: 'Direct-to-Consumer Golf Equipment',
  productNames: ['Drivers', 'Iron Sets', 'Wedges', 'Putters', 'Fairway Woods', 'Hybrids'],
  heroHeadline: 'GolfN x Sub 70: Reach the Golfers Already Looking for You',
  heroSubtitle: 'Prepared for Jay Armour -- March 2026. Sub 70 builds premium golf equipment for the research-driven golfer who wants big-brand performance without big-brand pricing. GolfN puts Sub 70 in front of 100,000+ verified golfers who fit that exact profile -- with first-party data targeting that replaces spray-and-pray with precision. Every arrow hits the target.',
  howItWorksIntro: 'Sub 70 already earns trust through product quality, reviews, and word of mouth. GolfN accelerates that flywheel by putting Sub 70 in front of verified golfers who are actively engaged, research-driven, and ready to discover their next equipment brand -- with education, incentives, and attribution built in.',
  pricingIntro: 'Sub 70 provides prize product for the sweepstakes (recommended ~$4,500 total value). GolfN charges a one-time startup fee, then bills monthly per qualified user added to your cohort. No wasted spend -- every dollar reaches a verified golfer.',
  keyMarkets: ['United States'],
  defaultPath: 'pilot' as const,
  campaigns: sub70Campaigns,
  commerceNotes: [
    'Sub 70\'s direct-to-consumer model means every GolfN-driven purchase goes straight to golfsub70.com -- no middleman, no channel conflict. GolfN\'s UID tracking captures attribution cleanly regardless of backend, which means it works today on Magento and will work seamlessly after the Shopify migration.',
    'GolfN\'s points-back mechanic creates a dual incentive: golfers earn rewards for purchasing through Sub 70, and Sub 70 gets trackable, attributable sales from verified golfers. This replaces the broken affiliate plugin with a system that actually works.',
    'Over 58% of GolfN users are under 35 -- the exact demographic Sub 70 targets. These are not five-year customers. They are 30-year lifetime value relationships. GolfN knows what clubs they play, when they last upgraded, and what content they engage with.',
  ],
}
