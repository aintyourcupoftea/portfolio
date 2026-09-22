import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { useActiveScene } from './light'

// The scene strip: one unbroken line that scales instead of wrapping, and
// always says which scene the lamp is on.
const scenes = [
  { id: 'operate', label: 'Operate' },
  { id: 'history', label: 'History' },
  { id: 'built', label: 'Built' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
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
    hour12: false,
  }).format(date)
}

// Real time where he is and where the platform clears. Ticks under reduced
// motion too: it is information, not decoration.
export function Clock({ className }) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className={cn('t-slate flex items-baseline gap-4 text-[10.5px]', className)}>
      {zones.map((z) => (
        <span key={z.label} className="flex items-baseline gap-1.5">
          <span className="text-lit-faint">{z.label}</span>
          <time dateTime={now.toISOString()} className="tabular-nums text-lamp">
            {formatClock(now, z.timeZone)}
          </time>
        </span>
      ))}
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveScene()

  return (
    <header className="sticky top-0 z-30">
      <div className="bg-gradient-to-b from-hall via-hall/95 to-hall/0 pb-3">
        <nav className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 md:px-8">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="t-control text-[15px] text-lit">{profile.name}</span>
            <span className="t-slate hidden text-[10px] text-lit-faint sm:inline">{profile.location}</span>
          </a>

          <div className="hidden items-center lg:flex">
            {scenes.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                className={cn(
                  't-slate flex items-center gap-2 px-4 text-[10.5px] transition-colors duration-300',
                  i > 0 && 'border-l rule-hall',
                  active === s.id ? 'text-lamp' : 'text-lit-faint hover:text-lit'
                )}
              >
                {active === s.id && <span className="live-mark" aria-hidden="true" />}
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Clock className="hidden sm:flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center text-lit-soft transition-colors hover:text-lamp lg:hidden"
            >
              {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="bg-hall-deep px-5 pb-5 pt-1 lg:hidden">
          {scenes.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="t-control flex min-h-12 items-center border-b rule-hall text-[17px] text-lit"
            >
              {s.label}
            </a>
          ))}
          <Clock className="mt-4 sm:hidden" />
        </div>
      )}
    </header>
  )
}
