import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";
import styles from "./RelatedBlogs.module.css";

export default function RelatedBlogs({ currentSlug }) {
  const relatedBlogs = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, 3);

  if (!relatedBlogs.length) return null;

  return (
    <section className={styles.relatedBlogs}>
      <div className="container">
        <div className={styles.heading}>
          <span>More Articles</span>

          <h2>You May Also Like</h2>

          <p>
            Discover more expert articles on digital marketing, SEO,
            web development, and business growth.
          </p>
        </div>

        <div className={styles.grid}>
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}