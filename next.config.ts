import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },

  experimental: {
    serverActions: {
      allowedOrigins: []
    }
  } /* ,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  } */
}

export default nextConfig
