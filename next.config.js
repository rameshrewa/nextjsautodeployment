/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
