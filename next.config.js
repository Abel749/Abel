/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: {
    Url: ['http://127.0.0.1:1337/'],
    Url2: ['http://127.0.0.1:3000/'],
  },
}

module.exports = nextConfig
