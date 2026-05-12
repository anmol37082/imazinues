import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import searchEngineOptimizationPageData from "@/features/services/data/searchEngineOptimizationPageData";

export const metadata = {
  title: "Search Engine Optimization | Imazine Us",
  description:
    "SEO services focused on keyword strategy, technical fixes, and content optimization for organic growth.",
};

export default function SearchEngineOptimizationPage() {
  return <ServiceDetailPage data={searchEngineOptimizationPageData} />;
}
