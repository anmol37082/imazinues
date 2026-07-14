"use client";

import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
        alt="Digital Marketing Banner"
        fill
        priority
        className={styles.bannerImage}
        sizes="100vw"
      />
    </section>
  );
}