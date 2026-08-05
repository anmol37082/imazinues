import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCard.module.css";

export default function BlogCard({
  slug,
  image,
  category,
  title,
  description,
  date,
  readTime,
}) {
  return (
    <article className={styles.card}>
      <Link
        href={`/blog/${slug}`}
        className={styles.imageWrapper}
        aria-label={`Read article: ${title}`}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className={styles.image}
        />

        <span className={styles.categoryBadge}>{category}</span>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{date}</span>

          <span className={styles.dot}></span>

          <span>{readTime}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className={styles.description}>{description}</p>

        <Link
          href={`/blog/${slug}`}
          className={styles.button}
          aria-label={`Read more about ${title}`}
        >
          Read More
          <span className={styles.arrow}>&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
