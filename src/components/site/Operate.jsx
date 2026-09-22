import { disciplines } from '@/content/profile'
import { Frame, Gate, Scene, Slate, Title } from './primitives'

// What he operates: five disciplines, each one a ruled row of the same gate.
export function Operate() {
  return (
    <Scene id="operate" lamp="26 32 124" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="px-6 py-9 md:px-10 md:py-14 lg:w-[93%]">
          <Title slate={`${disciplines.length} disciplines`}>What I operate</Title>

          <ul className="mt-9 flex flex-col border-t rule-plate md:mt-12">
            {disciplines.map((d) => (
              <li
                key={d.discipline}
                className="grid gap-x-8 gap-y-2.5 border-b rule-plate py-6 md:py-8 lg:grid-cols-12"
              >
                <h3 className="t-title text-[20px] md:text-[23px] lg:col-span-4">{d.discipline}</h3>
                <p className="t-body max-w-[68ch] text-[15px] text-ink-soft md:text-[16px] lg:col-span-6">
                  {d.brief}
                </p>
                <Slate className="text-ink-faint lg:col-span-2 lg:text-right">{d.tools}</Slate>
              </li>
            ))}
          </ul>
        </Gate>
      </Frame>
    </Scene>
  )
}
