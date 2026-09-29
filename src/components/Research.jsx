import { publication, conferencePresentations, academicWork } from '../data/research.js'
import { ArrowUpRightIcon, FileTextIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Research.css'

export default function Research() {
  const revealRef = useScrollReveal()

  return (
    <section id="research" className="research">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Research &amp; Publications</h2>

        <div className="research__content reveal" ref={revealRef}>
          {/* Graduate Theses / Academic Research (moved here, in place of the
              removed Research Areas block) */}
          <div className="research__block">
            <h3 className="research__block-title">Graduate Theses &amp; Academic Research</h3>
            <div className="research__academic">
              {academicWork.map((item) => (
                <div className="research__academic-card" key={item.title}>
                  <span className="tag research__academic-type">{item.type}</span>
                  <h4 className="research__academic-title">{item.title}</h4>
                  <p className="research__academic-meta">
                    {item.program} · {item.period}
                  </p>
                  {item.advisor && <p className="research__academic-advisor">Advisor: {item.advisor}</p>}
                  <p className="research__academic-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Publication */}
          <div className="research__block">
            <h3 className="research__block-title">Peer-Reviewed Publication</h3>
            <article className="research__publication">
              <h4 className="research__pub-title">{publication.title}</h4>
              <p className="research__pub-venue">
                {publication.venue} · {publication.year}
              </p>
              <p className="research__pub-citation">{publication.citation}</p>
              <ul className="research__pub-apps">
                {publication.applications.map((app) => (
                  <li key={app} className="tag">
                    {app}
                  </li>
                ))}
              </ul>
              <a
                href={publication.ieeeUrl}
                className="research__pub-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileTextIcon width={16} height={16} />
                View Publication
                <ArrowUpRightIcon width={14} height={14} />
              </a>
            </article>
          </div>

          {/* Conference Presentations */}
          <div className="research__block">
            <h3 className="research__block-title">Conference Presentations</h3>
            <div className="research__conferences">
              {conferencePresentations.map((conf) => (
                <div className="research__conf-card" key={conf.name}>
                  <div>
                    <h4 className="research__conf-name">{conf.fullName}</h4>
                    <p className="research__conf-meta">
                      {conf.org} · {conf.date}
                    </p>
                    {conf.paperTitle && <p className="research__conf-paper">&ldquo;{conf.paperTitle}&rdquo;</p>}
                  </div>
                  <a
                    href={conf.certificateUrl}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
