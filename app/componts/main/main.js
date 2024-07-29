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
        className={styles.skillContainer}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.skillBox}>

          <div className={styles.skillTitle}><h2>Skill</h2></div>
          <div className={styles.skillBody}>
            <div className={styles.skill}>
              <p>FrontEnd</p>
              <div className={styles.firstline}>
              <div className={styles.skillImg}>
                <img src='./static/skills/html5.png' alt='html'/>
              </div>
              <div className={styles.skillImg}>
                <img src='./static/skills/css.png' alt='html'/>
              </div>
              <div className={styles.skillImg}>
                <img src='./static/skills/js.png' alt='html'/>
              </div>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/react.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/next.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/jquery.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/redux.png' alt='html'/>
              </div>
            </div>

            <div className={styles.skill}>
              <p>Backend</p>
              
              <div className={styles.skillImg}>
                <img src='./static/skills/java.png' alt='html'/>
              </div>
            
              <div className={styles.skillBigImg}>
                <img src='./static/skills/spring.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/springboot.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/mongo.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/oracle.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/mysql.png' alt='html'/>
              </div>
         
            </div>
            <div className={styles.skill}>
              <p>Community</p>
              
              <div className={styles.skillBigImg}>
                <img src='./static/skills/github.png' alt='html'/>
              </div>
              <div className={styles.skillBigImg}>
                <img src='./static/skills/figma.png' alt='html'/>
              </div>
            
          
              
            </div>

          </div>
        </div>
        
      </motion.section>

      <motion.section
        ref={archivingRef}
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Archiving</h2>
        
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