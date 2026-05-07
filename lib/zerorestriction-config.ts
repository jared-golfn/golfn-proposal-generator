import type { PartnerConfig } from './presentation-data'

const TIMELAPSE_VIDEO = 'https://cdn.sanity.io/files/e3wja34v/production/44254c3ed5b70a03c02f5b64556d3b247781f86e.mp4'

export const zeroRestrictionConfig: PartnerConfig = {
  slug: 'zerorestriction',
  partnerName: 'Zero Restriction',
  password: 'zr2026',
  logoUrl: 'https://cdn.sanity.io/images/e3wja34v/production/da8a46e7bb0765aa24fc47643cdbc179cb89ad4b-356x142.png',
  primaryColor: '#00ff9d',
  secondaryColor: '#17A455',
  productCategory: 'Premium Golf Outerwear',
  productNames: ['Rain Jackets', 'Rain Pants', 'Windproof Layers'],
  heroHeadline: 'We know when your customers get rained on',
  heroSubtitle: 'GolfN tracks weather conditions during every round. When a golfer plays in the rain, we follow up with a targeted promotion for Zero Restriction the next time they open the app. No other platform can do this.',
  heroVideoUrl: TIMELAPSE_VIDEO,
  keyMarkets: ['United States', 'United Kingdom', 'Australia', 'Canada'],
  defaultPath: 'pilot',
  logoNoInvert: true,
}
