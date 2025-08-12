import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import styles from './page.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Background Blobs */}
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>
      
      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          {/* Header */}
          <div className={styles.headerSection}>
            <h1 className={styles.projectsTitle}>
              My <span className={styles.nameHighlight}>Projects</span>
            </h1>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`} 
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={200}
                    className={styles.projectImg}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <div className={styles.projectArrow}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}