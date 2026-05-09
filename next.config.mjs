/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    qualities: [75, 92],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
