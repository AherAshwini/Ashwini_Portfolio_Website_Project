import speechImg from '../assets/projects/speech-project.jpg'
import sinrImg from '../assets/projects/sinr-project.jpg'
import studentImg from '../assets/projects/student-performance.jpg'
import netflixImg from '../assets/projects/netflix-project.jpg'
import smartChefImg from '../assets/projects/smart-ai-chef.jpg'

// Descriptions, technologies, and the one or two "results" bullets per card
// are drawn directly from the résumé's Technical Projects section. Only
// metrics the résumé explicitly states are shown (~92% accuracy, R² ≈ 0.93,
// 10,000 simulated UEs) — nothing else is claimed.
//
// githubUrl is a PLACEHOLDER (the résumé does not list individual repo
// URLs) — replace [ADD-REPO-...] with the real repository path.
export const projects = [
  {
    title: 'Speech-Based Channel Quality Classification',
    description:
      'Classifies speech channel quality using the Google Speech Commands dataset, with AWGN noise simulated at multiple SNR levels to generate realistic noisy speech. Extracted MFCC, delta-MFCC, and spectral features with Librosa, then performed data analysis and outlier detection in PostgreSQL.',
    results: ['~92% classification accuracy (Logistic Regression / SVM) on test data'],
    tech: ['Python', 'PostgreSQL', 'Pandas', 'Scikit-learn', 'Librosa'],
    githubUrl: 'https://github.com/AherAshwini/[ADD-REPO-CHANNEL-QUALITY]',
    image: speechImg,
  },
  {
    title: 'SINR Prediction Using Regression',
    description:
      'An end-to-end pipeline integrating PostgreSQL with Python for data ingestion, preprocessing, and modeling. Simulated a wireless dataset of 10,000 UEs using link-budget principles, including distance, path loss, received power, and SNR as features.',
    results: ['R² ≈ 0.93 predicting SINR (Linear Regression / Ridge / Lasso) on test data'],
    tech: ['Python', 'PostgreSQL', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/AherAshwini/[ADD-REPO-SINR-PREDICTION]',
    image: sinrImg,
  },
  {
    title: 'Student Performance Indicator',
    description:
      'An end-to-end ML pipeline built with Python, Pandas, and Scikit-learn for student performance prediction, containerized with Docker and deployed as a Flask app on an AWS EC2 instance.',
    results: ['CI/CD via GitHub Actions → Amazon ECR → automated EC2 deployment'],
    tech: ['Python', 'Flask', 'Docker', 'AWS EC2', 'GitHub Actions', 'CI/CD'],
    githubUrl: 'https://github.com/AherAshwini/[ADD-REPO-STUDENT-PERFORMANCE]',
    image: studentImg,
  },
  {
    title: 'Netflix Data Cleaning & Analysis',
    description:
      'Data cleaning and transformation on a Netflix dataset using SQL (CTEs and window functions) and Pandas, with a normalized schema (ERD) designed for relational analysis.',
    results: ['Analyzed content trends across director, genre, and country'],
    tech: ['SQL', 'PostgreSQL', 'Pandas'],
    githubUrl: 'https://github.com/AherAshwini/[ADD-REPO-NETFLIX-ANALYSIS]',
    image: netflixImg,
  },
]

// Smart AI Chef — featured separately as a product/entrepreneurship effort,
// not another ML project card. No user counts, revenue, or awards are
// claimed; "In development" is the only status shown.
export const flagshipProject = {
  title: 'Smart AI Chef',
  tagline: 'AI-Powered Cooking Assistant',
  description:
    'Building an AI-powered platform that recognizes available ingredients and creates personalized recipes for every taste.',
  status: 'In development',
  websiteUrl: 'https://www.smartaichef.com/',
  // PLACEHOLDER — the résumé does not list a repository URL for this project.
  githubUrl: 'https://github.com/AherAshwini/[ADD-REPO-SMART-AI-CHEF]',
  image: smartChefImg,
  workflow: [
    { step: 'Add Ingredients', icon: 'camera' },
    { step: 'AI Recognition', icon: 'brainSpark' },
    { step: 'Get Personalized Recipes', icon: 'recipeBook' },
    { step: 'Start Cooking', icon: 'pot' },
  ],
  // Verified against the résumé's "HONORS & AWARDS" section: "'Smart Chef'
  // Issued by Blackstone LaunchPad, University at Buffalo, Dec 2018 — Won
  // 2nd place at 'Inclusive Launch Foundry Program' for 'Smart Chef Mobile
  // Application' at 'University at Buffalo'." Wording kept as close to the
  // original as possible.
  recognition: {
    label: '2nd Place — Inclusive Launch Foundry Program',
    issuer: 'Blackstone LaunchPad, University at Buffalo',
    date: 'Dec 2018',
    detail: 'Awarded for the "Smart Chef" mobile application concept.',
  },
}
