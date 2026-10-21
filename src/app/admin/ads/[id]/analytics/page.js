import AdAnalytics from "@/components/admin/ads/AdAnalytics";

export const metadata = { title: "Advertising Analytics | BOS Admin" };

export default async function AdvertisingAnalyticsPage({ params }) {
  const { id } = await params;
  return <AdAnalytics campaignId={id} />;
}
