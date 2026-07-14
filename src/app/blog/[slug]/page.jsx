import { notFound } from "next/navigation";

import { blogs } from "@/features/blog/data/blogs";

import BlogBanner from "@/features/blog/components/BlogBanner";
import BlogContent from "@/features/blog/components/BlogContent";
        // 🆕
import BlogAuthor from "@/features/blog/components/BlogAuthor";       // 🆕
import BlogFAQ from "@/features/blog/components/BlogFAQ";             // 🆕
      // 🆕
import RelatedBlogs from "@/features/blog/components/RelatedBlogs";
import BlogCTA from "@/features/blog/components/BlogCTA";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      {/* 1. Hero Banner */}
      <BlogBanner blog={blog} />

      {/* 2. Article Content */}
      <BlogContent content={blog.content} />

     

      {/* 4. Author Bio 🆕 */}
      {blog.author && (
        <BlogAuthor 
          author={blog.author}
          authorImage={blog.authorImage}
          authorBio={blog.authorBio}
          date={blog.date}
        />
      )}

      {/* 5. FAQ */}
      {blog.faq && blog.faq.length > 0 && (
        <BlogFAQ 
          faqs={blog.faq}
          title={`Questions About ${blog.category}`}
          subtitle={`Common questions about ${blog.title.toLowerCase()}.`}
          badge="Q&A"
          firstOpen={false}
        />
      )}

      {/* 6. Share Buttons 🆕 */}
    

      {/* 7. Related Posts */}
      <RelatedBlogs currentSlug={blog.slug} />

      {/* 8. CTA */}
      <BlogCTA />
    </main>
  );
}