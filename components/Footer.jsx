import React from 'react';
import styles from 'styles/components/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.svgGroup}>
        <svg width="5.6rem" height="1.8rem">
          <use href="/sprite.svg#kriptopara"></use>
        </svg>
        <svg width="4.1rem" height="2.5rem">
          <use href="/sprite.svg#kiwi-mobility"></use>
        </svg>
        <svg width="2.7rem" height="1.8rem">
          <use href="/sprite.svg#token-suite"></use>
        </svg>
      </div>
      <div className="footer-brand">©Extra Watts Groups 2021</div>
    </footer>
  );
};

export default Footer;
