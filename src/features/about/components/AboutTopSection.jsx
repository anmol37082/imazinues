import Link from "next/link";
import Image from "next/image";
import styles from "./AboutTopSection.module.css";

const highlights = [
  {
    title: "Strategy first",
    text: "We start with audience, offer, and positioning before moving into design or content.",
  },
  {
    title: "Craft with intent",
    text: "Every layout, visual, and message is built to feel sharp, clear, and commercially useful.",
  },
  {
    title: "Execution that moves",
    text: "We keep the process practical so the final work is ready to ship, not just present well.",
  },
];

const metrics = [
  { value: "360°", label: "brand thinking" },
  { value: "Fast", label: "turnaround rhythm" },
  { value: "Clear", label: "project communication" },
];

function AboutTopSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.section}>
        <div className={styles.intro}>
          <p className={styles.kicker}>About Imazine Us</p>
          <h1 className={styles.title}>
            Designing digital experiences <span className={styles.titleAccent}>with clarity</span>
          </h1>
          <p className={styles.subtitle}>
            We help brands look sharper, communicate better, and build a presence that feels
            consistent across web, content, and campaigns. The goal is simple: make the work
            useful, memorable, and easy to trust.
          </p>
        </div>

        <div className={styles.grid}>
          <section className={`${styles.card} ${styles.storyCard}`} aria-labelledby="story-title">
            <p className={styles.cardLabel}>Who we are</p>
            <h2 className={styles.cardTitle} id="story-title">
              A small team with a direct process
            </h2>
            <p className={styles.cardText}>
              We work like a focused creative studio, not a noisy production line. That means
              fewer handoffs, clearer decisions, and a stronger connection between the brand
              story and the final output.
            </p>
            <p className={styles.cardText}>
              Whether it is identity work, social presence, websites, or content systems, we
              shape the solution around what your brand actually needs to move forward.
            </p>

            <div className={styles.metricRow}>
              {metrics.map((item) => (
                <div className={styles.metric} key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.actionRow}>
              <Link className={styles.primaryAction} href="/contact-us">
                Start a project
              </Link>
              <Link className={styles.secondaryAction} href="/works/modern-lifestyle-jewellers">
                See our work
              </Link>
            </div>

            <div className={styles.storyImageWrap}>
              <Image
                className={styles.storyImage}
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Brand strategy notes and creative planning"
                width={1200}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </section>

          <section className={`${styles.card} ${styles.visualCard}`} aria-labelledby="visual-title">
            <div className={styles.imageFrame}>
              <Image
                className={styles.image}
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
                alt="Creative team reviewing design direction"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>

            <div className={styles.visualCopy}>
              <p className={styles.cardLabel}>How we work</p>
              <h2 className={styles.cardTitle} id="visual-title">
                From first conversation to launch-ready delivery
              </h2>
              <div className={styles.highlights}>
                {highlights.map((item) => (
                  <article className={styles.highlightItem} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutTopSection;
