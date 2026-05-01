import styles from "./WorkImpactSection.module.css";

export default function WorkImpactSection({
  prompt = "Want to learn more?",
  cta = "Let's chat!",
  heading = "Impact",
  paragraphs = [],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.spacer} aria-hidden="true" />

          <div className={styles.rightPane}>
            <div className={styles.ctaBlock}>
              <span className={styles.prompt}>{prompt}</span>
              <span className={styles.cta}>{cta}</span>
            </div>

            <div className={styles.copyBlock}>
              <h2 className={styles.heading}>{heading}</h2>
              <div className={styles.paragraphs}>
                {paragraphs.map((paragraph) => (
                  <p className={styles.copy} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
