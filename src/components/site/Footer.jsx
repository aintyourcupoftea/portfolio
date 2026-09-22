import { profile } from '@/content/profile'
import { Clock } from './Nav'
import { Frame, Slate } from './primitives'

// After the last gate the hall goes dark again.
export function Footer() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'Resume', href: profile.resumeUrl },
  ]

  return (
    <footer className="relative z-[2] border-t rule-hall py-8">
      <Frame className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        <div className="flex flex-col gap-1">
          <span className="t-control text-[15px] text-lit">{profile.name}</span>
          <Slate className="text-lit-faint">
            {profile.role} · {profile.location}
          </Slate>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="t-slate min-h-11 text-[10.5px] leading-[44px] text-lit-soft transition-colors hover:text-lamp"
            >
              {l.label}
            </a>
          ))}
          <Clock />
        </div>
      </Frame>
    </footer>
  )
}
