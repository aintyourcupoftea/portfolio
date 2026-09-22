import { skills } from '@/content/profile'
import { Heading, Reveal, Section } from './primitives'

export function Skills() {
  return (
    <Section id="skills" className="flex flex-col gap-6 pt-14 md:gap-10 md:pt-24">
      <Heading>Toolbox</Heading>
      <div className="grid gap-5 border-t border-border pt-6 md:grid-cols-2 md:gap-x-16 md:gap-y-9 md:pt-8">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={(i % 2) * 0.06}
            className="flex flex-col gap-1 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:items-baseline md:gap-6"
          >
            <div className="text-sm font-semibold text-fg-strong md:text-[15px]">{s.group}</div>
            <p className="text-sm leading-relaxed text-muted md:text-[15px]">{s.items}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
