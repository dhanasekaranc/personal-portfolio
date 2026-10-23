import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, type MouseEvent } from 'react'
import { profile } from '../../content/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

const NAV = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const SECTION_IDS = NAV.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])
  // The body scroll lock blocks fragment navigation on mobile, and the menu's exit
  // animation briefly restores the scroll position. Close first, then scroll once the
  // menu is gone.
  function handleMobileNav(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    document.body.style.overflow = ''
    setOpen(false)

    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(href)
      if (!target) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const top = target.getBoundingClientRect().top + window.scrollY - 88

      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
      window.history.pushState(null, '', href)
    }, 260)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label={`${profile.name} — back to top`}
          onClick={(event) => {
            if (open) handleMobileNav(event, '#top')
          }}
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-md border border-accent/30 bg-accent-soft font-mono text-[11px] font-semibold text-accent"
          >
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
            {profile.shortName}
          </span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-0.5 md:flex">
          {NAV.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-px transition-opacity ${
                    isActive ? 'bg-accent opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink md:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <nav aria-label="Sections" className="container-page flex flex-col py-3">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleMobileNav(event, item.href)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors ${
                    active === item.id ? 'bg-elevated text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-[10px] text-faint">
                    0{NAV.indexOf(item) + 1}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
