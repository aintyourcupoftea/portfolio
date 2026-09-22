import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { board, hero, profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { ButtonLink, Readout, Section, ease } from './primitives'

const POLL_START = 700
const POLL_STEP = 150

// The GO poll: each row on the wall board answers in turn, and the legend
// catches twice before it holds, the way a backlit lamp does.
function WallBoard() {
  const reduce = useReducedMotion()
  const [lit, setLit] = useState(reduce ? board.length : 0)

  useEffect(() => {
    if (reduce) return
    const timers = board.map((_, i) =>
      setTimeout(() => setLit(i + 1), POLL_START + i * POLL_STEP)
    )
    return () => timers.forEach(clearTimeout)
  }, [reduce])

  return (
    <div className="well w-full rounded-lg border border-seam">
      <div className="flex items-baseline justify-between border-b border-seam px-4 py-3 md:px-5">
        <Readout className="text-lamp-soft">SYSTEMS POLL</Readout>
        <Readout>
          {lit}/{board.length} <span className="phosphor">GO</span>
        </Readout>
      </div>
      <ol className="divide-y divide-seam/70" aria-label="Systems Amit operates">
        {board.map((row, i) => {
          const on = i < lit
          return (
            <li
              key={row.system}
              className={cn(
                'grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-4 py-3 md:px-5 md:py-[15px] lg:grid-cols-[168px_minmax(0,1fr)_auto]',
                on ? 'lamp-on' : 'opacity-25'
              )}
            >
              <span className="hidden font-mono text-[10.5px] tracking-[0.02em] text-lamp-dim lg:block">
                {row.domain}
              </span>
              <span
                className={cn(
                  'font-display text-[17px] font-medium leading-tight tracking-[0.01em] md:text-[19px]',
                  row.current ? 'text-lamp' : 'text-lamp-soft'
                )}
              >
                {row.system}
                <span className="block font-mono text-[10.5px] tracking-[0.02em] text-lamp-dim lg:hidden">{row.domain}</span>
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.08em]',
                  on ? cn('flicker-on', row.current ? 'legend-amber' : 'phosphor') : 'text-lamp-dim'
                )}
                aria-label={on ? (row.current ? 'On console' : 'Go') : 'Polling'}
              >
                {on && <span aria-hidden="true" className={cn('lamp', row.current && 'lamp-amber')} />}
                {on ? (row.current ? 'ON CONSOLE' : 'GO') : '····'}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <Section
      id="top"
      className="grid gap-8 pb-12 pt-6 md:pt-8 lg:min-h-[calc(100vh-64px)] lg:grid-cols-12 lg:gap-x-10 lg:pb-14 xl:gap-x-12"
    >
      {/* The operator: a full-height plate that owns its column, the name set over him */}
      <motion.figure
        {...enter(0.05)}
        className="well relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-lg border border-seam sm:min-h-[600px] lg:col-span-5 lg:min-h-0"
      >
        <img
          src={profile.portrait}
          alt={`${profile.name} at night`}
          width="520"
          height="780"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="relative flex flex-col gap-4 px-5 pb-5 pt-40 md:px-7 md:pb-7">
          <h1 className="font-display text-[clamp(3.5rem,13vw,5.25rem)] font-semibold uppercase leading-[0.9] tracking-[0.01em] text-lamp lg:text-[clamp(3.75rem,5.4vw,5.5rem)]">
            {hero.headline}
          </h1>
          <p className="font-display text-[22px] font-medium uppercase leading-tight tracking-[0.04em] text-lamp md:text-[24px]">
            {hero.role}
          </p>
        </div>
        <figcaption className="relative flex items-center justify-between gap-4 border-t border-seam/80 bg-well/85 px-4 py-2.5 backdrop-blur-sm md:px-5">
          <Readout className="text-lamp-soft"><span className="sm:hidden">DEUTSCHE BÖRSE · C7-SCS</span><span className="hidden sm:inline">DEUTSCHE BÖRSE C7-SCS · VIA TCS</span></Readout>
          <Readout className="legend-amber inline-flex items-center gap-2">
            <span aria-hidden="true" className="lamp lamp-amber" />
            ON CONSOLE
          </Readout>
        </figcaption>
      </motion.figure>

      {/* The wall behind him: the board, then the lede and the actions beneath it */}
      <div className="flex flex-col justify-between gap-8 lg:col-span-7 lg:gap-10">
        <motion.div {...enter(0.2)}>
          <WallBoard />
        </motion.div>

        <div className="panel grid gap-6 rounded-lg border border-seam px-5 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10 md:px-7 md:py-6">
          <div className="flex flex-col gap-3">
            <motion.p {...enter(0.3)} className="font-mono text-[11px] leading-relaxed tracking-[0.04em] text-lamp-soft md:text-xs">
              {hero.certified}
            </motion.p>
            <motion.p {...enter(0.34)} className="max-w-[58ch] text-[16px] leading-relaxed text-lamp-soft md:text-[17px]">
              {hero.lede}
            </motion.p>
          </div>
          <motion.div {...enter(0.4)} className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3 md:flex-col md:items-stretch">
            <ButtonLink href="#consoles">Start the sequence</ButtonLink>
            <ButtonLink variant="outline" href={profile.resumeUrl} download="Amit_Gavali_Resume.pdf">
              <Download size={17} strokeWidth={2} />
              Download resume
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
