// All text is drawn directly from the résumé. **bold** markers highlight
// measurable outcomes explicitly stated there — nothing is invented, and no
// bullet exceeds what the résumé itself claims.
//
// NOTE: the Steam Airetric Controls bullet originally read "almost by 97%".
// The updated résumé PDF (attached later) states "almost by 99%" instead —
// updated here to match that newer attachment.
export const experience = [
  {
    company: 'Qualcomm',
    location: 'San Diego',
    role: 'Cellular System Test Engineer',
    period: 'Jul 2022 – Dec 2023',
    type: 'Full-time',
    bullets: [
      'Executed **100+ 4G/5G test cases per release cycle** to validate modem software using Qualcomm proprietary tools, covering SA/NSA call flow, uplink/downlink throughput, Carrier Aggregation (CA), and higher-order modulation and MIMO combinations.',
      'Debugged test failures using QXDM, automation logs, and test setup analysis; analyzed functional regressions, system crashes, and stress tests with development teams for timely resolution.',
      'Evaluated performance KPIs, tracked issues via CR/JIRA, and created and maintained Confluence documentation for findings, knowledge sharing, and training.',
    ],
  },
  {
    company: 'Qualcomm',
    location: 'San Diego',
    role: 'Modem Integration & Test Engineer',
    period: 'Nov 2020 – Jul 2022',
    type: 'Contract · Novus Resources, Inc.',
    bullets: [
      'Validated modem software across 5G NSA/SA and 4G use cases, identifying **30% more regressions compared to team average**.',
      'Collaborated with cross-functional teams to integrate, validate, and support commercialization of Qualcomm 5G products.',
    ],
  },
  {
    company: 'Samsung Electronics America',
    location: 'Overland Park',
    role: 'Software Quality Analyst',
    period: 'Jul 2020 – Nov 2020',
    type: 'Contract · BTI Solutions, Inc.',
    bullets: [
      'Evaluated Samsung UE UI and modem software quality through field testing across 5G and LTE scenarios for Sprint/T-Mobile carriers, including attach-detach, mobility, leg switch, and EN-DC carrier aggregation.',
      'Utilized diagnostic tools such as QXDM and Umetrix Data to collect throughput and on-device logs.',
    ],
  },
  {
    company: 'University at Buffalo',
    location: 'NY',
    role: 'Research Intern',
    period: 'Oct 2019 – Jul 2020',
    type: 'Research',
    bullets: [
      'Performed numerical tests and parameter tuning to produce results for "Multi-Kernel Recursive Least Squares in the Presence of Sparse Outliers," using different combinations of Gaussian and Laplace kernels.',
    ],
  },
  {
    company: 'Steam Airetric Controls',
    location: 'India',
    role: 'Executive Engineer',
    period: 'Sep 2010 – Jul 2012',
    type: 'Full-time',
    bullets: [
      'Invented a raw material management system for the purchasing department, **increasing annual benefit by almost 99%**.',
      'Led the production and purchasing departments, supervising effective operation via a scheduled weekly list of duties.',
      'Brought a **cost advantage equivalent to US$10,000** by optimizing in-house workers’ workload instead of outsourcing to contractors.',
    ],
  },
]
