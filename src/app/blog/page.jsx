import BlogHero from "@/features/blog/components/BlogHero";
import BlogGrid from "@/features/blog/components/BlogGrid";

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
    </main>
  );
}
