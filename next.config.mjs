/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mdsbrand.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'hafsa-health-blogger.vercel.app',
          },
        ],
        destination: 'https://www.thehealthsheet.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
