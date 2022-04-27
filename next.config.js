/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "manuscripts-backend.herokuapp.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
