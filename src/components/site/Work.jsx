import { ArrowUpRight } from 'lucide-react'
import { work } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Heading, Reveal, Section, Tag } from './primitives'

const tones = {
  accent: {
    tile: 'border-accent/30 bg-accent/10',
    text: 'text-fg-soft',
    tag: 'border-accent/35 text-fg-soft',
  },
  tint: {
    tile: 'border-tint-border bg-tint',
    text: 'text-fg-soft',
    tag: 'border-tint-border text-fg-soft',
  },
  plain: {
    tile: 'border-border bg-surface',
    text: 'text-muted',
    tag: 'border-border text-muted',
  },
}

export function Work() {
  return (
    <Section id="work" className="flex flex-col gap-6 pt-14 md:gap-10 md:pt-24">
      <Heading>Selected work</Heading>
      <div className="grid gap-3 md:grid-cols-3 md:gap-4">
        {work.map((item, i) => {
          const tone = tones[item.tone ?? 'plain']
          return (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.06}
              className={cn(
                'flex flex-col justify-between gap-4 rounded-lg border p-[22px] md:min-h-[260px] md:gap-6 md:p-7',
                tone.tile,
                item.size === 2 && 'md:col-span-2'
              )}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className={cn('font-semibold text-fg-strong', item.size === 2 ? 'text-[19px] md:text-[22px]' : 'text-lg md:text-xl')}>
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} on GitHub`}
                      className="-my-3 -mr-3 flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-fg"
                    >
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  )}
                </div>
                <p className={cn('text-sm leading-normal md:text-[15px]', tone.text)}>{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {item.tags.map((t) => (
                  <Tag key={t} className={tone.tag}>
                    {t}
                  </Tag>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
