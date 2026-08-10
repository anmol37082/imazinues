import ContactHero from "@/features/contact/components/ContactHero";
import ContactInfo from "@/features/contact/components/ContactInfo";
import BlogFAQ from "@/features/blog/components/BlogFAQ";

const contactFaqs = [
  {
    question: "How quickly do you reply to contact requests?",
    answer:
      "We usually reply within 24 hours on business days. If your request is urgent, mention it in the message and we will prioritize it.",
  },
  {
    question: "What details should I include in the form?",
    answer:
      "Share your name, email, project goal, timeline, and any reference links or requirements you already have. More context helps us respond with a clearer plan.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, growing businesses, and established brands across branding, design, social media, SEO, and web projects.",
  },
  {
    question: "Can I contact you for a custom quote?",
    answer:
      "Absolutely. Send us your project details and we will review the scope before sharing a custom estimate and next steps.",
  },
  {
    question: "Do you offer remote services?",
    answer:
      "Yes. Most of our work is handled remotely, so we can collaborate with clients across locations without any issue.",
  },
];

export const metadata = {
  title: "Contact Us | Imazine Us",
  description: "Get in touch with Imazine Us for branding, design, social media, SEO, and web projects.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <BlogFAQ
        faqs={contactFaqs}
        title="Contact FAQs"
        subtitle="Quick answers about reaching out, timelines, and how we work with new clients."
        badge="FAQ"
        showBadge={true}
        firstOpen={false}
      />
    </>
  );
}
