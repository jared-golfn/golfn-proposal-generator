export type GolferSeed = {
  id: number
  lng: number
  lat: number
  city: string
  region: 'fl' | 'nc' | 'se' | 'ne' | 'mw' | 'tx' | 'w'
  /** Prefer for weather “rained / wet” demos */
  wet?: boolean
}

/** Real metro-ish positions for illustrative golfers */
export const GOLFER_SEEDS: Omit<GolferSeed, 'id'>[] = [
  // Florida
  { lng: -80.19, lat: 25.76, city: 'Miami', region: 'fl', wet: true },
  { lng: -80.35, lat: 26.12, city: 'Fort Lauderdale', region: 'fl' },
  { lng: -81.38, lat: 28.54, city: 'Orlando', region: 'fl', wet: true },
  { lng: -82.46, lat: 27.95, city: 'Tampa', region: 'fl' },
  { lng: -81.66, lat: 30.33, city: 'Jacksonville', region: 'fl' },
  { lng: -80.13, lat: 26.71, city: 'West Palm', region: 'fl', wet: true },
  { lng: -81.8, lat: 26.14, city: 'Fort Myers', region: 'fl' },
  { lng: -84.28, lat: 30.44, city: 'Tallahassee', region: 'fl' },
  // Carolinas
  { lng: -80.84, lat: 35.23, city: 'Charlotte', region: 'nc' },
  { lng: -78.64, lat: 35.78, city: 'Raleigh', region: 'nc' },
  { lng: -79.79, lat: 36.07, city: 'Greensboro', region: 'nc' },
  { lng: -79.99, lat: 32.78, city: 'Charleston', region: 'se', wet: true },
  { lng: -80.0, lat: 33.0, city: 'Myrtle Beach', region: 'se' },
  // Southeast
  { lng: -84.39, lat: 33.75, city: 'Atlanta', region: 'se' },
  { lng: -86.8, lat: 33.52, city: 'Birmingham', region: 'se' },
  { lng: -90.07, lat: 29.95, city: 'New Orleans', region: 'se', wet: true },
  { lng: -81.66, lat: 41.5, city: 'Cleveland', region: 'mw' },
  { lng: -85.76, lat: 38.25, city: 'Louisville', region: 'se' },
  { lng: -86.78, lat: 36.16, city: 'Nashville', region: 'se' },
  // Northeast
  { lng: -74.01, lat: 40.71, city: 'New York', region: 'ne' },
  { lng: -71.06, lat: 42.36, city: 'Boston', region: 'ne' },
  { lng: -75.17, lat: 39.95, city: 'Philadelphia', region: 'ne' },
  { lng: -77.04, lat: 38.91, city: 'Washington', region: 'ne' },
  { lng: -76.61, lat: 39.29, city: 'Baltimore', region: 'ne' },
  // Midwest
  { lng: -87.63, lat: 41.88, city: 'Chicago', region: 'mw' },
  { lng: -83.05, lat: 42.33, city: 'Detroit', region: 'mw' },
  { lng: -93.27, lat: 44.98, city: 'Minneapolis', region: 'mw' },
  { lng: -90.2, lat: 38.63, city: 'St. Louis', region: 'mw' },
  { lng: -84.51, lat: 39.1, city: 'Cincinnati', region: 'mw' },
  { lng: -104.99, lat: 39.74, city: 'Denver', region: 'mw' },
  // Texas
  { lng: -96.8, lat: 32.78, city: 'Dallas', region: 'tx' },
  { lng: -95.37, lat: 29.76, city: 'Houston', region: 'tx', wet: true },
  { lng: -97.74, lat: 30.27, city: 'Austin', region: 'tx' },
  { lng: -98.49, lat: 29.42, city: 'San Antonio', region: 'tx' },
  // West / PNW wet
  { lng: -122.33, lat: 47.61, city: 'Seattle', region: 'w', wet: true },
  { lng: -122.68, lat: 45.52, city: 'Portland', region: 'w', wet: true },
  { lng: -122.42, lat: 37.77, city: 'San Francisco', region: 'w' },
  { lng: -118.24, lat: 34.05, city: 'Los Angeles', region: 'w' },
  { lng: -117.16, lat: 32.72, city: 'San Diego', region: 'w' },
  { lng: -115.14, lat: 36.17, city: 'Las Vegas', region: 'w' },
  { lng: -112.07, lat: 33.45, city: 'Phoenix', region: 'w' },
  // Extra FL density for event demos
  { lng: -80.27, lat: 25.85, city: 'Miami Lakes', region: 'fl' },
  { lng: -81.3, lat: 28.7, city: 'Sanford', region: 'fl', wet: true },
  { lng: -82.3, lat: 27.75, city: 'St. Pete', region: 'fl' },
  { lng: -80.19, lat: 26.37, city: 'Boca', region: 'fl' },
  { lng: -81.5, lat: 28.3, city: 'Kissimmee', region: 'fl' },
  // Extra NC
  { lng: -80.9, lat: 35.1, city: 'Rock Hill', region: 'nc' },
  { lng: -78.9, lat: 35.9, city: 'Durham', region: 'nc' },
  { lng: -80.7, lat: 35.4, city: 'Concord', region: 'nc' },
]

export const PINS: Record<
  string,
  { lng: number; lat: number; label: string; zoom: number }
> = {
  fl: { lng: -81.5, lat: 27.8, label: 'Your event · FL', zoom: 5.6 },
  nc: { lng: -80.84, lat: 35.23, label: 'Activation · NC', zoom: 6.2 },
  course: { lng: -80.84, lat: 35.23, label: 'Partner course', zoom: 7.2 },
  national: { lng: -97.5, lat: 38.5, label: 'Your brand', zoom: 3.4 },
  brand: { lng: -97.5, lat: 38.5, label: 'Your product', zoom: 3.5 },
  rain: { lng: -84.0, lat: 32.5, label: 'Condition zone', zoom: 4.2 },
}

export function hash(i: number, s: number) {
  const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453
  return x - Math.floor(x)
}

/** Approx miles between two lat/lng */
export function milesBetween(
  lng1: number,
  lat1: number,
  lng2: number,
  lat2: number
) {
  const R = 3958.8
  const toR = (d: number) => (d * Math.PI) / 180
  const dLat = toR(lat2 - lat1)
  const dLng = toR(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(lat1)) * Math.cos(toR(lat2)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

/** GeoJSON circle polygon in miles */
export function circlePolygon(lng: number, lat: number, radiusMiles: number, steps = 64) {
  const coords: [number, number][] = []
  const latR = (radiusMiles / 69.0)
  const lngR = radiusMiles / (Math.cos((lat * Math.PI) / 180) * 69.0)
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    coords.push([lng + lngR * Math.cos(t), lat + latR * Math.sin(t)])
  }
  return {
    type: 'Feature' as const,
    properties: {},
    geometry: { type: 'Polygon' as const, coordinates: [coords] },
  }
}
