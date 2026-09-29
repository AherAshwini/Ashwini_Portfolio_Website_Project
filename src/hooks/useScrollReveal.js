import { useEffect, useRef } from 'react'

// Adds the `.is-visible` class (see .reveal in index.css) to an element the
// first time it scrolls into view, then stops observing it. Respects
// prefers-reduced-motion by doing nothing — index.css already shows
// .reveal content at full opacity for those users regardless.
export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
