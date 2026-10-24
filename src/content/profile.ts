export const profile = {
  name: 'Dhana Sekaran Chellamuthu',
  initials: 'DS',
  role: 'Senior Full Stack Engineer',
  tagline: 'Scalable web and mobile products, from React interfaces to Azure infrastructure.',
  intro:
    'I architect and deliver end-to-end products, spanning React and React Native interfaces, Node.js services and the Azure cloud infrastructure that powers them.',
  about: [
    'My expertise spans the entire engineering lifecycle, from API architecture and data modelling to frontend delivery, production reliability and platform optimisation. I’ve led the decomposition of a multi-terabyte monolith into 20+ services, replaced legacy scheduling systems across 15 microservices, modernised legacy AKS clusters and automated dependency management across 30+ repositories.',
    'I focus on measurable engineering outcomes: 99.9% uptime, 30% faster dashboard performance and 50% lower compute costs. I also build maintainable, resilient codebases that improve developer productivity and long-term system reliability.',
    'I’m driven by engineering challenges that bridge application development and infrastructure: taking end-to-end ownership of features, from React components and backend services to Kubernetes workloads and cloud operations, with accountability for performance, scalability, reliability and the complete production lifecycle.',
  ],
  location: 'Tamil Nadu, India',
  email: 'dhanasekaran23298@gmail.com',
  phone: '+91 97156 54658',
  phoneHref: '+919715654658',
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
