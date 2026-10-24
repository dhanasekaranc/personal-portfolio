export type Role = {
  title: string
  note?: string
  highlights: string[]
}

export type Company = {
  name: string
  period: string
  location: string
  roles: Role[]
}

export const experience: Company[] = [
  {
    name: 'Thoughtworks Technologies (India) Pvt Ltd',
    period: '05/2022 — Present',
    location: 'India',
    roles: [
      {
        title: 'Senior Consultant Developer',
        note: 'Current',
        highlights: [
          'Designed and led a gamified daily task engine with personalised task generation and surprise rewards, using event-driven architecture to offload next-task computation from the completion API and improve system performance.',
          'Owned end-to-end feature delivery for a large-scale product platform — requirement analysis, solution presentations, Jira stories and production incident resolution — working directly with client stakeholders.',
          'Rolled out RenovateBot across 30+ repositories, cutting manual dependency-management effort by **80%** and improving security through timely updates.',
          'Led major framework upgrades — React 16 → 18 and React Native 0.60 → 0.74 — across web and mobile applications, navigating breaking changes to protect compatibility and performance.',
          'Migrated **3,500+** tests from Enzyme to React Testing Library with GitHub Copilot, reducing manual migration effort by roughly **50%**.',
          'Replaced the vulnerable, unmaintained Agenda scheduler with BullMQ across 15+ deeply integrated microservices using a phased rollout, eliminating dependency risk and improving scheduling stability.',
          'Defined and led the migration of TB-scale monolithic servers to functionally segmented services across 20+ microservices, completed within planned downtime and achieving **99.9%** uptime with no single points of failure.',
          'Modernised legacy Azure AKS clusters onto managed components, reducing manual maintenance effort for Istio and related tooling by **70%**.',
        ],
      },
      {
        title: 'Consultant Developer',
        highlights: [
          'Improved mobile app dashboard loading performance by **30%** through API call parallelisation, caching strategies, database indexing and removal of redundant API calls.',
          'Built a reusable drag-and-drop component in React that lets users customise and reorder steps, reducing friction to change.',
          'Offloaded resource-intensive report generation from PostgreSQL to Databricks with PySpark, cutting database load and compute costs by **50%**.',
          'Delivered secure integrations with four external partners using client assertions and JWKS-based authentication.',
          'Designed a configuration-driven data processing framework that supports schema changes through config updates, reducing maintenance costs by **30%**.',
        ],
      },
    ],
  },
  {
    name: 'Tata Consultancy Services',
    period: '07/2019 — 04/2022',
    location: 'Chennai, India',
    roles: [
      {
        title: 'System Engineer',
        highlights: [
          'Built product listing, cart, login/register and checkout flows for an e-commerce platform using React.js, Express.js and Material UI.',
          'Improved search responsiveness with debouncing, removing unnecessary API calls during user input.',
          'Integrated REST APIs and managed state with React Hooks, writing custom hooks for navigation and notifications.',
          'Contributed to the capture and maintenance of electrical network data in Smallworld GIS, a geospatial platform representing live utility networks at scale.',
          'Promoted from data capture to quality assurance within 8 months, maintaining a **100%** error-free delivery standard across all assigned GIS network jobs.',
        ],
      },
    ],
  },
]
