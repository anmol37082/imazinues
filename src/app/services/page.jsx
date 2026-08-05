import Image from "next/image";
import Services from "@/features/home/components/Services";
import styles from "./page.module.css";

export const metadata = {
  title: "Services | Imazine Us",
  description:
    "Explore Imazine Us services including SEO, social media marketing, Google Ads, content creation, website development, branding, print design, and product photography.",
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Services hero image">
        <div className={styles.heroMedia}>
          <Image
            src="/images/mainbanner.webp"
            alt="Services banner"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
      </section>

      <Services />
    </div>
  );
}
