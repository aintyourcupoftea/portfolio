import { ArrowUpRight } from 'lucide-react'
import { certification, education } from '@/content/profile'
import { Frame, Gate, Scene, Slate } from './primitives'

// The quiet passage. The lamp only grazes this one: after four lit gates the
// page needs a breath, and these two facts are short enough to read in the dark.
export function Credentials() {
  return (
    <Scene id="credentials" lamp="78 44 146" className="pb-16 md:pb-24">
      <Frame>
        <Gate dim className="grid md:grid-cols-2">
          <div className="flex flex-col gap-4 px-6 py-10 md:px-10 md:py-14">
            <Slate className="text-lit-faint">Certification · {certification.date}</Slate>
            <h2 className="t-head max-w-[22ch] text-[24px] text-lamp md:text-[28px]">{certification.name}</h2>
            <p className="t-body text-[15px] text-lit-soft">Issued by {certification.issuer}, verifiable on Credly.</p>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="t-slate group inline-flex min-h-11 items-center gap-1.5 self-start text-[10.5px] text-lit-soft underline decoration-lit/25 decoration-1 underline-offset-[5px] transition-colors hover:text-lamp hover:decoration-lamp md:text-[11px]"
            >
              View credential
              <ArrowUpRight size={13} strokeWidth={2.25} className="transition-transform group-hover:translate-x-px" />
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t rule-hall px-6 py-10 md:border-l md:border-t-0 md:px-10 md:py-14">
            <Slate className="text-lit-faint">Education · {education.detail.split(', ')[0].replace('Graduated ', '')}</Slate>
            <h2 className="t-head max-w-[18ch] text-[26px] text-lamp md:text-[32px]">{education.degree}</h2>
            <p className="t-body text-[15px] text-lit-soft">{education.school}</p>
            <Slate className="text-lit-faint">{education.detail}</Slate>
          </div>
        </Gate>
      </Frame>
    </Scene>
  )
}
