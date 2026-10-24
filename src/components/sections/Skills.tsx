import { skills } from '../../content/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="04 — Toolkit" title="Tools I reach for." titleClassName="font-bold" />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="accent-glow pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 opacity-60 blur-2xl"
          />

          <div className="relative divide-y divide-line border-y border-line">
            {skills.map((group, index) => (
              <Reveal key={group.label} delay={Math.min(index * 0.04, 0.2)}>
                <div className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <h3 className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase leading-6 tracking-[0.14em] text-ink">
                    <span aria-hidden="true" className="h-3 w-0.5 rounded-full bg-accent" />
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-[12px] font-medium tracking-[0.02em] text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent-soft hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
