"use client";

import Image from "next/image";
import styles from "./BlogContent.module.css";

export default function BlogContent({ content = [] }) {
  return (
    <section className={styles.blogContent}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <div key={index} className={styles.headingWrapper}>
                    <h2 className={styles.heading}>
                      {block.text}
                    </h2>
                  </div>
                );

              case "paragraph":
                return (
                  <p key={index} className={styles.paragraph}>
                    {block.text}
                  </p>
                );

              case "image":
                return (
                  <figure key={index} className={styles.imageWrapper}>
                    <div className={styles.imageInner}>
                      <Image
                        src={block.src}
                        alt={block.alt || ""}
                        width={1000}
                        height={600}
                        className={styles.image}
                      />
                    </div>
                    {block.caption && (
                      <figcaption className={styles.caption}>
                        <span className={styles.captionLine}></span>
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "list":
                return (
                  <ul key={index} className={styles.list}>
                    {block.items.map((item, i) => (
                      <li key={i} className={styles.listItem}>
                        <span className={styles.listCheck}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote key={index} className={styles.quote}>
                    <span className={styles.quoteMark}>&ldquo;</span>
                    <p className={styles.quoteText}>{block.text}</p>
                  </blockquote>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}