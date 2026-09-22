import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { meme } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Frame, Gate, Key, OutLink, Scene, Slate, Title } from './primitives'

// The one scene where the gate throws something other than his own work.
// The API serves a fresh image per request; a changing query string bypasses
// the cache. `shown` is the image on screen, `pending` the one loading behind
// it, so a refresh changes over without a blank frame.
export function Meme() {
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
    <Scene id="feed" lamp="58 38 118" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="px-6 py-9 md:px-10 md:py-14 lg:mx-auto lg:w-[90%]">
          <Title slate={failed ? 'No signal' : loading ? 'Acquiring' : 'Live'}>{meme.heading}</Title>

          <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <p className="t-body max-w-[46ch] text-[15px] text-ink-soft md:text-[16px]">{meme.caption}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Key type="button" onClick={refresh} disabled={loading}>
                  <RefreshCw size={15} strokeWidth={2.25} className={cn(loading && 'animate-spin')} />
                  {loading ? 'Fetching' : 'Another one'}
                </Key>
                <OutLink href={meme.repo} target="_blank" rel="noopener noreferrer">
                  Source on GitHub
                </OutLink>
              </div>
            </div>

            {/* What the gate is showing right now. */}
            <figure className="relative flex min-h-[380px] items-center justify-center bg-ink/[0.06] p-4 md:min-h-[540px] md:p-7 lg:col-span-8">
              {shown !== null && (
                <img
                  key={shown}
                  src={src(shown)}
                  alt="Top post on r/ProgrammerHumor"
                  className="max-h-[340px] w-auto max-w-full object-contain md:max-h-[490px]"
                />
              )}

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
                <Slate className="text-ink-faint" aria-hidden="true">
                  Acquiring signal
                </Slate>
              )}

              {failed && shown === null && (
                <p className="t-body max-w-[32ch] text-center text-[15px] text-ink-soft">
                  Reddit is not answering right now. Try again in a moment.
                </p>
              )}

              <figcaption className="sr-only" role="status" aria-live="polite">
                {loading ? 'Loading a new post' : failed ? 'Could not load a post' : 'Post loaded'}
              </figcaption>
            </figure>
          </div>
        </Gate>
      </Frame>
    </Scene>
  )
}
