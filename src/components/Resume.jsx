import { links } from '../data/links.js'
import './Resume.css'

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container resume__inner">
        <div>
          <span className="eyebrow">Resume</span>
          <h2 className="section-heading">Get the full picture</h2>
          <p className="section-sub">
            Download my resume for a detailed look at my experience, education, and technical
            skills.
          </p>
        </div>
        <a className="btn btn-primary" href={links.resumePdf} download>
          Download Resume (PDF)
        </a>
      </div>
    </section>
  )
}
