import { projects } from '../data/projects.js'
import { ArrowUpRightIcon, GitHubIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Projects.css'

export default function Projects() {
  const revealRef = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Technical Projects</h2>
        <p className="section-sub">
          Hands-on machine-learning work spanning speech, wireless systems, and data engineering.
        </p>

        <div className="projects__grid reveal" ref={revealRef}>
          {projects.map((project) => (
            <article className="projects__card" key={project.title}>
              <div className="projects__image-frame">
                <img
                  src={project.image}
                  alt={`Screenshot representing the ${project.title} project`}
                  className="projects__image"
                  width="960"
                  height="540"
                  loading="lazy"
                />
              </div>
              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                {project.results?.length > 0 && (
                  <ul className="projects__results">
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                )}

                <ul className="projects__tech" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="projects__actions">
                  <a
                    href={project.githubUrl}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon width={16} height={16} />
                    View GitHub
                    <ArrowUpRightIcon width={14} height={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
