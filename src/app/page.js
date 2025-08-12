import Image from "next/image";
import profilePic from "/public/profileimgnew1.png";
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  const skills = [
  { name: 'React.js', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Framework', level: 85 },
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'Express.js', category: 'Backend', level: 75 },
  { name: 'MongoDB', category: 'Database', level: 70 },
  { name: 'JavaScript', category: 'Language', level: 95 },
  { name: 'HTML', category: 'Markup', level: 95 },
  { name: 'CSS', category: 'Styling', level: 90 },
  { name: 'Git', category: 'Version Control', level: 80 }
];

  return (
    <div className={styles.container}>
      {/* Background Animation */}
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* Left Content */}
          <div className={styles.heroLeft}>
            {/* <div className={styles.welcomeText}> */}
              {/* <span className={styles.sparkle}>✨</span> */}
              {/* <span>Welcome to my digital space</span> */}
            {/* </div> */}
            
            <h1 className={styles.heroTitle}>
              Hello, I am <span className={styles.nameHighlight}>Devrath</span>
            </h1>
            
            <p className={styles.heroDescription}>
              Full Stack Developer passionate about creating{' '}
              <span className={styles.highlight}>seamless web solutions</span>{' '}
              using modern tech like React, MongoDB, and Next.js, focused on{' '}
              <span className={styles.highlight2}>user-centric design</span>{' '}
              and efficient backend systems.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/projects" className={styles.primaryBtn}>
                <span>See My Work</span>
                <span className={styles.arrow}>→</span>
              </Link>
              
              {/* <button className={styles.secondaryBtn}>
                Download CV
              </button> */}
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className={styles.heroRight}>
            <div className={styles.profileContainer}>
              <div className={styles.profileRing}>
                <div className={styles.profileInner}>
                  {/* Use your actual image */}
                  <Image
                    src={profilePic}
                    alt="Profile"
                    className={styles.profileImg}
                    width={280}
                    height={280}
                  />
                  {/* Or use just a letter - comment out Image above and uncomment below */}
                  {/* <div className={styles.profileLetter}>D</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            <span className={styles.skillsTitleGradient}>My Skills & Technologies</span>
          </h2>
          <p className={styles.skillsSubtitle}>
            A toolkit I use to build modern, scalable web applications
          </p>

          {/* Skills Grid */}
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillInfo}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <div>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <span className={styles.skillCategory}>{skill.category}</span>
                  </div>
                </div>
                
                <div className={styles.skillProgress}>
                  <div className={styles.skillBar} style={{ width: `${skill.level}%`}}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Icons */}
          {/* <div className={styles.techIcons}>
            <span className={styles.techIcon}>💻</span>
            <span className={styles.techIcon}>🗄️</span>
            <span className={styles.techIcon}>🌐</span>
          </div> */}
        </div>
      </section>
    </div>
  );
}