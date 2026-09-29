import { links } from '../data/links.js'
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon } from './Icons.jsx'
import './Footer.css'

const socials = [
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  { label: 'Medium', href: links.medium, Icon: MediumIcon },
  { label: 'Email', href: links.email, Icon: EmailIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Ashwini Aher</p>
          <p className="footer__tagline">AI/ML Engineer · Wireless Communications &amp; Speech Processing</p>
        </div>

        <ul className="footer__links">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="footer__icon-link"
              >
                <Icon width={17} height={17} />
              </a>
            </li>
          ))}
          <li>
            <a href={links.resumePdf} className="footer__resume-link" download>
              Résumé
            </a>
          </li>
        </ul>

        <p className="footer__copyright">© {year} Ashwini Aher. All rights reserved.</p>
      </div>
    </footer>
  )
}
