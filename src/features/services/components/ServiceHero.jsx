import styles from "./ServiceHero.module.css";

const defaultServiceColumns = [
  {
    label: "Roles",
    items: ["Creative developer", "Video director"],
  },
  {
    label: "Date",
    items: ["September 2018"],
  },
  {
    label: "Links",
    items: ["Interactive music video", "YouTube music video"],
  },
];

export default function ServiceHero({
  eyebrow = "AR",
  breadcrumb = " / MAI LAN - PUMPER",
  title = "MAI LAN - PUMPER",
  description = "Interactive music video imagined, directed, edited, designed and developed with TOOSOON for the French artist Mai Lan in collaboration with PANAMÃ†RA.",
  serviceColumns = defaultServiceColumns,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className={styles.brand}>{eyebrow}</span>
            <span className={styles.breadcrumb}>{breadcrumb}</span>
          </div>
          <div className={styles.topRight} aria-label="Quick navigation">
            <span>INDEX</span>
            <span>ABOUT</span>
          </div>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.columns} aria-label="Service highlights">
          {serviceColumns.map((column) => (
            <div className={styles.column} key={column.label}>
              <span className={styles.columnLabel}>{column.label}</span>
              <div className={styles.columnList}>
                {column.items.map((item) => (
                  <span className={styles.columnItem} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
