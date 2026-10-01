function createLocation(label, context, audience, materials, focus) {
  const city = label;
  return {
    label: city,
    introTitle: `Print Design Services in ${city}`,
    intro: `Imazine Us creates print materials for ${audience} in ${city}, helping businesses communicate clearly in stores, offices, events, and customer interactions. From brochures and flyers to menus, catalogues, and campaign collateral, we design each piece to fit your brand and purpose.`,
    details: `We plan the layout, messaging, typography, and visual hierarchy around how people will use the material. Our team also prepares production-ready artwork and considers the paper, finish, and print format needed for ${context}.`,
    contentTitle: `Print materials designed for ${city} businesses`,
    content: `Whether you are promoting a service, supporting a local event, or sharing product information, Imazine Us develops print design that is practical, polished, and easy to read. We help ${audience} keep their offline brand experience consistent with their digital presence.`,
    points: [
      `Brochures, flyers, posters, and ${materials} for ${city} businesses.`,
      "Brand-aligned layouts with clear messaging and strong readability.",
      "Print-ready files prepared with production specifications in mind.",
    ],
    focus,
    highlights: [`${city} business context`, "Clear visual hierarchy", "Production-ready design"],
    hero: {
      description: `Imazine Us designs brochures, flyers, posters, and branded print collateral for ${audience} in ${city}. Clear layouts and production-ready files help your message make an impact offline.`,
      serviceColumns: [
        { label: "MATERIALS", items: ["Brochures", "Flyers", materials] },
        { label: "APPLICATION", items: ["Retail", "Events", "Business"] },
        { label: "DESIGN", items: ["Layout", "Typography", "Branding"] },
        { label: "OUTPUT", items: ["Print-ready", "Readable", "On-brand"] },
      ],
    },
    context: {
      label: `${city.toUpperCase()} PRINT DESIGN`,
      title: `Print that communicates clearly across ${city}`,
      overview: `Physical materials remain an important way for ${audience} to introduce services, share offers, and connect with customers.`,
      details: `Imazine Us plans each design around its setting and audience in ${city}, making key information easy to scan while keeping the brand presentation consistent.`,
    },
    concept: {
      label: "LAYOUT AND MATERIAL",
      title: "A considered finish from screen to print",
      overview: "Strong print design brings together clear hierarchy, readable type, and brand-appropriate visuals.",
      details: `We consider sizes, paper, finishes, and production requirements so your ${city} print materials look polished and work well in their intended setting.`,
    },
    creativeProcess: {
      eyebrow: "DESIGN AND PREPRESS",
      title: "Creative layouts, prepared for production",
      description: `Imazine Us develops the concept, layout, and artwork, then prepares files with the specifications your printer needs. ${city} businesses get print creative that is both visually strong and ready for production.`,
    },
    makingOf: {
      eyebrow: "PRINT PRODUCTION",
      title: "From approved artwork to print-ready files",
      description: `We check dimensions, bleed, color setup, image quality, and final artwork before handoff. This helps ${audience} in ${city} move into printing with fewer avoidable production issues.`,
    },
    innovation: {
      eyebrow: "BRAND EXPERIENCE",
      title: "Make every physical touchpoint feel like your brand",
      description: `From a brochure handed to a customer to a poster displayed at an event, consistent print materials help ${city} businesses build recognition. Imazine Us extends your brand identity into useful, memorable physical experiences.`,
    },
    credits: {
      heading: "PRINT DESIGN SERVICES",
      title: `Your print design team in ${city}`,
      subtitle: `Imazine Us supports ${audience} with print planning, layout design, and production-ready artwork.`,
      columns: [
        [{ title: "DESIGN", items: [{ label: "COLLATERAL", names: ["Brochures and flyers", "Posters and menus", materials] }, { label: "LAYOUT", names: ["Visual hierarchy", "Typography", "Brand consistency"] }] }],
        [{ title: "PRODUCTION", items: [{ label: "PREPRESS", names: ["Print dimensions", "Bleed and color", "File preparation"] }, { label: "DELIVERY", names: ["Print-ready artwork", "Quality checks", "Printer handoff"] }] }],
      ],
    },
  };
}

const printDesignPageLocation = {
  chandigarh: createLocation(
    "Chandigarh",
    "city campaigns, retail, and events",
    "local brands, retailers, and service businesses",
    "event collateral",
    ["Brochures and flyers", "Campaign collateral", "Print production"],
  ),
  mohali: createLocation(
    "Mohali",
    "business communication, product information, and events",
    "Mohali companies, startups, and growing brands",
    "company profiles",
    ["Business collateral", "Company profiles", "Production-ready artwork"],
  ),
  panchkula: createLocation(
    "Panchkula",
    "professional services, hospitality, and premium retail",
    "professional firms, hospitality brands, and retailers",
    "catalogues",
    ["Premium print design", "Catalogues and brochures", "Brand consistency"],
  ),
  zirakpur: createLocation(
    "Zirakpur",
    "local promotions, retail, and customer-facing services",
    "local shops, service providers, and growing businesses",
    "promotional leaflets",
    ["Local promotions", "Flyers and posters", "Clear customer messaging"],
  ),
  "dera-bassi": createLocation(
    "Dera Bassi",
    "commercial communication, product details, and business events",
    "manufacturers, commercial businesses, and local service providers",
    "product sheets",
    ["Commercial print", "Product sheets", "Production accuracy"],
  ),
};

export default printDesignPageLocation;
