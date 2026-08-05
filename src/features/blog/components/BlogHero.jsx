import Image from "next/image";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <Image
          src="/blogs/bloglandinghero2.webp"
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
