import Image from "next/image";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80"
          alt="Blog and content strategy workspace"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>
    </section>
  );
}
