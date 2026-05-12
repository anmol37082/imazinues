import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import brandGuidelinesPageData from "@/features/services/data/brandGuidelinesPageData";

export const metadata = {
  title: "Brand Guidelines | Imazine Us",
  description:
    "Brand guideline systems for logos, colors, typography, and tone that keep identity consistent.",
};

export default function BrandGuidelinesPage() {
  return <ServiceDetailPage data={brandGuidelinesPageData} />;
}
