import { ArrowUpRight } from 'lucide-react'
import { mediumProfile, posts } from '../../content/writing'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="05 — Writing" title="Notes from building systems.">
            Occasional write-ups on databases, security and infrastructure — published on Medium.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.url} delay={index * 0.05} className="h-full">
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.title} on Medium (opens in a new tab)`}
                className="card card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <time
                    dateTime={post.published}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                  >
                    {post.date}
                  </time>
                  <ArrowUpRight
                    className="size-4 text-faint transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-ink">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{post.excerpt}</p>

                <ul
                  className="mt-auto flex flex-wrap gap-1.5 pt-6"
                  aria-label={`${post.title} topics`}
                >
                  {post.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={mediumProfile.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            Read all posts on Medium
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
