import BlogHero from "@/features/blog/components/BlogHero";
import BlogGrid from "@/features/blog/components/BlogGrid";
import BlogCTA from "@/features/blog/components/BlogCTA";
import BlogFAQ from "@/features/blog/components/BlogFAQ";

export const metadata = {
  title: "Blog | Your Digital Marketing Agency",
  description:
    "Explore expert articles on SEO, web development, Google Ads, social media marketing, and digital growth.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
      <BlogFAQ
        title="Blog FAQs"
        subtitle="Answers to common questions about Imazine Us blogs, topics, and expertise."
        badge="FAQs"
      />
    </main>
  );
}
