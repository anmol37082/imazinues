import ServiceDetailPage from "@/features/services/components/ServiceDetailPage";
import printDesignPageData from "@/features/services/data/printDesignPageData";

export const metadata = {
  title: "Print Design | Imazine Us",
  description:
    "Print design services for brochures, flyers, posters, and other branded materials.",
};

export default function PrintDesignPage() {
  return <ServiceDetailPage data={printDesignPageData} />;
}
