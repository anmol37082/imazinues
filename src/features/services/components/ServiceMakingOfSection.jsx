import GoldenGlowEffect from "./GoldenGlowEffect";
import styles from "./ServiceMakingOfSection.module.css";

export default function ServiceMakingOfSection({
  eyebrow = "MAKING-OF",
  title = "FIRST EXPERIENCE AS VIDEO DIRECTORS",
  description = "PANAMÃ†RA gathered a small team and booked a Parisian studio for 2 days to let us get all the shots we needed. We then made all the visuals compositions using stock images. The objective was to give birth to a visually rich universe matching the sweet and catchy mood of the song.",
}) {
  return (
    <section className={styles.section} aria-label="Making of">
      <GoldenGlowEffect className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copyLeft}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.copyRight}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </GoldenGlowEffect>
    </section>
  );
}
