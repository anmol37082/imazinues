import Image from "next/image";
import styles from "./WorkGalleryShowcase.module.css";

const VIDEO_EXTENSIONS = [".webm", ".mp4", ".mov"];

const isVideoSource = (src = "") =>
  VIDEO_EXTENSIONS.some((extension) => src.toLowerCase().endsWith(extension));

const getVideoType = (src = "") => {
  if (src.toLowerCase().endsWith(".webm")) return "video/webm";
  if (src.toLowerCase().endsWith(".mp4")) return "video/mp4";
  if (src.toLowerCase().endsWith(".mov")) return "video/quicktime";
  return undefined;
};

export default function WorkGalleryShowcase({
  firstBannerImage = "https://images.unsplash.com/photo-1774110073583-2475ab5ed8b2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  firstBannerAlt = "Luxury jewelry display",
  firstRow = [
    {
      src: "https://images.unsplash.com/photo-1687463221023-02f259da7d77?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Blue abstract wave background",
    },
    {
      src: "https://images.unsplash.com/photo-1668718003065-9e776554620c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Pearl jewelry close-up",
    },
  ],
  secondBannerImage = "https://images.unsplash.com/photo-1774110252880-4136084a83fc?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  secondBannerAlt = "Luxury watches in store window",
  cards = [
    {
      src: "https://images.unsplash.com/photo-1750048749152-dc78dec2de78?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Blue abstract image",
    },
    {
      src: "https://images.unsplash.com/photo-1763564544092-cd6eaeb01018?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Luxury watch display",
    },
    {
      src: "https://images.unsplash.com/photo-1774110073583-2475ab5ed8b2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Luxury jewelry display",
    },
    {
      src: "https://images.unsplash.com/photo-1687463221023-02f259da7d77?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Blue abstract wave background",
    },
  ],
}) {
  const renderMedia = (src, alt, { priority = false, sizes } = {}) => {
    if (isVideoSource(src)) {
      return (
        <video
          className={styles.media}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
        >
          <source src={src} type={getVideoType(src)} />
        </video>
      );
    }

    return (
      <Image
        className={styles.media}
        src={src}
        alt={alt}
        fill
        quality={92}
        priority={priority}
        sizes={sizes}
      />
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.banner}>
          {renderMedia(firstBannerImage, firstBannerAlt, {
            priority: true,
            sizes: "(max-width: 768px) 100vw, 1480px",
          })}
        </div>

        <div className={styles.gridTwo}>
          {firstRow.map((item) => (
            <div className={styles.card} key={item.alt}>
              {renderMedia(item.src, item.alt, {
                sizes: "(max-width: 768px) 100vw, 50vw",
              })}
            </div>
          ))}
        </div>

        <div className={styles.banner}>
          {renderMedia(secondBannerImage, secondBannerAlt, {
            sizes: "(max-width: 768px) 100vw, 1480px",
          })}
        </div>

        <div className={styles.gridSix}>
          {cards.map((item) => (
            <div className={styles.card} key={item.alt}>
              {renderMedia(item.src, item.alt, {
                sizes: "(max-width: 768px) 100vw, 50vw",
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
