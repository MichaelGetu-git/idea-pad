/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential for Docker development
  output: 'standalone',
  
  // Enable hot reload in Docker
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,           // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: ['**/node_modules/**', '**/.git/**']
      }
    }
    return config
  },
  
  // Optional: Reduce build time in development
  swcMinify: true,
  
  // Optional: Enable experimental features for better dev experience
  experimental: {
    // Faster refresh
    optimizeCss: false,
    // Better error overlay
    appDir: true
  }
}

module.exports = nextConfig