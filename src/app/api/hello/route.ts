import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const ctx = getRequestContext()
  const cfInfo = ctx.cf || {}

  const response = {
    message: 'Pet Thoughts API is running',
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    location: {
      country: cfInfo.country,
      city: cfInfo.city,
      latitude: cfInfo.latitude,
      longitude: cfInfo.longitude,
    }
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
