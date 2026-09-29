import { expertiseAreas } from '../data/expertise.js'
import { ExpertiseIcon } from './Icons.jsx'
import './Expertise.css'

export default function Expertise() {
  return (
    <section className="expertise" aria-label="Areas of expertise">
      <div className="container expertise__grid">
        {expertiseAreas.map((area, i) => (
          <div className="expertise__item" key={area.label}>
            {i !== 0 && <span className="expertise__divider" aria-hidden="true" />}
            <span className="expertise__icon">
              <ExpertiseIcon name={area.icon} />
            </span>
            <span className="expertise__label">{area.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
