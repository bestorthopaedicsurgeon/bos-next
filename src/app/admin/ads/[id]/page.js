import AdCampaignForm from "@/components/admin/ads/AdCampaignForm";

export const metadata = { title: "Edit Advertising Campaign | BOS Admin" };

export default async function EditAdvertisingCampaignPage({ params }) {
  const { id } = await params;
  return <AdCampaignForm campaignId={id} />;
}
