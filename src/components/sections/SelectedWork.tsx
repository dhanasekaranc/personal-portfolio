import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { projects } from '../../content/projects'
import { Reveal } from '../ui/Reveal'

export function SelectedWork() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-14">
      <Reveal>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="selected-work"
          className="flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-elevated px-5 py-4 text-left transition-colors hover:border-line-strong"
        >
          <span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Selected work
            </span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {isOpen ? 'Collapse selected work' : 'Unfold selected work'}
            </span>
            <span className="mt-0.5 block text-xs leading-relaxed text-faint">
              {isOpen
                ? 'Showing all selected work. Collapse when you’re done.'
                : 'Need more detail on some of the work? Unfold to read the full write-up, outcome and stack.'}
            </span>
          </span>
          <ChevronDown
            className={`size-4 shrink-0 text-muted transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </Reveal>

      {isOpen ? (
        <div id="selected-work" className="mt-5 grid gap-5 sm:grid-cols-2">
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
      ) : null}
    </div>
  )
}
