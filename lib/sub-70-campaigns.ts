import type { BrandCampaign } from './template-types'

export const sub70Campaigns: BrandCampaign[] = [
  {
    brandName: 'Sub 70',
    brandColor: '#1a1a1a',
    title: 'Sub 70 Fitting & Build Experience',
    prizePool: '$4,500',
    description: 'A premium equipment discovery campaign designed for how golfers actually buy custom clubs. The campaign introduces Sub 70 through aspiration and product relevance, then converts interest through education and follow-up. Winners receive custom-built clubs fitted to their specs. During the 30-day follow-up window (included in startup), GolfN runs Learn & Earn video modules where golfers watch Sub 70 content, prove comprehension through a quiz, and unlock exclusive offers -- plus points-back shopping links that drive trackable purchases to golfsub70.com.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/0e1575f6acd4444b468bbef751d8ae0f2c2f8776-2560x600.webp',
    prizes: [
      { place: '1st', description: '699 Pro v3 Iron Set (5-PW) -- custom built and fitted to winner\'s specs', value: '$2,100' },
      { place: '2nd', description: 'TAIII Wedge Set (50/54/58) -- custom ground to winner\'s preference', value: '$900' },
      { place: '3rd', description: 'TAIII 3D-Printed Driver + remote fitting consultation', value: '$750' },
      { place: '4th-8th', description: 'Sub 70 shop credit toward any custom build (x5)', value: '$150 each' },
    ],
    learnEarnSteps: [
      { label: 'Browse More Ways to Earn', imageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/0e33fb6ef5a675ee59dff8c6a2405f98366147a0-750x1624.png' },
      { label: 'Tap Sub 70', imageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/7613b8822be1dd1ec97c4038f7db1e46c2d4e9ae-750x1624.png' },
      { label: 'Watch the Video', imageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/5cb4db7cbbbf2339ad2c9bdd0183fc4ae9d47f36-750x1624.png' },
      { label: 'Pass Quiz & Unlock Offer', imageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/a89decd0f66f83abc18c1272a518dd4017a13651-750x1624.png' },
    ],
    hideBrandCount: true,
  },
]
