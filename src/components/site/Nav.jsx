import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

const links = [
  { href: '#consoles', label: 'Consoles' },
  { href: '#log', label: 'Mission log' },
  { href: '#records', label: 'Flight records' },
  { href: '#systems', label: 'Systems' },
  { href: '#capcom', label: 'Contact' },
]

const zones = [
  { label: 'IST', timeZone: 'Asia/Kolkata' },
  { label: 'CET', timeZone: 'Europe/Berlin' },
]

function formatClock(date, timeZone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date)
}

// Mission clock: real time in Pune and Frankfurt. Ticks every second; the
// tabular mono keeps the digits from jittering.
export function MissionClock({ className }) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className={cn('well items-center gap-4 rounded border border-seam px-3 py-1.5 font-mono text-[11px] tracking-[0.02em] md:gap-5', className)}>
      {zones.map((z) => (
        <span key={z.label} className="flex items-baseline gap-1.5">
          <span className="text-lamp-dim">{z.label}</span>
          <time dateTime={now.toISOString()} className="phosphor tabular-nums">
            {formatClock(now, z.timeZone)}
          </time>
        </span>
      ))}
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-seam bg-room/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-site items-center justify-between gap-6 px-4 md:h-16 md:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-[17px] font-semibold uppercase tracking-[0.08em] text-lamp">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[10.5px] text-lamp-dim sm:inline">{profile.location}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[15px] font-medium uppercase tracking-[0.08em] text-lamp-soft transition-colors hover:text-lamp"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MissionClock className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded border border-seam text-lamp-dim transition-colors hover:text-lamp lg:hidden"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-seam bg-room px-4 py-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-lg font-medium uppercase tracking-[0.08em] text-lamp"
            >
              {l.label}
            </a>
          ))}
          <MissionClock className="my-3 inline-flex sm:hidden" />
        </div>
      )}
    </header>
  )
}
