import { links } from '../data/links.js'
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon, DownloadIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Contact.css'

const contactLinks = [
  { label: 'Email', href: links.email, Icon: EmailIcon },
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  { label: 'Medium', href: links.medium, Icon: MediumIcon },
]

export default function Contact() {
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner reveal" ref={revealRef}>
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading">Let&rsquo;s Connect</h2>
        <p className="contact__body">
          Interested in wireless AI, speech processing, applied machine learning, or product
          collaboration? I&rsquo;d be happy to connect.
        </p>

        <div className="contact__links">
          {contactLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="contact__link"
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noopener noreferrer'}
            >
              <Icon width={18} height={18} />
              {label}
            </a>
          ))}
          <a href={links.resumePdf} className="contact__link" download>
            <DownloadIcon width={18} height={18} />
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  )
}
