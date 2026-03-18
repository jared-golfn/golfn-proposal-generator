import type { BrandCampaign } from './template-types'

export const sub70Campaigns: BrandCampaign[] = [
  {
    brandName: 'Sub 70 Learn & Earn',
    brandColor: '#1a1a1a',
    title: 'Meet Sub 70 -- Learn & Earn Experience',
    prizePool: 'Points + Exclusive Offer',
    description: 'A "More Ways to Earn" activation where GolfN users watch a Sub 70 brand video, answer a quiz to prove comprehension, and unlock points plus an exclusive Sub 70 offer. Drives verified product education at scale -- every participant provably learned about Sub 70 before earning the reward.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/7613b8822be1dd1ec97c4038f7db1e46c2d4e9ae-750x1624.png',
    prizes: [
      { place: 'All participants', description: 'GolfN points for watching the Sub 70 video + passing the quiz', value: 'Points reward' },
      { place: 'Quiz completers', description: 'Exclusive Sub 70 offer unlocked (discount code, free shipping, or bundle deal)', value: 'Exclusive offer' },
      { place: 'Bonus', description: 'Top quiz completers entered into a premium Sub 70 giveaway drawing', value: 'Bonus entry' },
    ],
  },
  {
    brandName: 'Sub 70 Sweepstakes',
    brandColor: '#1a1a1a',
    title: 'Sub 70 Equipment Giveaway',
    prizePool: '$4,500',
    description: 'A high-impact sweepstakes showcasing Sub 70\'s flagship products -- including the new TAIII 3D-printed driver. Generates thousands of qualified interest signals from real golfers while building brand awareness with the exact demographic Sub 70 targets: research-driven, value-conscious players aged 25-45.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/0e33fb6ef5a675ee59dff8c6a2405f98366147a0-750x1624.png',
    prizes: [
      { place: '1st', description: 'TAIII 3D-Printed Driver + custom fitting consultation', value: '$750' },
      { place: '2nd', description: '699 Pro v3 Iron Set (5-PW) -- built to winner\'s specs', value: '$2,100' },
      { place: '3rd', description: 'TAIII Wedge Set (50/54/58) -- custom ground', value: '$900' },
      { place: '4th-8th', description: 'Sub 70 accessories + shop credit (x5)', value: '$150 each' },
    ],
  },
  {
    brandName: 'Sub 70 Points-Back',
    brandColor: '#1a1a1a',
    title: 'Sub 70 Points-Back Shopping',
    prizePool: 'Ongoing',
    description: 'GolfN users earn points on every Sub 70 purchase made through tracked links -- creating a cashback incentive that drives repeat purchases. Sidesteps Sub 70\'s current affiliate tracking challenges entirely: GolfN\'s UID system captures attribution regardless of backend, so nothing breaks during the Shopify migration.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/5cb4db7cbbbf2339ad2c9bdd0183fc4ae9d47f36-750x1624.png',
    prizes: [
      { place: 'Every purchase', description: 'GolfN points earned on all Sub 70 purchases through tracked links', value: 'Points-back' },
      { place: 'Free shipping', description: 'Free shipping incentive for GolfN members on qualifying orders', value: 'Shipping perk' },
      { place: 'Bonus events', description: 'Double points weekends during peak season (Masters week, Father\'s Day)', value: '2x points' },
    ],
  },
]
