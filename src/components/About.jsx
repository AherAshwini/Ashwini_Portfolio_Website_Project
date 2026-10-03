import { timelineStages } from '../data/timeline.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './About.css'

export default function About() {
  const revealRef = useScrollReveal()
  const journeyRef = useScrollReveal()

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

        <div className="about__journey reveal" ref={journeyRef}>
          <h3 className="about__journey-title">My Journey &amp; Purpose</h3>

          <p className="about__journey-text">
            Coming from a small village in India, I faced challenges throughout my education and
            career journey. Those experiences shaped my belief that everyone deserves
            opportunities, encouragement, and support to pursue their ambitions.
          </p>

          <p className="about__journey-text">
            Motherhood has brought another chapter of learning and growth. While caring for my
            son, I have continued developing my AI and machine learning skills and building
            projects, making time whenever possible—even an hour or two on some days. Through my
            journey, I hope to encourage anyone navigating a difficult chapter, whether that means
            a career break, family responsibilities, a setback, or uncertainty about starting
            again.
          </p>

          <p className="about__journey-text">
            Everyone’s circumstances and pace are different. Progress can be slow, and sometimes
            we need rest or support along the way. I want my work to show that a challenging
            chapter does not have to define our future: we can keep learning, begin again, and
            take meaningful steps toward our goals.
          </p>

          <p className="about__journey-link-line">
            During my graduate studies, I completed{' '}
            <a
              href="https://www.buffalo.edu/navigate-project/cohorts/2017-2018.html"
              target="_blank"
              rel="noopener noreferrer"
              className="about__journey-link"
            >
              The NAVIGATE Project
            </a>
            ’s 2017–2018 cohort, an experience that connects with my interest in career resilience
            and broader access to opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
