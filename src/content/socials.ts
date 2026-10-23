import { Mail, Phone } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'

export type IconComponent = ComponentType<{ className?: string }>

export type Social = {
  label: string
  href: string
  icon: IconComponent
  handle: string
}

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/dhanasekaranc',
    icon: GithubIcon,
    handle: '@dhanasekaranc',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhana-sekaran-chellamuthu-a09bb0168',
    icon: LinkedinIcon,
    handle: 'Dhana Sekaran Chellamuthu',
  },
  {
    label: 'Email',
    href: 'mailto:dhanasekaran23298@gmail.com',
    icon: Mail,
    handle: 'dhanasekaran23298@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+919715654658',
    icon: Phone,
    handle: '+91 97156 54658',
  },
]
