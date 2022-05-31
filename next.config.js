/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "manuscripts-backend.herokuapp.com", "res.cloudinary.com", "manuscripts-backend.herokuapp.comhttps"],
  },
}

module.exports = nextConfig

