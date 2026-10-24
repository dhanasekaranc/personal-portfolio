import { BadgeCheck, GraduationCap } from 'lucide-react'
import { certifications, education } from '../../content/education'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="06 — Background" title="Education and credentials." />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                <GraduationCap className="size-3.5" aria-hidden="true" />
                Education
              </h3>
            </Reveal>

            {education.map((item) => (
              <Reveal key={item.degree} delay={0.05}>
                <article className="card mt-4 p-6">
                  <h4 className="text-base font-semibold text-ink">{item.degree}</h4>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line pt-4 text-xs text-faint">
                    <span>{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Certifications
              </h3>
            </Reveal>

            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((certification, index) => (
                <Reveal as="li" key={certification.name} delay={0.05 + index * 0.04}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
                    <div>
                      <p className="text-sm font-medium text-ink">{certification.name}</p>
                      <p className="mt-0.5 text-xs text-muted">{certification.issuer}</p>
                    </div>
                    <p className="font-mono text-[11px] text-faint">{certification.period}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
