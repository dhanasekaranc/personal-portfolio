export type Education = {
  degree: string
  institution: string
  location: string
  period: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'Coimbatore Institute of Technology',
    location: 'Coimbatore, India',
    period: '07/2015 — 04/2019',
  },
]

export type Certification = {
  name: string
  issuer: string
  period: string
}

export const certifications: Certification[] = [
  {
    name: 'Generative AI Mastermind',
    issuer: 'Outskill',
    period: 'Jun 2026',
  },
  {
    name: 'Infrastructure as Code (IaC)',
    issuer: 'Thoughtworks',
    period: 'Apr — Aug 2024',
  },
  {
    name: 'Full Stack Developer',
    issuer: 'Crio.do',
    period: 'Jun 2021 — Feb 2022',
  },
]
