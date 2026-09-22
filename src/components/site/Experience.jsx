import { experience } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Frame, Gate, Scene, Slate, Title } from './primitives'

// Where he has worked. The dense passage of the page: figures live inside the
// lines of the work, never as a slab of numbers.
export function Experience() {
  return (
    <Scene id="history" lamp="74 28 128" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="px-6 py-9 md:px-10 md:py-14 lg:ml-auto lg:w-[95%]">
          <Title slate="Since Jan 2025">Where I&apos;ve worked</Title>

          <div className="mt-9 flex flex-col border-t rule-plate md:mt-12">
            {experience.map((role) => (
              <article
                key={role.period}
                className="grid gap-x-10 gap-y-5 border-b rule-plate py-8 md:py-11 lg:grid-cols-12"
              >
                <header className="flex flex-col gap-2 lg:col-span-4">
                  <Slate className={cn(role.current ? 'live' : 'text-ink-faint')}>
                    {role.current && <span className="live-mark mr-2 align-middle" aria-hidden="true" />}
                    {role.period}
                  </Slate>
                  <h3 className="t-title text-[24px] md:text-[28px]">{role.title}</h3>
                  <div className="flex flex-col gap-0.5">
                    <span className="t-body text-[14px] text-ink-soft">{role.company}</span>
                    {role.client && <span className="t-body text-[14px] text-ink-faint">{role.client}</span>}
                  </div>
                </header>

                <div className="flex flex-col gap-5 lg:col-span-8">
                  <p className="t-lead max-w-[70ch] text-[16px] text-ink md:text-[17px]">{role.summary}</p>

                  {role.highlights.length > 0 && (
                    <ul className="flex flex-col gap-0">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="t-body max-w-[76ch] border-t rule-plate py-2.5 text-[14.5px] text-ink-soft md:text-[15px]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {role.note && (
                    <Slate className="text-ink-faint">
                      <span className="live-mark mr-2 align-middle" aria-hidden="true" />
                      {role.note}
                    </Slate>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Gate>
      </Frame>
    </Scene>
  )
}
