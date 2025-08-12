import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Background Blobs */}
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>
      
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Header */}
          <div className={styles.headerSection}>
            <h1 className={styles.contactTitle}>
              Contact <span className={styles.nameHighlight}>Me</span>
            </h1>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Contact Content */}
          <div className={styles.contactContent}>
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDot}></div>
                <h2 className={styles.cardTitle}>Let&apos;s Connect</h2>
              </div>
              
              <p className={styles.contactText}>
                I am always open to opportunities, collaborations, or simply having a conversation
                about tech and development. If you&apos;d like to reach out, feel free to email me at:
              </p>
              
              <div className={styles.emailSection}>
                <p className={styles.emailText}>
                  devrathteotia2001@gmail.com
                </p>
                <button className={styles.copyButton}>
                  <span>Copy Email</span>
                </button>
              </div>
              
              <p className={styles.responseText}>
                I will try my best to get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}