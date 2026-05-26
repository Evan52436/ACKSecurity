"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo Branding */}
        <Link href="#home" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoText}>ACKNOWLEDGE</span>
        </Link>

        {/* Right side navigation group (Desktop only) */}
        <div className={styles.rightNavGroup}>
          {/* Navigation Links (Desktop) */}
          <nav className={styles.desktopNav}>
            <Link href="#home" className={`${styles.navLink} ${styles.blueHover}`}>Home</Link>
            <Link href="#team" className={`${styles.navLink} ${styles.redHover}`}>Team</Link>
            <Link href="#about" className={`${styles.navLink} ${styles.blueHover}`}>About</Link>
            <Link href="#services" className={`${styles.navLink} ${styles.redHover}`}>Services</Link>
            <Link href="#contact" className={`${styles.navLink} ${styles.blueHover}`}>Contact</Link>
          </nav>

          {/* Action Button (Desktop) */}
          <div className={styles.actionContainer}>
            <Link href="#contact" className={styles.ctaBtn}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}>
        <nav className={styles.mobileLinks}>
          <Link href="#home" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</Link>
          <Link href="#team" className={styles.mobileNavLink} onClick={closeMobileMenu}>Team</Link>
          <Link href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</Link>
          <Link href="#services" className={styles.mobileNavLink} onClick={closeMobileMenu}>Services</Link>
          <Link href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</Link>
          <Link href="#contact" className={styles.mobileCtaBtn} onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
