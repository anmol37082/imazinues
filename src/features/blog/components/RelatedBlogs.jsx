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
          <span>More Web Reads</span>

          <h2>More Web Design and Build Articles</h2>

          <p>
            Explore more posts on UI systems, layout decisions, performance,
            and the craft behind modern websites.
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
