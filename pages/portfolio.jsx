import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import styles from 'styles/pages/Portfolio.module.css';

const portfolio = () => {
  return (
    <div className={styles.defaultLayout}>
      <div className={styles.xImage}>
        <img src="/x.png" alt="" className={styles.desktopX} />
      </div>
      <Navbar />
      <main className={styles.portfolio}>
        <section className={styles.incubator}>
          <h3 className={styles.title}>Incubator</h3>
          <div className={styles.logoGrid}>
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
          </div>
        </section>
        <section className={styles.strategic}>
          <h3 className={styles.title}>Strategic</h3>
          <div className={styles.logoGrid}>
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
            <img src="/bitconomy.png" alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default portfolio;
