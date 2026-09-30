import Image from "next/image";
import profilePic from "/public/profileimgnew1.png";
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  const skills = {
    Frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Redux'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
    Database: ['MongoDB', 'Mongoose ODM', 'MySQL'],
    Tools: ['Git', 'GitHub', 'Vercel', 'Docker', 'Postman'],
    Integrations: ['Google Gemini API', 'Gmail API', 'Payment Gateway'],
  };

  const howIWork = [
    {
      title: 'End-to-End Product Engineering',
      desc: 'From user interfaces to database architecture, I build complete, production-ready web apps using React, Next.js, and Node.js with a focus on clean architecture and reliability.',
      tags: ['React / Next.js', 'Node.js', 'System Architecture', 'Deployed & Live'],
    },
    {
      title: 'Solving Operational Bottlenecks',
      desc: 'I design software around real-world friction—like engineering automated lead distribution and check-in desks that reduced manual coordination effort by 70%.',
      tags: ['Process Optimization', '700+ Users', 'Data Integrity', 'Measurable Impact'],
    },
    {
      title: 'Cross-Functional Team Coordination',
      desc: 'Experienced in bridging technical contributors and volunteer teams across events and projects—managing requirements, timelines, and live execution.',
      tags: ['Cross-Functional', 'Team Coordination', 'Stakeholder Alignment', 'Execution'],
    },
  ];

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
            </h1>

            <p className={styles.heroDescription}>
              I build web applications with a strong focus on{' '}
              <span className={styles.highlight}>product thinking, clean architecture, and practical impact</span>.
              With a background spanning <span className={styles.highlight}>full-stack engineering (React, Next.js, Node.js)</span> and{' '}
              <span className={styles.highlight2}>cross-functional team coordination</span>,
              I enjoy taking projects from initial requirements all the way to deployed systems that solve real operational bottlenecks.
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
              <a href="https://drive.google.com/file/d/11iZrAyo01jFN8ZDGvOc_T0xZct-hw3MA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghostBtn}
              >
                View Resume
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
                    alt="Devrath Teotia - Full Stack Developer"
                    className={styles.profileImg}
                    width={280}
                    height={280}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className={styles.howSection}>
        <div className={styles.howContainer}>

          <div className={styles.howHeader}>
            <span className={styles.howEyebrow}>Builder · Problem Solver · Team Coordinator</span>
            <h2 className={styles.howTitle}>
              <span className={styles.skillsTitleGradient}>How I Work</span>
            </h2>
          </div>

          <div className={styles.howGrid}>
            {howIWork.map((item) => (
              <div key={item.title} className={styles.howCard}>
                <h3 className={styles.howCardTitle}>{item.title}</h3>
                <p className={styles.howCardDesc}>{item.desc}</p>
                <div className={styles.howTags}>
                  {item.tags.map(tag => (
                    <span key={tag} className={styles.howTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Bar */}
          <div className={styles.impactBar}>
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>2000+</span>
              <span className={styles.impactLabel}>users served</span>
            </div>
            <div className={styles.impactDivider} />
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>80%</span>
              <span className={styles.impactLabel}>manual effort saved</span>
            </div>
            <div className={styles.impactDivider} />
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>5+</span>
              <span className={styles.impactLabel}>live systems shipped</span>
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