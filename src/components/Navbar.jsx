import { useEffect, useState } from 'react'
import { navItems, resumeCta } from '../data/nav.js'
import { MenuIcon, CloseIcon, DownloadIcon } from './Icons.jsx'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          Ashwini Aher
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navbar__link ${activeId === item.id ? 'navbar__link--active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={resumeCta.href}
            className="btn btn-primary btn-sm navbar__resume"
            download
          >
            <DownloadIcon width={16} height={16} />
            {resumeCta.label}
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navbar__mobile-link ${activeId === item.id ? 'navbar__mobile-link--active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href={resumeCta.href} className="btn btn-primary navbar__mobile-resume" download onClick={closeMenu}>
            <DownloadIcon width={16} height={16} />
            {resumeCta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
