import ContactHero from "@/features/contact/components/ContactHero";
import ContactInfo from "@/features/contact/components/ContactInfo";

export const metadata = {
  title: "Contact Us | Imazine Us",
  description: "Get in touch with Imazine Us for branding, design, social media, SEO, and web projects.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  );
}
