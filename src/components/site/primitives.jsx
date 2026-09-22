import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Nothing here encloses anything. A Scene is a stretch of the hall; a Gate is
// the lit plate inside it; rows are separated by hairline rules, never boxes.

export function Scene({ id, lamp = '64 22 118', className, children }) {
  return (
    <section id={id} data-scene={id} data-lamp={lamp} className={cn('relative', className)}>
      {children}
    </section>
  )
}

export function Frame({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-site px-5 md:px-8', className)}>{children}</div>
}

// The gate: a lit plate, keystoned a hair off the lamp's throw axis the way a
// projected rectangle never lands perfectly square on a wall.
export function Gate({ dim = false, keystone = true, className, children }) {
  return (
    <div
      data-plate=""
      className={cn('plate', dim && 'plate-dim', className)}
      style={keystone ? { transform: 'perspective(2600px) rotateY(-0.5deg)' } : undefined}
    >
      {children}
    </div>
  )
}

// A scene's title, set as ink in the light. No kicker above it: it carries
// its own weight, and the slate line sits beneath.
export function Title({ children, slate, className }) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-x-8 gap-y-3', className)}>
      <h2 className="t-head text-balance break-words text-[28px] md:text-[42px] lg:text-[52px]">{children}</h2>
      {slate && <Slate className="pb-1.5 opacity-70">{slate}</Slate>}
    </div>
  )
}

// Slate data: a count, a period, a state, a tool list. Never a sentence.
export function Slate({ className, children, ...props }) {
  return (
    <span className={cn('t-slate block text-[10.5px] leading-[1.7] md:text-[11px]', className)} {...props}>
      {children}
    </span>
  )
}

export function Key({ as: Tag = 'button', quiet = false, className, children, ...props }) {
  return (
    <Tag className={cn(quiet ? 'key-quiet' : 'key', 't-control text-[14px] md:text-[15px]', className)} {...props}>
      {children}
    </Tag>
  )
}

export function OutLink({ className, children, ...props }) {
  return (
    <a
      className={cn(
        't-slate group inline-flex min-h-11 items-center gap-1.5 text-[10.5px] text-ink-soft underline decoration-ink/25 decoration-1 underline-offset-[5px] transition-colors hover:text-signal-ink hover:decoration-signal-ink md:text-[11px]',
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight size={13} strokeWidth={2.25} className="transition-transform group-hover:translate-x-px" />
    </a>
  )
}
