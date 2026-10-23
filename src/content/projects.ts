export type Project = {
  title: string
  context: string
  summary: string
  metric?: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'Gamified daily task engine',
    context: 'Healthcare engagement platform',
    summary:
      'Designed and led an event-driven engine that generates personalised daily tasks and surprise rewards for members, decoupling next-task computation from the completion API so the experience stays fast as usage grows.',
    metric: 'Event-driven',
    stack: ['Node.js', 'Express.js', 'Redis', 'Azure', 'Microservices'],
  },
  {
    title: 'Monolith to segmented services',
    context: 'Platform modernisation',
    summary:
      'Defined and led a phased migration from a multi-terabyte monolith to functionally segmented services, removing single points of failure and completing the cutover inside planned downtime.',
    metric: '99.9% uptime',
    stack: ['Azure', 'AKS', 'Kubernetes', 'Terraform', 'Istio'],
  },
  {
    title: 'Scheduler modernisation at scale',
    context: 'Reliability & security',
    summary:
      'Replaced the vulnerable, unmaintained Agenda job scheduler with BullMQ across 15+ deeply integrated microservices, using a phased rollout to keep background processing stable throughout.',
    metric: '15+ services',
    stack: ['BullMQ', 'Redis', 'Node.js', 'Microservices'],
  },
  {
    title: 'Mobile dashboard performance',
    context: 'React Native application',
    summary:
      'Cut dashboard load times by parallelising API calls, introducing caching and database indexes, and removing redundant requests from the critical path.',
    metric: '30% faster',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Caching'],
  },
  {
    title: 'Test suite migration',
    context: 'Developer experience',
    summary:
      'Migrated 3,500+ tests from Enzyme to React Testing Library with GitHub Copilot assistance, halving manual effort while keeping coverage and confidence intact through a framework upgrade.',
    metric: '3,500+ tests',
    stack: ['React', 'Jest', 'React Testing Library', 'GitHub Copilot'],
  },
  {
    title: 'Reporting offload to Databricks',
    context: 'Data platform',
    summary:
      'Moved resource-intensive report generation off PostgreSQL onto Databricks with PySpark, reducing database load and halving compute costs without changing the reporting experience.',
    metric: '−50% compute',
    stack: ['Databricks', 'PySpark', 'PostgreSQL', 'Data pipelines'],
  },
]
