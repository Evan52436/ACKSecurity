"use client";

import { useEffect, useState } from "react";
import styles from "./StatusWidget.module.css";

export default function StatusWidget() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Generate simulated ISO-style live update stamp
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toUTCString());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <div className={styles.widget}>
          {/* Status Segment 1: Global State */}
          <div className={styles.segment}>
            <div className={styles.pulseBlue}></div>
            <div className={styles.textGroup}>
              <span className={styles.label}>CORE STATUS</span>
              <span className={styles.value}>READY / OPERATIONAL</span>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Status Segment 2: Active Engagements */}
          <div className={styles.segment}>
            <div className={styles.pulseRed}></div>
            <div className={styles.textGroup}>
              <span className={styles.label}>ACTIVE AUDITS</span>
              <span className={`${styles.value} ${styles.redText}`}>
                2 Engagements (Web & Network)
              </span>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Status Segment 3: Response Metric */}
          <div className={styles.segment}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="var(--accent-blue)" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className={styles.textGroup}>
              <span className={styles.label}>EST. INTAKE RESPONSE</span>
              <span className={styles.value}>&lt; 12 Hours</span>
            </div>
          </div>

          <div className={styles.divider + " " + styles.desktopOnly}></div>

          {/* Status Segment 4: System Timestamp (Desktop only) */}
          <div className={`${styles.segment} ${styles.desktopOnly}`}>
            <div className={styles.textGroup}>
              <span className={styles.label}>LAST SYNC</span>
              <span className={styles.timestamp}>{timestamp || "SYNCING..."}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
