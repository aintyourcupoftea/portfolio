import { Download } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { hero, profile } from '@/content/profile'
import { ButtonLink, Section } from './primitives'

const ease = [0.16, 1, 0.3, 1]

export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  })

  return (
    <Section id="top" className="grid items-center gap-10 pb-10 pt-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-16 md:pb-20 md:pt-[88px]">
      <div className="flex flex-col gap-6 md:gap-7">
        <motion.img
          {...enter(0)}
          src={profile.avatar}
          alt={profile.name}
          width="96"
          height="96"
          className="h-24 w-24 rounded-lg border border-border object-cover md:hidden"
        />
        <motion.p {...enter(0.05)} className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:text-xs">
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          {...enter(0.1)}
          className="text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-fg-strong md:text-[52px] md:leading-[1.02]"
        >
          {hero.headline}
        </motion.h1>
        <motion.p {...enter(0.18)} className="max-w-[560px] text-[17px] leading-normal text-muted md:text-[19px]">
          {hero.subtext}
        </motion.p>
        <motion.div {...enter(0.26)} className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:gap-3">
          <ButtonLink href={profile.resumeUrl} download="Amit_Gavali_Resume.pdf">
            <Download size={18} strokeWidth={2} />
            Download resume
          </ButtonLink>
          <ButtonLink variant="outline" href={`mailto:${profile.email}`}>
            Email me
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div {...enter(0.15)} className="hidden justify-end md:flex">
        <img
          src={profile.avatar}
          alt={profile.name}
          width="440"
          height="440"
          className="aspect-square w-full max-w-[360px] rounded-xl border border-border object-cover"
        />
      </motion.div>
    </Section>
  )
}
