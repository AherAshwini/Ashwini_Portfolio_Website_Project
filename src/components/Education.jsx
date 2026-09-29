import { useState } from 'react'
import { education } from '../data/education.js'
import { ChevronDownIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Education.css'

export default function Education() {
  const revealRef = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading section-heading--accent">Academic Background</h2>

        <div className="education__grid reveal" ref={revealRef}>
          {education.map((degree, index) => {
            const isOpen = openIndex === index
            return (
              <article className="education__card" key={degree.degree}>
                <h3 className="education__degree">{degree.degree}</h3>
                <p className="education__school">{degree.school}</p>
                <div className="education__facts">
                  <span className="tag">{degree.year}</span>
                  <span className="tag">{degree.gpa}</span>
                </div>

                {degree.thesis && (
                  <div className="education__thesis">
                    <button
                      type="button"
                      className="education__thesis-toggle"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      View thesis
                      <ChevronDownIcon
                        width={15}
                        height={15}
                        className={`education__thesis-chevron ${isOpen ? 'education__thesis-chevron--open' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="education__thesis-body">
                        <p className="education__thesis-title">&ldquo;{degree.thesis.title}&rdquo;</p>
                        <p className="education__thesis-advisor">Advisor: {degree.thesis.advisor}</p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
