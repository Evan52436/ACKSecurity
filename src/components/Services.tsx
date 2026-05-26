"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`${styles.services} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>What we focus on</h2>
          <p className={styles.subtitle}>
            We prefer manual, deep-dive reviews over generic scanner buttons. Here are the core areas we audit and help secure.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Network & Active Directory */}
          <div className={`bbCard ${styles.card}`}>
            <h3 className={styles.cardTitle}>Network & Directory Audits</h3>
            <p className={styles.cardDescription}>
              We test internal and external network perimeters, analyzing routing tables, auditing Active Directory permissions, and checking wireless infrastructure for configuration blindspots.
            </p>
            <div className={styles.tagList}>
              <span className={styles.pillTagBlue}>Active Directory</span>
              <span className={styles.pillTagBlue}>Perimeter Audits</span>
              <span className={styles.pillTagBlue}>Wi-Fi Security</span>
            </div>
          </div>

          {/* Card 2: Web Applications & APIs */}
          <div className={`bbCard ${styles.card}`}>
            <h3 className={styles.cardTitle}>Web Apps & API Logic</h3>
            <p className={styles.cardDescription}>
              We review application layers and API integrations to find logical vulnerabilities, looking for access control bypasses, session hijacking risks, and injection issues.
            </p>
            <div className={styles.tagList}>
              <span className={styles.pillTagGreen}>OWASP Top 10</span>
              <span className={styles.pillTagGreen}>API Hardening</span>
              <span className={styles.pillTagGreen}>Auth Logic</span>
            </div>
          </div>

          {/* Card 3: Linux Server Audits */}
          <div className={`bbCard ${styles.card}`}>
            <h3 className={styles.cardTitle}>Linux & Container Security</h3>
            <p className={styles.cardDescription}>
              We check local hosts and virtualized environments for privilege escalation vulnerabilities, container isolation escapes, and system service level exposure.
            </p>
            <div className={styles.tagList}>
              <span className={styles.pillTagBlue}>Docker Isolation</span>
              <span className={styles.pillTagBlue}>Kernel Hardening</span>
              <span className={styles.pillTagBlue}>Privilege Escalation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
