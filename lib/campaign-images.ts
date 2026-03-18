// Per-campaign hero image styling overrides
// keyed by brandName to keep presentation-data.ts clean

export const campaignImageStyles: Record<string, { position: string; scale: string }> = {
  'Galvin Green': { position: 'center 30%', scale: '1.0' },
  'Galvin Green Masters': { position: 'center 40%', scale: '1.1' },
  'Galvin Green Layering': { position: 'center 35%', scale: '1.1' },
  'MotoCaddy': { position: 'center center', scale: '1.0' },
  'Wilson Golf': { position: 'center 25%', scale: '1.5' },
  // Sub 70 campaigns use phone mockup screenshots (750x1624 portrait)
  'Sub 70 Learn & Earn': { position: 'center 15%', scale: '1.0' },
  'Sub 70 Sweepstakes': { position: 'center 15%', scale: '1.0' },
  'Sub 70 Points-Back': { position: 'center 15%', scale: '1.0' },
}
