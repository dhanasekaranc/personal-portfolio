export type SkillGroup = {
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java'],
  },
  {
    label: 'Frontend',
    items: [
      'React',
      'React Native',
      'HTML5',
      'CSS3',
      'Ant Design',
      'Material UI',
      'React Testing Library',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Jest',
      'Mocha',
      'Keycloak',
    ],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MSSQL', 'MongoDB', 'Redis', 'Sequelize'],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'Azure',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Helm',
      'GitHub Actions',
      'GitLab CI/CD',
    ],
  },
  {
    label: 'Practices & tools',
    items: [
      'Microservices',
      'Event-driven architecture',
      'BFF',
      'OAuth2',
      'TDD',
      'Trunk-based development',
      'Feature toggles',
      'Git',
      'Jira',
      'Figma',
    ],
  },
  {
    label: 'AI-assisted delivery',
    items: ['GitHub Copilot', 'Claude Code', 'OpenCode', 'OpenSpec'],
  },
]
