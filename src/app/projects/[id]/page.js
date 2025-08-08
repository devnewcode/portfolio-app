import projects from "@/data/projects.json";

export default async function ProjectDetail({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    // const {id} = params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }
// console.log("params:", params);
// console.log("id:", id);
    return (
        <section className="project-detail">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} style={{ width: "60%", maxWidth: "600px" }} />
            <p>{project.description}</p>
            <h4>Tech Stack:</h4>
            <div className="tech-stack">
                {project.stack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                ))}
            </div>
        </section>
    );
}
