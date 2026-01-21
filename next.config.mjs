/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "videos.pexels.com",
    ],
  },
};

export default nextConfig;
