import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import websiteRevampDevelopmentPageData from "@/features/services/data/websiteRevampDevelopmentPageData";

export const metadata = {
  title: "Website Revamp & Development | Imazine Us",
  description:
    "Modern website revamp and development services focused on UX, performance, and responsive design.",
};

export default function WebsiteRevampDevelopmentPage() {
  return <ServiceDetailPage data={websiteRevampDevelopmentPageData} />;
}
