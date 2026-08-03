"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./VideoShowcase.module.css";

const videos = [
  {
    id: "waterfall-forest",
    url: "https://assets.mixkit.co/videos/2213/2213-360.mp4",
  },
  {
    id: "mountain-highway",
    url: "https://assets.mixkit.co/videos/41576/41576-360.mp4",
  },
  {
    id: "countryside-meadow",
    url: "https://assets.mixkit.co/videos/4075/4075-360.mp4",
  },
  {
    id: "green-mountains",
    url: "https://assets.mixkit.co/active_storage/video_items/100415/1724198576/100415-video-360.mp4",
  },
  {
    id: "highway-bridge",
    url: "https://assets.mixkit.co/active_storage/video_items/100223/1721860447/100223-video-360.mp4",
  },
  {
    id: "rocky-coast",
    url: "https://assets.mixkit.co/videos/51502/51502-360.mp4",
  },
  {
    id: "waterfall-rocks",
    url: "https://assets.mixkit.co/active_storage/video_items/100195/1721338072/100195-video-360.mp4",
  },
  {
    id: "sunset-beach",
    url: "https://assets.mixkit.co/videos/51445/51445-360.mp4",
  },
];

function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = (video) => {
    setActiveVideo(video);
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Moments</h2>
        <p className={styles.subtitle}>Curated visuals to set the mood.</p>
      </div>

      <div className={styles.grid}>
        {videos.map((video) => (
          <button
            className={styles.videoCard}
            key={video.id}
            type="button"
            aria-label="Play video"
            onClick={() => openModal(video)}
          >
            <video
              className={styles.video}
              src={video.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <span className={styles.playIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {activeVideo && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              aria-label="Close video"
              onClick={closeModal}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <video
              ref={modalVideoRef}
              className={styles.modalVideo}
              src={activeVideo.url}
              controls
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoShowcase;