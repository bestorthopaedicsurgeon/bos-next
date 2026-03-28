import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.bestorthopaedicsurgeon.com.au';

  // Fetch all public doctor profiles
  const doctors = await prisma.doctorProfile.findMany({
    where: { hidden: false },
    select: { slug: true }
  });

  const doctorUrls: MetadataRoute.Sitemap = doctors
    .filter((doc: any) => doc.slug)
    .map((doc: any) => ({
      url: `${baseUrl}/doctor/${doc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const staticRoutes = [
    '',
    '/about',
    '/contactUs',
    '/faq',
    '/how-to-leave-review',
    '/how-to-make-surgeons-profile',
    '/legal-disclaimer',
    '/privacy-policy',
    '/review-policy',
    '/terms-of-use',
    '/login',
    '/signup',
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...doctorUrls];
}
