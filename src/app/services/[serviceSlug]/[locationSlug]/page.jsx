import { notFound } from "next/navigation";
import LocationPage from "@/features/services/components/LocationPage";
import {
  getAllLocationParams,
  getLocationPageData,
} from "@/features/services/data/servicePagesData";

export function generateStaticParams() {
  return getAllLocationParams();
}

export async function generateMetadata({ params }) {
  const { serviceSlug, locationSlug } = await params;
  const data = getLocationPageData(serviceSlug, locationSlug);

  if (!data) {
    return {
      title: "Service Location | Imazine Us",
    };
  }

  return data.metadata;
}

export default async function ServiceLocationPage({ params }) {
  const { serviceSlug, locationSlug } = await params;
  const data = getLocationPageData(serviceSlug, locationSlug);

  if (!data) {
    notFound();
  }

  return <LocationPage data={data} />;
}
