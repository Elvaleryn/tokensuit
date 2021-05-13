import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/components/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href={'/'}>
          <svg height="2rem" width="11.5rem">
            <use
              href={
                isOpen
                  ? '/sprite.svg#navbar-brand-white'
                  : '/sprite.svg#navbar-brand'
              }
            ></use>
          </svg>
        </Link>
      </div>

      <div className={styles.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        <svg width="1.8rem" height="1.2rem">
          <use href={isOpen ? '/sprite.svg#close' : '/sprite.svg#burger'}></use>
        </svg>
      </div>

      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <Link href={'/about'}>
            <a
              className={router.pathname === '/about' ? styles.activeLink : ''}
            >
              About
            </a>
          </Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <a
            className={
              router.pathname === '/portfolio' ? styles.activeLink : ''
            }
          >
            <Link href={'/portfolio'}>Portfolio</Link>
          </a>
        </li>
        <li className={styles.navbarMenuItem}>
          <a
            className={router.pathname === '/offices' ? styles.activeLink : ''}
          >
            <Link href={'/offices'}>Offices</Link>
          </a>
        </li>
      </ul>

      <div
        className={styles.overlay}
        style={
          isOpen
            ? { width: '100%', height: '100%' }
            : { width: '0%', height: '100%' }
        }
      >
        <div className={styles.overlayContent}>
          <Link href={'/about'}>About</Link>
          <Link href={'/portfolio'}>Portfolio</Link>
          <Link href={'/offices'}>Offices</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
