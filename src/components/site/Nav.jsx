import { useEffect, useState } from 'react'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { useActiveScene } from './light'

const scenes = [
  { id: 'top', label: 'Top' },
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
    <div className={cn('t-slate flex items-baseline gap-3 text-[10px] sm:gap-4 sm:text-[10.5px]', className)}>
      {zones.map((z, i) => (
        <span key={z.label} className={cn('flex items-baseline gap-1.5', i > 0 && 'hidden sm:flex')}>
          <span className="text-lit-faint">{z.label}</span>
          <time dateTime={now.toISOString()} className="tabular-nums text-lamp">
            {formatClock(now, z.timeZone)}
          </time>
        </span>
      ))}
    </div>
  )
}

// The scene strip: one unbroken line along the bottom edge that scales instead
// of wrapping, at every width, always saying where the lamp is now.
export function SceneStrip() {
  const active = useActiveScene()
  return (
    <nav
      aria-label="Scenes"
      className="fixed inset-x-0 bottom-0 z-30 border-t rule-hall bg-hall-deep"
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-4 md:px-8">
        {scenes.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={active === s.id ? 'true' : undefined}
            className={cn(
              't-slate flex min-h-11 items-center gap-1.5 whitespace-nowrap text-[9px] leading-none transition-colors duration-300 sm:gap-2 sm:text-[10.5px]',
              active === s.id ? 'text-lamp' : 'text-lit-faint hover:text-lit'
            )}
          >
            <span
              className={cn('live-mark transition-opacity', active === s.id ? 'opacity-100' : 'opacity-0')}
              aria-hidden="true"
            />
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export function Nav() {
  return (
    <header className="sticky top-0 z-20">
      <div className="bg-gradient-to-b from-hall via-hall/95 to-hall/0 pb-3">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 md:px-8">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="t-control whitespace-nowrap text-[14px] text-lit sm:text-[15px]">{profile.name}</span>
            <span className="t-slate hidden text-[10px] text-lit-faint sm:inline">{profile.location}</span>
          </a>
          <Clock />
        </div>
      </div>
    </header>
  )
}
