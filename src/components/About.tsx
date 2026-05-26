"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Text & Content */}
          <div className={styles.content}>
            <div className={styles.headerGroup}>
              <h2 className={styles.header}>Our story and mission</h2>
            </div>
            
            <p className={styles.description}>
              ACKNOWLEDGE Cyber Security team,
              formed by students passionate about defensive engineering, cryptography, 
              and ethical hacking. Over time, we have honed our skills through national 
              CTF competitions, code audits, and simulated network intrusions.
            </p>

            <p className={styles.description}>
              We believe that the best defense requires a deep, hands-on understanding 
              of offensive techniques. Driven by our <strong>three core specialists</strong>, 
              we scale to our <strong>five-person full team</strong> to tackle complex security audits, 
              network pentests, and source code reviews for academic and small business infrastructures.
            </p>

            <div className={styles.principles}>
              <div className={styles.principleItem}>
                <svg className={styles.principleIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>Ethical Integrity:</strong> Strictly documented scope and complete compliance.</span>
              </div>
              <div className={styles.principleItem}>
                <svg className={styles.principleIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>Agile Execution:</strong> Fast response, custom scripts, and zero administrative bloat.</span>
              </div>
              <div className={styles.principleItem}>
                <svg className={styles.principleIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>Academic Rigor:</strong> Backed by continuous study of the latest CVEs and zero-days.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Infographic Card */}
          <div className={styles.visualContainer}>
            <div className={`${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.terminalDot}></span>
                <span className={styles.terminalDot}></span>
                <span className={styles.terminalDot}></span>
                <span className={styles.cardTitle}>system_spec.log</span>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.logLine}><span className={styles.logLabel}>[IDENTITY]</span> Acknowledge (Unofficial Academic)</div>
                <div className={styles.logLine}><span className={styles.logLabel}>[CORE_SIZE]</span> 3 Specialists (Lead, Network, Web)</div>
                <div className={styles.logLine}><span className={styles.logLabel}>[TOTAL_SIZE]</span> 5 Members (inc. Threat Intel, Incident response)</div>
                <div className={styles.logLine}><span className={styles.logLabel}>[MINDSET]</span> 100% Ethical / White-Hat</div>
                
                <div className={styles.graphicBox}>
                  <svg width="100%" height="120" viewBox="0 0 200 120" className={styles.svgGraphic}>
                    <line x1="40" y1="60" x2="100" y2="30" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="40" y1="60" x2="100" y2="90" stroke="var(--accent-blue)" strokeWidth="1.5" />
                    <line x1="100" y1="30" x2="160" y2="60" stroke="var(--accent-blue)" strokeWidth="1.5" />
                    <line x1="100" y1="90" x2="160" y2="60" stroke="var(--accent-red)" strokeWidth="2" />
                    <line x1="40" y1="60" x2="160" y2="60" stroke="var(--accent-blue-border)" strokeWidth="1" />
                    
                    <circle cx="40" cy="60" r="8" fill="var(--accent-blue)" />
                    <circle cx="100" cy="30" r="6" fill="var(--accent-blue)" />
                    <circle cx="100" cy="90" r="6" fill="var(--accent-blue)" />
                    <circle cx="160" cy="60" r="10" fill="var(--accent-red)" />
                    
                    <text x="40" y="45" fill="var(--text-dark)" fontSize="8" textAnchor="middle" fontWeight="bold">SOURCE</text>
                    <text x="100" y="18" fill="var(--text-dark)" fontSize="8" textAnchor="middle">PROXY</text>
                    <text x="100" y="105" fill="var(--text-dark)" fontSize="8" textAnchor="middle">FIREWALL</text>
                    <text x="160" y="80" fill="var(--accent-red)" fontSize="8" textAnchor="middle" fontWeight="bold">TARGET SECURED</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
