import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  children?: ReactNode
  id?: string
  titleClassName?: string
}

export function SectionHeading({ eyebrow, title, children, id, titleClassName }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl ${titleClassName ?? ''}`}
      >
        {title}
      </h2>
      {children ? <div className="mt-4 text-base leading-relaxed text-muted">{children}</div> : null}
    </div>
  )
}
