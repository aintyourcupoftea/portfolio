import { skills } from '@/content/profile'
import { Panel } from './primitives'

export function Skills() {
  return (
    <Panel id="systems" heading="Systems board" readout={`${skills.length} GROUPS`} className="pt-6 md:pt-8">
      <dl className="grid md:grid-cols-2">
        {skills.map((s, i) => (
          <div
            key={s.group}
            className={[
              'flex flex-col gap-1.5 border-seam px-5 py-5 md:px-8 md:py-6',
              i > 0 ? 'border-t' : '',
              i === 1 ? 'md:border-t-0' : '',
              i % 2 === 1 ? 'md:border-l' : '',
            ].join(' ')}
          >
            <dt className="font-display text-[19px] font-semibold uppercase leading-none tracking-[0.04em] text-lamp">
              {s.group}
            </dt>
            <dd className="text-[15px] leading-relaxed text-lamp-soft">{s.items}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  )
}
