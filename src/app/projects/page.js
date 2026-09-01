import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects & Work",
  description:
    "Explore full-stack web applications, AI integrations, and production systems built by Devrath Teotia.",
  alternates: {
    canonical: "https://devrathteotia.vercel.app/projects",
  },
};

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
            <p className={styles.headerSubtitle}>
              A showcase of full-stack web apps, production systems, and AI integrations
            </p>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={240}
                    className={styles.projectImg}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <div className={styles.projectArrow}>→</div>
                  </div>

                  <div className={styles.stackPreview}>
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className={styles.stackPill}>
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className={styles.stackPillMore}>
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}