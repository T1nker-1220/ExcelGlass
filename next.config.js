/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['*']
  },
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  output: 'standalone',
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
