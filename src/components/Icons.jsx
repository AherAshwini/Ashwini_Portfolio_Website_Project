// Centralized, dependency-free SVG icons (no icon library needed).
// Each accepts standard SVG props (size via `width`/`height` or CSS).

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  width: 20,
  height: 20,
  'aria-hidden': 'true',
}

export function LinkedInIcon(props) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z" />
    </svg>
  )
}

export function GitHubIcon(props) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function MediumIcon(props) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none" viewBox="0 0 24 24">
      <path d="M3 5.5c0-.83.67-1.5 1.5-1.5h1.79c.34 0 .64.22.75.55l3.09 9.34 3.09-9.34a.79.79 0 0 1 .75-.55h1.79c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-.4c-.6 0-1.1-.5-1.1-1.1V9.95l-2.66 7.88a.79.79 0 0 1-.75.55h-1.35a.79.79 0 0 1-.75-.55L6.1 9.95v8.95c0 .6-.5 1.1-1.1 1.1H4.5c-.83 0-1.5-.67-1.5-1.5v-13Z" />
    </svg>
  )
}

export function EmailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 7.2 5.8a1.3 1.3 0 0 0 1.6 0L20 6.5" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5" />
      <path d="M4 18v1.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V18" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function TrophyIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5v.5A3 3 0 0 0 7 10" />
      <path d="M16 5h2.5A1.5 1.5 0 0 1 20 6.5v.5A3 3 0 0 1 17 10" />
      <path d="M10 15v2h4v-2M9 21h6M12 17v4" />
    </svg>
  )
}

export function FileTextIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l3 3v15H7V3Z" />
      <path d="M14 3v3h3M9 12h6M9 15.5h6M9 8.5h3" />
    </svg>
  )
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  )
}

export function BrainSparkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5a3.5 3.5 0 0 0-3.4 4.3A3.5 3.5 0 0 0 6 14.5v1a3.5 3.5 0 0 0 3.5 3.5" />
      <path d="M15 3.5a3.5 3.5 0 0 1 3.4 4.3A3.5 3.5 0 0 1 18 14.5v1a3.5 3.5 0 0 1-3.5 3.5" />
      <path d="M9 3.5h6M9 19h6M9.5 8h5M9.5 12h5" />
      <path d="M12 3.5v15.5" />
    </svg>
  )
}

export function RecipeBookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 19.5v-15Z" />
      <path d="M9 3v18M9 8h6M9 12h6" />
    </svg>
  )
}

export function PotIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z" />
      <path d="M2 10h20M8 10V7.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V10" />
      <path d="M4 6.5 3 5M20 6.5 21 5" />
    </svg>
  )
}

export function SignalIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20h16M6 20v-4M11 20v-8M16 20v-11" />
    </svg>
  )
}

export function BrainIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 11a3 3 0 0 0 1.7 5.4A3 3 0 0 0 9 19.5" />
      <path d="M15 4.5a3 3 0 0 1 3 3v.3A3 3 0 0 1 19.5 11a3 3 0 0 1-1.7 5.4A3 3 0 0 1 15 19.5" />
      <path d="M9 4.5v15M15 4.5v15" />
    </svg>
  )
}

export function WaveformIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h2l1.5-5 2 10 2-14 2 12 2-8 1.5 5H20" />
    </svg>
  )
}

export function ChipIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  )
}

export function CloudIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18a4 4 0 1 1 .7-7.94A5 5 0 0 1 17.5 12a3.5 3.5 0 0 1-.5 6.98H7Z" />
    </svg>
  )
}

export function DatabaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5V18a7 2.5 0 0 0 14 0V5.5" />
      <path d="M5 12a7 2.5 0 0 0 14 0" />
    </svg>
  )
}

export const workflowIcons = {
  camera: CameraIcon,
  brainSpark: BrainSparkIcon,
  recipeBook: RecipeBookIcon,
  pot: PotIcon,
}

export const expertiseIcons = {
  signal: SignalIcon,
  brain: BrainIcon,
  waveform: WaveformIcon,
  chip: ChipIcon,
  cloud: CloudIcon,
  database: DatabaseIcon,
}
