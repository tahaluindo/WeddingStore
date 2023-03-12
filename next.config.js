const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:['localhost','flowbite.com','res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source:'/:slug',
        destination: '/post/:slug',
      },
      {
        source:'/preview/:slug',
        destination: '/preview/:slug',
      }
    ]
  },
}

module.exports = nextConfig
