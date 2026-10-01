function createLocation(city, audience, useCases, emphasis) {
  return {
    label: city,
    introTitle: `Product Photography and Videography in ${city}`,
    intro: `Imazine Us creates product photography and video for ${audience} in ${city}. From clean product images and detail shots to short-form videos and campaign visuals, we help present your products clearly and build customer confidence.`,
    details: `Every shoot is planned around the product, audience, and intended use. We consider styling, lighting, composition, and formats so the final assets work across ${useCases}.`,
    contentTitle: `Product visuals created for ${city} brands`,
    content: `Whether you are launching a new product or refreshing your catalogue, Imazine Us creates photo and video assets that show quality, features, and brand character. Our production and editing process gives ${audience} in ${city} polished visuals for digital customer touchpoints.`,
    points: [
      `Product photos, detail shots, and video content for ${city} brands.`,
      `Creative direction, lighting, styling, and composition planned for your product.`,
      "Edited deliverables prepared for websites, social platforms, and campaigns.",
    ],
    focus: ["Product photography", "Short-form video", emphasis],
    highlights: [`${city} business context`, "Product detail and quality", "Ready-to-use visual assets"],
    hero: {
      description: `Imazine Us produces product photography and videography for ${audience} in ${city}, creating clear, polished visuals for ${useCases}.`,
      serviceColumns: [
        { label: "OUTPUTS", items: ["Product Photos", "Detail Shots", "Short Videos"] },
        { label: "PRODUCTION", items: ["Lighting", "Styling", "Creative Direction"] },
        { label: "FORMATS", items: ["Web", "Social Media", "Campaigns"] },
        { label: "PURPOSE", items: ["Show Quality", "Build Trust", "Support Sales"] },
      ],
    },
    context: {
      label: `${city.toUpperCase()} PRODUCT SHOOTS`,
      title: `Plan product visuals around how ${city} customers shop`,
      overview: `Every product needs the right setting, lighting, and framing to help customers understand what makes it valuable.`,
      details: `We plan each shoot around your product range and customer journey, creating assets suited to ${useCases} for businesses in ${city}.`,
    },
    concept: {
      label: "PRODUCT STORYTELLING",
      title: "Show the details that make your product distinct",
      overview: "Strong product visuals balance attractive styling with the details customers need to make a decision.",
      details: `Imazine Us captures materials, features, scale, and product use in a style that fits your brand and ${emphasis.toLowerCase()}.`,
    },
    creativeProcess: {
      eyebrow: "PRODUCTION PROCESS",
      title: "From shoot planning to platform-ready visuals",
      description: `We plan concepts, backgrounds, props, lighting, and shot lists before production. After the shoot, Imazine Us edits and exports photography and video for ${audience} in ${city}.`,
    },
    makingOf: {
      eyebrow: "POST-PRODUCTION",
      title: "Polished edits, ready for your channels",
      description: `Our post-production includes image selection, retouching, color work, and video editing. Final assets are prepared in practical formats for ${useCases}.`,
    },
    innovation: {
      eyebrow: "VISUAL STORYTELLING",
      title: "Help customers picture your product in their lives",
      description: `Lifestyle imagery and product video can show context, use, and personality beyond a basic product listing. Imazine Us creates visual stories that help ${city} brands connect with customers and support confident buying decisions.`,
    },
    credits: {
      heading: "PRODUCT PHOTO AND VIDEO SERVICES",
      title: `Your product visual team in ${city}`,
      subtitle: `Imazine Us manages shoot planning, production, editing, and final delivery for ${audience}.`,
      columns: [
        [{ title: "PRODUCTION", items: [{ label: "SHOOT PLANNING", names: ["Creative direction", "Shot lists", "Styling and props"] }, { label: "CAPTURE", names: ["Product photography", "Detail images", "Campaign stills"] }] }],
        [{ title: "DELIVERY", items: [{ label: "VIDEO", names: ["Product clips", "Social videos", "Motion details"] }, { label: "POST-PRODUCTION", names: ["Retouching", "Color grading", "Platform exports"] }] }],
      ],
    },
  };
}

const productPhotographyVideographyPageLocation = {
  chandigarh: createLocation(
    "Chandigarh",
    "local product brands, retailers, and online stores",
    "e-commerce listings, social media, and local campaigns",
    "Campaign photography",
  ),
  mohali: createLocation(
    "Mohali",
    "startups, product companies, and growing online stores",
    "product pages, digital catalogues, and performance ads",
    "E-commerce visuals",
  ),
  panchkula: createLocation(
    "Panchkula",
    "lifestyle, beauty, home, and premium product brands",
    "brand campaigns, catalogues, and social media",
    "Lifestyle product storytelling",
  ),
  zirakpur: createLocation(
    "Zirakpur",
    "local retailers, online sellers, and emerging product brands",
    "online listings, promotions, and social media content",
    "Product detail photography",
  ),
  "dera-bassi": createLocation(
    "Dera Bassi",
    "manufacturers, product makers, and commercial businesses",
    "product catalogues, websites, and business campaigns",
    "Product range documentation",
  ),
};

export default productPhotographyVideographyPageLocation;
