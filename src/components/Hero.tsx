"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const nodes: Node[] = [];
    const numNodes = Math.min(60, Math.floor((width * height) / 15000));
    
    const blueColor = "rgba(44, 62, 80, 0.4)";  
    const redColor = "rgba(194, 65, 12, 0.35)";   

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1.5,
        color: Math.random() > 0.35 ? blueColor : redColor,
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            gradient.addColorStop(0, nodes[i].color.replace(/[\d.]+\)$/, `${alpha})`));
            gradient.addColorStop(1, nodes[j].color.replace(/[\d.]+\)$/, `${alpha})`));

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (mouse.x > -1000) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x += (dx / dist) * force * 0.2;
            node.y += (dy / dist) * force * 0.2;
          }
        }

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className={`${styles.hero} sync-bg`}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Left: headline */}
          <div className={styles.leftCol}>
            <h1 className={styles.headline}>
              ACK-<br />
              NOWLEDGE<br />
              SECURITY
            </h1>
            <p className={styles.subHeadline}>
              Securing and hardening codebases, networks, operating systems with precision.
            </p>
            <div className={styles.tagGrid}>
              <span className={`${styles.tag} ${styles.tagYellow}`}>Web Security</span>
              <span className={`${styles.tag} ${styles.tagPink}`}>Network Security & Hardening</span>
              <span className={`${styles.tag} ${styles.tagMint}`}>Linux Hardening</span>
            </div>
          </div>
          {/* Right: org card */}
          <div className={styles.rightCol}>
            <div className={`bbCard ${styles.orgCard}`}>
              <div className={styles.orgHeader}>
                <div className={styles.orgAvatar}>ACK</div>
                <div className={styles.orgInfo}>
                  <div className={styles.orgName}>ACKNOWLEDGE</div>
                  <div className={styles.orgHandle}>@AcknowledgeSec</div>
                  <div className={styles.orgLocation}>📍 Indonesia</div>
                </div>
              </div>
              <p className={styles.orgDesc}>
                Security Team, Both Securing Networks, Codes, Operating Systems And Pentesting Websites, Codes, and Networks.
              </p>
              <div className={styles.orgLink}>🔗 https://ackteams.id</div>
              <div className={styles.orgStats}>
                <div className={`${styles.statBox} ${styles.statYellow}`}>
                  <div className={styles.statNum}>4</div>
                  <div className={styles.statLabel}>Projects</div>
                </div>
                <div className={`${styles.statBox} ${styles.statSky}`}>
                  <div className={styles.statNum}>3</div>
                  <div className={styles.statLabel}>Members</div>
                </div>
                <div className={`${styles.statBox} ${styles.statMint}`}>
                  <div className={styles.statNum}>0</div>
                  <div className={styles.statLabel}>Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
