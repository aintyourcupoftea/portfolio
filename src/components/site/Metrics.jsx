import { metrics } from '@/content/profile'
import { Reveal, Section } from './primitives'

export function Metrics() {
  return (
    <Section>
      <div className="grid gap-6 border-t border-border py-7 md:grid-cols-3 md:gap-12 md:py-10 md:pb-12">
        {metrics.map((m, i) => (
          <Reveal key={m.value} delay={i * 0.08} className="flex flex-col gap-2">
            <div className="font-mono text-4xl font-medium tracking-[-0.02em] text-fg-strong md:text-[44px]">{m.value}</div>
            <p className="text-sm leading-snug text-muted md:text-[15px]">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
