import Image from "next/image";
import styles from "./WorkMoreProjectsSection.module.css";

function ProjectCard({ image, alt, title, meta }) {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.mediaWrap}>
        <Image
          className={styles.media}
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectMeta}>{meta}</p>
      </div>
    </article>
  );
}

export default function WorkMoreProjectsSection({
  title = "More projects",
  projects = [
    {
      image:
        "https://images.unsplash.com/photo-1774110252880-4136084a83fc?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaWdwYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Luxury watch display in a store window",
      title: "Ophelos",
      meta: "Branding  Website  Mobile app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1687463221023-02f259da7d77?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaWdwYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
      alt: "Purple and blue abstract project cover",
      title: "Flat Metrics",
      meta: "Analytics Playbook  2023",
    },
  ],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.leftPane}>
            <h2 className={styles.title}>{title}</h2>
          </div>

          <div className={styles.rightPane}>
            {projects.map((project) => (
              <ProjectCard
                key={project.alt}
                image={project.image}
                alt={project.alt}
                title={project.title}
                meta={project.meta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
