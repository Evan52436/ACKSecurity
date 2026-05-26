"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>ACKNOWLEDGE</span>
            </div>
            <p className={styles.tagline}>
              Ethical Hacking. Proven Defense. Securing digital infrastructure 
              with technical rigor and academic excellence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="#home" className={styles.link}>Home</Link></li>
              <li><Link href="#about" className={styles.link}>About Us</Link></li>
              <li><Link href="#services" className={styles.link}>Services</Link></li>
              <li><Link href="#team" className={styles.link}>Core Team</Link></li>
              <li><Link href="#contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} ACKNOWLEDGE. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            * ACKNOWLEDGE is an unofficial school student cyber security team. 
            All audits and scans are conducted strictly within agreed scopes 
            under ethical codes.
          </p>
        </div>
      </div>
    </footer>
  );
}
