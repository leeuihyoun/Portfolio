'use client'
import { useRef, useState } from 'react';
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

  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images.length
      );
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + project.images.length) % project.images.length
      );
    };
  
    return (
      <motion.div
        className={styles.projectCard}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.imageSlider}>
          <img src={project.images[currentImageIndex]} alt={project.name} className={styles.projectImage} />
          <button onClick={prevImage} className={`${styles.sliderButton} ${styles.prevButton}`}>&lt;</button>
          <button onClick={nextImage} className={`${styles.sliderButton} ${styles.nextButton}`}>&gt;</button>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          프로젝트 보기
        </a>
      </motion.div>
    );
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
       
        <p className={styles.aboutme}>안녕하세요 신입 웹개발자 이의현 입니다.</p>
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
        
              <div className={styles.archiving}>
                <img src='./static/skills/github.png' alt='html'/>
                <a href="https://github.com/leeuihyoun" class="css-1bmnxg7">github.com/lucas0530</a>
                <div>
                  <span className={styles.first}>
                    소스 코드 저장소
                  </span>
                  <span>입니다.</span>
                </div>
                <ul>
                  <li>
                  <span >과거 프로젝트, 프로그램, 앱의 소스 코드</span>
                  </li>
                  <li>
                  <span >라이브러리 활동 내역 등</span>
                  </li>  
                </ul>
              </div>
       
        
      </motion.section>

        <motion.section
        ref={projectRef}
        className={styles.section5}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Project</h2>
        <p>다양한 프로젝트를 진행했습니다.</p>
        <div className={styles.projectContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.section>
    </main>
  );
  

}
const projects = [
  {
    name: "traveler",
    description: "이 프로젝트는 ...",
    images: [
      "./static/imgs/메인페이지.png",
      "./static/imgs/로그인.png",
      "./static/imgs/캘린더페이지.png ",
      "./static/imgs/게시판리스트.png "
    ],
    technologies: ["Spring boot", "MySQL", "HTML","CSS","JS"],
    link: "https://github.com/leeuihyoun/traveler/tree/lee"
  },
  {
    name: "next-board",
    description: "두 번째 프로젝트는 ...",
    images: [
      "./static/imgs/next-board1.png",
      "./static/imgs/next-board2.png",
      "./static/imgs/next-board3.png "
    ],
    technologies: ["Vue.js", "Express", "MySQL"],
    link: "https://next-group-2eg9rw4vy-leeuihuns-projects.vercel.app/"
  },
  // 추가 프로젝트...
];