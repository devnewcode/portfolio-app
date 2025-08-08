import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json"; // adjust path accordingly

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="headproject">My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="project-card">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="project-img"
            />
            <h3>{project.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
