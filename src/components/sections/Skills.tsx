import { skills } from '../../content/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="04 — Toolkit" title="Tools I reach for.">
            A working set built over seven years of shipping — frontend, backend, data and the
            infrastructure that runs it.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal
              key={group.label}
              delay={Math.min(index * 0.04, 0.2)}
              className={
                index === skills.length - 1 && skills.length % 2 === 1 ? 'md:col-span-2' : undefined
              }
            >
              <div className="border-t border-line pt-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
