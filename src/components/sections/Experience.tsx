import { experience } from '../../content/experience'
import { RichText } from '../ui/RichText'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SelectedWork } from './SelectedWork'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="02 — Experience" title="Seven years of building and modernising.">
            Hands-on across web, mobile and cloud, from feature delivery to the migrations,
            framework upgrades and tooling that keep large systems maintainable.
          </SectionHeading>
        </Reveal>

        <ol className="relative mt-12 space-y-14 border-l border-line pl-7 sm:pl-10">
          {experience.map((company, companyIndex) => (
            <Reveal as="li" key={company.name} className="relative" delay={companyIndex * 0.05}>
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.75rem+4px)] top-2 size-2 rounded-full bg-accent ring-4 ring-accent-soft sm:-left-[calc(2.5rem+4px)]"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{company.name}</h3>
                <p className="font-mono text-xs text-faint">{company.period}</p>
              </div>
              <p className="mt-1 text-xs text-faint">{company.location}</p>

              <div className="mt-6 space-y-7">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-sm font-medium text-ink">{role.title}</h4>
                      {role.note ? (
                        <span className="rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                          {role.note}
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-3 space-y-2.5">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-line-strong"
                          />
                          <p className="text-sm leading-relaxed text-muted">
                            <RichText text={highlight} />
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        <SelectedWork />
      </div>
    </section>
  )
}
