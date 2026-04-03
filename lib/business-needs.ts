// Core business needs that drive partner conversations
// Each need maps to specific GolfN capabilities and activation methods

export interface BusinessNeed {
  id: string
  title: string
  subtitle: string
  description: string
  scenario: string
  golfnPlay: string
  capabilities: string[]
  activationMethods: string[]
  icon: string // emoji
}

export const businessNeeds: BusinessNeed[] = [
  {
    id: 'fill-capacity',
    title: 'Fill Capacity',
    subtitle: 'Drive regional traffic to a physical location',
    description: 'You have open inventory. Tee times, events, leagues, reservations. You need the right golfers nearby to know about it and show up.',
    scenario: 'A premier resort is fully booked on accommodations but has open tee times during the day. They need golfers within driving distance who do not need to stay on property. A golf league operator needs to fill rosters at courses across the country by reaching golfers who already play those courses or live nearby.',
    golfnPlay: 'GolfN targets by geography, spending behavior, equipment profile, and round frequency. We know which golfers are within range, how much they spend per round, and whether they are the type who would show up. Precision, not volume. 2,600 of the right golfers instead of 100,000 wasted impressions.',
    capabilities: [
      'Geo-targeting by proximity to specific locations',
      'Spending behavior filtering (avg spend per round)',
      'Round frequency and course history analysis',
      'Equipment tier as a proxy for willingness to pay',
      'Push notifications to golfers in range',
    ],
    activationMethods: ['Targeted Ads', 'Push Notifications', 'Daily Grind Check-ins', 'Sweepstakes'],
    icon: '📍',
  },
  {
    id: 'product-trial',
    title: 'Drive Product Trial',
    subtitle: 'Get golfers to physically try your product',
    description: 'Your product sells itself once someone touches it. The problem is getting them in front of it. Demo days, fittings, retail visits.',
    scenario: 'An equipment brand knows their new irons convert at a high rate once golfers hit them. But demo day attendance is inconsistent and hard to measure. Another brand has a premium wedge that creates lifelong customers after the first swing, and needs a path from trial to full set adoption.',
    golfnPlay: 'GolfN drives verified foot traffic through Daily Grind check-ins and incentivized trial at specific locations. Golfers earn points for showing up. You get verified attendance and a measurable path from "tried it" to "bought it." Post-trial follow-up campaigns convert interest into purchase through tracked attribution.',
    capabilities: [
      'Daily Grind check-ins at demo days, fittings, and retail locations',
      'Triple-point incentives for verified attendance',
      'Targeted push to golfers near event locations',
      'Post-trial attribution tracking through affiliate links',
      'Equipment-readiness targeting (due for upgrade, plays competitor brand)',
    ],
    activationMethods: ['Daily Grind Check-ins', 'Sweepstakes', 'Targeted Ads', 'Affiliate Commerce'],
    icon: '🏌️',
  },
  {
    id: 'educate-market',
    title: 'Educate Your Market',
    subtitle: 'Golfers need to understand your value prop before they buy',
    description: 'You have a better product but people do not understand why yet. New launches, DTC brands competing with legacy players, technical differentiation that needs explaining.',
    scenario: 'A DTC equipment brand competes with legacy OEMs on quality and value but golfers default to the names they know. A rangefinder company has a next-gen product launching next year and wants golfers educated on why upgrading matters before the product even hits the market.',
    golfnPlay: 'GolfN Learn & Earn: users watch brand content, prove comprehension through a quiz, and unlock exclusive offers and points. Every participant in this stage has provably learned about your product before receiving any conversion offer. These are educated leads, not just aware leads.',
    capabilities: [
      'Learn & Earn video education modules',
      'Verified comprehension via quiz',
      'Points incentive for completing education',
      'Post-education conversion offers',
      'Content refresh and A/B testing',
    ],
    activationMethods: ['Learn & Earn', 'Sweepstakes', 'Content & Social', 'Marketplace'],
    icon: '🎓',
  },
  {
    id: 'precision-targeting',
    title: 'Reach High-Value Individuals',
    subtitle: 'Stop wasting budget on golfers who will never buy',
    description: 'You sell premium. Every dollar spent on the wrong golfer is lost. You need to find the golfers who actually have the means and intent to buy.',
    scenario: 'A luxury resort wants to identify high net worth golfers worldwide to become members. Spending ad money on municipal course golfers is completely wasted. A premium equipment brand needs to reach golfers who play $300+ rounds and carry high-end bags, not golfers shopping for budget sets.',
    golfnPlay: 'GolfN filters by spending behavior, equipment tier, average spend per round, course quality preferences, and travel patterns. We know the difference between a golfer who plays premium and one who does not. Zero budget wasted on golfers who were never going to buy.',
    capabilities: [
      'Equipment tier filtering (premium vs. budget)',
      'Average spend per round analysis',
      'Course quality and type preferences',
      'Travel pattern identification',
      'Custom audience segmentation by spending behavior',
    ],
    activationMethods: ['Targeted Ads', 'Sweepstakes', 'Content & Social', 'Exclusive Access'],
    icon: '💎',
  },
  {
    id: 'market-share',
    title: 'Grow Market Share',
    subtitle: 'Compete for share in a crowded category',
    description: 'You are fighting bigger brands with bigger budgets. You need to carve out share by reaching golfers who are using a competitor or are ready to switch.',
    scenario: 'A rangefinder company is competing against two dominant brands. They need golfers who currently use a competitor product or do not own one yet. Combined with education on why their product is better and incentive to make the switch.',
    golfnPlay: 'GolfN targets golfers by what they currently use and when they last upgraded. We identify golfers playing a competitor product or golfers due for a replacement. Combined with Learn & Earn education and conversion incentives, you reach exactly the golfers who are persuadable.',
    capabilities: [
      'Equipment profile analysis (current gear, competitor identification)',
      'Upgrade cycle targeting (time since last purchase)',
      'Handicap and skill-level segmentation',
      'Category-specific behavioral signals',
      'Competitive switching incentives via points economy',
    ],
    activationMethods: ['Learn & Earn', 'Sweepstakes', 'Marketplace', 'Targeted Ads'],
    icon: '📈',
  },
  {
    id: 'social-growth',
    title: 'Grow Social Following',
    subtitle: 'Real followers from verified golfers, not bots',
    description: 'You need more followers and engagement from people who actually golf. Not vanity metrics. Real, verified golfers following your brand on social.',
    scenario: 'A brand is launching a new product line and needs social proof before the campaign ramps. They want 5,000 new followers who are verified golfers, not purchased followers or bots. They want to pay on success, not impressions.',
    golfnPlay: 'GolfN integrates OAuth into golfer profiles. We incentivize golfers to follow your brand on social platforms through the points economy. You pay on success: verified followers gained, measurable engagement. Every new follower is a real golfer on the GolfN platform.',
    capabilities: [
      'OAuth-integrated follower campaigns',
      'Points incentive for following brands on social',
      'Verified golfer followers (not bots, not purchased)',
      'Success-based pricing (pay per follower)',
      'Engagement tracking and attribution',
    ],
    activationMethods: ['Social OAuth Campaigns', 'Points Incentive', 'Content & Social'],
    icon: '👥',
  },
]
