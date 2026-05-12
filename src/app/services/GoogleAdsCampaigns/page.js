import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import googleAdsCampaignsPageData from "@/features/services/data/googleAdsCampaignsPageData";

export const metadata = {
  title: "Google Ads & Campaigns | Imazine Us",
  description:
    "Paid search and remarketing campaigns designed to generate qualified leads and efficient ad spend.",
};

export default function GoogleAdsCampaignsPage() {
  return <ServiceDetailPage data={googleAdsCampaignsPageData} />;
}
