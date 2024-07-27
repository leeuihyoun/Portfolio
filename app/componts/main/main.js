'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './main.module.css'

export default function Mainhome() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const archivingRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      
      <header className={styles.header}>
        <div className={styles.headerbox}>
        <h2>이의현 Portfolio</h2>
        <nav>
          <ul className={styles.navList}>
             
            <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skill</li>
            <li onClick={() => scrollToSection(archivingRef)}>Archiving</li>
            <li onClick={() => scrollToSection(projectRef)}>Project</li>
          </ul>
        </nav>
        </div>
        
      </header>

      <motion.section
        ref={introRef}
        className={styles.section1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    
      >
       
        <p className={styles.aboutme}>안녕하세요 신입웹 개발자 이의현 입니다.</p>
      </motion.section>

      <motion.section
        ref={aboutRef}
        className={styles.section}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
>
      <div className={styles.titleContainer}>
      <h2>About Me</h2>
      <div className={styles.aboutContainer}>
      <div className={styles.aboutmeBox}>
        <span className={styles.aboutTitle}>이름</span>
        <span className={styles.aboutText}>이의현</span>
      </div>
      <div className={styles.aboutmeBox}>
        <span className={styles.aboutTitle}>생년월일</span>
        <span className={styles.aboutText}>2001.11.14</span>
      </div>
      <div className={styles.aboutmeBox}>
        <span className={styles.aboutTitle}>연락처</span>
        <span className={styles.aboutText}>010-6788-4899</span>
        <span className={styles.aboutText}>dasuu3@naver.com</span>
      </div>
      </div>
     
      </div>
  
</motion.section>

      <motion.section
        ref={skillsRef}
        className={styles.section}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Skill</h2>
        <p>JavaScript, React, Next.js, Node.js, 기타 여러 기술을 사용합니다.</p>
      </motion.section>

      <motion.section
        ref={archivingRef}
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Archiving</h2>
        <p>GitHub, 블로그 등을 통해 작업을 아카이빙합니다.</p>
      </motion.section>

      <motion.section
        ref={projectRef}
        className={styles.section}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Project</h2>
        <p>다양한 프로젝트를 진행했습니다.</p>
      </motion.section>
    </main>
  );
}