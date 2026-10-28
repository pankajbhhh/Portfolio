import { projects, projectStats } from '../data/portfolioData'

function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  card.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`)
  card.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`)
}

function resetTilt(e) {
  e.currentTarget.style.setProperty('--tilt-x', '0deg')
  e.currentTarget.style.setProperty('--tilt-y', '0deg')
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
      <div className="project-card__preview">
        <div className="project-card__preview-bar">
          <span /><span /><span />
        </div>
        <div className="project-card__preview-body">
          <div className="project-card__preview-glow" />
          <span className="project-card__tag">{project.tag}</span>
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__metrics">
          {project.metrics.map((m) => (
            <div key={m.label} className="project-card__metric">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <ul className="project-card__highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="project-card__stack">
          {project.stack.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {(project.demo || project.github) && (
          <div className="project-card__links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link">
                ↗ Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                ◇ GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="block projects">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            Built at OneNet Solutions — ERP workflows, real-time messaging and OCR automation.
          </p>
        </div>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <div className="reveal" style={{ transitionDelay: `${i * 90}ms` }} key={p.id}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <div className="projects__stats">
        {projectStats.map((s, i) => (
          <div key={s.label} className="projects__stat reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
