/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.icons8.com",
      "i.postimg.cc",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
