/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "manuscripts-backend.herokuapp.com"],
  },
}

module.exports = nextConfig
