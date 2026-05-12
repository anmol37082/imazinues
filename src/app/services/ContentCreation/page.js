import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import contentCreationPageData from "@/features/services/data/contentCreationPageData";

export const metadata = {
  title: "Content Creation | Imazine Us",
  description:
    "Content creation services for blogs, visuals, videos, and social assets that support clear brand communication.",
};

export default function ContentCreationPage() {
  return <ServiceDetailPage data={contentCreationPageData} />;
}
