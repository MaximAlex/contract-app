/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: () => {
    return [
      {
        source: '/mock-api/:path*',
        destination: 'http://localhost:3001/:path*' // Proxy to Backend
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
