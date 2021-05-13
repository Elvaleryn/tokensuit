import React from 'react';
import styles from 'styles/pages/Home.module.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import useTilt from 'hooks/useTilt';

export default function Home() {
  const ref = useTilt(true);

  return (
    <div className={styles.defaultLayout}>
      <Navbar />

      <main className={styles.homeContent}>
        <div
          className={styles.xImage}
          ref={ref}
          style={{
            '--offset': 1,
            '--dir': 1
          }}
        >
          <img src="/x.png" alt="" className={styles.desktopX} />
          <img src="/mobile-x-home.png" alt="" className={styles.mobileX} />
          <img
            src="/small-desktop-x.png"
            alt=""
            className={styles.smallDesktopX}
          />
        </div>

        <div className={styles.textContent}>
          <div className={styles.svgBox}>
            <svg className={styles.extraWatts}>
              <use href="/sprite.svg#extra-watts-large"></use>
            </svg>
          </div>

          <img
            src="/extra-watts-mobile.png"
            alt=""
            className={styles.extrawattsMobile}
          />
          <div className={styles.textBox}>
            <p>
              We invest in teams and ideas that take
              <br />
              blockchain adoption one step further.
            </p>
          </div>
          <div className={styles.socialLinks}>
            <svg>
              <use href="/sprite.svg#social-link"></use>
            </svg>
            <svg>
              <use href="/sprite.svg#linkedin"></use>
            </svg>
            <svg>
              <use href="/sprite.svg#twitter"></use>
            </svg>
          </div>
          <div className={styles.contactLink}>
            <a href="mailto:hello@extrawatts.com.tr">hello@extrawatts.com.tr</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
