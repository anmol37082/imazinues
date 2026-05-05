import styles from "./WorkHero.module.css";

export default function WorkHero({
  title,
  description,
  details = [],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h1 className={styles.title}>{title}</h1>
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>

          <div className={styles.details} aria-label="Project details">
            {details.map((item) => (
              <div
                className={`${styles.detail}${Array.isArray(item.value) ? ` ${styles.detailWide}` : ""}`}
                key={item.label}
              >
                <span className={styles.detailLabel}>{item.label}</span>
                {Array.isArray(item.value) ? (
                  <span className={styles.detailValueList}>
                    {item.value.map((line) => (
                      <span className={styles.detailValueLine} key={line}>
                        {line}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className={styles.detailValue}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
