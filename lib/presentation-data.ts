// GolfN Partnership Structure -- v9 FINAL content + v8.1 expanded copy
// Platform stats updated Mar 11, 2026
// Sports Impact portfolio presentation from Mar 9, 2026 call

import type { BrandCampaign } from './template-types'

export interface PortfolioBrand {
  slug: string
  name: string
  logoUrl: string
  color: string
  category: string
  products: string[]
  pitch: string
  targetingEdge: string
}

export interface PartnerConfig {
  slug: string
  partnerName: string
  logoUrl?: string
  primaryColor: string
  secondaryColor: string
  productCategory: string
  productNames: string[]
  password?: string
  heroSubtitle?: string
  heroHeadline?: string
  howItWorksIntro?: string
  pricingIntro?: string
  pricingNote?: string
  keyMarkets?: string[]
  agencyName?: string
  agencyLogoUrl?: string
  agencyBrands?: string[]
  portfolioBrands?: PortfolioBrand[]
  commerceNotes?: string[]
  defaultPath?: 'pilot' | 'growth' | 'strategic'
  isPortfolio?: boolean
  campaigns?: BrandCampaign[]
  portfolioDiscount?: { startupPct: number; perUserPct: number }
}

const MOTOCADDY_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/b0f6f787acc61119cc6e9796fd64b75979e5f75a-2741x635.png'

// ---- Sports Impact campaign data ----
const sportsImpactCampaigns: BrandCampaign[] = [
  {
    brandName: 'Galvin Green',
    brandLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
    brandColor: '#17A455',
    title: 'Never Compromise Weather Challenge',
    prizePool: '$4,800',
    description: 'Showcases the full 2026 ARLO GORE-TEX + INSULA layering system.',
    prizes: [
      { place: '1st', description: 'Full ARLO waterproof system + INSULA kit + fitting', value: '$2,800' },
      { place: '2nd', description: 'LUIS windproof + midlayer set', value: '$1,200' },
      { place: '3rd-6th', description: 'Signature layering + accessory bundles (x4)', value: '$400 each' },
    ],
  },
  {
    brandName: 'MotoCaddy',
    brandLogoUrl: MOTOCADDY_LOGO,
    brandColor: '#0066CC',
    title: 'Effortless Round Upgrade',
    prizePool: '$4,700',
    description: 'Highlights the 2026 M7 GPS Remote and walk-vs-ride targeting data.',
    prizes: [
      { place: '1st', description: 'M7 GPS Remote trolley + Elite bag + accessories', value: '$2,700' },
      { place: '2nd', description: 'M1 DHC trolley + bag', value: '$1,200' },
      { place: '3rd-6th', description: 'Premium accessory kits + lithium upgrades (x4)', value: '$400 each' },
    ],
  },
  {
    brandName: 'Wilson Golf',
    brandLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
    brandColor: '#C41E3A',
    title: 'Play Original Experience',
    prizePool: '$4,850',
    description: 'Ties into the 2026 Staff Model XB and DYNAPWR lineup.',
    prizes: [
      { place: '1st', description: 'Staff Model XB irons + DYNAPWR driver + bag', value: '$2,900' },
      { place: '2nd', description: 'DYNAPWR Forged irons + bag', value: '$1,200' },
      { place: '3rd-8th', description: 'Staff Model X balls (3 dozen) + accessories (x6)', value: '$300 each' },
    ],
  },
]

export const partners: Record<string, PartnerConfig> = {
  // -- Generic template (clean, no Sports Impact content) --------------
  'template': {
    slug: 'template',
    partnerName: '[Brand Name]',
    password: 'golfnpartners',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: '[Brand Category]',
    productNames: ['[Product Line 1]', '[Product Line 2]', '[Product Line 3]'],
    heroSubtitle: 'Brand awareness, technical education, and premium positioning for verified golfers -- built around [Brand Name]\'s [Key Product Feature] and [Product Strategy / Seasonal Focus].',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
    defaultPath: 'pilot',
  },

  // -- Galvin Green ----------------------------------------------------
  'galvin-green': {
    slug: 'galvin-green',
    partnerName: 'Galvin Green',
    password: 'galvin2026',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Premium Golf Outerwear',
    productNames: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'],
    heroSubtitle: 'Brand awareness, technical education, and premium positioning for verified golfers -- built around Galvin Green\'s multi-layer system and seasonal capsule collections.',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    agencyBrands: ['Wilson Golf', 'MotoCaddy'],
    defaultPath: 'pilot',
    commerceNotes: [
      'Galvin Green\'s premium price point supports meaningful affiliate commission. GolfN\'s points economy layers on top of existing affiliate partnerships -- users earn points for purchases made through tracked links, creating dual incentive without replacing current structures.',
      'For capsule collection drops and limited-edition releases, exclusive early-access activations create urgency and introduce the brand to golfers who may not know Galvin Green yet -- without discounting or competitions that compromise premium positioning.',
      'GolfN knows which golfers play in rain, wind, and cold. Regional and weather-based targeting means Galvin Green campaigns reach golfers in climates where technical outerwear is essential -- not wasted on golfers in perpetual sunshine.',
    ],
  },

  // -- Sports Impact (Portfolio) ---------------------------------------
  'sports-impact': {
    slug: 'sports-impact',
    partnerName: 'Sports Impact',
    password: 'sportsimpact2026',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Multi-Brand Golf Portfolio',
    productNames: ['Galvin Green', 'Wilson Golf', 'MotoCaddy'],
    heroHeadline: 'GolfN x Sports Impact: Three Brand Kickoff Sweepstakes',
    heroSubtitle: 'Prepared for Natalie Collard & Bryce Ritchie -- March 2026. Three separate, high-impact sweepstakes -- one for each of your clients -- with multiple winners and full product showcasing. Brand provides prize bundles only (under $5,000 total value per campaign). Low cost of entry with ability to scale.',
    howItWorksIntro: 'We launch three coordinated brand-specific sweepstakes as the perfect awareness kickoff, exactly as discussed with Lou and Natalie.',
    pricingIntro: 'Brand provides prize bundles only (under $5,000 per campaign). GolfN charges a one-time startup fee per brand, then bills monthly per qualified user added to your cohort. Sports Impact portfolio pricing applies across all three brands.',
    pricingNote: 'Sports Impact Shared Advantage: 10% off startup fees + 15% off per-user rates for 12 months when running all three together.',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    defaultPath: 'pilot',
    isPortfolio: true,
    campaigns: sportsImpactCampaigns,
    portfolioDiscount: { startupPct: 10, perUserPct: 15 },
    portfolioBrands: [
      {
        slug: 'galvin-green',
        name: 'Galvin Green',
        logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
        color: '#17A455',
        category: 'Premium Golf Outerwear',
        products: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'],
        pitch: 'Brand awareness and technical education for a premium Swedish outerwear brand expanding US recognition.',
        targetingEdge: 'GolfN knows which golfers play in rain, wind, and cold -- and targets only climates where technical outerwear matters.',
      },
      {
        slug: 'motocaddy',
        name: 'MotoCaddy',
        logoUrl: MOTOCADDY_LOGO,
        color: '#0066CC',
        category: 'Electric Golf Trolleys',
        products: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
        pitch: 'Precision targeting for a high-ticket product. Walk-vs-ride data means every impression goes to a verified walker.',
        targetingEdge: 'GolfN is the only platform that knows which golfers walk. Every MotoCaddy impression goes to a verified walker -- zero waste.',
      },
      {
        slug: 'wilson-golf',
        name: 'Wilson Golf',
        logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
        color: '#C41E3A',
        category: 'Golf Equipment',
        products: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
        pitch: 'Full-funnel activation for equipment launches. GolfN tracks what clubs users play and when they last upgraded.',
        targetingEdge: 'GolfN tracks what clubs users play, when they last upgraded, and their handicap range -- so Wilson campaigns reach golfers ready to switch.',
      },
    ],
    commerceNotes: [
      'All three brands have existing affiliate partnerships. GolfN\'s points economy layers on top -- users earn points for purchases through tracked links, creating dual incentive without replacing current affiliate structures.',
      'Consolidated agency pricing applies across the portfolio. Campaign architecture, audience intelligence, and infrastructure are shared -- reducing per-brand costs significantly compared to activating each brand independently.',
      'Each brand gets distinct targeting: weather-based for Galvin Green, walk-vs-ride for MotoCaddy, equipment-readiness for Wilson. Shared infrastructure, differentiated activation.',
    ],
  },

  // -- Wilson Golf -----------------------------------------------------
  'wilson-golf': {
    slug: 'wilson-golf',
    partnerName: 'Wilson Golf',
    password: 'wilson2026',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
    primaryColor: '#C41E3A',
    secondaryColor: '#E8344E',
    productCategory: 'Golf Equipment',
    productNames: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  },

  // -- MotoCaddy -------------------------------------------------------
  'motocaddy': {
    slug: 'motocaddy',
    partnerName: 'MotoCaddy',
    password: 'motocaddy2026',
    logoUrl: MOTOCADDY_LOGO,
    primaryColor: '#0066CC',
    secondaryColor: '#3399FF',
    productCategory: 'Electric Golf Trolleys',
    productNames: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  },

  // -- Demo ------------------------------------------------------------
  demo: {
    slug: 'demo',
    partnerName: 'Your Brand',
    password: 'golfnpartners',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Golf Products',
    productNames: ['Product Line 1', 'Product Line 2', 'Product Line 3'],
  },
}

export const platformStats = {
  registeredUsers: '100,000+',
  monthlyGrowth: '~6,000/mo',
  cac: 'Sub-$2',
  powerUsers: '7,315',
  powerUsersLabel: 'Mar 11, 2026',
  peakMAU: '28,060',
  engagedShare: '65.8%',
  under34: '56%',
  avgMonthlyLogins: '30+',
  adEligibleViews: '336/user/mo',
  countries: '57',
}

export const commercialModel = {
  setup: {
    title: 'Program Setup',
    subtitle: 'One-Time Investment',
    description: 'A one-time investment covering the strategic, creative, and operational infrastructure required to launch a full-funnel golfer activation program.',
    tiers: [
      { name: 'Focused Launch', range: '$7,500 - $12,500', description: 'Core audience build, initial Learn & Earn, single activation pathway' },
      { name: 'Full Program', range: '$12,500 - $20,000', description: 'Multi-channel activation, Daily Grind integration, content production' },
      { name: 'Enterprise', range: '$20,000 - $35,000+', description: 'Full eight-stage deployment, custom integrations, dedicated strategy' },
    ],
    extensions: [
      { name: 'Executive Brand Storytelling', price: '$2,500/video' },
      { name: 'Campaign Content Production', price: '$1,000/piece' },
      { name: 'Platform Distribution Extension', price: '$750/platform' },
    ],
  },
  management: {
    title: 'Managed Program Delivery',
    subtitle: 'Recurring Monthly',
    description: 'The setup fee builds the system. The monthly management fee runs and optimizes it.',
    functions: [
      { name: 'Audience Intelligence & Lookalike Enrollment', description: 'Continuous refinement of the interest cohort and AI-driven lookalike model.' },
      { name: 'Live Program Orchestration', description: 'Active management of Learn & Earn modules, exclusive offers and points-back incentives, Daily Grind check-in coordination.' },
      { name: 'Creative Refresh & Optimization', description: 'Updating content, offers, and messaging based on performance data.' },
      { name: 'Reporting & Strategic Management', description: 'Monthly performance reporting with audience composition, progression metrics, conversion data, and cohort growth.' },
    ],
    tiers: [
      { name: 'Growth', price: '$2,500/mo' },
      { name: 'Scale', price: '$4,500/mo' },
      { name: 'Enterprise', price: '$6,500/mo' },
    ],
  },
  media: {
    title: 'Impression Banks',
    subtitle: 'Billed as Served, No Expiration',
    description: 'The management fee funds ongoing program operation. Media and impression spend funds audience delivery volume.',
    tiers: [
      { impressions: '50K', cost: '$3,500', cpm: '$70' },
      { impressions: '100K', cost: '$7,000', cpm: '$70' },
      { impressions: '250K', cost: '$15,750', cpm: '$63' },
      { impressions: '500K+', cost: '$30,000+', cpm: '$60' },
    ],
  },
  performance: {
    title: 'Performance Economics',
    subtitle: 'Variable -- Attributed Commerce',
    description: 'This layer is realized only when GolfN drives qualifying downstream actions.',
    preferred: {
      name: 'Wholesale & Marketplace Participation',
      range: '20-40%',
      preferredRange: '30-40%',
      floor: '20%',
      description: 'The partner provides wholesale account access or wholesale-equivalent pricing.',
      whyNotAffiliate: 'Standard affiliate rates of 3-5% are not sufficient.',
    },
    alternatives: [
      { name: 'Revenue Share', range: '12-25%' },
      { name: 'Fixed CPA', range: '$10-$75+' },
      { name: 'Hybrid', range: 'Custom structure' },
    ],
  },
}

export const budgetPositioning = {
  headline: 'Where GolfN Fits in a Brand\'s Budget',
  paragraphs: [
    'Brands already allocate spend across paid social, paid search, affiliate and performance marketing, audience retargeting, activation programs, and partner growth initiatives. GolfN does not require a new budget category.',
    'GolfN should not replace broad paid media. It should earn a share of that spend where the objective is to reach verified golfers in a golf-native environment.',
    'Meta and Google help brands find likely buyers. GolfN helps brands activate verified golfers with context, qualification, incentive, education, and post-purchase progression that broad platforms do not provide.',
  ],
}

export const progressionStages = [
  { number: 1, name: 'Awareness', short: 'Full ecosystem distribution.', detail: '', channels: ['Email', 'In-App', 'Push', 'Banners', 'Social', 'Daily Grind', 'Blog/SEO'] },
  { number: 2, name: 'Intent Capture', short: 'Behavioral profiles, interest cohorts, AI lookalike models.', detail: '', channels: ['Behavioral Profiles', 'Interest Cohorts', 'AI Lookalike Models'] },
  { number: 3, name: 'Education', short: 'Learn & Earn within More Ways to Earn.', detail: '', channels: ['Learn & Earn', 'Verified Comprehension', 'Points Incentive'] },
  { number: 4, name: 'Activation', short: 'OAuth social engagement, Daily Grind check-ins, offer saves.', detail: '', channels: ['OAuth Social', 'Daily Grind', 'Offer Saves', 'Bookings'] },
  { number: 5, name: 'Conversion', short: 'Exclusive offers, points-back mechanics, marketplace pathways.', detail: '', channels: ['Exclusive Offers', 'Points-Back', 'Marketplace', 'Attribution'] },
  { number: 6, name: 'Adoption & Real-World', short: 'Course use, fittings, demo days, retail visits.', detail: '', channels: ['Course Use', 'Fittings', 'Demo Days', 'Retail Visits', 'QR Scans'] },
  { number: 7, name: 'Advocacy & Social Proof', short: 'OAuth-verified social proof, UGC, reviews, referrals.', detail: '', channels: ['Social Proof', 'UGC', 'Reviews', 'Referrals'] },
  { number: 8, name: 'Retention & Evergreen', short: 'AI lookalike auto-enrollment, seasonal re-activation.', detail: '', channels: ['Auto-Enrollment', 'Re-activation', 'Progressive Engagement'] },
]

export const archetypes = [
  { name: 'Emerging / Test Program', stages: 'Stages 1-4', description: 'For brands entering the GolfN ecosystem for the first time.', management: 'Growth ($2,500/mo)', dailyGrind: 'Fixed fee if included', setupRange: '$7,500 - $12,500', monthlyMin: '$5,000+' },
  { name: 'Growth / Full-Funnel', stages: 'Stages 1-7', description: 'For brands ready to run the full progression from awareness through conversion.', management: 'Scale ($4,500/mo)', dailyGrind: 'Hybrid model', setupRange: '$12,500 - $20,000', monthlyMin: '$8,000+' },
  { name: 'Enterprise / Strategic', stages: 'All 8 Stages', description: 'For brands committing to sustained, multi-stage activation.', management: 'Enterprise ($6,500/mo)', dailyGrind: 'Performance-led verified check-in model', setupRange: '$20,000 - $35,000+', monthlyMin: '$12,000+' },
]

export const dailyGrindPhases = [
  { phase: 'Early', name: 'Managed Activation', description: 'Fixed monthly fee covers setup, infrastructure, reporting.', model: 'Fixed Monthly Fee' },
  { phase: 'Growth', name: 'Hybrid Model', description: 'Monthly base fee plus performance billing tied to verified check-ins.', model: 'Base + Performance' },
  { phase: 'Mature', name: 'Performance-Led', description: 'Platform minimum plus per-verified-check-in billing with volume tiers.', model: 'Per Check-in + Tiers' },
]

export const thresholds = {
  setup: '$7,500 minimum',
  recurring: '$5,000/month absolute floor',
  duration: '3 months minimum',
  commerce: '20% minimum margin, 30-40% preferred',
}

export const strategicSummary = [
  { lead: 'Brands deserve more than impressions.', body: 'They deserve measurable progression. GolfN delivers all eight stages.' },
  { lead: 'The economics are aligned.', body: 'GolfN succeeds when the partner succeeds.' },
  { lead: 'Brands already pay for these functions.', body: 'GolfN consolidates them into one coordinated system built around verified golfers.' },
]

export const closingStatement = 'GolfN does not ask brands to take a leap of faith. It asks them to redirect a portion of spend they are already committed to -- into a channel that is more contextual, more measurable, and more complete than anything else available in golf.'
