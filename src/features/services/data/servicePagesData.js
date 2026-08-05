import socialMediaMarketingPageData from "./socialMediaMarketingPageData";
import searchEngineOptimizationPageData from "./searchEngineOptimizationPageData";
import googleAdsCampaignsPageData from "./googleAdsCampaignsPageData";
import contentCreationPageData from "./contentCreationPageData";
import websiteRevampDevelopmentPageData from "./websiteRevampDevelopmentPageData";
import brandGuidelinesPageData from "./brandGuidelinesPageData";
import printDesignPageData from "./printDesignPageData";
import productPhotographyVideographyPageData from "./productPhotographyVideographyPageData";

const servicePages = {
  "social-media-marketing": socialMediaMarketingPageData,
  "search-engine-optimization": searchEngineOptimizationPageData,
  "google-ads-campaigns": googleAdsCampaignsPageData,
  "content-creation": contentCreationPageData,
  "website-revamp-development": websiteRevampDevelopmentPageData,
  "brand-guidelines": brandGuidelinesPageData,
  "print-design": printDesignPageData,
  "product-photography-videography": productPhotographyVideographyPageData,
};

function buildLocationPageData(serviceData, locationData) {
  const serviceName = serviceData.hero?.title || serviceData.serviceSlug;
  const locationName = locationData.label;
  const serviceColumns = serviceData.hero?.serviceColumns || [];

  return {
    serviceSlug: serviceData.serviceSlug,
    metadata: {
      title: `${serviceName} in ${locationName} | Imazine Us`,
      description:
        locationData.hero?.description ||
        `${serviceName} for ${locationName}. ${serviceData.hero?.description || ""}`,
    },
    hero: {
      ...(serviceData.hero || {}),
      ...(locationData.hero || {}),
      eyebrow: locationData.hero?.eyebrow || serviceData.hero?.eyebrow || "SERVICE",
      serviceName: locationData.hero?.serviceName || serviceName,
      locationName: locationData.hero?.locationName || locationName,
      title:
        locationData.hero?.title ||
        `${serviceName} IN ${locationName.toUpperCase()}`,
      description:
        locationData.hero?.description ||
        locationData.heroDescription ||
        `${serviceData.hero?.description || ""} Built specifically for ${locationName}.`,
      serviceColumns: locationData.hero?.serviceColumns || serviceColumns,
    },
    heroImage: locationData.heroImage || serviceData.heroImage,
    video: locationData.video || serviceData.video,
    context: locationData.context || serviceData.context,
    scrollVideo: locationData.scrollVideo || serviceData.scrollVideo,
    concept: locationData.concept || serviceData.concept,
    autoPlayVideo: locationData.autoPlayVideo || serviceData.autoPlayVideo,
    creativeProcess: locationData.creativeProcess || serviceData.creativeProcess,
    makingOf: locationData.makingOf || serviceData.makingOf,
    triptych: locationData.triptych || serviceData.triptych,
    innovation: locationData.innovation || serviceData.innovation,
    autoPlayVideoAlt: locationData.autoPlayVideoAlt || serviceData.autoPlayVideoAlt,
    scrollVideoAlt: locationData.scrollVideoAlt || serviceData.scrollVideoAlt,
    locationSection: locationData.locationSection || serviceData.locationSection,
    credits: locationData.credits || serviceData.credits,
  };
}

export function getLocationPageData(serviceSlug, locationSlug) {
  const serviceData = servicePages[serviceSlug];
  const locationData = serviceData?.locationPages?.[locationSlug];

  if (!serviceData || !locationData) {
    return null;
  }

  return buildLocationPageData(serviceData, locationData);
}

export function getAllLocationParams() {
  return Object.entries(servicePages).flatMap(([serviceSlug, serviceData]) =>
    Object.keys(serviceData.locationPages || {}).map((locationSlug) => ({
      serviceSlug,
      locationSlug,
    }))
  );
}

export function getServicePageData(serviceSlug) {
  return servicePages[serviceSlug] || null;
}
