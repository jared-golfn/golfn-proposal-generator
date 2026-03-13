// GolfN Partnership Paths — Pilot / Growth / Strategic
// Complete data model for the interactive guided buying experience
// Partner-specific scenario overrides for Sports Impact portfolio (Mar 9 2026)

export type PathId = 'pilot' | 'growth' | 'strategic'

export type GoalId = 'awareness' | 'education' | 'activation' | 'conversion' | 'adoption' | 'advocacy'

export type ExtensionId =
  | 'learnAndEarn'
  | 'dailyGrind'
  | 'socialActivation'
  | 'contentProduction'
  | 'executiveStorytelling'
  | 'advancedReporting'
  | 'platformDistribution'

export type NeedId =
  | 'firstTimeTest'
  | 'productLaunch'
  | 'seasonalCampaign'
  | 'multiMonthGrowth'
  | 'retailActivation'
  | 'strategicPartner'

export type ComplexityId = 'focused' | 'fullFunnel' | 'sustained'

export type ActivationImportance = 'notNeeded' | 'niceToHave' | 'important'

export type ViewMode = 'simple' | 'detailed'

// --- Partner-Specific Scenario Overrides ---

export interface ScenarioOverride {
  title: string
  description: string
}

/** Per-partner example scenario overrides keyed by partner slug then path id */
export const partnerScenarioOverrides: Record<string, Partial<Record<PathId, ScenarioOverride>>> = {
  'galvin-green': {
    pilot: {
      title: 'Masters Capsule Collection \u2014 Exclusive Drop Activation',
      description: 'A limited-edition Masters-inspired capsule promoted through an exclusive early-access activation that introduces Galvin Green to golfers who don\u2019t yet know the brand. Featured placement and Learn & Earn modules educate golfers on the multi-layer system, while affiliate-tracked links convert interest into purchases at premium price points. No discounting, no competitions \u2014 just premium brand exposure to the right audience.',
    },
    growth: {
      title: 'Seasonal Outerwear Awareness & Education Campaign',
      description: 'A multi-month campaign timed to fall and winter golf seasons. Golfers in rain-heavy and cold-weather regions are targeted with Learn & Earn modules explaining why Galvin Green\u2019s GORE-TEX layering system outperforms standard rain gear. Weather-based regional targeting ensures the message reaches golfers who need it most. Affiliate-tracked conversion pathways layer on top of existing Galvin Green affiliate partnerships.',
    },
    strategic: {
      title: 'Year-Round Premium Outerwear Partner',
      description: 'Galvin Green becomes a featured outerwear partner across the GolfN ecosystem with seasonal campaigns tied to capsule drops, weather-targeted awareness in key markets (US, UK, Australia, Canada), and ongoing Learn & Earn education about the multi-layer system.',
    },
  },
  'wilson-golf': {
    pilot: {
      title: 'New Product Launch Activation',
      description: 'A launch activation for a new Wilson product line \u2014 sweepstakes-driven awareness introduces the product, then post-sweep campaigns target golfers whose equipment profiles and handicap range make them ideal upgrade candidates. Affiliate-tracked links drive conversion.',
    },
    growth: {
      title: 'Equipment Upgrade Campaign with Demo Day Integration',
      description: 'A multi-month program combining digital education (Learn & Earn on Wilson technology), demo day check-ins through Daily Grind, and affiliate-tracked conversion. GolfN identifies golfers playing competitor clubs or overdue for an upgrade and targets them with Wilson content.',
    },
    strategic: {
      title: 'Full-Line Equipment Partner',
      description: 'Wilson Golf runs year-round across clubs, balls, and bags with seasonal product launches, demo day activations, and ongoing Learn & Earn education. Equipment profile targeting ensures every impression reaches golfers who are ready to switch or upgrade.',
    },
  },
  'motocaddy': {
    pilot: {
      title: 'Walker Identification & Awareness Campaign',
      description: 'GolfN identifies every golfer in the ecosystem who walks \u2014 the only platform that can do this. A targeted awareness activation introduces Motorcaddy to verified walkers, followed by affiliate-tracked conversion at a $2,000+ price point with strong commission.',
    },
    growth: {
      title: 'Walk-to-Ride Conversion Program',
      description: 'A multi-month campaign targeting verified walkers with Learn & Earn content on electric trolley benefits, demo day check-ins at golf retail locations, and points-backed incentives. At Motorcaddy\u2019s price point, even modest conversion rates produce significant affiliate revenue.',
    },
    strategic: {
      title: 'Year-Round Walking Golfer Activation',
      description: 'Motorcaddy becomes the exclusive electric trolley partner with year-round walker targeting, seasonal campaigns, retail check-in activations, and ongoing education. GolfN\u2019s unique walker identification data ensures zero wasted impressions.',
    },
  },
  'sports-impact': {
    pilot: {
      title: 'Multi-Brand Portfolio Pilot',
      description: 'Launch all three Sports Impact brands into GolfN simultaneously with shared infrastructure and consolidated pricing. Each brand gets a tailored activation \u2014 exclusive capsule drop awareness for Galvin Green, product launch for Wilson, walker-targeted awareness for Motorcaddy \u2014 with shared audience intelligence and reporting.',
    },
    growth: {
      title: 'Portfolio Growth Program',
      description: 'A coordinated multi-month program across Galvin Green, Wilson, and Motorcaddy. Each brand runs distinct targeting (weather-based, equipment-readiness, walker identification) while sharing campaign infrastructure, audience intelligence, and optimization. Consolidated agency pricing reduces per-brand costs significantly.',
    },
    strategic: {
      title: 'Year-Round Portfolio Partnership',
      description: 'Sports Impact becomes a strategic agency partner with year-round activation across all three brands. Shared infrastructure, combined reporting, cross-brand audience insights, and seasonal campaign coordination. The portfolio approach creates compounding value as learnings from one brand inform campaigns for others.',
    },
  },
}

// --- Partnership Path Definitions ---

export interface PartnershipPath {
  id: PathId
  name: string
  tagline: string
  bestFor: string
  includes: string[]
  includedStages: number[]
  setup: { range: string; low: number; high: number }
  monthly: { starting: string; floor: number }
  duration: { recommended: string; minimum: number }
  realWorldActivation: string
  bestFitUseCase: string
  recommendedExtensions: ExtensionId[]
  managementTier: string
  impressionRecommendation: string[]
  exampleScenario: {
    title: string
    description: string
  }
}

export const partnershipPaths: Record<PathId, PartnershipPath> = {
  pilot: {
    id: 'pilot',
    name: 'Pilot',
    tagline: 'Best for first-time programs',
    bestFor: 'Brands testing GolfN for the first time with a contained scope.',
    includes: [
      'Awareness',
      'Cohort building',
      'Early activation',
    ],
    includedStages: [1, 2, 3, 4],
    setup: { range: '$7,500 \u2013 $12,500', low: 7500, high: 12500 },
    monthly: { starting: '$5,000+', floor: 5000 },
    duration: { recommended: '3 months', minimum: 3 },
    realWorldActivation: 'Optional, typically fixed-fee if included',
    bestFitUseCase: 'Single priority launch, initial test, proof of response',
    recommendedExtensions: ['contentProduction', 'learnAndEarn', 'platformDistribution'],
    managementTier: 'Growth ($2,500/mo)',
    impressionRecommendation: ['50K', '100K'],
    exampleScenario: {
      title: 'First-Time Product Launch',
      description: 'A first-time partner launching one product and validating initial golfer response.',
    },
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    tagline: 'Best for full-funnel activation',
    bestFor: 'Brands ready to run a fuller-funnel program with progression goals.',
    includes: [
      'Awareness',
      'Intent capture',
      'Education',
      'Activation',
      'Conversion',
      'Early adoption',
    ],
    includedStages: [1, 2, 3, 4, 5, 6, 7],
    setup: { range: '$12,500 \u2013 $20,000', low: 12500, high: 20000 },
    monthly: { starting: '$8,000+', floor: 8000 },
    duration: { recommended: '3\u20136 months', minimum: 3 },
    realWorldActivation: 'Hybrid when relevant',
    bestFitUseCase: 'Multi-month campaign with progression goals and optimization',
    recommendedExtensions: ['learnAndEarn', 'dailyGrind', 'socialActivation', 'contentProduction'],
    managementTier: 'Scale ($4,500/mo)',
    impressionRecommendation: ['100K', '250K'],
    exampleScenario: {
      title: 'Seasonal Growth Campaign',
      description: 'A product launch or seasonal program designed to move golfers from awareness into conversion and repeat engagement.',
    },
  },
  strategic: {
    id: 'strategic',
    name: 'Strategic',
    tagline: 'Best for long-term partnerships',
    bestFor: 'Brands committing to sustained, multi-stage activation with advanced cohort development.',
    includes: [
      'Full progression model',
      'Advanced segmentation',
      'Real-world activation',
      'Adoption',
      'Advocacy',
    ],
    includedStages: [1, 2, 3, 4, 5, 6, 7, 8],
    setup: { range: '$20,000 \u2013 $35,000+', low: 20000, high: 35000 },
    monthly: { starting: '$12,000+', floor: 12000 },
    duration: { recommended: '6+ months', minimum: 6 },
    realWorldActivation: 'Advanced / performance-led where applicable',
    bestFitUseCase: 'Ongoing strategic partner program with long-term integration',
    recommendedExtensions: ['dailyGrind', 'socialActivation', 'advancedReporting', 'executiveStorytelling', 'platformDistribution'],
    managementTier: 'Enterprise ($6,500/mo)',
    impressionRecommendation: ['250K', '500K+'],
    exampleScenario: {
      title: 'Strategic Partner Program',
      description: 'A leading brand building a long-term ecosystem presence with measurable adoption and advocacy.',
    },
  },
}

// --- Extension Definitions ---

export interface Extension {
  id: ExtensionId
  name: string
  description: string
  bestForPaths: PathId[]
  price?: string
}

export const extensions: Extension[] = [
  {
    id: 'learnAndEarn',
    name: 'Learn & Earn',
    description: 'Digital education and verified comprehension',
    bestForPaths: ['pilot', 'growth', 'strategic'],
    price: 'Included in setup',
  },
  {
    id: 'dailyGrind',
    name: 'Daily Grind',
    description: 'Real-world, location-based activation and check-ins',
    bestForPaths: ['growth', 'strategic'],
  },
  {
    id: 'socialActivation',
    name: 'Social Activation',
    description: 'OAuth-connected advocacy and measurable social proof',
    bestForPaths: ['growth', 'strategic'],
  },
  {
    id: 'contentProduction',
    name: 'Campaign Content Production',
    description: 'Creative assets for launches, offers, and partner messaging',
    bestForPaths: ['pilot', 'growth'],
    price: '$1,000/piece',
  },
  {
    id: 'executiveStorytelling',
    name: 'Executive Brand Storytelling',
    description: 'High-touch brand storytelling and premium content',
    bestForPaths: ['strategic'],
    price: '$2,500/video',
  },
  {
    id: 'advancedReporting',
    name: 'Advanced Reporting',
    description: 'Deeper analytics and custom reporting views',
    bestForPaths: ['strategic'],
  },
  {
    id: 'platformDistribution',
    name: 'Platform Distribution Extension',
    description: 'Additional distribution surfaces and expanded ecosystem visibility',
    bestForPaths: ['pilot', 'growth', 'strategic'],
    price: '$750/platform',
  },
]

// --- Selector Questions ---

export interface SelectorOption {
  id: string
  label: string
  description?: string
}

export interface SelectorQuestion {
  id: string
  question: string
  subtitle?: string
  type: 'single' | 'multi'
  options: SelectorOption[]
}

export const selectorQuestions: SelectorQuestion[] = [
  {
    id: 'need',
    question: 'What best describes your current need?',
    type: 'single',
    options: [
      { id: 'firstTimeTest', label: 'Testing GolfN for the first time' },
      { id: 'productLaunch', label: 'Launching a product or campaign' },
      { id: 'seasonalCampaign', label: 'Running a seasonal campaign' },
      { id: 'multiMonthGrowth', label: 'Running a multi-month growth program' },
      { id: 'retailActivation', label: 'Driving real-world activation' },
      { id: 'strategicPartner', label: 'Building a long-term strategic partnership' },
    ],
  },
  {
    id: 'goals',
    question: 'What outcomes matter most?',
    subtitle: 'Select all that apply',
    type: 'multi',
    options: [
      { id: 'awareness', label: 'Awareness', description: 'Reach verified golfers' },
      { id: 'education', label: 'Education', description: 'Teach why the product matters' },
      { id: 'activation', label: 'Activation', description: 'Drive measurable golfer actions' },
      { id: 'conversion', label: 'Conversion', description: 'Generate purchase behavior' },
      { id: 'adoption', label: 'Adoption', description: 'Post-purchase engagement' },
      { id: 'advocacy', label: 'Advocacy', description: 'Turn users into visible advocates' },
    ],
  },
  {
    id: 'complexity',
    question: 'How involved does this need to be?',
    type: 'single',
    options: [
      { id: 'focused', label: 'Focused and contained', description: 'Single priority, clear scope' },
      { id: 'fullFunnel', label: 'Full-funnel and optimized', description: 'Multiple stages, measurable progression' },
      { id: 'sustained', label: 'Sustained and strategic', description: 'Long-term, multi-stage, advanced' },
    ],
  },
  {
    id: 'activation',
    question: 'Are real-world check-ins or location-based activations important?',
    type: 'single',
    options: [
      { id: 'notNeeded', label: 'Not needed' },
      { id: 'niceToHave', label: 'Nice to have' },
      { id: 'important', label: 'Important' },
    ],
  },
]
