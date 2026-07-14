/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // Optional isolated build dir for local QA (set TEST_DIST_DIR=.next-qa).
  // Has no effect on normal/production builds.
  ...(process.env.TEST_DIST_DIR ? { distDir: process.env.TEST_DIST_DIR } : {}),
  images: {
    // Keep image transformations inside the Vercel Hobby quota (5K/month):
    // cache optimized images for 31 days so the same source is not
    // re-transformed, offer fewer srcset variants (crawlers fetch every
    // variant), serve webp only, and allow only the qualities the code
    // actually uses (default 75, heroes 100).
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
    qualities: [75, 100],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
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
