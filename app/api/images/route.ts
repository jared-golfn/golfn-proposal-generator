import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: 'e3wja34v',
  dataset: 'production',
  apiVersion: '2025-03-11',
  useCdn: true,
})

export async function GET() {
  // Query all image assets
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt desc) [0...20] {
    _id,
    originalFilename,
    url,
    metadata { dimensions { width, height } }
  }`
  const images = await client.fetch(query)
  return NextResponse.json(images)
}
