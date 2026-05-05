import Link from "next/link";
import Image from "next/image";
import styles from "./WorkMoreProjectsSection.module.css";

const latestWorkProjects = [
  {
    href: "/works/kiner-kailash-jewellers",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Kiner Kailash Jewellers",
    title: "Kiner Kailash Jewellers",
    meta: "Branding  Website  Mobile app",
  },
  {
    href: "/works/modern-lifestyle-jewellers",
    image: "/modernlifestyle/banner2.webp",
    alt: "Modern Lifestyle Jewellers",
    title: "Modern Lifestyle Jewellers",
    meta: "Brand website  Product design",
  },
  {
    href: "/works/glamour-and-radiance",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "Glamour and Radiance",
    title: "Glamour and Radiance",
    meta: "Shopify  Branding  Content production",
  },
  {
    href: "/works/vetraj-pet-hospital",
    image: "/creativeagency/outdoorbrandingDesign.jpg.webp",
    alt: "Vetraj Pet Hospital",
    title: "Vetraj Pet Hospital",
    meta: "Branding  Ads  Offline promotions",
  },
];

function ProjectCard({ href, image, alt, title, meta }) {
  const CardInner = (
    <>
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
    </>
  );

  return (
    <article className={styles.card} tabIndex={0}>
      {href ? (
        <Link className={styles.cardLink} href={href} aria-label={`Open ${title} project`}>
          {CardInner}
        </Link>
      ) : (
        CardInner
      )}
    </article>
  );
}

export default function WorkMoreProjectsSection({
  title = "More projects",
  currentProjectHref,
  projects,
}) {
  const visibleProjects = (projects || latestWorkProjects)
    .filter((project) => project.href !== currentProjectHref)
    .slice(0, 2);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.leftPane}>
            <h2 className={styles.title}>{title}</h2>
          </div>

          <div className={styles.rightPane}>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.href || project.alt}
                href={project.href}
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
