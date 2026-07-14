"use client";

import styles from "./BlogBanner.module.css";

export default function BlogBanner({ blog }) {
  return (
    <section className={styles.banner}>
      {/* Animated Wave Background */}
      <div className={styles.waveContainer}>
        <svg className={styles.wave} viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path className={styles.waveLine1} d="M0,300 C240,200 480,400 720,300 C960,200 1200,400 1440,300 L1440,600 L0,600 Z" />
          <path className={styles.waveLine2} d="M0,350 C240,250 480,450 720,350 C960,250 1200,450 1440,350 L1440,600 L0,600 Z" />
          <path className={styles.waveLine3} d="M0,400 C240,300 480,500 720,400 C960,300 1200,500 1440,400 L1440,600 L0,600 Z" />
        </svg>
      </div>

      {/* Subtle dot pattern overlay */}
      <div className={styles.dotPattern}></div>

      <div className={styles.container}>
        {/* Category Badge */}
        <span className={styles.category}>
          {blog.category}
        </span>

        <div className={styles.wrapper}>
          {/* Left - Big Title */}
          <div className={styles.titleSection}>
            <h1 className={styles.title}>
              {blog.title}
            </h1>
            <div className={styles.accentLine}></div>

            {/* Meta - Below title */}
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {blog.date}
              </span>
              <span className={styles.dot}></span>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Right - Description */}
          <div className={styles.descSection}>
            <p className={styles.description}>
              {blog.heroDescription || blog.description}
            </p>

            {/* Highlights */}
            {blog.highlights && (
              <ul className={styles.highlights}>
                {blog.highlights.map((item, index) => (
                  <li key={index} className={styles.highlightItem}>
                    <span className={styles.checkmark}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}