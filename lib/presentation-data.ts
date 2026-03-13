// GolfN Partnership Structure — v9 FINAL content + v8.1 expanded copy
// Platform stats updated Mar 11, 2026
// Sports Impact portfolio presentation from Mar 9, 2026 call

export interface PortfolioBrand {
  slug: string
  name: string
  logoUrl: string
  color: string
  category: string
  products: string[]
  /** One-line pitch for the portfolio overview */
  pitch: string
  /** What GolfN uniquely knows or can target for this brand */
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
  /** Partner-specific hero subtitle override */
  heroSubtitle?: string
  /** Key geographic markets for this partner */
  keyMarkets?: string[]
  /** Agency name if partner comes through an agency */
  agencyName?: string
  /** Agency logo URL */
  agencyLogoUrl?: string
  /** Additional brands the agency represents */
  agencyBrands?: string[]
  /** Full portfolio brand definitions for agency-level presentations */
  portfolioBrands?: PortfolioBrand[]
  /** Partner-specific notes surfaced in the commercial model */
  commerceNotes?: string[]
  /** Default path recommendation for this partner */
  defaultPath?: 'pilot' | 'growth' | 'strategic'
  /** Whether this is a portfolio/agency-level presentation */
  isPortfolio?: boolean
}

export const partners: Record<string, PartnerConfig> = {
  'galvin-green': {
    slug: 'galvin-green',
    partnerName: 'Galvin Green',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Premium Golf Outerwear',
    productNames: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'],
    heroSubtitle: 'Brand awareness, technical education, and premium positioning for verified golfers \u2014 built around Galvin Green\'s multi-layer system and seasonal capsule collections.',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    agencyBrands: ['Wilson Golf', 'Motorcaddy'],
    defaultPath: 'pilot',
    commerceNotes: [
      'Galvin Green\'s premium price point supports meaningful affiliate commission. GolfN\'s points economy can layer on top of existing affiliate partnerships \u2014 users earn points for purchases made through tracked links, creating dual incentive without replacing current structures.',
      'For capsule collection drops and limited-edition releases, sweepstakes-driven awareness campaigns create urgency and introduce the brand to golfers who may not know Galvin Green yet.',
      'GolfN knows which golfers play in rain, wind, and cold. Regional and weather-based targeting means Galvin Green campaigns reach golfers in climates where technical outerwear is essential \u2014 not wasted on golfers in perpetual sunshine.',
    ],
  },
  'sports-impact': {
    slug: 'sports-impact',
    partnerName: 'Sports Impact',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Multi-Brand Golf Portfolio',
    productNames: ['Galvin Green', 'Wilson Golf', 'Motorcaddy'],
    heroSubtitle: 'A consolidated partnership framework for Sports Impact\'s golf portfolio \u2014 shared infrastructure, audience intelligence, and activation across Galvin Green, Wilson, and Motorcaddy.',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    defaultPath: 'pilot',
    isPortfolio: true,
    portfolioBrands: [
      {
        slug: 'galvin-green',
        name: 'Galvin Green',
        logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
        color: '#17A455',
        category: 'Premium Golf Outerwear',
        products: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'],
        pitch: 'Brand awareness and technical education for a premium Swedish outerwear brand expanding US recognition. Capsule collection drops and weather-targeted campaigns.',
        targetingEdge: 'GolfN knows which golfers play in rain, wind, and cold \u2014 and targets only climates where technical outerwear matters.',
      },
      {
        slug: 'wilson-golf',
        name: 'Wilson Golf',
        logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
        color: '#C41E3A',
        category: 'Golf Equipment',
        products: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
        pitch: 'Full-funnel activation for equipment launches and demo day programs. Affiliate partnerships with strong price-point breadth across clubs, balls, and bags.',
        targetingEdge: 'GolfN tracks what clubs users play, when they last upgraded, and their handicap range \u2014 so Wilson campaigns reach golfers ready to switch.',
      },
      {
        slug: 'motocaddy',
        name: 'Motorcaddy',
        logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/073b40e51baf4d2834e956318fd683966a711dd2-476x102.webp',
        color: '#0066CC',
        category: 'Electric Golf Trolleys',
        products: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
        pitch: 'Precision targeting for a high-ticket product. GolfN identifies walkers vs. riders, making every impression count at a $2,000+ price point with strong affiliate commission.',
        targetingEdge: 'GolfN is the only platform that knows which golfers walk. Every Motorcaddy impression goes to a verified walker \u2014 zero waste.',
      },
    ],
    commerceNotes: [
      'All three brands have existing affiliate partnerships. GolfN\u2019s points economy layers on top \u2014 users earn points for purchases through tracked links, creating dual incentive without replacing current affiliate structures.',
      'Consolidated agency pricing applies across the portfolio. Campaign architecture, audience intelligence, and infrastructure are shared \u2014 reducing per-brand costs significantly compared to activating each brand independently.',
      'Each brand gets distinct targeting: weather-based for Galvin Green, equipment-readiness for Wilson, walker identification for Motorcaddy. Shared infrastructure, differentiated activation.',
    ],
  },
  'wilson-golf': {
    slug: 'wilson-golf',
    partnerName: 'Wilson Golf',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
    primaryColor: '#C41E3A',
    secondaryColor: '#E8344E',
    productCategory: 'Golf Equipment',
    productNames: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  },
  'motocaddy': {
    slug: 'motocaddy',
    partnerName: 'Motorcaddy',
    logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/073b40e51baf4d2834e956318fd683966a711dd2-476x102.webp',
    primaryColor: '#0066CC',
    secondaryColor: '#3399FF',
    productCategory: 'Electric Golf Trolleys',
    productNames: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
    agencyName: 'Sports Impact',
    agencyLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/70846939f70fe368db2cd0c03686d96aa31e5bab-769x186.png',
    keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  },
  demo: {
    slug: 'demo',
    partnerName: 'Your Brand',
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
    description: 'A one-time investment covering the strategic, creative, and operational infrastructure required to launch a full-funnel golfer activation program. This includes campaign strategy, creative development, distribution planning, landing page and offer architecture, Learn & Earn module creation, and integration setup.',
    tiers: [
      { name: 'Focused Launch', range: '$7,500 \u2013 $12,500', description: 'Core audience build, initial Learn & Earn, single activation pathway' },
      { name: 'Full Program', range: '$12,500 \u2013 $20,000', description: 'Multi-channel activation, Daily Grind integration, content production' },
      { name: 'Enterprise', range: '$20,000 \u2013 $35,000+', description: 'Full eight-stage deployment, custom integrations, dedicated strategy' },
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
    description: 'The setup fee builds the system. The monthly management fee runs and optimizes it. This is not a passive monitoring retainer \u2014 it funds four distinct recurring functions that operate every month the program is active.',
    functions: [
      { name: 'Audience Intelligence & Lookalike Enrollment', description: 'Continuous refinement of the interest cohort and AI-driven lookalike model. As new users onboard, the system identifies behavioral matches and enrolls them into the progression. The audience grows and sharpens every month.' },
      { name: 'Live Program Orchestration', description: 'Active management of Learn & Earn modules, exclusive offers and points-back incentives, Daily Grind check-in coordination, OAuth social activation campaigns, and post-conversion engagement sequences.' },
      { name: 'Creative Refresh & Optimization', description: 'Updating content, offers, and messaging based on performance data. Testing new creative approaches. Adjusting targeting parameters. Refreshing Learn & Earn modules. The system improves because someone is actively improving it.' },
      { name: 'Reporting & Strategic Management', description: 'Monthly performance reporting with audience composition, progression metrics, conversion data, and cohort growth. Strategic recommendations for the next period. Ongoing communication with the partner team.' },
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
    description: 'The management fee funds ongoing program operation. Media and impression spend funds audience delivery volume. These are separate by design \u2014 one pays for the team and systems running the program, the other pays for the reach delivered to golfers.',
    tiers: [
      { impressions: '50K', cost: '$3,500', cpm: '$70' },
      { impressions: '100K', cost: '$7,000', cpm: '$70' },
      { impressions: '250K', cost: '$15,750', cpm: '$63' },
      { impressions: '500K+', cost: '$30,000+', cpm: '$60' },
    ],
  },
  performance: {
    title: 'Performance Economics',
    subtitle: 'Variable \u2014 Attributed Commerce',
    description: 'This layer is not guaranteed compensation. It is realized only when GolfN drives qualifying downstream actions. If qualifying actions do not occur, GolfN does not realize this layer. This creates direct alignment: GolfN\u2019s economic upside is tied to the partner\u2019s commercial success.',
    preferred: {
      name: 'Wholesale & Marketplace Participation',
      range: '20\u201340%',
      preferredRange: '30\u201340%',
      floor: '20%',
      description: 'The partner provides wholesale account access or wholesale-equivalent pricing. Orders are generated through GolfN\u2019s marketplace or attributed commerce flow. The partner fulfills and drop-ships directly to the customer. GolfN does not hold inventory.',
      whyNotAffiliate: 'Standard affiliate rates of 3\u20135% are not sufficient. The margin must be large enough for GolfN to pass a meaningful portion back to users as points-based incentives while maintaining working margin for activation costs.',
    },
    alternatives: [
      { name: 'Revenue Share', range: '12\u201325%' },
      { name: 'Fixed CPA', range: '$10\u2013$75+' },
      { name: 'Hybrid', range: 'Custom structure' },
    ],
  },
}

export const budgetPositioning = {
  headline: 'Where GolfN Fits in a Brand\u2019s Budget',
  paragraphs: [
    'Brands already allocate spend across paid social, paid search, affiliate and performance marketing, audience retargeting, activation programs, and partner growth initiatives. GolfN does not require a new budget category. It earns a place inside spend that already exists.',
    'GolfN should not replace broad paid media. It should earn a share of that spend where the objective is to reach verified golfers in a golf-native environment and move them through a more measurable progression from awareness to action.',
    'Meta and Google help brands find likely buyers. GolfN helps brands activate verified golfers with context, qualification, incentive, education, and post-purchase progression that broad platforms do not provide.',
  ],
}

export const progressionStages = [
  {
    number: 1, name: 'Awareness',
    short: 'Full ecosystem distribution \u2014 email, in-app, push, banners, social, Daily Grind banners, blog/SEO.',
    detail: 'GolfN introduces partner brands to highly relevant golfers through premium placements, targeted campaigns, content, and ecosystem-wide visibility. Distribution spans the full ecosystem: email to the collected base, in-app messages, push notifications, persistent banners, social feed placement, awareness banners within Daily Grind, blog and SEO content, and co-promotion.',
    channels: ['Email', 'In-App', 'Push', 'Banners', 'Social', 'Daily Grind', 'Blog/SEO'],
  },
  {
    number: 2, name: 'Intent Capture',
    short: 'Behavioral profiles, interest cohorts, AI lookalike models.',
    detail: 'GolfN identifies and segments golfers showing relevant interest signals, moving beyond broad reach into measurable audience qualification. Every interaction writes to the user\u2019s profile. The platform constructs behavioral profiles of interested users, producing a defined interest cohort and an AI-powered lookalike model. Campaign is temporary \u2014 intelligence is permanent.',
    channels: ['Behavioral Profiles', 'Interest Cohorts', 'AI Lookalike Models'],
  },
  {
    number: 3, name: 'Education',
    short: 'Learn & Earn within More Ways to Earn. Verified comprehension.',
    detail: 'GolfN helps partners teach golfers why a product, service, or experience matters through Learn & Earn, storytelling, and contextual education. Learn & Earn lives within GolfN\u2019s \u201cMore Ways to Earn\u201d section \u2014 a digital engagement area where users can earn points from anywhere, not just on the course. Wrong answers mean no points or reduced points. Education becomes measurable.',
    channels: ['Learn & Earn', 'Verified Comprehension', 'Points Incentive'],
  },
  {
    number: 4, name: 'Activation',
    short: 'OAuth social engagement, Daily Grind check-ins, offer saves, bookings.',
    detail: 'GolfN prompts verified golfer actions: saving offers, booking fittings, following partners socially, checking in at partner locations, or taking measurable steps toward purchase. Through OAuth integrations with Instagram, X, and Facebook, GolfN drives verified social actions from verified golfers.',
    channels: ['OAuth Social', 'Daily Grind', 'Offer Saves', 'Bookings'],
  },
  {
    number: 5, name: 'Conversion',
    short: 'Exclusive offers, points-back mechanics, marketplace pathways.',
    detail: 'GolfN drives measurable purchase behavior through exclusive offers, marketplace pathways, points-backed incentives, and partner-driven calls to action. Points function as acquisition and activation currency, creating a conversion mechanism standard media cannot replicate. All transactions are tracked through fuller-funnel attribution.',
    channels: ['Exclusive Offers', 'Points-Back', 'Marketplace', 'Attribution'],
  },
  {
    number: 6, name: 'Adoption & Real-World Engagement',
    short: 'Course use, fittings, demo days, retail visits, QR scans.',
    detail: 'GolfN extends value beyond conversion by driving and measuring verified real-world participation and product usage. The platform can verify and incentivize first product use on the course, rounds with specific equipment, fitting completions, demo day attendance, retail visits, QR scans at partner activations, and Daily Grind location check-ins.',
    channels: ['Course Use', 'Fittings', 'Demo Days', 'Retail Visits', 'QR Scans'],
  },
  {
    number: 7, name: 'Advocacy & Social Proof',
    short: 'OAuth-verified social proof, UGC, reviews, referrals.',
    detail: 'GolfN turns activated golfers into visible brand advocates through verified social actions, user-generated content, reviews, referrals, and public proof of affinity. Through OAuth integrations, GolfN drives verified social activation from golfers whose identity, play behavior, and purchase history are known.',
    channels: ['Social Proof', 'UGC', 'Reviews', 'Referrals'],
  },
  {
    number: 8, name: 'Retention & Evergreen',
    short: 'AI lookalike auto-enrollment, seasonal re-activation.',
    detail: 'GolfN keeps the relationship active through re-targeting, repeat incentives, and behavior-based re-engagement. Daily Grind encourages ongoing check-ins. More Ways to Earn surfaces fresh Learn & Earn modules, seasonal content, and new engagement opportunities. AI-driven lookalike auto-enrollment continuously feeds the top of the progression.',
    channels: ['Auto-Enrollment', 'Re-activation', 'Progressive Engagement'],
  },
]

export const archetypes = [
  {
    name: 'Emerging / Test Program',
    stages: 'Stages 1\u20134',
    description: 'For brands entering the GolfN ecosystem for the first time or testing the model with a contained scope. Awareness + cohort building + early activation.',
    management: 'Growth ($2,500/mo)',
    dailyGrind: 'Fixed fee if included',
    setupRange: '$7,500 \u2013 $12,500',
    monthlyMin: '$5,000+',
  },
  {
    name: 'Growth / Full-Funnel',
    stages: 'Stages 1\u20137',
    description: 'For brands ready to run the full progression from awareness through conversion and into early post-purchase engagement. Education, activation, conversion, early adoption and advocacy.',
    management: 'Scale ($4,500/mo)',
    dailyGrind: 'Hybrid model',
    setupRange: '$12,500 \u2013 $20,000',
    monthlyMin: '$8,000+',
  },
  {
    name: 'Enterprise / Strategic',
    stages: 'All 8 Stages',
    description: 'For brands committing to sustained, multi-stage activation with advanced cohort development, real-world engagement, and compounding re-engagement.',
    management: 'Enterprise ($6,500/mo)',
    dailyGrind: 'Performance-led verified check-in model',
    setupRange: '$20,000 \u2013 $35,000+',
    monthlyMin: '$12,000+',
  },
]

export const dailyGrindPhases = [
  { phase: 'Early', name: 'Managed Activation', description: 'Fixed monthly fee covers setup, infrastructure, reporting, and management of Daily Grind check-in campaigns.', model: 'Fixed Monthly Fee' },
  { phase: 'Growth', name: 'Hybrid Model', description: 'Monthly base fee plus performance billing tied to verified check-ins. Shared risk, shared upside.', model: 'Base + Performance' },
  { phase: 'Mature', name: 'Performance-Led', description: 'Platform minimum plus per-verified-check-in billing with volume tiers. Pure performance economics.', model: 'Per Check-in + Tiers' },
]

export const thresholds = {
  setup: '$7,500 minimum',
  recurring: '$5,000/month absolute floor',
  duration: '3 months minimum',
  commerce: '20% minimum margin, 30\u201340% preferred',
}

export const strategicSummary = [
  {
    lead: 'Brands deserve more than impressions.',
    body: 'They deserve measurable progression \u2014 verified awareness, qualified intent, proven education, tracked activation, attributed conversion, confirmed adoption, visible advocacy, and compounding retention. GolfN delivers all eight.',
  },
  {
    lead: 'The economics are aligned.',
    body: 'Fixed fees cover the strategic and operational work required to build and run the program. Performance economics are realized only when qualifying downstream actions occur. GolfN succeeds when the partner succeeds.',
  },
  {
    lead: 'Brands already pay for these functions.',
    body: 'Awareness, education, activation, conversion, social proof, and retention \u2014 across fragmented partners and channels. GolfN consolidates them into one coordinated system built around verified golfers and first-party behavioral data.',
  },
]

export const closingStatement = 'GolfN does not ask brands to take a leap of faith. It asks them to redirect a portion of spend they are already committed to \u2014 into a channel that is more contextual, more measurable, and more complete than anything else available in golf.'
