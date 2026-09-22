import { experience } from '@/content/profile'
import { Panel, Readout } from './primitives'

export function Experience() {
  const current = experience.find((j) => j.current)
  return (
    <Panel id="log" heading="Mission log" readout={current ? `ACTIVE SINCE ${current.period.split(' - ')[0].toUpperCase()}` : undefined} className="pt-6 md:pt-8">
      <ol className="divide-y divide-seam">
        {experience.map((job) => (
          <li key={job.period} className="grid gap-5 px-5 py-7 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 md:px-8 md:py-9">
            <div className="flex flex-col gap-2.5">
              <Readout className={job.current ? 'legend-amber' : 'text-lamp-dim'}>{job.period.toUpperCase()}</Readout>
              <h3 className="font-display text-[24px] font-semibold uppercase leading-none tracking-[0.03em] text-lamp md:text-[26px]">
                {job.title}
              </h3>
              {(job.company || job.client) && (
                <p className="text-[15px] leading-snug text-lamp-soft">
                  {job.company}
                  {job.company && job.client && <br />}
                  {job.client}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <p className="max-w-[68ch] text-[16px] leading-relaxed text-lamp md:text-[17px]">{job.summary}</p>
              {job.highlights.length > 0 && (
                <ul className="flex flex-col gap-2.5 text-[15px] leading-normal text-lamp-soft md:gap-3">
                  {job.highlights.map((h) => (
                    <li key={h} className="grid grid-cols-[16px_minmax(0,1fr)] gap-x-3">
                      <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 rounded-[1px] bg-lamp-dim" />
                      <span className="max-w-[70ch]">{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.note && (
                <p className="border-t border-seam pt-4 text-[14px] text-lamp-dim">
                  {job.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
