/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "juiziglmzcqnbaagsdrq.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
  async redirects() {
    return [
      // Force www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bestorthopaedicsurgeon.com.au' }],
        destination: 'https://www.bestorthopaedicsurgeon.com.au/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
