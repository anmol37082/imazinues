// src/features/blog/components/BlogAuthor/BlogAuthor.jsx
import Image from "next/image";
import styles from "./BlogAuthor.module.css";

export default function BlogAuthor({ author, authorImage, authorBio, date }) {
  if (!author) return null;

  return (
    <section className={styles.authorSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.avatarShell}>
            <div className={styles.imageWrapper}>
              <Image
                src={authorImage || "/default-avatar.jpg"}
                alt={author}
                width={88}
                height={88}
                className={styles.image}
              />
            </div>
            <span className={styles.badge}>Author</span>
          </div>
          <div className={styles.info}>
            <span className={styles.kicker}>Meet the writer</span>
            <h4 className={styles.name}>Written by {author}</h4>
            {date && <span className={styles.date}>Published on {date}</span>}
            {authorBio && <p className={styles.bio}>{authorBio}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
