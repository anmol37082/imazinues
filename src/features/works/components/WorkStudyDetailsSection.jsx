import styles from "./WorkStudyDetailsSection.module.css";

function DetailList({ title, items }) {
  return (
    <div className={styles.listBlock}>
      <h2 className={styles.listTitle}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.listItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WorkStudyDetailsSection({
  researchTitle = "Research methods",
  researchItems = ["Market research", "Competition analysis", "User interviews", "A/B Testing"],
  ideationTitle = "Ideation",
  ideationItems = ["User journeys", "User flows", "Sketching"],
  overviewTitle = "Project overview",
  overview,
  challengeTitle = "Challenge",
  challenge,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.spacer} aria-hidden="true" />

          <div className={styles.rightPane}>
            <div className={styles.topRow}>
              <DetailList title={researchTitle} items={researchItems} />
              <DetailList title={ideationTitle} items={ideationItems} />
            </div>

            <div className={styles.content}>
              <article className={styles.copyBlock}>
                <h2 className={styles.heading}>{overviewTitle}</h2>
                <p className={styles.copy}>{overview}</p>
              </article>

              <article className={styles.copyBlock}>
                <h2 className={styles.heading}>{challengeTitle}</h2>
                <p className={styles.copy}>{challenge}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
