import { experience } from '@/content/profile'
import { Heading, Reveal, Section } from './primitives'

export function Experience() {
  return (
    <Section id="experience" className="flex flex-col gap-6 pt-14 md:gap-10 md:pt-24">
      <Heading>Experience</Heading>
      <div className="flex flex-col">
        {experience.map((job) => (
          <Reveal
            key={job.period}
            className="grid gap-4 border-t border-border py-6 pb-7 md:grid-cols-[300px_minmax(0,1fr)] md:gap-16 md:py-8 md:pb-10"
          >
            <div className="flex flex-col gap-2.5">
              <div className="font-mono text-xs text-accent md:text-[13px]">{job.period}</div>
              <div className="text-[19px] font-semibold text-fg-strong md:text-xl">{job.title}</div>
              {(job.company || job.client) && (
                <div className="text-sm leading-snug text-muted md:text-[15px]">
                  {job.company}
                  {job.company && job.client && <br />}
                  {job.client}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[15px] leading-relaxed text-fg-soft md:text-[17px]">{job.summary}</p>
              {job.highlights.length > 0 && (
                <ul className="flex flex-col gap-2.5 text-sm leading-normal text-muted md:gap-3 md:text-[15px]">
                  {job.highlights.map((h) => (
                    <li key={h} className="grid grid-cols-[14px_minmax(0,1fr)] gap-x-2.5 md:grid-cols-[16px_minmax(0,1fr)] md:gap-x-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-1.5 bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.note && <p className="text-[13px] text-muted md:text-sm">{job.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
