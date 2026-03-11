// ============================================================================
// GolfN Partnership Structure — Static Content from v9 FINAL
// This data powers the presentation until Sanity CMS migration is complete.
// ============================================================================

export interface PartnerConfig {
  slug: string
  partnerName: string
  logoUrl?: string
  primaryColor: string
  secondaryColor: string
  productCategory: string
  productNames: string[]
  password?: string
}

export const partners: Record<string, PartnerConfig> = {
  'galvin-green': {
    slug: 'galvin-green',
    partnerName: 'Galvin Green',
    primaryColor: '#17A455',
    secondaryColor: '#8DC54A',
    productCategory: 'Premium Golf Outerwear',
    productNames: ['GORE-TEX Jackets', 'Interface Layers', 'Base Layers', 'Accessories'],
  },
  'wilson-golf': {
    slug: 'wilson-golf',
    partnerName: 'Wilson Golf',
    primaryColor: '#C41E3A',
    secondaryColor: '#E8344E',
    productCategory: 'Golf Equipment',
    productNames: ['Dynapower Drivers', 'Staff Model Irons', 'Triad Golf Balls', 'Quiver Stand Bags'],
  },
  'motocaddy': {
    slug: 'motocaddy',
    partnerName: 'Motocaddy',
    primaryColor: '#0066CC',
    secondaryColor: '#3399FF',
    productCategory: 'Electric Golf Caddies',
    productNames: ['M7 GPS', 'M5 GPS', 'S1 DHC', 'Cube Push Trolley'],
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
  engagedUsers: '4,766',
  engagedLabel: 'A+B+C Tiers, Feb 2026',
  peakMAU: '12,405',
  under34: '56%',
  avgMonthlyLogins: '30+',
  adEligibleViews: '336/user/month',
  countries: '57',
}

export const commercialModel = {
  setup: {
    title: 'Program Setup',
    subtitle: 'One-Time Investment',
    tiers: [
      { name: 'Focused Launch', range: '$7,500 – $12,500', description: 'Core audience build, initial Learn & Earn, single activation pathway' },
      { name: 'Full Program', range: '$12,500 – $20,000', description: 'Multi-channel activation, Daily Grind integration, content production' },
      { name: 'Enterprise', range: '$20,000 – $35,000+', description: 'Full eight-stage deployment, custom integrations, dedicated strategy' },
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
    functions: [
      { name: 'Audience Intelligence', description: 'Behavioral profiles, lookalike enrollment, segment migration tracking' },
      { name: 'Live Program Orchestration', description: 'Learn & Earn, offers, Daily Grind, social activation campaigns' },
      { name: 'Creative Refresh & Optimization', description: 'A/B testing, creative rotation, performance-based iteration' },
      { name: 'Reporting & Strategic Management', description: 'Campaign analytics, progression metrics, strategic recommendations' },
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
    tiers: [
      { impressions: '50K', cost: '$3,500', cpm: '$70' },
      { impressions: '100K', cost: '$7,000', cpm: '$70' },
      { impressions: '250K', cost: '$15,750', cpm: '$63' },
      { impressions: '500K+', cost: '$30,000+', cpm: '$60' },
    ],
  },
  performance: {
    title: 'Performance Economics',
    subtitle: 'Variable — Attributed Commerce',
    preferred: {
      name: 'Attributed Commerce / Wholesale-Equivalent Participation',
      range: '20–40%',
      preferredRange: '30–40%',
      floor: '20%',
      description: 'Partner fulfills and drop-ships directly to customer. GolfN does not hold inventory. Margin funds user incentives, activation costs, and GolfN working margin.',
    },
    alternatives: [
      { name: 'Revenue Share', range: '12–25%' },
      { name: 'Fixed CPA', range: '$10–$75+' },
      { name: 'Hybrid', range: 'Custom structure' },
    ],
  },
}

export const progressionStages = [
  {
    number: 1,
    name: 'Awareness',
    description: 'Full ecosystem distribution — email, in-app, push, banners, social, Daily Grind awareness banners, blog/SEO.',
    channels: ['Email', 'In-App', 'Push', 'Banners', 'Social', 'Daily Grind', 'Blog/SEO'],
  },
  {
    number: 2,
    name: 'Intent Capture',
    description: 'Behavioral profiles, interest cohorts, AI lookalike models. Campaign is temporary — intelligence is permanent.',
    channels: ['Behavioral Profiles', 'Interest Cohorts', 'AI Lookalike Models'],
  },
  {
    number: 3,
    name: 'Education',
    description: 'Learn & Earn within More Ways to Earn. Verified comprehension — wrong answers mean no points or reduced points.',
    channels: ['Learn & Earn', 'Verified Comprehension', 'Points-Based Incentive'],
  },
  {
    number: 4,
    name: 'Activation',
    description: 'OAuth social engagement (Instagram, X, Facebook), Daily Grind check-ins, offer saves, bookings.',
    channels: ['OAuth Social', 'Daily Grind Check-ins', 'Offer Saves', 'Bookings'],
  },
  {
    number: 5,
    name: 'Conversion',
    description: 'Exclusive offers, points-back mechanics, marketplace pathways, fuller-funnel attribution.',
    channels: ['Exclusive Offers', 'Points-Back', 'Marketplace', 'Attribution'],
  },
  {
    number: 6,
    name: 'Adoption & Real-World Engagement',
    description: 'Course use, fittings, demo days, retail visits, QR scans, Daily Grind location check-ins.',
    channels: ['Course Use', 'Fittings', 'Demo Days', 'Retail Visits', 'QR Scans'],
  },
  {
    number: 7,
    name: 'Advocacy & Social Proof',
    description: 'OAuth-verified social proof, UGC, reviews, referrals — authentic endorsement at scale.',
    channels: ['Social Proof', 'UGC', 'Reviews', 'Referrals'],
  },
  {
    number: 8,
    name: 'Retention & Evergreen',
    description: 'AI lookalike auto-enrollment, seasonal re-activation, progressive engagement loops.',
    channels: ['Auto-Enrollment', 'Seasonal Re-activation', 'Progressive Engagement'],
  },
]

export const archetypes = [
  {
    name: 'Emerging / Test Program',
    stages: 'Stages 1–4',
    description: 'Awareness + cohort building + early activation. Ideal for brands entering the GolfN ecosystem.',
    management: 'Growth ($2,500/mo)',
    dailyGrind: 'Fixed fee if included',
    setupRange: '$7,500 – $12,500',
    monthlyMin: '$5,000+',
  },
  {
    name: 'Growth / Full-Funnel',
    stages: 'Stages 1–7',
    description: 'Through education, activation, conversion, early adoption and advocacy. For brands ready to drive measurable commerce.',
    management: 'Scale ($4,500/mo)',
    dailyGrind: 'Hybrid model',
    setupRange: '$12,500 – $20,000',
    monthlyMin: '$8,000+',
  },
  {
    name: 'Enterprise / Strategic',
    stages: 'All 8 Stages',
    description: 'Full eight-stage deployment with performance-led economics. For brands committed to owning a category within GolfN.',
    management: 'Enterprise ($6,500/mo)',
    dailyGrind: 'Performance-led verified check-in model',
    setupRange: '$20,000 – $35,000+',
    monthlyMin: '$12,000+',
  },
]

export const dailyGrindPhases = [
  {
    phase: 'Early',
    name: 'Managed Activation',
    description: 'Fixed monthly fee covers setup, infrastructure, reporting, and management of Daily Grind check-in campaigns.',
    model: 'Fixed Monthly Fee',
  },
  {
    phase: 'Growth',
    name: 'Hybrid Model',
    description: 'Monthly base fee plus performance billing tied to verified check-ins. Shared risk, shared upside.',
    model: 'Base + Performance',
  },
  {
    phase: 'Mature',
    name: 'Performance-Led',
    description: 'Platform minimum plus per-verified-check-in billing with volume tiers. Pure performance economics.',
    model: 'Per Check-in + Tiers',
  },
]

export const thresholds = {
  setup: '$7,500 minimum',
  recurring: '$5,000/month absolute floor',
  duration: '3 months minimum',
  commerce: '20% minimum margin, 30–40% preferred',
}
