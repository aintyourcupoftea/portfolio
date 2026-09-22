import { profile } from '@/content/profile'
import { MissionClock } from './Nav'

export function Footer() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: `mailto:${profile.email}` },
  ]
  return (
    <footer className="mt-14 border-t border-seam md:mt-24">
      <div className="mx-auto flex max-w-site flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-lamp">{profile.name}</span>
          <span className="text-[13px] text-lamp-dim">{profile.role}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-[14px] font-medium uppercase tracking-[0.08em] text-lamp-soft transition-colors hover:text-lamp"
            >
              {l.label}
            </a>
          ))}
          <MissionClock className="inline-flex" />
        </div>
      </div>
    </footer>
  )
}
