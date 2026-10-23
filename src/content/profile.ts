export const profile = {
  name: 'Dhana Sekaran Chellamuthu',
  shortName: 'Dhana Sekaran',
  initials: 'DC',
  role: 'Senior Full Stack Engineer',
  tagline: 'Scalable web and mobile products, from React interfaces to Azure infrastructure.',
  intro:
    "I'm a full stack engineer with seven years of experience turning complex healthcare requirements into products people can actually use — from React and React Native interfaces to the Node.js services and cloud infrastructure behind them.",
  summary:
    'Most of my recent work has been platform-scale: splitting a multi-terabyte monolith into 20+ services, replacing unmaintained scheduling infrastructure across 15 microservices, and modernising dependency and delivery pipelines across 30+ repositories. I optimise for measurable outcomes — 99.9% uptime, 30% faster dashboards, 50% lower compute costs — and for codebases that are easier to work in than I found them.',
  location: 'Tamil Nadu, India',
  email: 'dhanasekaran23298@gmail.com',
  phone: '+91 97156 54658',
  phoneHref: '+919715654658',
  availability: 'Open to senior full stack and platform engineering roles',
  stats: [
    { value: '7', suffix: 'yrs', label: 'Full stack experience' },
    { value: '20+', suffix: '', label: 'Microservices migrated' },
    { value: '4', suffix: '', label: 'Partner integrations' },
    { value: '70%', suffix: '', label: 'Less AKS maintenance' },
  ],
  focus: [
    'Full stack product delivery',
    'Microservices & event-driven design',
    'Cloud infrastructure on Azure',
    'Performance & reliability',
  ],
} as const

export type Profile = typeof profile
