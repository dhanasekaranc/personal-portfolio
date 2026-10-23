export const profile = {
  name: 'Dhana Sekaran Chellamuthu',
  shortName: 'Dhana Sekaran',
  initials: 'DC',
  role: 'Senior Full Stack Engineer',
  tagline: 'Scalable web and mobile products, from React interfaces to Azure infrastructure.',
  intro:
    "I'm a full stack engineer with seven years of experience building healthcare products end to end — React and React Native interfaces, Node.js and Spring Boot services, and the Azure infrastructure they run on.",
  summary:
    'My work covers the whole stack: designing APIs and data models, shipping the UI, and owning how it runs in production. On the platform side I have led a multi-terabyte monolith split into 20+ services, replaced unmaintained scheduling across 15 microservices, modernised legacy AKS clusters, and automated dependency management across 30+ repositories. I optimise for measurable outcomes — 99.9% uptime, 30% faster dashboards, 50% lower compute costs — and for codebases that are easier to work in than I found them.',
  location: 'Tamil Nadu, India',
  email: 'dhanasekaran23298@gmail.com',
  phone: '+91 97156 54658',
  phoneHref: '+919715654658',
  availability: 'Open to full stack engineer roles with infrastructure ownership',
  stats: [
    { value: '7', suffix: 'yrs', label: 'Full stack experience' },
    { value: '20+', suffix: '', label: 'Microservices migrated' },
    { value: '4', suffix: '', label: 'Partner integrations' },
    { value: '70%', suffix: '', label: 'Less AKS maintenance' },
  ],
  focus: [
    'Full stack product delivery',
    'APIs, data models & integrations',
    'Azure infrastructure & Kubernetes',
    'Performance and reliability',
  ],
} as const

export type Profile = typeof profile
