import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import productPhotographyVideographyPageData from "@/features/services/data/productPhotographyVideographyPageData";

export const metadata = {
  title: "Product Photography & Videography | Imazine Us",
  description:
    "Product photography and videography services for premium e-commerce, ads, and social visuals.",
};

export default function ProductPhotographyVideographyPage() {
  return <ServiceDetailPage data={productPhotographyVideographyPageData} />;
}
