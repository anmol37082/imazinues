"use client";

import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <Image
        src="/contact/contacthero.webp"
        alt="Contact hero banner"
        fill
        priority
        sizes="100vw"
        className={styles.banner}
      />
    </section>
  );
}
