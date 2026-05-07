import type { PartnerConfig } from './presentation-data'

const TIMELAPSE_VIDEO = 'https://cdn.sanity.io/files/e3wja34v/production/44254c3ed5b70a03c02f5b64556d3b247781f86e.mp4'

export const puttrConfig: PartnerConfig = {
  slug: 'puttr',
  partnerName: 'PUTTR',
  password: 'puttr2026',
  logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/1b8f87b6c7fe3aba709069ba4610172b6561bdfa-280x80.heif',
  primaryColor: '#00ff9d',
  secondaryColor: '#17A455',
  productCategory: 'Smart Putting System',
  productNames: ['PUTTR Smart Putting Green', 'PUTTR Club Subscription'],
  heroHeadline: '30,000 verified golfers play Press Your Luck every month',
  heroSubtitle: '205,000+ monthly views. Growing 30% month-over-month. PUTTR enters as a featured prize. Every golfer sees it. The ones who want one watch your video. Then we convert them into buyers.',
  heroVideoUrl: TIMELAPSE_VIDEO,
  keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  defaultPath: 'pilot',
}
