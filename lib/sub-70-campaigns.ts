import type { BrandCampaign } from './template-types'

export const sub70Campaigns: BrandCampaign[] = [
  {
    brandName: 'Sub 70',
    brandColor: '#1a1a1a',
    title: 'Sub 70 Equipment Experience',
    prizePool: '$4,500',
    description: 'A full-funnel activation built around a high-impact equipment giveaway. The sweepstakes generates the qualified cohort. Then GolfN runs 30 days of aggressive follow-up included in your startup fee: Learn & Earn video education where users watch Sub 70 content and pass a quiz to unlock exclusive offers, plus points-back shopping links that drive trackable purchases to golfsub70.com. Every participant is a verified golfer who provably engaged with Sub 70.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/7613b8822be1dd1ec97c4038f7db1e46c2d4e9ae-750x1624.png',
    prizes: [
      { place: '1st', description: 'TAIII 3D-Printed Driver + custom fitting consultation', value: '$750' },
      { place: '2nd', description: '699 Pro v3 Iron Set (5-PW) -- built to winner\'s specs', value: '$2,100' },
      { place: '3rd', description: 'TAIII Wedge Set (50/54/58) -- custom ground', value: '$900' },
      { place: '4th-8th', description: 'Sub 70 accessories + shop credit (x5)', value: '$150 each' },
    ],
  },
]
