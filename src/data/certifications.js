// Only completed certifications/professional-development programs are
// listed here. The résumé's CERTIFICATION section also lists "Real-World
// Product Management Course (In progress)" — excluded because it isn't
// finished and isn't AI/ML/cloud/wireless-related.
//
// Each entry's `links` point to either a locally hosted file (external:
// false) or an outside page (external: true, opens in a new tab).
export const certifications = [
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI (via Coursera)',
    date: 'March 2025',
    detail:
      'Implemented image recognition with deep neural networks in Python/NumPy; compared logistic regression, a single-layer NN, and a deep NN on the "Cat vs non-Cat" dataset.',
    links: [],
  },
  {
    name: 'Natural Language Processing in TensorFlow',
    issuer: 'DeepLearning.AI (via Coursera)',
    date: null,
    detail: null,
    links: [],
  },
  // Verified directly against the attached certificate PDF and the official
  // cohort page (buffalo.edu/navigate-project/cohorts/2017-2018.html), which
  // lists "Ashwini Aher" pursuing an MS in Electrical Engineering. Described
  // strictly as program completion — not as founding, organizing, mentoring,
  // an NSF award, or research role — and the wording below does not imply
  // UB/Cal Poly/NSF endorse this portfolio or Smart AI Chef.
  {
    name: 'The NAVIGATE Project',
    subtitle: '2017–2018 Cohort · University at Buffalo',
    credentialLabel: 'Certificate of Professional Development',
    issuer: null,
    date: null,
    detail:
      'Completed a skills-based professional-development program designed to help women graduate students in STEM recognize career adversity and respond strategically. The program focused on supporting persistence and advancement in STEM careers.',
    supportingLine:
      'Led by the University at Buffalo and California Polytechnic State University, with support from the National Science Foundation.',
    links: [
      {
        label: 'View Certificate',
        href: '/certificates/ashwini-aher-navigate-2018.pdf',
        external: false,
        fileType: 'PDF',
      },
      {
        label: 'View Official Cohort Page',
        href: 'https://www.buffalo.edu/navigate-project/cohorts/2017-2018.html',
        external: true,
      },
    ],
  },
]
