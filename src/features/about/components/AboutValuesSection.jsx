import Image from "next/image";
import styles from "./AboutValuesSection.module.css";

const values = [
  {
    title: "Clear direction",
    text: "We define the scope early so the process stays focused and every step has a reason.",
  },
  {
    title: "Consistent systems",
    text: "We design assets and content patterns that work across touchpoints instead of one-off visuals.",
  },
  {
    title: "Practical delivery",
    text: "The final output should be easy to use, easy to present, and ready for real-world rollout.",
  },
  {
    title: "Brand confidence",
    text: "The goal is to make your presence feel more premium, more coherent, and easier to trust.",
  },
];

function AboutValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.header}>
          <p className={styles.kicker}>What we value</p>
          <h2 className={styles.title}>A working style built around clarity and momentum</h2>
          <p className={styles.subtext}>
            The contact page shows how directly we communicate. This page shows how we apply the
            same mindset to the work itself.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.cards}>
            {values.map((item) => (
              <article className={styles.valueCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.sideVisual}>
            <div className={styles.photoWrap}>
              <Image
                className={styles.photo}
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"
                alt="Creative planning session on a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className={styles.note}>
              <strong>Need a sharper brand presence?</strong>
              <span>We can help map the next step from audit to launch.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutValuesSection;
