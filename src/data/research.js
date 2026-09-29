// All details are taken directly from the résumé and the two conference
// certificates. Where the source material conflicts or doesn't state
// something (e.g. no DOI is given anywhere), it is left out rather than
// guessed — see the flagged note on `publication.citation` below.

// Short, scannable research areas (résumé's Research Experience section).
export const researchAreas = [
  {
    label: 'A',
    title: 'Vocal Tract Shape Estimation / Speech Processing',
    description:
      'LPC-based vocal tract shape estimation from speech signals, recorded in Praat and validated against MRI data.',
  },
  {
    label: 'B',
    title: 'Multi-Kernel Recursive Least Squares in the Presence of Sparse Outliers',
    description:
      'Outlier-robust recursive least squares (OR-MKRLS) using Gaussian/Laplace kernels, with parallel computing in Julia.',
  },
  {
    label: 'C',
    title: 'Hierarchical Clustering in Brain Networks',
    description: 'Researched hierarchical clustering techniques and their application to brain networks.',
  },
]

// The one peer-reviewed, published conference paper — distinct from the
// graduate theses listed under academicWork below.
export const publication = {
  title:
    'Comparison of Vocal Tract Shape Estimation Based on Autocorrelation, Covariance, Lattice and Formant Frequencies',
  venue: 'International Conference on Nascent Technologies in Engineering (ICNTE 2015)',
  org: 'Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai — in association with IEEE Bombay Section',
  year: '2015',
  // NOTE ON VERIFICATION: the résumé states she was published "as a main
  // author" but does not give the exact printed byline, and no DOI is
  // stated anywhere in the résumé or certificate. An earlier draft of this
  // site briefly showed a citation for a *different* paper ("S Veena,
  // Nilashree S Wankhede, Milind S Shah...") pulled from a mismatched
  // source — that was wrong and has been removed. The citation below uses
  // only what's confirmed; please verify the exact author-name formatting
  // against the published paper and correct if needed.
  citation:
    'A. Aher, "Comparison of Vocal Tract Shape Estimation Based on Autocorrelation, Covariance, Lattice and Formant Frequencies," in Proc. Int. Conf. on Nascent Technologies in Engineering (ICNTE), Navi Mumbai, India, 2015.',
  doi: null,
  applications: [
    'Speech processing',
    'Hearing-assistance applications',
    'Spoken-word recognition',
    'Speaker recognition',
  ],
  ieeeUrl: 'http://ieeexplore.ieee.org/document/7029934/',
}

// Conference paper presentations with certificate evidence. Only facts
// visible on the certificates themselves are used.
export const conferencePresentations = [
  {
    name: 'ICNTE 2015',
    fullName: 'International Conference on Nascent Technologies in Engineering',
    org: 'Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai · IEEE Bombay Section',
    date: '9–10 January 2015',
    paperTitle:
      'Comparison of Vocal Tract Shape Estimation Techniques Based on Formant Frequencies, Autocorrelation, Covariance and Lattice',
    certificateUrl: '/certificates/ICNTE-2015-certificate.pdf',
  },
  {
    name: 'SITACS 2013',
    fullName: 'National Conference on Signal Image Technology & Applied Communication Systems',
    org: "MAEER's MIT, Pune — Dept. of Electronics & Telecommunication",
    date: '19–20 December 2013',
    paperTitle: null,
    certificateUrl: '/certificates/SITACS-2013-certificate.pdf',
  },
]

// Graduate theses and academic research — kept clearly separate from the
// peer-reviewed publication above. Neither of these was itself published in
// a conference or journal (the VTSE thesis is what the ICNTE paper is
// based on, but the thesis and the paper are not the same artifact).
export const academicWork = [
  {
    type: 'Master’s Thesis',
    title: 'Multi-Kernel Recursive Least Squares in the Presence of Sparse Outliers',
    program: 'M.S. Electrical Engineering, University at Buffalo',
    advisor: 'Dr. Konstantinos Slavakis',
    period: 'Aug 2018 – Aug 2019',
    description:
      'Developed an Outlier-Robust Multi-Kernel Recursive Least Squares (OR-MKRLS) algorithm using Gaussian and Laplace kernels, with parallel computing in Julia on Center for Computational Research clusters.',
  },
  {
    type: 'Master’s Thesis',
    title:
      'Comparison of Vocal Tract Shape Estimation (VTSE) Based on Autocorrelation, Covariance, Lattice and Formant Frequencies',
    program: 'M.E. Electronics & Telecommunication, Mumbai University',
    advisor: 'Dr. Shah',
    period: 'Aug 2013 – Dec 2014',
    description:
      'Estimated vocal tract shape from recorded speech using LPC techniques in MATLAB, validated against MRI data. This thesis is the basis of the peer-reviewed publication above.',
  },
  {
    type: 'Academic Research',
    title: 'Hierarchical Clustering in Brain Networks',
    program: 'University at Buffalo',
    advisor: 'Dr. Konstantinos Slavakis',
    period: 'Jan 2018 – May 2018',
    description: 'Researched hierarchical clustering techniques and their application to brain networks.',
  },
]
