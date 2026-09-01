import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.name} - Project Overview`,
    description: `${project.name}: ${project.description.slice(0, 160)}... Built with ${project.stack.join(", ")}.`,
    keywords: [...project.stack, project.name, "Devrath Teotia", "Web Project"],
    alternates: {
      canonical: `https://devrathteotia.vercel.app/projects/${project.id}`,
    },
  };
}

export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFoundSection}>
          <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>Project Not Found</h1>
            <p className={styles.notFoundText}>
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/projects" className={styles.backLink}>
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Background Blobs */}
      <div className={styles.backgroundBlob1}></div>
      <div className={styles.backgroundBlob2}></div>

      <section className={styles.projectDetailSection}>
        <div className={styles.projectContainer}>
          {/* Top Navigation */}
          <div className={styles.topNav}>
            <Link href="/projects" className={styles.backLink}>
              <span className={styles.arrowIcon}>←</span> Back to Projects
            </Link>
          </div>

          {/* Header */}
          <div className={styles.headerSection}>
            <h1 className={styles.projectTitle}>
              <span className={styles.nameHighlight}>{project.name}</span>
            </h1>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={900}
                  height={550}
                  className={styles.projectImage}
                  priority
                />
              </div>
            </div>

            {/* Action Buttons */}
            {(project.liveUrl || project.githubUrl) && (
              <div className={styles.actionsSection}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryActionBtn}
                  >
                    <span>View Live Application</span>
                    <span className={styles.btnIcon}>↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryActionBtn}
                  >
                    <span>View GitHub Code</span>
                    <span className={styles.btnIcon}>↗</span>
                  </a>
                )}
              </div>
            )}

            <div className={styles.descriptionSection}>
              <div className={styles.descriptionCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardDot}></div>
                  <h2 className={styles.cardTitle}>Project Overview</h2>
                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </div>

            {/* Key Highlights Section */}
            {project.highlights && project.highlights.length > 0 && (
              <div className={styles.highlightsSection}>
                <div className={styles.highlightsCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardDotPurple}></div>
                    <h2 className={styles.cardTitlePurple}>Key Highlights &amp; Features</h2>
                  </div>
                  <ul className={styles.highlightsList}>
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        <span className={styles.highlightBullet}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tech Stack Section */}
            <div className={styles.techSection}>
              <div className={styles.techCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardDot}></div>
                  <h2 className={styles.cardTitle}>Tech Stack</h2>
                </div>
                <div className={styles.techStack}>
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={styles.techBadge}
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}