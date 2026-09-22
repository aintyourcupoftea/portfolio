import { certification, hero, platform, profile } from '@/content/profile'
import { Clock } from './Nav'
import { Frame, Gate, Key, Scene, Slate } from './primitives'

// The rail in the dark carries state and nothing else: where he is, what time
// it is there, what he is certified for, and what he is on right now. The
// tools themselves live in their own scene further down.
function Readout({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5 border-b rule-hall py-3.5">
      <Slate className="text-[10px] text-lit-faint">{label}</Slate>
      {children}
    </div>
  )
}

// The first viewport: a dark hall with one gate lit in it, and Amit in the light.
export function Hero() {
  return (
    <Scene id="top" lamp="62 26 132" className="pb-16 md:pb-24">
      <Frame className="grid items-stretch gap-10 pt-2 lg:min-h-[calc(100vh-9.5rem)] lg:grid-cols-12 lg:gap-12 lg:pt-2">
        <aside className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-4">
          <div className="flex flex-col border-t rule-hall">
            <Readout label="Based in">
              <span className="t-title text-[16px] text-lit">{profile.location}</span>
            </Readout>
            <Readout label="Local time">
              <Clock className="!text-[11px]" />
            </Readout>
            <Readout label="Certified">
              <span className="t-title text-balance text-[15px] leading-snug text-lit md:text-[16px]">
                {certification.name}
              </span>
            </Readout>
            <Readout label="On the platform now">
              <span className="t-title flex items-start gap-2.5 text-[16px] text-lamp">
                <span className="live-mark mt-2" aria-hidden="true" />
                {platform.name}
              </span>
              <Slate className="live text-[10px]">{platform.owner}</Slate>
            </Readout>
          </div>
        </aside>

        {/* The gate. */}
        <div className="order-1 flex lg:order-2 lg:col-span-8">
          <Gate className="grid w-full grid-cols-1 sm:grid-cols-12">
            <div className="flex flex-col justify-center gap-7 px-6 pb-9 pt-10 sm:col-span-7 md:gap-8 md:px-10 md:pb-12 md:pt-14 lg:col-span-7">
              <div className="flex flex-col gap-4">
                <h1 className="t-display text-[clamp(3.4rem,10.5vw,7rem)]">
                  {hero.headline.split(' ')[0]}
                  <br />
                  {hero.headline.split(' ').slice(1).join(' ')}
                </h1>
                <div className="flex flex-col gap-1.5 border-t rule-plate pt-3.5">
                  <span className="t-title text-[17px] text-ink md:text-[19px]">{hero.role}</span>
                  <span className="t-body max-w-[30ch] text-balance text-[13.5px] text-ink-faint md:max-w-[46ch] md:text-[14px]">
                    {hero.certified}
                  </span>
                </div>
              </div>

              <p className="t-lead max-w-[46ch] text-[15px] text-ink-soft md:text-[16px]">{hero.lede}</p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Key as="a" href="#operate">
                  Step into the light
                </Key>
                <Key as="a" quiet href={profile.resumeUrl} download>
                  Download resume
                </Key>
              </div>
            </div>

            <div className="relative order-first min-h-[340px] sm:order-none sm:col-span-5 sm:min-h-0">
              <img
                src={profile.portrait}
                alt={`${profile.name}, ${profile.role}`}
                width="1080"
                height="1440"
                className="absolute inset-0 h-full w-full object-cover object-[50%_12%]"
              />
              {/* The edge of the throw: the portrait dissolves back into the light. */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-plate to-transparent sm:hidden"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-plate to-transparent sm:block"
              />
            </div>
          </Gate>
        </div>
      </Frame>
    </Scene>
  )
}
