import Image from "next/image";
import styles from "./WorkFooter.module.css";

export default function WorkFooter({
  backgroundText = "Let’s turn vision into reality.",
  imageSrc = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=2400",
  imageAlt = "Portrait on a colorful background",
  title = "Branding, campaigns, digital growth, and creative production. Let’s build something powerful.",
  email = "megamegacube@gmail.com",
  actionLabel = "Book a call",
}) {
  return (
    <footer className={styles.section}>
      <div className={styles.backgroundHeading} aria-hidden="true">
        {backgroundText}
      </div>

      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.leftPane} aria-hidden="true" />

          <div className={styles.rightPane}>
            <div className={styles.imageWrap}>
              <Image
                className={styles.image}
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <p className={styles.copy}>{title}</p>

            <div className={styles.actions}>
              <a className={styles.email} href={`mailto:${email}`}>
                {email}
              </a>
              <a className={styles.button} href="tel:+910000000000">
                {actionLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
