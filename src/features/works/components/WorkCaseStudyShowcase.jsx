import Image from "next/image";
import styles from "./WorkCaseStudyShowcase.module.css";

export default function WorkCaseStudyShowcase({
  leftImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
  leftAlt = "Editorial jewellery close-up",
  leftVideo,
  leftVideoFallback,
  rightImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  rightAlt = "Luxury jewellery display",
  rightVideo,
  rightVideoFallback,
}) {
  const renderMedia = (imageSrc, videoSrc, videoFallbackSrc, alt) => {
    if (videoSrc) {
      return (
        <video
          className={styles.media}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/quicktime" />
          {videoFallbackSrc ? <source src={videoFallbackSrc} type="video/mp4" /> : null}
        </video>
      );
    }

    return (
      <Image
        className={styles.media}
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Design case study</p>
        <div className={styles.grid}>
          <article className={styles.card} aria-label={leftAlt}>
            {renderMedia(leftImage, leftVideo, leftVideoFallback, leftAlt)}
          </article>

          <article className={styles.card} aria-label={rightAlt}>
            {renderMedia(rightImage, rightVideo, rightVideoFallback, rightAlt)}
          </article>
        </div>
      </div>
    </section>
  );
}
