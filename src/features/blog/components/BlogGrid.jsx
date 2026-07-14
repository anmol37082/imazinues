import styles from "./BlogGrid.module.css";
import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <section className={styles.blogGrid}>
      <div className="container">
        <div className={styles.heading}>
          <span>Latest Articles</span>

          <h2>Explore Our Latest Insights</h2>

          <p>
            Stay updated with the latest trends, expert strategies, and
            practical tips in digital marketing, SEO, web development, and
            online business growth.
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