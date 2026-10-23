import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../../content/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-accent/30 bg-accent-soft font-mono text-xs font-semibold text-accent"
          >
            {profile.initials}
          </span>
          <div>
            <p className="text-sm font-medium text-ink">{profile.name}</p>
            <p className="text-xs text-faint">{profile.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/dhanasekaranc"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhana-sekaran-chellamuthu-a09bb0168"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#top"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container-page border-t border-line py-5">
        <p className="font-mono text-[11px] tracking-wide text-faint">
          Built with React, TypeScript and Tailwind CSS · © {CURRENT_YEAR} {profile.name}
        </p>
      </div>
    </footer>
  )
}
