import { work } from '@/content/profile'
import { Frame, Gate, OutLink, Scene, Slate, Title } from './primitives'

// What he has built. Client work is named and described but never linked:
// there is no public repository for it, and inventing one would be a lie.
export function Work() {
  return (
    <Scene id="built" lamp="32 30 126" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="px-6 py-9 md:px-10 md:py-12">
          <Title slate={`${work.length} records`}>What I&apos;ve built</Title>

          <ul className="mt-9 flex flex-col border-t rule-plate md:mt-12">
            {work.map((item) => (
              <li
                key={item.title}
                className="grid gap-x-8 gap-y-3 border-b rule-plate py-6 md:py-8 lg:grid-cols-12"
              >
                <div className="flex flex-col gap-1.5 lg:col-span-4">
                  <h3 className="t-title text-[20px] md:text-[23px]">{item.title}</h3>
                  <Slate className="text-ink-faint">{item.context}</Slate>
                </div>

                <div className="flex flex-col gap-2.5 lg:col-span-5">
                  <p className="t-body max-w-[66ch] text-[15px] text-ink-soft md:text-[16px]">
                    {item.description}
                  </p>
                  <Slate className="text-ink-faint">{item.tags.join(' · ')}</Slate>
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  {item.link ? (
                    <OutLink href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.linkLabel || 'Source on GitHub'}
                    </OutLink>
                  ) : (
                    <Slate className="pt-1 text-ink-faint">Client work · no public code</Slate>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Gate>
      </Frame>
    </Scene>
  )
}
