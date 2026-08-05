import Link from "next/link";
import styles from "./ServiceLocationSection.module.css";

const defaultLocations = ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"];

function slugifyLocation(label) {
  return label
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ServiceLocationSection({
  title = "LOCATIONS",
  locations = defaultLocations,
  serviceSlug,
}) {
  return (
    <section className={styles.section} aria-label="Service locations">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.grid}>
          {locations.map((location) => {
            const label = typeof location === "string" ? location : location.label;
            const slug =
              typeof location === "string"
                ? slugifyLocation(location)
                : location.slug || slugifyLocation(location.label);

            return (
              <Link
                href={serviceSlug ? `/services/${serviceSlug}/${slug}` : "#"}
                className={styles.box}
                key={label}
              >
                <span className={styles.locationName}>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
