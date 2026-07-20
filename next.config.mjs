/** @type {import('next').NextConfig} */
const nextConfig = {
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
