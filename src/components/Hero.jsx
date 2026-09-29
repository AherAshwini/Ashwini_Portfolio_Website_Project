import profileImg from '../assets/images/profile.jpg'
import { links } from '../data/links.js'
import { expertiseAreas } from '../data/expertise.js'
import { expertiseIcons } from './Icons.jsx'
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon, DownloadIcon, ArrowUpRightIcon } from './Icons.jsx'
import './Hero.css'

const socials = [
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  { label: 'Medium', href: links.medium, Icon: MediumIcon },
  { label: 'Email', href: links.email, Icon: EmailIcon },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">AI/ML Engineer · Wireless Communications</span>
          <h1 className="hero__title">
            Hi, I&rsquo;m <span className="hero__title-name">Ashwini Aher</span>
          </h1>
          <p className="hero__intro">
            I build machine-learning solutions at the intersection of wireless communications, speech
            processing, and real-world AI systems.
          </p>

          <div className="hero__labels" aria-label="Areas of expertise">
            {expertiseAreas.slice(0, 3).map((area) => (
              <span className="hero__label" key={area.label}>
                {area.label}
              </span>
            ))}
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary hero__cta-btn">
              View My Projects
              <ArrowUpRightIcon width={16} height={16} className="hero__cta-arrow" />
            </a>
            <a href={links.resumePdf} className="btn btn-secondary" download>
              <DownloadIcon width={16} height={16} />
              Download Résumé
            </a>
          </div>

          <ul className="hero__socials" aria-label="Social links">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hero__social-link"
                  aria-label={label}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                >
                  <Icon width={19} height={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <img
            src={profileImg}
            alt="Portrait of Ashwini Aher, AI/ML engineer and wireless communications specialist"
            className="hero__portrait"
            width="420"
            height="420"
          />
        </div>
      </div>

      <div className="hero__strip container" aria-hidden="true">
        {expertiseAreas.map((area) => {
          const Icon = expertiseIcons[area.icon]
          return (
            <span className="hero__strip-item" key={area.label}>
              {Icon ? (
                <span className="hero__strip-icon">
                  <Icon width={16} height={16} />
                </span>
              ) : null}
              {area.label}
            </span>
          )
        })}
      </div>
    </section>
  )
}
