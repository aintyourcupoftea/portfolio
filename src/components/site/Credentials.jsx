import { ArrowUpRight } from 'lucide-react'
import { certification, education } from '@/content/profile'
import { Reveal, Section } from './primitives'

export function Credentials() {
  return (
    <Section id="credentials" className="grid gap-7 pt-14 md:grid-cols-2 md:gap-16 md:pt-24">
      <Reveal className="flex flex-col gap-3 border-t border-border pt-6 md:gap-4 md:pt-8">
        <div className="text-[13px] text-muted md:text-sm">Certification</div>
        <h3 className="text-[19px] font-semibold leading-tight text-fg-strong md:text-[22px]">{certification.name}</h3>
        <div className="font-mono text-xs text-muted md:text-[13px]">
          {certification.issuer}, {certification.date}
        </div>
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex h-11 w-full items-center justify-center gap-2 rounded border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-surface md:mt-2 md:w-fit"
        >
          View credential on Credly
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </Reveal>
      <Reveal delay={0.08} className="flex flex-col gap-3 border-t border-border pt-6 md:gap-4 md:pt-8">
        <div className="text-[13px] text-muted md:text-sm">Education</div>
        <h3 className="text-[19px] font-semibold leading-tight text-fg-strong md:text-[22px]">
          {education.degree}
          <br className="hidden md:block" />
          <span className="md:hidden">, </span>
          {education.school}
        </h3>
        <div className="font-mono text-xs text-muted md:text-[13px]">{education.detail}</div>
      </Reveal>
    </Section>
  )
}
