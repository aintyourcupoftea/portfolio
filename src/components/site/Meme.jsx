import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, RefreshCw } from 'lucide-react'
import { meme } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Reveal, Section } from './primitives'

const ease = [0.16, 1, 0.3, 1]

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

  return (
    <Section id="meme" className="grid items-center gap-8 pt-14 md:grid-cols-12 md:gap-16 md:pt-24">
      <Reveal className="flex flex-col gap-5 md:col-span-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:text-xs">r/ProgrammerHumor</p>
        <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg-strong md:text-4xl">
          {meme.heading}
        </h2>
        <p className="text-[15px] leading-relaxed text-muted md:text-base">{meme.caption}</p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={refresh}
            disabled={loading}
            className="inline-flex h-12 items-center gap-2.5 rounded bg-accent px-5 text-[15px] font-semibold text-accent-fg transition-transform hover:bg-accent/90 active:translate-y-px disabled:opacity-70"
          >
            <RefreshCw size={16} strokeWidth={2} className={cn(loading && 'animate-spin')} />
            {loading ? 'Fetching' : 'Another one'}
          </button>
          <a
            href={meme.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-1.5 px-2 text-sm font-medium text-fg-soft transition-colors hover:text-fg"
          >
            Source on GitHub
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-7">
        <div
          className="relative overflow-hidden rounded-xl border border-tint-border bg-tint"
          style={{
            backgroundImage: 'radial-gradient(rgb(var(--accent) / 0.22) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        >
          <div className="relative h-[400px] md:h-[560px]">
            <AnimatePresence initial={false}>
              {shown !== null && (
                <motion.img
                  key={shown}
                  src={src(shown)}
                  alt="Top post on r/ProgrammerHumor"
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute inset-0 h-full w-full object-contain p-5 md:p-8 [filter:drop-shadow(0_24px_40px_rgb(var(--accent)/0.28))]"
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
              <div className="absolute inset-5 animate-pulse rounded-lg bg-surface/70 md:inset-8" aria-hidden="true" />
            )}

            {failed && shown === null && (
              <p className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm text-muted">
                Reddit is not cooperating right now. Try again in a moment.
              </p>
            )}
          </div>
          <p role="status" aria-live="polite" className="sr-only">
            {loading ? 'Loading a new post' : failed ? 'Could not load a post' : 'Post loaded'}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
