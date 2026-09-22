import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/content/profile'
import { useTheme } from '@/hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-4 md:h-[72px] md:px-8">
        <a href="#top" className="text-base font-semibold tracking-[-0.01em] text-fg">
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-fg-soft transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded border border-border text-muted"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-4 py-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
