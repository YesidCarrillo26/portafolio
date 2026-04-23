import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Ver en vivo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
