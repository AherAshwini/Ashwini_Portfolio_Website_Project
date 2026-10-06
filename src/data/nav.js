import { links } from './links.js'

// Single source of truth for the navbar links, per the requested set:
// Home, About, Entrepreneurship, Experience, Research, Projects, Blog, Contact —
// with Résumé rendered separately as a distinct CTA button, not a plain link.
// "Entrepreneurship" is shortened from the section's full heading
// ("Entrepreneurship & Product Development") so the navbar doesn't wrap/overflow.
export const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Entrepreneurship', href: '#entrepreneurship', id: 'entrepreneurship' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Blog', href: '#blog', id: 'blog' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const resumeCta = { label: 'Résumé', href: links.resumePdf, id: 'resume-cta' }
