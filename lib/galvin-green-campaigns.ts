import type { BrandCampaign } from './template-types'

const GG_LOGO = 'https://cdn.sanity.io/images/e3wja34v/production/6bbe863fced77a5f36904db460f7ed06a3a0e782-230x46.webp'

export const galvinGreenCampaigns: BrandCampaign[] = [
  {
    brandName: 'Galvin Green',
    brandLogoUrl: GG_LOGO,
    brandColor: '#17A455',
    title: 'Never Compromise Weather Challenge',
    prizePool: '$4,800',
    description: 'Showcases the full 2026 ARLO GORE-TEX + INSULA layering system across the complete outerwear range.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/84e495b038eb2da153901ce46f657c397e50cf2d-832x832.webp',
    prizes: [
      { place: '1st', description: 'Full ARLO waterproof system + INSULA kit + fitting', value: '$2,800' },
      { place: '2nd', description: 'LUIS windproof + midlayer set', value: '$1,200' },
      { place: '3rd-6th', description: 'Signature layering + accessory bundles (x4)', value: '$400 each' },
    ],
  },
  {
    brandName: 'Galvin Green Masters',
    brandLogoUrl: GG_LOGO,
    brandColor: '#17A455',
    title: 'Masters Limited Edition Drop',
    prizePool: '$4,800',
    description: 'Timed to The Masters -- exclusive early access to the limited-edition capsule collection. Premium positioning without discounting.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/eb0e822a11ccc9824e27267f2bc41c490a86c63c-1800x1800.webp',
    prizes: [
      { place: '1st', description: 'Full ARLO waterproof system + INSULA kit + fitting', value: '$2,800' },
      { place: '2nd', description: 'LUIS windproof + midlayer set', value: '$1,200' },
      { place: '3rd-6th', description: 'Signature layering + accessory bundles (x4)', value: '$400 each' },
    ],
  },
  {
    brandName: 'Galvin Green Layering',
    brandLogoUrl: GG_LOGO,
    brandColor: '#17A455',
    title: 'Layer Up Challenge',
    prizePool: '$4,800',
    description: 'Educates golfers on the multi-layer system advantage -- GORE-TEX shell, INSULA insulation, and Interface midlayer working together.',
    heroImageUrl: 'https://cdn.sanity.io/images/e3wja34v/production/e0dbe49f715d3385d05a5a9e3e2a890d300532e6-1800x1800.webp',
    prizes: [
      { place: '1st', description: 'Full ARLO waterproof system + INSULA kit + fitting', value: '$2,800' },
      { place: '2nd', description: 'LUIS windproof + midlayer set', value: '$1,200' },
      { place: '3rd-6th', description: 'Signature layering + accessory bundles (x4)', value: '$400 each' },
    ],
  },
]
