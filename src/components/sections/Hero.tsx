import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../../content/profile'
import { socials } from '../../content/socials'
import { Reveal } from '../ui/Reveal'

const heroSocials = socials.filter((social) => social.label !== 'Phone')

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-60 dark:opacity-40" />
      <div
        aria-hidden="true"
        className="accent-glow absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 blur-2xl"
      />

      <div className="container-page relative pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{profile.role}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted/90">
                {profile.intro.split('. ')[0]}.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
                >
                  View experience
                  <ArrowDownRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  Find me
                </span>
                <div className="flex items-center gap-2">
                  {heroSocials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label={`${social.label}: ${social.handle}`}
                        className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div
              aria-hidden="true"
              className="accent-glow absolute -inset-8 rounded-[2rem] blur-3xl"
            />
            <figure className="card relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="font-mono text-[11px] tracking-wide text-faint">engineer.ts</span>
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full border border-line-strong" />
                  <span className="size-2 rounded-full border border-line-strong" />
                  <span className="size-2 rounded-full bg-accent/70" />
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-muted">
                <code>
                  <span className="text-faint">const</span> engineer = {'{\n'}
                  {'  '}
                  <span className="text-accent">name</span>: <span className="text-ink">'Dhana Sekaran'</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">role</span>: <span className="text-ink">'Senior Full Stack Engineer'</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">experience</span>: <span className="text-ink">'7 years'</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">focus</span>: [<span className="text-ink">'React'</span>,{' '}
                  <span className="text-ink">'Node.js'</span>, <span className="text-ink">'Azure'</span>],{'\n'}
                  {'  '}
                  <span className="text-accent">domain</span>: <span className="text-ink">'Product Engineering'</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">based</span>: <span className="text-ink">'Tamil Nadu, India'</span>,{'\n'}
                  {'}'}
                </code>
              </pre>

              <figcaption className="flex items-center gap-2 border-t border-line px-4 py-3 text-xs text-faint">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.location}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 sm:mt-16 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-mono text-3xl font-medium tracking-tight text-ink">
                    {stat.value}
                  </span>
                  {stat.suffix ? (
                    <span className="ml-1 font-mono text-sm text-accent">{stat.suffix}</span>
                  ) : null}
                  <span className="mt-2 block text-xs leading-relaxed text-faint">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
