import { certification, education } from '@/content/profile'
import { Panel, Readout, TextLink } from './primitives'

export function Credentials() {
  return (
    <Panel id="credentials" heading="Certification and education" readout={`CREDLY · ${certification.date.toUpperCase()}`} className="pt-6 md:pt-8">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col gap-3 border-b border-seam px-5 py-6 md:border-b-0 md:border-r md:px-8 md:py-8">
          <h3 className="max-w-[26ch] font-display text-[26px] font-semibold uppercase leading-[0.95] tracking-[0.03em] text-lamp md:text-[30px]">
            {certification.name}
          </h3>
          <p className="text-[15px] text-lamp-soft">
            {certification.issuer}, {certification.date}. Verifiable on Credly.
          </p>
          <Readout className="text-lamp-dim">CREDENTIAL · VERIFIABLE ON CREDLY</Readout>
          <TextLink href={certification.link} target="_blank" rel="noopener noreferrer" className="mt-1">
            View credential
          </TextLink>
        </div>
        <div className="flex flex-col gap-3 px-5 py-6 md:px-8 md:py-8">
          <h3 className="max-w-[26ch] font-display text-[26px] font-semibold uppercase leading-[0.95] tracking-[0.03em] text-lamp md:text-[30px]">
            {education.degree}
          </h3>
          <p className="text-[15px] text-lamp-soft">{education.school}</p>
          <Readout>{education.detail.toUpperCase()}</Readout>
        </div>
      </div>
    </Panel>
  )
}
