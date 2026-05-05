"use client";

import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { serviceCardData } from "@/features/home/components/Services";
import casesData from "@/features/navigation/data/casesData";
import footerLogo from "@/assets/svg/footerlogo.svg";
import styles from "./Footer.module.css";

const footerSans = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const primaryLinks = [
  { label: "Book A Call", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Home", href: "/" }, 
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/imazineus/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.45" cy="6.55" r="1.15" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/imazineus/",
    icon: (
      <svg viewBox="0 0 512 510" aria-hidden="true">
        <rect fill="#ffffff" width="512" height="509.64" rx="115.612" ry="115.612" />
        <path
          fill="#111111"
          d="M287.015 509.64h-92.858V332.805h-52.79v-78.229h52.79v-33.709c0-87.134 39.432-127.522 124.977-127.522 16.217 0 44.203 3.181 55.651 6.361v70.915c-6.043-.636-16.536-.953-29.576-.953-41.976 0-58.194 15.9-58.194 57.241v27.667h83.618l-14.365 78.229h-69.253V509.64z"
        />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/imazineus/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill="#ffffff" />
        <path
          fill="#111111"
          d="M12.37 5.2c-3.38 0-5.59 2.26-5.59 5.19 0 1.44.55 2.72 1.72 3.2.19.08.36 0 .41-.2l.16-.65c.05-.2.03-.27-.11-.43-.31-.37-.5-.85-.5-1.53 0-1.97 1.48-3.74 3.86-3.74 2.1 0 3.26 1.28 3.26 2.99 0 2.24-.99 4.13-2.46 4.13-.81 0-1.41-.67-1.22-1.49.23-.97.67-2.01.67-2.7 0-.62-.33-1.14-1.03-1.14-.81 0-1.47.84-1.47 1.96 0 .71.24 1.19.24 1.19l-.96 4.09c-.29 1.23-.04 2.74-.02 2.89.01.09.13.11.18.04.08-.11 1.12-1.39 1.48-2.68.1-.36.59-2.28.59-2.28.29.56 1.13 1.05 2.03 1.05 2.67 0 4.48-2.43 4.48-5.68 0-2.46-2.08-4.74-5.26-4.74Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/imazine-us",
    icon: (
      <svg viewBox="0 0 123 123" aria-hidden="true">
        <path
          fill="#ffffff"
          d="M27.75 0H95.13a27.83 27.83 0 0 1 27.75 27.75V94.57a27.83 27.83 0 0 1-27.75 27.74H27.75A27.83 27.83 0 0 1 0 94.57V27.75A27.83 27.83 0 0 1 27.75 0Z"
        />
        <path
          fill="#111111"
          d="M49.19 47.41h15.53v8h.22c2.17-3.88 7.45-8 15.34-8 16.39 0 19.42 10.2 19.42 23.47v28.06H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72 6.21-9.72 12.65v25.4H49.19V47.41ZM40 31.79a8.42 8.42 0 1 1-8.42-8.42A8.43 8.43 0 0 1 40 31.79ZM23.18 47.41H40v51.53H23.18V47.41Z"
        />
      </svg>
    ),
  },
];

const companyLinks = [
  { label: "Meetups", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Security", href: "/" },
];

const footerServiceLabels = {
  1: "Brand Guidelines", 
  2: "Photo & Video", 
  3: "UI/UX Design",
  4: "Print Design",
  5: "Google Ads",
  6: "Content",
  7: "SEO",
  8: "SMM",
};

const footerCaseStudyOrder = {
  "Modern Lifestyle Jewellers": 0,
  "Kiner Kailash Jewellers": 1,
  "Glamour and Radiance": 2,
  "Vetraj Pet Hospital": 3,
  "Pandit Ji De Pranthe": 4,
};

function Footer() {
  return (
    <footer className={`${styles.footer} ${footerSans.className}`}>
      <div className={styles.shell}>
        <section className={styles.videoPanel}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/footervideo/footervideo1.mp4"type="video/mp4" />
          </video>
        </section>

        <section className={styles.dataPanel}>
          <div className={styles.brandColumn}>
            <div className={styles.logoWrap}>
              <Image
                src={footerLogo}
                alt="Imazine Us"
                className={styles.footerLogo}
                priority
              />
            </div>

            <div className={styles.socialRow}>
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.socialLink}
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <div className={styles.status}>
              <span className={styles.statusDot} />
              <span>All systems operational</span>
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Product</p>
            <ul className={styles.linkList}>
              {primaryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Services</p>
            <ul className={styles.linkList}>
              {serviceCardData.map((item) => (
                <li key={item.id}>
                  <span className={styles.linkStatic}>
                    {footerServiceLabels[item.id] ?? item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Case Studies</p>
            <ul className={styles.linkList}>
              {[...casesData]
                .sort(
                  (a, b) =>
                    (footerCaseStudyOrder[a.title] ?? 99) -
                    (footerCaseStudyOrder[b.title] ?? 99)
                )
                .map((item) => (
                <li key={item.id}>
                  <span className={styles.linkStatic}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Company</p>
            <ul className={styles.linkList}>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={styles.bottomBar}>
          <p className={styles.bottomNote}>
            (c) 2026 Imazine Us. Crafted for brands that want sharper presence and
            stronger outcomes.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
