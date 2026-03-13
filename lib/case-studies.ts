// GolfN Case Studies — anonymized per partner request
// Data from Jared's call references (Cobra, Club Champion, Srixon, Sand Valley)

import { images } from './images'

export interface CaseStudy {
  id: string
  /** Display name — anonymized where needed */
  title: string
  /** Brand logo URL if we can show it, undefined if anonymized */
  logoUrl?: string
  category: string
  /** Color accent for the card */
  color: string
  challenge: string
  approach: string
  results: { metric: string; value: string }[]
  /** Which Sports Impact brands this is most relevant for */
  relevantTo: string[]
  /** Quote or key insight */
  pullQuote?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'club-fitting-sweepstakes',
    title: 'Premium Club Fitting Brand',
    logoUrl: undefined, // anonymized
    category: 'High-End Services',
    color: '#8B5CF6',
    challenge: 'Needed to drive awareness for a premium club fitting service among golfers who had never heard of the brand and convert interest into booked appointments.',
    approach: 'Ran a sweepstakes for a full custom club fitting valued at $1,000+. Post-sweep, GolfN followed up with the interest cohort using targeted offers and booking incentives tied to nearby fitting locations.',
    results: [
      { metric: 'Sweepstakes Entries', value: '250,000+' },
      { metric: 'New Brand Awareness', value: 'Verified golfers exposed to brand for first time' },
      { metric: 'Post-Sweep Conversions', value: 'Campaign drove measurable bookings from interest cohort' },
    ],
    relevantTo: ['galvin-green', 'wilson-golf'],
    pullQuote: '250,000 golfers entered to win a single club fitting — that is an awareness engine, not a sweepstakes.',
  },
  {
    id: 'equipment-demo-activation',
    title: 'Major Equipment OEM',
    logoUrl: images.cobraPointsExchange,
    category: 'Equipment — Demo Day Activation',
    color: '#F59E0B',
    challenge: 'Had a strong product lineup but needed more golfers to try it in person. Demo day attendance was inconsistent and hard to measure.',
    approach: 'GolfN highlighted every demo day across North America inside the check-in system with triple point incentives. Golfers in range received targeted push notifications. Post-visit, follow-up campaigns converted trial into purchase through affiliate-tracked links.',
    results: [
      { metric: 'Demo Day Strategy', value: 'All North American demo days integrated' },
      { metric: 'Incentive Model', value: 'Triple points for verified check-ins' },
      { metric: 'Attribution', value: 'Full path from awareness to in-person trial to purchase' },
    ],
    relevantTo: ['wilson-golf', 'motocaddy'],
    pullQuote: 'The marketing director said: we like our product, we just need people to try it. GolfN got them there.',
  },
  {
    id: 'marketplace-distribution',
    title: 'Premium Golf Ball & Equipment Brand',
    logoUrl: undefined, // anonymized
    category: 'Equipment — Marketplace Distribution',
    color: '#17A455',
    challenge: 'Needed a new distribution channel that could move product without holding inventory or competing with existing retail partners.',
    approach: 'GolfN secured wholesale margin and listed products in the points marketplace. Users redeem earned points toward purchases. The brand fulfills and drop-ships directly. No inventory held by GolfN.',
    results: [
      { metric: 'Distribution Rank', value: '#1 product mover in the Midwest' },
      { metric: 'Timeline', value: 'Achieved in under 12 months from launch' },
      { metric: 'Inventory Risk', value: 'Zero — brand fulfills all orders directly' },
    ],
    relevantTo: ['galvin-green', 'wilson-golf', 'motocaddy'],
    pullQuote: 'GolfN became the #1 distributor for this brand in the region in under a year — without holding a single unit of inventory.',
  },
  {
    id: 'regional-targeting',
    title: 'Premier Golf Resort',
    logoUrl: undefined, // anonymized
    category: 'Hospitality — Regional Targeting',
    color: '#0EA5E9',
    challenge: 'Fully booked for on-property stays through 2026 but had open tee times during the day that represented lost revenue. Needed to reach golfers within driving distance.',
    approach: 'GolfN ran a hyper-targeted campaign to golfers in four surrounding states. Only users actively playing in those regions saw the promotions. Targeted roughly 2,600 verified golfers with location-relevant offers.',
    results: [
      { metric: 'Targeting Precision', value: '4-state radius, verified golfers only' },
      { metric: 'Audience Size', value: '~2,600 active golfers in target area' },
      { metric: 'Approach', value: 'Sniper rifle targeting vs. shotgun — zero wasted impressions' },
    ],
    relevantTo: ['galvin-green', 'motocaddy'],
    pullQuote: 'They did not need 100,000 impressions. They needed 2,600 of the right ones.',
  },
]

/** Per-brand recommendation with rationale */
export interface BrandRecommendation {
  brandSlug: string
  brandName: string
  brandLogoUrl: string
  brandColor: string
  recommendedPath: 'pilot' | 'growth' | 'strategic'
  rationale: string
}

export const brandRecommendations: BrandRecommendation[] = [
  {
    brandSlug: 'galvin-green',
    brandName: 'Galvin Green',
    brandLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp',
    brandColor: '#17A455',
    recommendedPath: 'pilot',
    rationale: 'Galvin Green is new to GolfN and budgets are contained. A 90-day Pilot focused on a Masters capsule collection awareness activation validates the model and builds the first qualified audience cohort \u2014 without requiring a large upfront commitment. Success here creates the foundation to expand into a seasonal Growth program.',
  },
  {
    brandSlug: 'wilson-golf',
    brandName: 'Wilson Golf',
    brandLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/dea5a3da06394dc9f1d779c94d3d75e847ba623f-807x200.svg',
    brandColor: '#C41E3A',
    recommendedPath: 'pilot',
    rationale: 'Wilson has broad product lines and existing affiliate infrastructure. A Pilot scoped around a single product launch or demo day activation proves GolfN\u2019s equipment-readiness targeting and builds the case study needed to expand into multi-product Growth campaigns.',
  },
  {
    brandSlug: 'motocaddy',
    brandName: 'Motorcaddy',
    brandLogoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/073b40e51baf4d2834e956318fd683966a711dd2-476x102.webp',
    brandColor: '#0066CC',
    recommendedPath: 'pilot',
    rationale: 'Motorcaddy\u2019s $2,000+ price point means even a small number of conversions produce significant revenue. A Pilot focused on walker identification and awareness validates GolfN\u2019s unique targeting advantage \u2014 no other platform can tell you which golfers walk. At this price point, the Pilot pays for itself quickly.',
  },
]
