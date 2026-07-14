"use client";

import Image from "next/image";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.storySplit}>

          {/* Left - Text */}
          <div className={styles.storyLeft}>
            <h2>Our Story</h2>
            <p>
              We started this agency because we saw too many businesses wasting money on ads that do not work. 
              Back in 2019, we were just a small team with one laptop and a big dream.
            </p>
            <p>
              Today, we are a team of 25 people who love what we do. We do not just run ads. 
              We build strategies that actually make sense for your business.
            </p>
          </div>

          {/* Right - Phone Mock + Info Card */}
          <div className={styles.storyRight}>
            <div className={styles.phoneMock}>
              <div className={styles.phoneHeader}>
                <span>9:41</span>
                <span>Imazine Dashboard</span>
                <span>100%</span>
              </div>
              <div className={styles.phoneBody}>
                <div className={styles.balanceCard}>
                  <div className={styles.bcLabel}>Total Ad Spend</div>
                  <div className={styles.bcAmount}>Rs.4.2L</div>
                  <div className={styles.bcNum}>ROI: 340%</div>
                </div>
                <div className={styles.txList}>
                  <div className={styles.txItem}>
                    <div className={styles.txLeft}>
                      <div className={styles.txIcon} style={{background:"#dbeafe"}}>📊</div>
                      <div>
                        <div className={styles.txName}>Google Ads</div>
                        <div className={styles.txTime}>Running, 12 days</div>
                      </div>
                    </div>
                    <div className={`${styles.txAmt} ${styles.pos}`}>+Rs.85K</div>
                  </div>
                  <div className={styles.txItem}>
                    <div className={styles.txLeft}>
                      <div className={styles.txIcon} style={{background:"#fce7f3"}}>📱</div>
                      <div>
                        <div className={styles.txName}>Meta Ads</div>
                        <div className={styles.txTime}>Running, 8 days</div>
                      </div>
                    </div>
                    <div className={`${styles.txAmt} ${styles.pos}`}>+Rs.62K</div>
                  </div>
                  <div className={styles.txItem}>
                    <div className={styles.txLeft}>
                      <div className={styles.txIcon} style={{background:"#dcfce7"}}>🔍</div>
                      <div>
                        <div className={styles.txName}>SEO Campaign</div>
                        <div className={styles.txTime}>Month 3</div>
                      </div>
                    </div>
                    <div className={`${styles.txAmt} ${styles.pos}`}>+Rs.48K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className={styles.infoCard}>
              <div className={styles.icAvatars}>
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" alt="Client" width={36} height={36} className={styles.icAvatar} />
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" alt="Client" width={36} height={36} className={styles.icAvatar} />
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" alt="Client" width={36} height={36} className={styles.icAvatar} />
                <div className={styles.icMore}>+</div>
              </div>
              <h4>180+</h4>
              <div className={styles.icLabel}>Happy Clients</div>
              <p>Businesses trust us to grow their online presence and bring real customers through their doors.</p>
              <button className={styles.btnSm}>About Us</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}