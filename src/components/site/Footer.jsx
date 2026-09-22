import { profile } from '@/content/profile'

export function Footer() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: `mailto:${profile.email}` },
  ]
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
        <div>
          {profile.name}, {profile.role}
        </div>
        <div className="flex gap-5 md:gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
