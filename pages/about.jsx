import React from 'react';
import Navbar from 'components/Navbar';
import styles from 'styles/pages/About.module.css';
import Footer from 'components/Footer';
const about = () => {
  return (
    <div className={styles.defaultLayout}>
      <div className={styles.xImage}>
        <img src="/x.png" alt="" className={styles.desktopX} />
        {/*    <img src="/mobile-x-home.png" alt="" className={styles.mobileX} />
          <img
            src="/small-desktop-x.png"
            alt=""
            className={styles.smallDesktopX}
          /> */}
      </div>
      <Navbar />
      <main className="about">
        <section className={styles.aboutContent}>
          <div className={styles.primaryText}>
            Extra Watts invests <br /> exclusively in blockchain and <br />
            cryptocurrency, with a focus <br /> on decentralized finance.
          </div>
          <p className={styles.textContent}>
            We have been deeply entrenched in the crypto markets
            <br /> since early 2017, and invest in liquid cryptocurrencies on
            the
            <br /> secondary market as well as early stage funding rounds.
            <br /> <br /> We aim to be powerusers of the project we invest in,
            and
            <br />
            help projects with bootstrapping liquidity, token economics, <br />
            market making, marketing, and connecting founders with
            <br /> our vast network.
          </p>
          <div className={styles.avatarContent}>
            <img src="/Ali-Horzum.jpg" alt="" className={styles.avatar} />
            <span className={styles.title}>Ali Omer Horzum</span> <br />
            <span className={styles.subtitle}>Founder / CEO</span>
            <p className={styles.textContent}>
              We have been deeply entrenched in the <br /> crypto markets since
              early 2017, and invest <br /> in liquid cryptocurrencies on the
              secondary <br /> market as well as early stage funding <br />
              rounds.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default about;
