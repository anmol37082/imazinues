import { notFound } from "next/navigation";

import { blogs } from "@/features/blog/data/blogs";

import BlogBanner from "@/features/blog/components/BlogBanner";
import BlogContent from "@/features/blog/components/BlogContent";

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
      <BlogBanner blog={blog} />
      <BlogContent content={blog.content} />
    </main>
  );
}
