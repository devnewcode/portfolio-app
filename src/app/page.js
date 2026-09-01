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
      icon: '💻',
      title: 'I Build Full Stack Products',
      desc: 'From UI to database — I build complete, production-ready web apps using React, Next.js, and Node.js. My projects are live, used by real people, and built with clean architecture in mind.',
      tags: ['React / Next.js', 'Node.js', 'AI Integration', 'Deployed & live'],
    },
    {
      icon: '🛠️',
      title: 'I Solve Real Problems',
      desc: 'Built a Registration Management System for Iskcon Youth Forum serving 700+ users with 99% uptime — automating workflows that cut manual effort by 70%. Real stakes, not a side project.',
      tags: ['700+ users', 'Production system', 'Volunteer'],
    },
    {
      icon: '👥',
      title: 'I Lead Tech & Non-Tech Teams',
      desc: 'Coordinated multiple events at Iskcon Youth Forum and IMS Engineering College — managing tech teams, non-tech volunteers, logistics, and real-time execution. I speak both languages fluently.',
      tags: ['Cross-functional', 'Event coordination', '2+ years'],
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
              <span className={styles.heroSub}> — Developer who Builds & Leads</span>
            </h1>

            <p className={styles.heroDescription}>
              I build web applications — from the interface down to the database.
              I mostly work with <span className={styles.highlight}>React, Next.js, and Node.js</span>,
              and I care about writing code that is{' '}
              <span className={styles.highlight2}>clean, practical, and actually useful</span>.
              I also lead and coordinate tech and non-tech teams to ship things that matter.
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
            <span className={styles.howEyebrow}>Developer · Builder · Coordinator</span>
            <h2 className={styles.howTitle}>
              <span className={styles.skillsTitleGradient}>How I Work</span>
            </h2>
          </div>

          <div className={styles.howGrid}>
            {howIWork.map((item) => (
              <div key={item.title} className={styles.howCard}>
                <div className={styles.howCardIcon}>{item.icon}</div>
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
              <span className={styles.impactNum}>1500+</span>
              <span className={styles.impactLabel}>users served</span>
            </div>
            <div className={styles.impactDivider} />
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>70%</span>
              <span className={styles.impactLabel}>manual effort saved</span>
            </div>
            <div className={styles.impactDivider} />
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>5+</span>
              <span className={styles.impactLabel}>live projects shipped</span>
            </div>
            <div className={styles.impactDivider} />
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>Both</span>
              <span className={styles.impactLabel}>tech &amp; non-tech teams</span>
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