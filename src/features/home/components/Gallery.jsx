"use client";

import styles from "./Gallery.module.css";

const galleryItems = [
  {
    id: "archer",
    title: "Archer",
    type: "Template",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "atelier",
    title: "Atelier",
    type: "Brand Film",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "noir",
    title: "Noir",
    type: "Campaign",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "milo",
    title: "Milo",
    type: "Template",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sora",
    title: "Sora",
    type: "Lookbook",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gradient",
    title: "Animated Gradients",
    type: "Component",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sync",
    title: "JSON Sync",
    type: "Plugin",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "radio",
    title: "Digital Rotary Radio",
    type: "Component",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
];

const topRow = galleryItems.slice(0, 4);
const bottomRow = galleryItems.slice(4);

function GalleryCard({ item }) {
  return (
    <article className={styles.card}>
      <div
        className={styles.cardVisual}
        style={{ backgroundImage: `url(${item.image})` }}
        aria-hidden="true"
      />
      <div className={styles.cardMeta}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardType}>{item.type}</p>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={styles.rowViewport}>
      <div className={`${styles.rowTrack} ${reverse ? styles.rowReverse : ""}`}>
        {duplicatedItems.map((item, index) => (
          <GalleryCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MarqueeRow items={topRow} />
        <MarqueeRow items={bottomRow} reverse />
      </div>
    </section>
  );
}
