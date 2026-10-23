import { projects } from '../../content/projects'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="03 — Selected work" title="Platform-scale problems, measurable outcomes.">
            Client engagements across healthcare and data platforms. Details are intentionally
            anonymised — no client names, links or screenshots.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.06} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    {project.context}
                  </p>
                  <span aria-hidden="true" className="font-mono text-[11px] text-line-strong">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.summary}</p>

                <div className="mt-auto pt-6">
                  {project.metric ? (
                    <span className="mb-3 inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] text-accent">
                      {project.metric}
                    </span>
                  ) : null}
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
