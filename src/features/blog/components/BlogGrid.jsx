import styles from "./BlogGrid.module.css";
import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <section className={styles.blogGrid}>
      <div className="container">
        <div className={styles.heading}>
          <span>Blog Library</span>

          <h2>Latest Blog Guides, Tips & Ideas</h2>

          <p>
            Explore the latest blog posts across SEO, content, social media,
            branding, and practical growth strategies for modern businesses.
          </p>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
