import styles from "./ServiceQuoteSection.module.css";

export default function ServiceQuoteSection({
  quote = "Mai Lan didn’t settle for a YouTube video for “Pumper”: she took psychedelia to the extreme in an interactive version of the clip. You can, among other things, change the landscape, choose the prints, direct the artist’s binoculars and even cut cacti. And strange as it may seem, the experience quickly becomes addictive.",
  source = "Clique.tv",
}) {
  return (
    <section className={styles.section} aria-label="Quote section">
      <div className={styles.inner}>
        <div className={styles.mark} aria-hidden="true">
          “
        </div>
        <blockquote className={styles.quote}>{quote}</blockquote>
        <p className={styles.source}>{source}</p>
      </div>
    </section>
  );
}
