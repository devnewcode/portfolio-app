import Image from "next/image";
import profilePic from "/public/profileimgnew1.png";
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  const skills = {
    Frontend:     ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Redux'],
    Backend:      ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
    Database:     ['MongoDB', 'Mongoose ODM', 'MySQL'],
    Tools:        ['Git', 'GitHub', 'Vercel', 'Docker', 'Postman'],
    Integrations: ['Google Gemini API', 'Gmail API', 'Payment Gateway'],
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>

          {/* Left */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Hello, I am <span className={styles.nameHighlight}>Devrath</span>
              <span className={styles.heroSub}> — Full Stack Developer</span>
            </h1>

            <p className={styles.heroDescription}>
              I build web applications — from the interface down to the database.
              I mostly work with <span className={styles.highlight}>React, Next.js, and Node.js</span>,
              and I care about writing code that is{' '}
              <span className={styles.highlight2}>clean, practical, and actually useful</span>.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/projects" className={styles.primaryBtn}>
                <span>See My Work</span>
                <span className={styles.arrow}>→</span>
              </Link>
              <a
                href="https://github.com/devnewcode"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghostBtn}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right - Profile */}
          <div className={styles.heroRight}>
            <div className={styles.profileContainer}>
              <div className={styles.profileRing}>
                <div className={styles.profileInner}>
                  <Image
                    src={profilePic}
                    alt="Profile"
                    className={styles.profileImg}
                    width={280}
                    height={280}
                  />
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
            <span className={styles.skillsTitleGradient}>Skills & Technologies</span>
          </h2>

          <div className={styles.skillsGroupGrid}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>{category}</h3>
                <div className={styles.skillList}>
                  {items.map(skill => (
                    <span key={skill} className={styles.skillItem}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaLinks}>
          <Link href="/contact" className={styles.ctaBtn}>
            Get in Touch <span className={styles.arrow}>→</span>
          </Link>
          <a
            href="https://linkedin.com/in/devrath-teotia-2b7464268"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}