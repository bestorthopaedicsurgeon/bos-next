/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // Optional isolated build dir for local QA (set TEST_DIST_DIR=.next-qa).
  // Has no effect on normal/production builds.
  ...(process.env.TEST_DIST_DIR ? { distDir: process.env.TEST_DIST_DIR } : {}),
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
