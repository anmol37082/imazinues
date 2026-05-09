import ContactTopSection from "@/features/contact/components/ContactTopSection";
import ContactFaqSection from "@/features/contact/components/ContactFaqSection";

export const metadata = {
  title: "Contact Us | Imazine Us",
  description: "Get in touch with Imazine Us for branding, design, social media, SEO, and web projects.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactTopSection />
      <ContactFaqSection />
    </>
  );
}
