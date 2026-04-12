/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/thankyou",
        destination: "/thank-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
