import Link from "next/link";
import { blogs } from "@/features/blog/data/blogs";
import BlogCard from "@/features/blog/components/BlogCard";
import styles from "./LatestBlogsSection.module.css";

const latestBlogs = blogs
  .filter((blog) => blog.status === "published")
  .slice()
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

export default function LatestBlogsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.copy}>
            <span className={styles.pill}>Latest Blogs</span>
            <h2 className={styles.title}>Read what&apos;s working right now.</h2>
            <p className={styles.subtitle}>
              Fresh marketing insights, strategy breakdowns, and practical ideas
              your team can use today.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/blog" className={styles.viewAll}>
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
