import styles from "./BlogGrid.module.css";
import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <section className={styles.blogGrid}>
      <div className="container">
        <div className={styles.heading}>
          <span>Resource Library
</span>

          <h2>Everything You Need to Grow Online.</h2>

          <p>
           Browse our collection of marketing resources, branding guides, SEO tips, and business growth strategies, all in one place.
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
