import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ease = [0.16, 1, 0.3, 1]

// Powers a block on when it scrolls into view: a short lamp overshoot, then settle.
// Reserved for the few panels that earn an entrance; everything else is lit on arrival.
export function PowerOn({ as = 'div', delay = 0, className, children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, filter: 'brightness(0.5)' }}
      whileInView={reduce ? undefined : { opacity: [0, 1, 1], filter: ['brightness(0.5)', 'brightness(1.6)', 'brightness(1)'] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease, times: [0, 0.4, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-site px-4 md:px-8', className)}>
      {children}
    </section>
  )
}

// A console panel: the framed face every section sits on. The header row is
// the panel's legend strip: heading left, a mono readout right.
export function Panel({ id, heading, readout, className, children }) {
  return (
    <section
      id={id}
      className={cn('mx-auto w-full max-w-site px-4 md:px-8', className)}
    >
      <div className="panel rounded-lg border border-seam">
        <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-seam px-5 py-4 md:px-8 md:py-5">
          <Heading>{heading}</Heading>
          {readout && <Readout>{readout}</Readout>}
        </header>
        {children}
      </div>
    </section>
  )
}

export function Heading({ children, className }) {
  return (
    <h2
      className={cn(
        'font-display text-[26px] font-semibold uppercase leading-none tracking-[0.04em] text-lamp md:text-[32px]',
        className
      )}
    >
      {children}
    </h2>
  )
}

// A mono readout: small tabular data, never a sentence.
export function Readout({ className, children }) {
  return (
    <span className={cn('whitespace-nowrap font-mono text-[11px] tracking-[0.02em] text-lamp-dim md:text-xs', className)}>
      {children}
    </span>
  )
}

const buttonBase =
  'inline-flex h-12 items-center justify-center gap-2.5 rounded px-5 font-display text-[17px] font-semibold uppercase tracking-[0.06em] transition-[filter,background-color,border-color] duration-200 ease-out active:translate-y-px'

export function ButtonLink({ variant = 'primary', className, children, ...props }) {
  return (
    <a
      className={cn(
        buttonBase,
        variant === 'primary' && 'bg-go text-go-ink hover:brightness-110',
        variant === 'outline' &&
          'border border-seam-strong bg-console text-lamp hover:border-lamp-dim hover:brightness-125',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function Button({ variant = 'primary', className, children, ...props }) {
  return (
    <button
      className={cn(
        buttonBase,
        variant === 'primary' && 'bg-go text-go-ink hover:brightness-110 disabled:opacity-60 disabled:hover:brightness-100',
        variant === 'outline' &&
          'border border-seam-strong bg-console text-lamp hover:border-lamp-dim hover:brightness-125',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function TextLink({ className, children, ...props }) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center gap-1.5 font-display text-[15px] font-medium uppercase tracking-[0.06em] text-lamp-soft transition-colors hover:text-go',
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight size={14} strokeWidth={2} />
    </a>
  )
}
