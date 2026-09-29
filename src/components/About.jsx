import { timelineStages } from '../data/timeline.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './About.css'

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="container">
        <span className="eyebrow">About</span>
        <h2 className="section-heading">From Telecommunications to Applied AI</h2>
        <p className="section-sub">
          My path started in electronics and telecommunications engineering, moved through speech
          research and wireless/cellular systems, and has landed in applied machine learning —
          building on all three along the way.
        </p>

        <div className="about__timeline reveal" ref={revealRef}>
          {timelineStages.map((stage, index) => (
            <div className="about__stage" key={stage.title}>
              <div className="about__stage-marker">
                <span className="about__stage-dot" aria-hidden="true" />
                {index < timelineStages.length - 1 && <span className="about__stage-line" aria-hidden="true" />}
              </div>
              <div className="about__stage-content">
                <span className="about__stage-year">{stage.year}</span>
                <h3 className="about__stage-title">{stage.title}</h3>
                <p className="about__stage-desc">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
