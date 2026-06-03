"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Team.module.css";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  tag: string;
  tagStyle: "blue" | "red" | "purple";
  github: string;
}

const coreMembers: TeamMember[] = [
  {
    name: "rasyakeselekbatuginjal-lang",
    title: "Web Exploitation // Attack",
    image: "/images/placeholder.svg",
    tag: "Web",
    tagStyle: "red",
    github: "https://github.com/rasyakeselekbatuginjal-lang",
  },
  {
    name: "chargerleptop",
    title: "Network and Linux // Defense",
    image: "/images/placeholder.svg",
    tag: "Network & Linux",
    tagStyle: "blue",
    github: "https://github.com/Evan52436",
  },
  {
    name: "Rynza ",
    title: "Linux // Defend",
    image: "/images/placeholder.svg",
    tag: "DEVOPS",
    tagStyle: "purple",
    github: "https://github.com/Rhanfahreza",
  },
];

interface GitHubProfile {
  name: string;
  avatar_url: string;
}

export default function Team() {
  const [profiles, setProfiles] = useState<Record<string, GitHubProfile>>({});

  useEffect(() => {
    const fetchProfiles = async () => {
      const newProfiles: Record<string, GitHubProfile> = {};
      await Promise.all(
        coreMembers.map(async (member) => {
          const username = member.github.replace(/\/$/, "").split("/").pop() || "";
          if (!username) return;
          try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (res.ok) {
              const data = await res.json();
              newProfiles[member.github] = {
                name: data.name || data.login,
                avatar_url: data.avatar_url,
              };
            }
          } catch (error) {
            console.error(`Error fetching profile for ${username}:`, error);
          }
        })
      );
      setProfiles(newProfiles);
    };

    fetchProfiles();
  }, []);

  return (
    <section id="team" className={`${styles.team} sync-bg`}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Members</h2>
          <span className={styles.countTag}>{coreMembers.length}</span>
        </div>

        <div className={styles.grid}>
          {coreMembers.map((member, index) => {
            const displayName = profiles[member.github]?.name || member.name;
            const avatarSrc = profiles[member.github]?.avatar_url || member.image;

            return (
              <div key={index} className={`bbCard ${styles.card}`}>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block" }}
                >
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={avatarSrc}
                      alt={displayName}
                      fill
                      sizes="96px"
                      className={styles.avatar}
                      unoptimized={!!profiles[member.github]?.avatar_url}
                    />
                  </div>
                </a>
                <div className={styles.name}>{displayName}</div>
                <div className={`${styles.tag} ${member.tagStyle === "red" ? styles.tagRed :
                    member.tagStyle === "blue" ? styles.tagBlue :
                      styles.tagPurple
                  }`}>
                  {member.title}
                </div>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileBtn}
                >
                  GitHub Profile →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
