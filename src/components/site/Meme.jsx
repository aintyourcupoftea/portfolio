import { useState } from 'react'
import { ArrowUpRight, RefreshCw } from 'lucide-react'
import { meme } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Heading, Reveal, Section } from './primitives'

export function Meme() {
  // The API serves a fresh image per request; a changing query string bypasses the cache.
  const [nonce, setNonce] = useState(() => Date.now())
  const [state, setState] = useState('loading') // loading | ready | failed

  const refresh = () => {
    setState('loading')
    setNonce(Date.now())
  }

  return (
    <Section id="meme" className="flex flex-col gap-6 pt-14 md:gap-10 md:pt-24">
      <div className="flex flex-col gap-3">
        <Heading>{meme.heading}</Heading>
        <p className="text-sm text-muted md:text-[15px]">
          {meme.caption}{' '}
          <a
            href={meme.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-fg-soft underline underline-offset-[3px] hover:text-fg"
          >
            Source
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </p>
      </div>

      <Reveal className="flex flex-col gap-4 md:max-w-[640px]">
        <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
          {state === 'loading' && (
            <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-border/60" />
          )}
          {state === 'failed' ? (
            <p className="px-6 py-16 text-center text-sm text-muted">
              Reddit is not cooperating right now. Try again in a moment.
            </p>
          ) : (
            <img
              key={nonce}
              src={`${meme.imageUrl}?t=${nonce}`}
              alt="Top post on r/ProgrammerHumor"
              className={cn('mx-auto block max-h-[640px] w-auto max-w-full transition-opacity duration-300', state === 'ready' ? 'opacity-100' : 'opacity-0')}
              style={{ minHeight: state === 'ready' ? undefined : 320 }}
              onLoad={() => setState('ready')}
              onError={() => setState('failed')}
            />
          )}
        </div>
        <button
          type="button"
          onClick={refresh}
          disabled={state === 'loading'}
          className="inline-flex h-11 w-fit items-center gap-2 rounded border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-surface disabled:opacity-60"
        >
          <RefreshCw size={15} strokeWidth={2} className={cn(state === 'loading' && 'animate-spin')} />
          Another one
        </button>
      </Reveal>
    </Section>
  )
}
