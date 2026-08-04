import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/process',
        destination: '/#process',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/#quote',
        permanent: true,
      },
    ]
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
