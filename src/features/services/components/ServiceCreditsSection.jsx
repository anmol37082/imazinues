import styles from "./ServiceCreditsSection.module.css";

const leftGroups = [
  {
    title: "STRATEGY",
    items: [
      {
        label: "PLANNING",
        names: ["Content roadmap", "Campaign structure", "Brand direction"],
      },
      {
        label: "ANALYSIS",
        names: ["Audience review", "Performance checks"],
      },
    ],
  },
  {
    title: "CREATIVE",
    items: [
      {
        label: "DESIGN",
        names: ["Visual systems", "Static assets", "Motion direction"],
      },
      {
        label: "CONTENT",
        names: ["Copywriting", "Reels", "Carousels", "Story assets"],
      },
    ],
  },
  {
    title: "DELIVERY",
    items: [
      {
        label: "EXECUTION",
        names: ["Scheduling", "Publishing", "Community management"],
      },
      {
        label: "COLLABORATION",
        names: ["Client feedback", "Iteration", "Launch support"],
      },
    ],
  },
];

const rightGroups = [
  {
    title: "PERFORMANCE",
    items: [
      {
        label: "OPTIMIZATION",
        names: ["SEO", "Paid campaigns", "A/B testing"],
      },
      {
        label: "TRACKING",
        names: ["Analytics", "Reporting", "Conversion review"],
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        label: "MAINTENANCE",
        names: ["Website updates", "Asset refresh", "Ongoing improvements"],
      },
      {
        label: "BRAND CARE",
        names: ["Consistency", "Guidelines", "Quality control"],
      },
    ],
  },
];

function renderGroup(group) {
  return (
    <section className={styles.group} key={group.title}>
      <h3 className={styles.groupTitle}>{group.title}</h3>
      <div className={styles.items}>
        {group.items.map((item) => (
          <div className={styles.item} key={`${group.title}-${item.label || item.names[0]}`}>
            {item.label ? <h4 className={styles.itemLabel}>{item.label}</h4> : null}
            <ul className={styles.names}>
              {item.names.map((name) => (
                <li className={styles.name} key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ServiceCreditsSection({
  heading = "CREDITS",
  title = "Imazine Us Service Team",
  subtitle = "Strategy, design, development, content, and growth execution handled by the Imazine Us team.",
}) {
  return (
    <section className={styles.section} aria-label="Credits section">
      <div className={styles.inner}>
        <p className={styles.heading}>{heading}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.grid}>
          <div className={styles.column}>
            {leftGroups.map((group) => renderGroup(group))}
          </div>
          <div className={styles.column}>
            {rightGroups.map((group) => renderGroup(group))}
          </div>
        </div>
      </div>
    </section>
  );
}
