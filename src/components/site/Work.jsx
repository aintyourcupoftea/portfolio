import { work } from '@/content/profile'
import { Panel, Readout, TextLink } from './primitives'

// Flight records: one ruled row per project. The right-hand readout says who it
// was for and whether the code is public; client work carries no link.
export function Work() {
  return (
    <Panel id="records" heading="Flight records" readout={`${work.length} RECORDS`} className="pt-6 md:pt-8">
      <ol className="divide-y divide-seam">
        {work.map((item) => (
          <li
            key={item.title}
            className="grid gap-x-10 gap-y-3 px-5 py-6 md:grid-cols-[260px_minmax(0,1fr)] md:px-8 md:py-7 lg:grid-cols-[300px_minmax(0,1fr)_260px]"
          >
            <h3 className="font-display text-[22px] font-semibold uppercase leading-none tracking-[0.03em] text-lamp md:text-[24px]">
              {item.title}
            </h3>
            <div className="flex flex-col gap-3">
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-lamp-soft md:text-base">{item.description}</p>
              <p className="font-mono text-[10.5px] leading-relaxed tracking-[0.02em] text-lamp-dim">{item.tags.join(', ')}</p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 md:col-start-2 lg:col-start-3 lg:flex-col lg:items-end lg:justify-start">
              <Readout className="text-lamp-soft">{item.context.toUpperCase()}</Readout>
              {item.link ? (
                <TextLink href={item.link} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
                  {item.linkLabel}
                </TextLink>
              ) : (
                <Readout className="text-lamp-dim">CLIENT WORK · NO PUBLIC CODE</Readout>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
