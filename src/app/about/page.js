import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>
      <div className={styles.backgroundBlob3}></div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Header */}
          <div className={styles.headerSection}>
            <h1 className={styles.aboutTitle}>
              About <span className={styles.nameHighlight}>Me</span>
            </h1>
            <div className={styles.titleUnderline}></div>
            <p className={styles.headerSubtitle}>
              Full Stack Developer · Lifelong Learner · Youth Volunteer
            </p>
          </div>

          <div className={styles.contentGrid}>

            <div className={`${styles.contentCard} ${styles.introCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Introduction</h2>
              </div>
              <p className={styles.cardText}>
                Hi, I&apos;m <span className={styles.highlight}>Devrath Teotia</span> — a
                <span className={styles.highlight2}> Full Stack Developer</span> from Ghaziabad, Uttar Pradesh.
                I enjoy building web applications and figuring out how things work, from the UI down to the database.
                I&apos;m learning a lot and I like it that way.
              </p>
            </div>

            <div className={`${styles.contentCard} ${styles.educationCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Education & Skills</h2>
              </div>
              <p className={styles.cardText}>
                I completed my <span className={styles.highlight}>Bachelor&apos;s in Computer Applications</span> from IGNOU and am currently
                doing my <span className={styles.highlight2}>MCA from IMS Engineering College</span>, Ghaziabad.
              </p>
              <p className={styles.cardText}>
                On the tech side I mostly work with{' '}
                <span className={styles.highlight}>React.js, Next.js, Node.js, Express.js, and MongoDB</span>.
                I&apos;ve also worked with <span className={styles.highlight2}>Redux, Tailwind CSS, JWT, REST APIs</span>, and integrated <span className={styles.highlight3}>Google Gemini AI</span> into a project.
              </p>
              <div className={styles.skillTags}>
                {['Next.js','React.js','Node.js','Express.js','MongoDB','Tailwind CSS','Redux','JWT','Google Gemini AI','Docker','Git','Vercel'].map(tag => (
                  <span key={tag} className={styles.skillTag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className={`${styles.contentCard} ${styles.journeyCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>My Journey</h2>
              </div>
              <p className={styles.cardText}>
                These are my projects and work:
              </p>
              <div className={styles.projectsGrid}>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>IntelliQuiz</div>
                  <div className={styles.projectDesc}>AI-generated quizzes using Gemini API</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Blog Application</div>
                  <div className={styles.projectDesc}>Markdown CMS with SSR & MongoDB</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Restaurant App</div>
                  <div className={styles.projectDesc}>Menu management & cart system</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Registration System</div>
                  <div className={styles.projectDesc}>Viplava 2024 — 700+ registrations</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Event Management</div>
                  <div className={styles.projectDesc}>Admin dashboard for society events</div>
                </div>
                <div className={styles.projectItem}>
                  <div className={styles.projectName}>Shopping Cart App</div>
                  <div className={styles.projectDesc}>React + Redux e-commerce platform</div>
                </div>
              </div>
              <p className={styles.cardText}>
                Each one taught me something new - about the stack, about users, and much more.
              </p>
            </div>

            <div className={`${styles.contentCard} ${styles.volunteerCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Volunteering</h2>
              </div>
              <p className={styles.cardText}>
                I&apos;ve been actively involved with the{' '}
                <span className={styles.highlight}>ISKCON Youth Forum</span> as a volunteer. We try our best for the youth of our country,
                keeping them away from addiction and negativity, and helping them find something meaningful to be part of.
              </p>
              <p className={styles.cardText}>
                My role isn&apos;t only technical. I&apos;ve been part of event coordination, outreach, and a lot of the
                ground-level work that goes into organizing something like{' '}
                <span className={styles.highlight2}>Viplava 2024</span>. On the tech side I built the registration
                system - handling <span className={styles.highlight3}>700+ registrations</span>, payments, email
                automation, and a referral system. But the real work was the whole team coming together for something
                we genuinely believed in.
              </p>
              <p className={styles.cardText}>
                It&apos;s one of those things that reminds you why you do what you do.
              </p>
            </div>

          </div>

          <div className={styles.closingNote}>
            <p className={styles.closingText}>
              I like working on things that are well thought-out - clean code, honest communication, and not
              over-engineering something that doesn&apos;t need it. I want to keep growing, work on products
              that actually matter to people, and make sure the people around me are doing okay.
              That stuff matters too.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}