import Image from 'next/image';
import styles from './FeatureGrid.module.css';

const cardData = [
  {
    id: 1,
    title: 'Presentations',
    desc: 'Turn any idea into a polished slide deck. Export to PPT, PDF, and more.',
    img: '/images/presentations.png',
  },
  {
    id: 2,
    title: 'Social Media',
    desc: 'Generate platform-ready social content - sized, styled, and ready to post.',
    img: '/images/social.png',
  },
  {
    id: 3,
    title: 'Documents',
    desc: 'Structured, visual documents - from one-pagers to white papers - ready to share.',
    img: '/images/documents.png',
  },
  {
    id: 4,
    title: 'Websites',
    desc: 'Generate a shareable, hosted website in minutes - no developers needed.',
    img: '/images/websites.png',
  },
  {
    id: 5,
    title: 'API',
    desc: 'Create with Gamma programmatically. Automate creation, integrate with your tools, and scale your content.',
    img: '/images/api.png',
  },
  {
    id: 6,
    title: 'Graphics',
    desc: 'Create and edit custom, on-brand graphics - from infographics to illustrations - with our AI design agent.',
    img: '/images/graphics.png',
  },
];

const leftColumnCards = [cardData[0], cardData[2], cardData[4]];
const rightColumnCards = [cardData[1], cardData[3], cardData[5]];

export default function FeatureGrid() {
  const renderCard = (card) => (
    <article
      key={card.id}
      className={`${styles.card} ${styles[`card${card.id}`]}`}
    >
      <div className={styles.imageWrap}>
        <div className={styles.imageStage}>
          <Image
            src={card.img}
            alt={card.title}
            width={220}
            height={170}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.desc}>{card.desc}</p>
      </div>
    </article>
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.gridDesktop}>
        <div className={styles.column}>
          {leftColumnCards.map(renderCard)}
        </div>

        <div className={styles.column}>
          {rightColumnCards.map(renderCard)}
        </div>
      </div>

      <div className={styles.gridMobile}>
        {cardData.map(renderCard)}
      </div>
    </section>
  );
}
