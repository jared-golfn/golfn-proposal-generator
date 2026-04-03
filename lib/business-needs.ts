import type { SpendModel } from './spend-model-context'

export type BusinessNeedId = 'build-awareness' | 'fill-capacity' | 'product-trial' | 'educate-market' | 'precision-targeting' | 'market-share' | 'social-growth'

export interface CampaignVariant {
  title: string
  subtitle: string
  description: string
  prizeIdea: string
  activationSteps: string[]
}

export interface HowItWorksOverride {
  whyDifferent: string
  metric: string
  metricLabel: string
}

export interface BenchmarkItem {
  label: string
  value: number
}

export interface ChecklistItem {
  id: string
  label: string
  detail: string
  required: boolean
}

export interface BusinessNeed {
  id: BusinessNeedId
  title: string
  subtitle: string
  description: string
  scenario: string
  golfnPlay: string
  capabilities: string[]
  activationMethods: string[]
  icon: string
  suggestedSpendModel: SpendModel
  campaignVariant: CampaignVariant
  howItWorksOverrides: HowItWorksOverride[]
  benchmarkLabel: string
  benchmarks: BenchmarkItem[]
  checklistItems: ChecklistItem[]
  impactCriteria: string[]
}

// ================================================================
// BUILD AWARENESS -- the primary entry point for most partnerships
// ================================================================

export const awarenessNeed: BusinessNeed = {
  id: 'build-awareness',
  title: 'Build Awareness',
  subtitle: 'Run a premium sweepstakes, capture intent signals, and build a qualified cohort of golfers who care about your brand.',
  description: 'You run a sweepstakes on GolfN and tens of thousands of golfers see your product. We alert them, inform them, and put your brand in front of an engaged audience. From there we gauge user intent based on how many times they view, how many entries they submit, how many times they look at the product, and how deeply they engage.',
  scenario: 'We isolate users with high intent, create a qualified cohort, and then run lookalike campaigns to add more people to the cohort who are probable buyers. The sweepstakes casts the wide net. The cohort building is where the value compounds. Most partners start here and expand into specific activation types from the results.',
  golfnPlay: 'GolfN distributes your sweepstakes across email, push, in-app, social, Daily Grind, and blog. Every interaction writes to the user profile. After the campaign, GolfN produces a qualified cohort of high-intent golfers and an AI-powered lookalike model that automatically identifies and adds new users who match the same behavioral pattern.',
  capabilities: [
    'Full-ecosystem distribution: email, push, in-app, social, Daily Grind, blog/SEO',
    'Multi-winner prize structures that maximize participation (6+ tiers)',
    'Real-time intent signal tracking: views, entries, engagement depth, return visits',
    'Qualified cohort building from high-intent users',
    'AI-powered lookalike modeling to expand the cohort with probable buyers',
    'Post-campaign activation: offers, Learn and Earn, points commerce, social',
  ],
  activationMethods: ['Sweepstakes', 'Targeted Ads', 'Learn and Earn', 'Marketplace', 'Social OAuth', 'Daily Grind'],
  icon: '\ud83d\udce3',
  suggestedSpendModel: 'cpm',
  campaignVariant: {
    title: 'Premium Sweepstakes Campaign',
    subtitle: 'Cast the net, measure intent, build the cohort',
    description: 'A multi-winner sweepstakes showcasing your brand and products to tens of thousands of verified golfers. Every touchpoint is branded. Every interaction is tracked. The campaign produces a qualified audience cohort of high-intent golfers that GolfN can activate, expand via lookalike modeling, and re-engage over time.',
    prizeIdea: 'Your flagship products as prizes. 6+ tiers to maximize entries: grand prize, runner-up, and accessory bundles. Higher prize value drives higher participation and deeper engagement.',
    activationSteps: [
      'Launch sweepstakes across the full GolfN ecosystem',
      'Track intent signals: views, entries, engagement depth, return visits',
      'Identify high-intent users and build qualified cohort',
      'Run AI lookalike model to find and add probable buyers',
      'Activate cohort with offers, education, and commerce pathways',
    ],
  },
  howItWorksOverrides: [
    { whyDifferent: 'A sponsored post hopes for reach. GolfN distributes across 7 channels simultaneously and tracks every interaction to the user level.', metric: '250,000+', metricLabel: 'entries in a single sweepstakes' },
    { whyDifferent: 'Meta counts impressions. GolfN counts how many times they viewed your product, how many entries they submitted, and whether they came back.', metric: '57', metricLabel: 'behavioral data points per golfer' },
    { whyDifferent: 'Traditional campaigns end when the budget runs out. GolfN builds a permanent cohort that grows automatically via lookalike modeling.', metric: '2,000+', metricLabel: 'qualified high-intent golfers per campaign' },
    { whyDifferent: 'Retargeting pixels guess who was interested. GolfN knows exactly who engaged, how deeply, and what they looked at.', metric: '6+', metricLabel: 'post-campaign activation channels' },
    { whyDifferent: 'Most awareness campaigns are one-and-done. GolfN awareness campaigns produce an asset that compounds month over month.', metric: '53%', metricLabel: 'avg MoM power user growth' },
  ],
  benchmarkLabel: 'Effective Cost Per Qualified Golfer Reached',
  benchmarks: [
    { label: 'Meta Golf Interest Audiences', value: 22 },
    { label: 'Google Display Golf', value: 35 },
    { label: 'Golf Digest / Endemic Media', value: 65 },
  ],
  checklistItems: [
    { id: 'prizes', label: 'Prize inventory (~$4,500 product value)', detail: 'Product for the sweepstakes. Recommended 6+ prize tiers for maximum participation.', required: true },
    { id: 'startup', label: 'Startup fee ($2,500 one-time)', detail: 'Covers campaign build, creative, distribution, and 30 days of activation.', required: true },
    { id: 'assets', label: 'Brand assets (logos, product photos, guidelines)', detail: 'High-res product shots, brand guidelines, approved copy.', required: true },
    { id: 'contact', label: 'Decision-maker point of contact', detail: 'Someone who can approve creative and sign off on launches.', required: true },
    { id: 'affiliate', label: 'Affiliate or wholesale terms (if applicable)', detail: 'For post-campaign commerce activation.', required: false },
    { id: 'social', label: 'Social handles for co-promotion (optional)', detail: 'Cross-posting amplifies reach.', required: false },
  ],
  impactCriteria: [
    'X total sweepstakes entries and brand impressions generated',
    'Y high-intent golfers identified and added to qualified cohort',
    'Z% of cohort engaged with post-campaign activation (offers, education, commerce)',
  ],
}

// ================================================================
// DOWNSTREAM OBJECTIVES -- where awareness leads
// ================================================================

export const businessNeeds: BusinessNeed[] = [
  {
    id: 'fill-capacity',
    title: 'Fill Capacity',
    subtitle: 'Drive regional traffic to a physical location',
    description: 'You have open inventory. Tee times, events, leagues, reservations. You need the right golfers nearby to show up.',
    scenario: 'A premier resort has full accommodations but open tee times during the day. They need golfers within driving distance who do not need to stay on property. A league operator needs to fill rosters at courses across the country by reaching golfers who already play nearby.',
    golfnPlay: 'GolfN targets by geography, spending behavior, equipment profile, and round frequency. We know which golfers are within range, how much they spend per round, and whether they will show up. Precision, not volume.',
    capabilities: [
      'Geo-targeting by proximity to specific locations',
      'Spending behavior filtering (avg spend per round)',
      'Round frequency and course history analysis',
      'Equipment tier as a proxy for willingness to pay',
      'Push notifications to golfers in range',
    ],
    activationMethods: ['Targeted Ads', 'Push Notifications', 'Daily Grind Check-ins', 'Sweepstakes'],
    icon: '\ud83d\udccd',
    suggestedSpendModel: 'cpa',
    campaignVariant: {
      title: 'Geo-Targeted Awareness Campaign',
      subtitle: 'Reach golfers within driving distance of your location',
      description: 'GolfN identifies golfers within your target radius who match your ideal visitor profile based on spending behavior, round frequency, and equipment. Targeted push notifications, in-app placements, and incentivized check-ins drive real visits.',
      prizeIdea: 'Free rounds, preferred tee times, F&B credits, pro shop discounts, or experience packages at your location.',
      activationSteps: [
        'Define target radius and golfer profile criteria',
        'Launch targeted campaign to matching golfers in range',
        'Incentivize check-ins and visits through points economy',
        'Track verified visits and measure conversion to bookings',
      ],
    },
    howItWorksOverrides: [
      { whyDifferent: 'Meta targets "interested in golf." GolfN targets golfers who played a course 20 miles from your location last month.', metric: '2,600', metricLabel: 'golfers in a typical target radius' },
      { whyDifferent: 'Google knows they searched for golf. GolfN knows they play 3x/month and spend $150+/round at comparable courses.', metric: '57', metricLabel: 'behavioral data points per golfer' },
      { whyDifferent: 'Traditional ads reach everyone in a zip code. GolfN reaches only verified golfers who match your visitor profile.', metric: '2,000+', metricLabel: 'qualified golfers per campaign' },
      { whyDifferent: 'A billboard hopes golfers drive by. GolfN sends a push notification to their phone when they finish a round nearby.', metric: '3x', metricLabel: 'point incentive for verified visits' },
      { whyDifferent: 'Direct mail has a 1-2% response rate. GolfN check-in campaigns drive verified, trackable attendance.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per Local Golfer Reached',
    benchmarks: [
      { label: 'Google Local Ads Golf', value: 18 },
      { label: 'Facebook Radius Targeting', value: 25 },
      { label: 'Direct Mail to Golfer Lists', value: 45 },
    ],
    checklistItems: [
      { id: 'location', label: 'Location details and target radius', detail: 'Address, preferred radius, any geographic constraints.', required: true },
      { id: 'inventory', label: 'Available inventory or offer', detail: 'Open tee times, event dates, league schedule, booking link.', required: true },
      { id: 'offer', label: 'Incentive for visitors', detail: 'Free round, discount, F&B credit, or experience package.', required: true },
      { id: 'assets', label: 'Brand assets and photos', detail: 'Course/venue photos, logos, any promotional creative.', required: true },
      { id: 'contact', label: 'Point of contact for approvals', detail: 'Someone who can approve creative and sign off on offers.', required: true },
      { id: 'booking', label: 'Booking system or landing page', detail: 'Where golfers go to book after seeing the campaign.', required: false },
    ],
    impactCriteria: [
      'X golfers within target radius engaged with campaign',
      'Y verified visits or check-ins at your location',
      'Z% of targeted audience converted to booking or visit',
    ],
  },
  {
    id: 'product-trial',
    title: 'Drive Product Trial',
    subtitle: 'Get golfers to physically try your product',
    description: 'Your product sells itself once someone touches it. The problem is getting them in front of it.',
    scenario: 'An equipment brand knows their new irons convert at high rates once golfers hit them, but demo day attendance is inconsistent. Another brand has a premium wedge that creates lifelong customers after the first swing -- they need a path from trial to full set adoption.',
    golfnPlay: 'GolfN drives verified foot traffic through Daily Grind check-ins and incentivized trial. Golfers earn points for showing up. You get verified attendance and a measurable path from trial to purchase.',
    capabilities: ['Daily Grind check-ins at demo days and fittings', 'Triple-point incentives for verified attendance', 'Targeted push to golfers near event locations', 'Post-trial follow-up with affiliate attribution', 'Equipment-readiness targeting (due for upgrade)'],
    activationMethods: ['Daily Grind Check-ins', 'Sweepstakes', 'Targeted Ads', 'Affiliate Commerce'],
    icon: '\ud83c\udfcc\ufe0f',
    suggestedSpendModel: 'cpa',
    campaignVariant: { title: 'Demo Day + Trial Activation', subtitle: 'Get golfers to show up, try your product, and convert', description: 'GolfN drives verified attendance to your demo days, fittings, and retail events. Golfers earn points for check-ins. Post-trial, GolfN follows up with the interest cohort using targeted offers and affiliate-tracked purchase paths.', prizeIdea: 'The product itself. Full custom fitting, flagship product set, or gear package for top-tier prizes. Accessory bundles for runners-up.', activationSteps: ['Upload demo day schedule and locations', 'GolfN pushes targeted notifications to golfers near each event', 'Golfers check in via Daily Grind and earn 3x points', 'Post-trial follow-up converts interest into tracked purchases'] },
    howItWorksOverrides: [
      { whyDifferent: 'A flyer hopes golfers show up. GolfN sends a push notification, incentivizes attendance with points, and verifies who came.', metric: '250,000+', metricLabel: 'entries in a single campaign' },
      { whyDifferent: 'Meta knows they like golf. GolfN knows they carry 10-year-old irons and play 4x/month -- they are ready for new gear.', metric: '57', metricLabel: 'data points per golfer profile' },
      { whyDifferent: 'Traditional demo day promo has no follow-up path. GolfN tracks who attended and retargets with conversion offers.', metric: '2,000+', metricLabel: 'qualified golfers per campaign' },
      { whyDifferent: 'Retail co-op spend has no attribution. GolfN tracks from push notification to check-in to purchase.', metric: '3x', metricLabel: 'point incentive for verified attendance' },
      { whyDifferent: 'Most trial programs end at the event. GolfN builds a permanent cohort of golfers who tried your product and re-engages them.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per Verified Attendee',
    benchmarks: [{ label: 'Demo Day Flyer + Promo', value: 35 }, { label: 'Facebook Event Promotion', value: 22 }, { label: 'Retail Co-op Spend', value: 50 }],
    checklistItems: [
      { id: 'schedule', label: 'Demo day or event schedule', detail: 'Dates, locations, and hours for each event.', required: true },
      { id: 'product', label: 'Product for trial and prizes', detail: 'Demo units on-site plus prize inventory for sweepstakes.', required: true },
      { id: 'staff', label: 'On-site staff for fittings or demos', detail: 'Your team at the event to run the experience.', required: true },
      { id: 'assets', label: 'Brand assets and product photos', detail: 'High-res images, logos, product descriptions.', required: true },
      { id: 'contact', label: 'Point of contact', detail: 'Decision-maker for creative approval and event coordination.', required: true },
      { id: 'affiliate', label: 'Affiliate or purchase tracking link', detail: 'For post-trial conversion attribution.', required: false },
    ],
    impactCriteria: ['X verified demo day or fitting attendees', 'Y trial-to-purchase conversions (attributed)', 'Z% post-trial engagement rate in follow-up campaigns'],
  },
  {
    id: 'educate-market',
    title: 'Educate Your Market',
    subtitle: 'Golfers need to understand your value prop before they buy',
    description: 'You have a better product but people do not understand why yet. New launches, DTC brands, technical differentiation.',
    scenario: 'A DTC equipment brand competes with legacy OEMs on quality and value but golfers default to the names they know. A rangefinder company has a next-gen product launching soon and wants golfers educated on why upgrading matters before it even hits the market.',
    golfnPlay: 'GolfN Learn and Earn: users watch brand content, prove comprehension through a quiz, and unlock exclusive offers. Every participant has provably learned about your product before receiving any conversion offer. Educated leads, not just aware leads.',
    capabilities: ['Learn and Earn video education modules', 'Verified comprehension via quiz', 'Points incentive for completing education', 'Post-education conversion offers', 'Content refresh and A/B testing'],
    activationMethods: ['Learn and Earn', 'Sweepstakes', 'Content & Social', 'Marketplace'],
    icon: '\ud83c\udf93',
    suggestedSpendModel: 'cpa',
    campaignVariant: { title: 'Learn and Earn Education Campaign', subtitle: '2,000 golfers provably learn about your product', description: 'GolfN runs a Learn and Earn module where golfers watch your brand content, answer a quiz proving they understood it, and unlock points plus exclusive offers. This is not awareness. This is verified comprehension at scale.', prizeIdea: 'Points for completion, exclusive first-access offers, product bundles for top performers.', activationSteps: ['Provide brand video content or GolfN produces it', 'GolfN builds quiz verifying product comprehension', 'Golfers complete module, earn points, unlock offers', 'Post-education cohort receives targeted conversion offers'] },
    howItWorksOverrides: [
      { whyDifferent: 'A YouTube ad hopes for 30% view-through. Learn and Earn gets provable comprehension from every participant.', metric: '250,000+', metricLabel: 'entries in a single campaign' },
      { whyDifferent: 'Webinars get 30% attendance. Learn and Earn gets 90%+ quiz completion because golfers earn points for finishing.', metric: '92%', metricLabel: 'typical quiz completion rate' },
      { whyDifferent: 'Content marketing hopes people read. GolfN verifies they understood it before showing any conversion offer.', metric: '2,000+', metricLabel: 'educated leads per campaign' },
      { whyDifferent: 'Traditional funnel: see ad, maybe click, maybe read, maybe buy. GolfN: watch, prove comprehension, get offer. Three steps.', metric: '6+', metricLabel: 'activation channels simultaneously' },
      { whyDifferent: 'Most education is one-touch. GolfN builds a permanent cohort of educated leads and re-engages with seasonal refreshes.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per Educated Lead',
    benchmarks: [{ label: 'Webinar CPL', value: 45 }, { label: 'Content Syndication CPL', value: 30 }, { label: 'Trade Show Cost Per Lead', value: 120 }],
    checklistItems: [
      { id: 'content', label: 'Brand video content (or brief for GolfN to produce)', detail: '2-5 min video explaining your product value prop.', required: true },
      { id: 'quiz', label: 'Quiz questions or key learning objectives', detail: 'What should golfers understand after watching?', required: true },
      { id: 'offer', label: 'Exclusive offer for completers', detail: 'Discount, early access, or points bonus for finishing education.', required: true },
      { id: 'assets', label: 'Brand assets and product info', detail: 'Logos, product shots, key messaging, brand guidelines.', required: true },
      { id: 'contact', label: 'Point of contact', detail: 'Decision-maker for content and offer approval.', required: true },
      { id: 'landing', label: 'Landing page or purchase destination', detail: 'Where educated golfers go to buy.', required: false },
    ],
    impactCriteria: ['X golfers completed Learn and Earn module', 'Y% quiz pass rate (verified comprehension)', 'Z conversions from educated cohort within 60 days'],
  },
  {
    id: 'precision-targeting',
    title: 'Reach High-Value Individuals',
    subtitle: 'Stop wasting budget on golfers who will never buy',
    description: 'You sell premium. Every dollar on the wrong golfer is lost. You need to find golfers who have the means and intent.',
    scenario: 'A luxury resort wants to identify high net worth golfers worldwide for membership. Spending ad money on municipal course golfers is wasted. A premium equipment brand needs to reach golfers who play $300+ rounds and carry high-end bags.',
    golfnPlay: 'GolfN filters by spending behavior, equipment tier, average spend per round, course quality preferences, and travel patterns. We know the difference between a premium golfer and one who is not. Zero waste.',
    capabilities: ['Equipment tier filtering (premium vs. budget)', 'Average spend per round analysis', 'Course quality and type preferences', 'Travel pattern identification', 'Custom segmentation by spending behavior'],
    activationMethods: ['Targeted Ads', 'Sweepstakes', 'Content & Social', 'Exclusive Access'],
    icon: '\ud83d\udc8e',
    suggestedSpendModel: 'audience',
    campaignVariant: { title: 'Premium-Filtered Awareness Campaign', subtitle: 'Only golfers who meet your criteria see this campaign', description: 'GolfN filters the full user base down to golfers matching your ideal profile: equipment tier, spending behavior, course preferences, geography. Your campaign reaches only high-value individuals. Zero impressions wasted.', prizeIdea: 'Premium experiences: exclusive resort access, VIP tournament packages, custom fittings, luxury gear bundles.', activationSteps: ['Define target criteria (spend, equipment, geography, behavior)', 'GolfN filters audience to matching high-value golfers', 'Launch campaign visible only to qualified individuals', 'Track engagement and conversion from premium cohort'] },
    howItWorksOverrides: [
      { whyDifferent: 'Google thinks "golf enthusiast" is a targeting segment. GolfN knows what clubs they carry and how much they spend per round.', metric: '100,000+', metricLabel: 'registered golfers to filter from' },
      { whyDifferent: 'Wealth-targeted programmatic guesses based on zip code. GolfN knows actual spending behavior from real rounds played.', metric: '$200+', metricLabel: 'avg spend/round filter available' },
      { whyDifferent: 'Luxury print ads reach "affluent readers." GolfN reaches golfers who play premium courses with premium equipment.', metric: '2,000+', metricLabel: 'qualified high-value golfers per campaign' },
      { whyDifferent: 'Private club mailing lists are static and stale. GolfN data updates with every round played and every purchase made.', metric: '6+', metricLabel: 'activation channels for premium cohort' },
      { whyDifferent: 'Most premium targeting is demographic guessing. GolfN is behavioral proof.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per High-Value Golfer Identified',
    benchmarks: [{ label: 'Wealth-Targeted Programmatic', value: 65 }, { label: 'Luxury Print Media', value: 85 }, { label: 'Private Club Mailing Lists', value: 40 }],
    checklistItems: [
      { id: 'criteria', label: 'Target audience criteria', detail: 'Spend threshold, equipment tier, geography, behavior filters.', required: true },
      { id: 'prizes', label: 'Premium prize inventory', detail: 'High-value prizes matching your brand positioning.', required: true },
      { id: 'conversion', label: 'Conversion pathway', detail: 'Booking link, membership info, or purchase destination.', required: true },
      { id: 'assets', label: 'Brand assets and creative', detail: 'Premium creative matching your positioning.', required: true },
      { id: 'contact', label: 'Point of contact', detail: 'Decision-maker for targeting criteria and approvals.', required: true },
    ],
    impactCriteria: ['X high-value golfers identified matching your criteria', 'Y engaged at your target spending tier', 'Z% conversion to booking, membership, or purchase'],
  },
  {
    id: 'market-share',
    title: 'Grow Market Share',
    subtitle: 'Compete for share in a crowded category',
    description: 'You are fighting bigger brands with bigger budgets. You need to reach golfers using a competitor or ready to switch.',
    scenario: 'A rangefinder company competes against two dominant brands. They need golfers who currently use a competitor or do not own one yet, combined with education on why their product is better and incentive to make the switch.',
    golfnPlay: 'GolfN targets golfers by what they currently use and when they last upgraded. We identify golfers playing a competitor product or due for replacement. Combined with Learn and Earn education and conversion incentives.',
    capabilities: ['Equipment profile analysis (current gear, competitor ID)', 'Upgrade cycle targeting (time since last purchase)', 'Handicap and skill-level segmentation', 'Category-specific behavioral signals', 'Competitive switching incentives via points economy'],
    activationMethods: ['Learn and Earn', 'Sweepstakes', 'Marketplace', 'Targeted Ads'],
    icon: '\ud83d\udcc8',
    suggestedSpendModel: 'roas',
    campaignVariant: { title: 'Competitive Switching Campaign', subtitle: 'Target golfers playing competitor products who are due for an upgrade', description: 'GolfN identifies golfers using a competitor in your category or golfers whose current gear is aging. Education explains why your product is better. Incentives lower the switching cost. Attribution tracks every conversion.', prizeIdea: 'Your flagship product as the prize. Switching incentives: trade-in bonuses, points-back on first purchase, exclusive launch pricing.', activationSteps: ['Define competitor products and upgrade cycle criteria', 'GolfN identifies golfers matching the switching profile', 'Learn and Earn educates on why your product is better', 'Conversion incentives drive measurable competitive switches'] },
    howItWorksOverrides: [
      { whyDifferent: 'You cannot target "plays Bushnell rangefinder" on Meta. GolfN can.', metric: '250,000+', metricLabel: 'entries in a single campaign' },
      { whyDifferent: 'Google brand competitor keywords cost $10+/click with no qualification. GolfN targets verified users of competitor products.', metric: '57', metricLabel: 'data points per golfer profile' },
      { whyDifferent: 'Trade-in programs wait for golfers to come to you. GolfN goes to golfers who are due for an upgrade and educates them.', metric: '2,000+', metricLabel: 'qualified switching candidates per campaign' },
      { whyDifferent: 'Category ads reach everyone including loyal competitors. GolfN reaches only golfers showing switching signals.', metric: '6+', metricLabel: 'activation channels simultaneously' },
      { whyDifferent: 'One campaign switches some. The cohort keeps growing as new golfers match the switching profile automatically.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per Competitive Switching Opportunity',
    benchmarks: [{ label: 'Google Brand Competitor Keywords', value: 12 }, { label: 'Meta Competitive Audience', value: 28 }, { label: 'Trade-in Program Acquisition', value: 55 }],
    checklistItems: [
      { id: 'competitors', label: 'Competitor products to target against', detail: 'Which brands/products are you competing with?', required: true },
      { id: 'product', label: 'Product for prizes and trial', detail: 'Flagship product for sweepstakes plus switching incentives.', required: true },
      { id: 'education', label: 'Educational content or brief', detail: 'Why your product is better.', required: true },
      { id: 'assets', label: 'Brand assets', detail: 'Logos, product photos, comparison data, brand guidelines.', required: true },
      { id: 'contact', label: 'Point of contact', detail: 'Decision-maker for content, offer structure, and approvals.', required: true },
      { id: 'incentive', label: 'Switching incentive structure', detail: 'Trade-in bonus, discount code, or points-back offer.', required: false },
    ],
    impactCriteria: ['X golfers targeted playing competitor products', 'Y completed education on your product', 'Z competitive switches attributed within 60 days'],
  },
  {
    id: 'social-growth',
    title: 'Grow Social Following',
    subtitle: 'Real followers from verified golfers, not bots',
    description: 'You need more followers and engagement from people who actually golf. Real, verified golfers following your brand on social.',
    scenario: 'A brand is launching a new product line and needs social proof before the campaign ramps. They want 5,000 new followers who are verified golfers, not purchased followers or bots. They want to pay on success.',
    golfnPlay: 'GolfN integrates OAuth into golfer profiles. We incentivize golfers to follow your brand on social platforms through the points economy. You pay on success: verified followers gained, measurable engagement. Every follower is a real golfer.',
    capabilities: ['OAuth-integrated follower campaigns', 'Points incentive for following brands on social', 'Verified golfer followers (not bots, not purchased)', 'Success-based pricing (pay per follower)', 'Engagement tracking and attribution'],
    activationMethods: ['Social OAuth Campaigns', 'Points Incentive', 'Content & Social'],
    icon: '\ud83d\udc65',
    suggestedSpendModel: 'cpa',
    campaignVariant: { title: 'OAuth Follower Growth Campaign', subtitle: '5,000 verified golfer followers in 30 days', description: 'GolfN incentivizes golfers to follow your brand on social platforms through the points economy. OAuth verification ensures every follower is a real, verified golfer. Success-based pricing means you pay for results.', prizeIdea: 'Points for following, bonus points for engagement. Product giveaways for top engagers.', activationSteps: ['Connect social handles and define follower goals', 'GolfN launches follow-for-points campaign to matched golfers', 'OAuth verification confirms every follow is genuine', 'Track engagement rates and pay on verified follower success'] },
    howItWorksOverrides: [
      { whyDifferent: 'Buying followers gets you bots. GolfN gets you real golfers who opted in through their verified profile.', metric: '5,000+', metricLabel: 'verified followers in a typical campaign' },
      { whyDifferent: 'Influencer campaigns rent attention. GolfN builds your owned audience permanently.', metric: '57', metricLabel: 'data points per golfer profile' },
      { whyDifferent: 'Paid social follower campaigns have no quality filter. GolfN followers are all verified golfers.', metric: '2,000+', metricLabel: 'qualified followers per campaign' },
      { whyDifferent: 'Social growth services charge for impressions. GolfN charges for verified followers gained.', metric: '$0', metricLabel: 'paid for non-converting impressions' },
      { whyDifferent: 'Most social growth plateaus. GolfN keeps driving new verified followers as the user base grows.', metric: '53%', metricLabel: 'avg MoM power user growth' },
    ],
    benchmarkLabel: 'Cost Per Verified Follower',
    benchmarks: [{ label: 'Instagram Growth Services', value: 8 }, { label: 'Influencer Cost Per Follower', value: 12 }, { label: 'Paid Social Follower Campaigns', value: 5 }],
    checklistItems: [
      { id: 'handles', label: 'Social handles to grow', detail: 'Instagram, Twitter/X, TikTok -- which platforms?', required: true },
      { id: 'goals', label: 'Follower and engagement goals', detail: 'Target number of followers, engagement rate targets.', required: true },
      { id: 'assets', label: 'Brand assets and social content', detail: 'Logos, current content calendar, any concurrent campaigns.', required: true },
      { id: 'contact', label: 'Point of contact', detail: 'Someone who manages social and can coordinate.', required: true },
      { id: 'budget', label: 'Success-based budget parameters', detail: 'Max cost per follower, total campaign budget.', required: false },
    ],
    impactCriteria: ['X verified golfer followers gained', 'Y% engagement rate on new follower cohort', '$Z effective cost per verified follower achieved'],
  },
]

export function getNeedById(id: string | null): BusinessNeed | undefined {
  if (!id) return undefined
  if (id === 'build-awareness') return awarenessNeed
  return businessNeeds.find(n => n.id === id)
}
