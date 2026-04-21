import styles from "./Hero.module.css";

const heroVideoWebm = "/hero.webm";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={heroVideoWebm} type="video/webm" />
        </video>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <p className={styles.tagline}>Lost in the digital space?</p>
          <h1 className={styles.headline}>
            Our marketing
            <br />
            process is your GPS.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
