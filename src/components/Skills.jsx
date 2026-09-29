import { skillGroups } from '../data/skills.js'
import { ExpertiseIcon } from './Icons.jsx'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 className="section-heading">Toolkit</h2>
        <p className="section-sub">A focused set of tools and technologies across ML, wireless, and deployment.</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <ExpertiseIcon name={group.icon} />
                </span>
                <h3 className="skill-card__title">{group.category}</h3>
              </div>
              <div className="skill-card__pills">
                {group.skills.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
