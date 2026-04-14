import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.bestorthopaedicsurgeon.com.au';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/', '/api', '/api/', '/login', '/signup'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
