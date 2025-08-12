import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Background Blobs */}
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>
      
      <div className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Header */}
          <div className={styles.headerSection}>
            <h1 className={styles.aboutTitle}>
              About <span className={styles.nameHighlight}>Me</span>
            </h1>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Content Cards */}
          <div className={styles.contentGrid}>
            {/* Introduction Card */}
            <div className={`${styles.contentCard} ${styles.introCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Introduction</h2>
              </div>
              <p className={styles.cardText}>
                Hi, I&apos;m <span className={styles.highlight}>Devrath Teotia</span>, a passionate and detail-oriented 
                <span className={styles.highlight2}> Full Stack Developer</span>. With a strong foundation in computer applications 
                and a keen interest in modern web technologies, I specialize in developing scalable, responsive, and user-friendly web applications.
              </p>
            </div>

            {/* Education Card */}
            <div className={`${styles.contentCard} ${styles.educationCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Education & Experience</h2>
              </div>
              <p className={styles.cardText}>
                I hold a <span className={styles.highlight}>Bachelor&apos;s degree in Computer Applications</span> and am currently pursuing my 
                <span className={styles.highlight2}> Master&apos;s in Computer Applications</span> from IMS Engineering College.
              </p>
              <p className={styles.cardText}>
                Over the past few years, I&apos;ve gained hands-on experience building real-world projects using 
                <span className={styles.highlight}> React.js, Node.js, Express.js, MongoDB, and Next.js</span>, 
                while continuously improving my understanding of both frontend and backend systems.
              </p>
            </div>

            {/* Journey Card */}
            <div className={`${styles.contentCard} ${styles.journeyCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>My Journey</h2>
              </div>
              <p className={styles.cardText}>
                My journey in development began with a strong curiosity about how digital systems work. I&apos;ve worked on impactful projects including:
              </p>
              <div className={styles.projectsGrid}>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Registration Management System</div>
                  <div className={styles.projectDesc}>for Viplava 2024</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Restaurant Management App</div>
                  <div className={styles.projectDesc}>Full-stack solution</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>E-commerce Platform</div>
                  <div className={styles.projectDesc}>Shopping Cart System</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Event Management</div>
                  <div className={styles.projectDesc}>Admin Dashboard</div>
                </div>
              </div>
              <p className={styles.cardText}>
                These projects allowed me to enhance user experience, automate processes, and optimize performance, 
                all while collaborating with teams and handling real-time challenges.
              </p>
            </div>

            {/* Values Card */}
            <div className={`${styles.contentCard} ${styles.valuesCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Values & Goals</h2>
              </div>
              <p className={styles.cardText}>
                Beyond the code, I value <span className={styles.highlight}>clear communication</span>, 
                <span className={styles.highlight2}> adaptability</span>, and 
                <span className={styles.highlight3}> analytical thinking</span>. 
                I enjoy solving complex problems and transforming ideas into robust solutions that provide value to users.
              </p>
              <p className={styles.cardText}>
                Whether I&apos;m designing intuitive UIs or building efficient backend systems, my goal is always the same: 
                to create applications that are both <span className={styles.highlight}>functional</span> and 
                <span className={styles.highlight2}> enjoyable to use</span>.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>
              <span>Let&apos;s Build Something Amazing</span>
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}