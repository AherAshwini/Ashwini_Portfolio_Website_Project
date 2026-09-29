import { flagshipProject } from '../data/projects.js'
import { workflowIcons, ArrowUpRightIcon, TrophyIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Entrepreneurship.css'

export default function Entrepreneurship() {
  const revealRef = useScrollReveal()
  const project = flagshipProject

  return (
    <section id="entrepreneurship" className="entrepreneurship">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Entrepreneurship &amp; Product Development</h2>
        <span className="eyebrow eyebrow--ink entrepreneurship__product-label">{project.title}</span>

        <div className="entrepreneurship__panel reveal" ref={revealRef}>
          <div className="entrepreneurship__copy">
            <span className="entrepreneurship__badge">{project.status}</span>
            <h3 className="entrepreneurship__tagline">{project.tagline}</h3>
            <p className="entrepreneurship__desc">{project.description}</p>

            <ol className="entrepreneurship__workflow">
              {project.workflow.map((step) => {
                const Icon = workflowIcons[step.icon]
                return (
                  <li key={step.step} className="entrepreneurship__step">
                    <span className="entrepreneurship__step-icon">
                      {Icon ? <Icon width={20} height={20} /> : null}
                    </span>
                    <span className="entrepreneurship__step-label">{step.step}</span>
                  </li>
                )
              })}
            </ol>

            {project.recognition && (
              <div className="entrepreneurship__recognition">
                <TrophyIcon width={18} height={18} />
                <div>
                  <p className="entrepreneurship__recognition-label">{project.recognition.label}</p>
                  <p className="entrepreneurship__recognition-detail">
                    {project.recognition.issuer} · {project.recognition.date}
                  </p>
                </div>
              </div>
            )}

            <div className="entrepreneurship__actions">
              <a
                href={project.websiteUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Smart AI Chef
                <ArrowUpRightIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="entrepreneurship__media">
            <img
              src={project.image}
              alt="Smart AI Chef app interface showing ingredient-based recipe recommendations"
              className="entrepreneurship__image"
              width="890"
              height="640"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
