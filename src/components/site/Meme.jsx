import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { meme } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Button, Panel, PowerOn, Readout, TextLink, ease } from './primitives'

// Downlink: the one wall monitor showing something other than the platform.
export function Meme() {
  const reduce = useReducedMotion()
  // The API serves a fresh image per request; a changing query string bypasses the cache.
  // `shown` is the meme on screen, `pending` the one loading behind it, so refreshes crossfade.
  const [shown, setShown] = useState(null)
  const [pending, setPending] = useState(() => Date.now())
  const [failed, setFailed] = useState(false)
  const loading = pending !== null

  const refresh = () => {
    if (loading) return
    setFailed(false)
    setPending(Date.now())
  }

  const src = (nonce) => `${meme.imageUrl}?t=${nonce}`
  const signal = loading ? 'ACQUIRING' : failed ? 'NO SIGNAL' : 'LOCKED'

  return (
    <Panel
      id="downlink"
      heading="Downlink"
      readout={
        <>
          SIGNAL <span className={cn(failed ? 'text-fault' : loading ? 'legend-amber' : 'phosphor')}>{signal}</span>
        </>
      }
      className="pt-6 md:pt-8"
    >
      <div className="grid gap-8 px-5 py-6 md:px-8 md:py-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">
          <h3 className="font-display text-[26px] font-semibold uppercase leading-none tracking-[0.03em] text-lamp md:text-[30px]">
            {meme.heading}
          </h3>
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-lamp-soft md:text-base">{meme.caption}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            <Button type="button" onClick={refresh} disabled={loading}>
              <RefreshCw size={16} strokeWidth={2} className={cn(loading && 'animate-spin')} />
              {loading ? 'Fetching' : 'Another one'}
            </Button>
            <TextLink href={meme.repo} target="_blank" rel="noopener noreferrer">
              Source on GitHub
            </TextLink>
          </div>
        </div>

        <PowerOn className="min-w-0 lg:col-span-7">
          <div className="well relative overflow-hidden rounded-lg border border-seam">
            <div className="flex items-baseline justify-between border-b border-seam px-4 py-2.5">
              <Readout className="text-lamp-soft">r/ProgrammerHumor</Readout>
              <Readout className="hidden sm:inline">TOP POST · TODAY</Readout>
            </div>
            <div className="relative h-[380px] md:h-[520px]">
              <AnimatePresence initial={false}>
                {shown !== null && (
                  <motion.img
                    key={shown}
                    src={src(shown)}
                    alt="Top post on r/ProgrammerHumor"
                    initial={reduce ? false : { opacity: 0, filter: 'brightness(1.6)' }}
                    animate={{ opacity: 1, filter: 'brightness(1)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
                  />
                )}
              </AnimatePresence>

              {pending !== null && (
                <img
                  key={pending}
                  src={src(pending)}
                  alt=""
                  aria-hidden="true"
                  className="absolute h-px w-px opacity-0"
                  onLoad={() => {
                    setShown(pending)
                    setPending(null)
                  }}
                  onError={() => {
                    setPending(null)
                    setFailed(true)
                  }}
                />
              )}

              {shown === null && !failed && (
                <p className="legend-amber absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]" aria-hidden="true">
                  ACQUIRING SIGNAL
                </p>
              )}

              {failed && shown === null && (
                <p className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm text-lamp-dim">
                  Reddit is not answering right now. Try again in a moment.
                </p>
              )}
            </div>
          </div>
          <p role="status" aria-live="polite" className="sr-only">
            {loading ? 'Loading a new post' : failed ? 'Could not load a post' : 'Post loaded'}
          </p>
        </PowerOn>
      </div>
    </Panel>
  )
}
