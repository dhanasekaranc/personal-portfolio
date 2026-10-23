import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../../content/profile'
import { socials } from '../../content/socials'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="accent-glow absolute -right-24 -top-24 size-96 blur-2xl"
            />

            <div className="relative">
              <p className="eyebrow">06 — Contact</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
                Let&apos;s build something that holds up at scale.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                I&apos;m open to senior full stack and platform engineering roles. The fastest way
                to reach me is email — or call if it&apos;s quicker.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
                >
                  {profile.email}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  {profile.phone}
                </a>
              </div>

              <div className="mt-5 flex flex-col gap-1.5 text-xs text-faint">
                <p className="flex items-center gap-2">
                  <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                  {profile.location}
                </p>
                <p className="pl-[1.375rem]">{profile.availability}</p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {socials.map((social) => {
                  const Icon = social.icon
                  const isExternal = social.href.startsWith('http')

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="group flex items-center gap-3 rounded-xl border border-line bg-elevated p-4 transition-colors hover:border-line-strong"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors group-hover:text-accent">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                            {social.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm text-ink">
                            {social.handle}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="ml-auto size-4 shrink-0 text-faint transition-colors group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
