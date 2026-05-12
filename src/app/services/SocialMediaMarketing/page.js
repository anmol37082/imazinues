import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import socialMediaMarketingPageData from "@/features/services/data/socialMediaMarketingPageData";

export const metadata = {
  title: "Social Media Marketing | Imazine Us",
  description:
    "Strategy-led social media marketing services for consistent content, paid campaigns, and audience growth.",
};

export default function SocialMediaMarketingPage() {
  return <ServiceDetailPage data={socialMediaMarketingPageData} />;
}
