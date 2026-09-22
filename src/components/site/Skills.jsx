import { skills } from '@/content/profile'
import { Frame, Gate, Scene, Title } from './primitives'

export function Skills() {
  return (
    <Scene id="stack" lamp="22 30 124" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="px-6 py-9 md:px-10 md:py-14 lg:w-[84%]">
          <Title slate={`${skills.length} groups`}>What I know</Title>

          <dl className="mt-9 grid border-t rule-plate md:mt-12 md:grid-cols-2 md:gap-x-12">
            {skills.map((group) => (
              <div key={group.group} className="flex flex-col gap-1.5 border-b rule-plate py-5 md:py-6">
                <dt className="t-title text-[17px] md:text-[18px]">{group.group}</dt>
                <dd className="t-body max-w-[52ch] text-[14.5px] text-ink-soft md:text-[15px]">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </Gate>
      </Frame>
    </Scene>
  )
}
