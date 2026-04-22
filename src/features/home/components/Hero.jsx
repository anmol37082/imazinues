import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <p className={styles.tagline}>
            Connecting travellers with the world for 20 years.
          </p>
          <h1 className={styles.headline}>
            Creative agency <br />
            focused on clarity
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
