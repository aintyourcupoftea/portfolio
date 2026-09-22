import { consoles } from '@/content/profile'
import { Panel, PowerOn, Readout } from './primitives'

// Five consoles, one per discipline. A ruled list, not cards: the discipline is
// the job, the brief is how he works it, the right-hand readout is the position.
export function Consoles() {
  return (
    <Panel id="consoles" heading="Consoles" readout={`${consoles.length} POSITIONS · ALL STAFFED`} className="pt-14 md:pt-24">
      <PowerOn as="ol" className="divide-y divide-seam">
        {consoles.map((c) => (
          <li
            key={c.callsign}
            className="grid gap-x-10 gap-y-3 px-5 py-6 md:grid-cols-[260px_minmax(0,1fr)] md:px-8 md:py-7 lg:grid-cols-[320px_minmax(0,1fr)_200px]"
          >
            <h3 className="font-display text-[22px] font-semibold uppercase leading-none tracking-[0.03em] text-lamp md:text-[24px]">
              {c.discipline}
            </h3>
            <div className="flex flex-col gap-3">
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-lamp-soft md:text-base">{c.brief}</p>
              <p className="font-mono text-[10.5px] leading-relaxed tracking-[0.02em] text-lamp-dim">{c.tools}</p>
            </div>
            <div className="flex items-baseline justify-between gap-4 md:col-start-2 lg:col-start-3 lg:flex-col lg:items-end lg:justify-start lg:gap-1.5">
              <Readout className="text-lamp-soft">POSITION {c.callsign}</Readout>
              <Readout className="inline-flex items-center gap-2 text-lamp-dim">
                <span aria-hidden="true" className="lamp" />
                STAFFED
              </Readout>
            </div>
          </li>
        ))}
      </PowerOn>
    </Panel>
  )
}
