import { profile } from '../../content/profile'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="01 — About" title="Full stack, from interface to infrastructure." />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
            <Reveal>
              <p>{profile.intro}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                I&apos;m looking for a full stack engineering role where infrastructure is part
                of the job — owning a feature from the React component down to the Kubernetes
                workload, rather than handing it off at the boundary.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card p-6">
              <p className="eyebrow">Focus</p>
              <ul className="mt-4 divide-y divide-line">
                {profile.focus.map((item, index) => (
                  <li key={item} className="flex items-baseline gap-4 py-3">
                    <span className="font-mono text-[10px] text-accent">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Based in
                </p>
                <p className="mt-1.5 text-sm text-ink">{profile.location}</p>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Currently
                </p>
                <p className="mt-1.5 text-sm text-ink">
                  Senior Consultant Developer · Thoughtworks
                </p>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Open to
                </p>
                <p className="mt-1.5 text-sm text-ink">
                  Full stack engineer roles with infrastructure ownership
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
