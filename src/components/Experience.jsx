import { experience } from '../data/experience.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Experience.css'

// Renders "**text**" segments as <strong> without pulling in a markdown lib.
function renderBullet(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

export default function Experience() {
  const revealRef = useScrollReveal()

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Professional Experience</h2>
        <p className="section-sub">
          Roles spanning cellular system testing, modem integration, and applied research.
        </p>

        <div className="experience__grid reveal" ref={revealRef}>
          {experience.map((job) => (
            <article className="experience__card" key={`${job.company}-${job.role}`}>
              <header className="experience__card-head">
                <div>
                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className="experience__meta">
                  <span className="tag">{job.type}</span>
                  <span className="experience__period">{job.period}</span>
                </div>
              </header>
              <ul className="experience__bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{renderBullet(bullet)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
