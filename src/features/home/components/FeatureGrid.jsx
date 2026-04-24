import Image from 'next/image';
import styles from './FeatureGrid.module.css';

const cardData = [
  {
    id: 1,
    title: 'Presentations',
    desc: 'Turn any idea into a polished slide deck. Export to PPT, PDF, and more.',
    img: '/services/1stimage.png',
  },
  {
    id: 2,
    title: 'Social Media',
    desc: 'Generate platform-ready social content - sized, styled, and ready to post.',
    img: '/services/2ndimage.png',
  },
  {
    id: 3,
    title: 'Documents',
    desc: 'Structured, visual documents - from one-pagers to white papers - ready to share.',
    img: '/services/3rdimage.png',
  },
  {
    id: 4,
    title: 'Websites',
    desc: 'Generate a shareable, hosted website in minutes - no developers needed.',
    img: '/services/4rthimage.png',
  },
  {
    id: 5,
    title: 'API',
    desc: 'Create with Gamma programmatically. Automate creation, integrate with your tools, and scale your content.',
    img: '/services/5thimage.png',
  },
  {
    id: 6,
    title: 'Graphics',
    desc: 'Create and edit custom, on-brand graphics - from infographics to illustrations - with our AI design agent.',
    img: '/services/6thimage.png',
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
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDesc}>{card.desc}</p>
      </div>
    </article>
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Services built for modern brands</h2>
        <p className={styles.subtitle}>
          Explore the formats and systems we create to help your brand present,
          publish, and grow with clarity.
        </p>
      </div>

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
