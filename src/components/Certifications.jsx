import { certifications } from '../data/certifications.js'
import { ArrowUpRightIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Certifications.css'

export default function Certifications() {
  const revealRef = useScrollReveal()

  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Certifications</h2>

        <div className="certifications__list reveal" ref={revealRef}>
          {certifications.map((cert) => (
            <div className="certifications__item" key={cert.name}>
              <div>
                <h3 className="certifications__name">{cert.name}</h3>
                <p className="certifications__meta">
                  {cert.issuer}
                  {cert.date ? ` · ${cert.date}` : ''}
                </p>
                {cert.detail && <p className="certifications__detail">{cert.detail}</p>}
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  className="certifications__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
