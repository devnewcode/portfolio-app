import projects from "@/data/projects.json";
import Image from "next/image";
import styles from './page.module.css';

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
                    {/* Header */}
                    <div className={styles.headerSection}>
                        <h1 className={styles.projectTitle}>
                            <span className={styles.nameHighlight}>{project.name}</span>
                        </h1>
                        <div className={styles.titleUnderline}></div>
                    </div>

                    {/* Project Content */}
                    <div className={styles.contentGrid}>
                        {/* Image Section */}
                        <div className={styles.imageSection}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={600}
                                    height={400}
                                    className={styles.projectImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                        </div>

                        {/* Description Section */}
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
                                            style={{ animationDelay: `${idx * 0.1}s` }}
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