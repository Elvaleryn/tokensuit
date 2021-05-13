import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import React from 'react';
import styles from 'styles/pages/Offices.module.css';

const offices = () => {
  return (
    <div className={styles.defaultLayout}>
      <Navbar />
      <main className={styles.offices}>
        <section className={styles.officeLocations}>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Headquarters</div>
            <a
              href="http://maps.google.com/?q= Suadiye Mah.Bağdat Cad, Cemay Bey Apt. No: 393/1/22"
              target="_blank"
              rel="noreferrer"
              className={styles.locationBox}
            >
              <span>
                <img src="/location-icon.png" alt="" />
              </span>
              Suadiye Mah.
              <br />
              <span className={styles.textSpan}>Bağdat Cad, Cemay Bey</span>
              <br />
              <span className={styles.textSpan}>Apt. No: 393/1/22</span>
            </a>
          </div>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Headquarters</div>
            <a
              href="http://maps.google.com/?q= Suadiye Mah.Bağdat Cad, Cemay Bey Apt. No: 393/1/22"
              target="_blank"
              rel="noreferrer"
              className={styles.locationBox}
            >
              <span>
                <img src="/location-icon.png" alt="" />
              </span>
              Suadiye Mah.
              <br />
              <span className={styles.textSpan}>Bağdat Cad, Cemay Bey</span>
              <br />
              <span className={styles.textSpan}>Apt. No: 393/1/22</span>
            </a>
          </div>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Headquarters</div>
            <a
              href="http://maps.google.com/?q= Suadiye Mah.Bağdat Cad, Cemay Bey Apt. No: 393/1/22"
              target="_blank"
              rel="noreferrer"
              className={styles.locationBox}
            >
              <span>
                <img src="/location-icon.png" alt="" />
              </span>
              Suadiye Mah.
              <br />
              <span className={styles.textSpan}>Bağdat Cad, Cemay Bey</span>
              <br />
              <span className={styles.textSpan}>Apt. No: 393/1/22</span>
            </a>
          </div>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Headquarters</div>
            <a
              href="http://maps.google.com/?q= Suadiye Mah.Bağdat Cad, Cemay Bey Apt. No: 393/1/22"
              target="_blank"
              rel="noreferrer"
              className={styles.locationBox}
            >
              <span>
                <img src="/location-icon.png" alt="" />
              </span>
              Suadiye Mah.
              <br />
              <span className={styles.textSpan}>Bağdat Cad, Cemay Bey</span>
              <br />
              <span className={styles.textSpan}>Apt. No: 393/1/22</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default offices;
