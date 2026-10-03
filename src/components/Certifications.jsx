import { certifications } from '../data/certifications.js'
import { ArrowUpRightIcon, FileTextIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Certifications.css'

export default function Certifications() {
  const revealRef = useScrollReveal()

  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Certifications &amp; Professional Development</h2>

        <div className="certifications__list reveal" ref={revealRef}>
          {certifications.map((cert) => {
            const links = cert.links || []
            return (
              <div className="certifications__item" key={cert.name}>
                <div className="certifications__item-head">
                  <h3 className="certifications__name">{cert.name}</h3>
                  {cert.credentialLabel && <span className="tag certifications__credential-tag">{cert.credentialLabel}</span>}
                </div>

                {cert.subtitle && <p className="certifications__subtitle">{cert.subtitle}</p>}

                {cert.issuer && (
                  <p className="certifications__meta">
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ''}
                  </p>
                )}

                {cert.detail && <p className="certifications__detail">{cert.detail}</p>}
                {cert.supportingLine && <p className="certifications__supporting">{cert.supportingLine}</p>}

                {links.length > 0 && (
                  <div className="certifications__links">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="certifications__link btn btn-secondary btn-sm"
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.fileType === 'PDF' && <FileTextIcon width={14} height={14} />}
                        {link.label}
                        {link.fileType === 'PDF' && ' (PDF)'}
                        {link.external && <ArrowUpRightIcon width={12} height={12} />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
