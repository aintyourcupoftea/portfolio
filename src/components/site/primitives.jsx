import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.16, 1, 0.3, 1]

// Fades a block up as it scrolls into view. Static under reduced motion.
export function Reveal({ as = 'div', delay = 0, className, children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease }}
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

export function Heading({ children }) {
  return (
    <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg-strong md:text-4xl">
      {children}
    </h2>
  )
}

const buttonBase =
  'inline-flex h-12 items-center justify-center gap-2.5 rounded px-5 text-[15px] font-medium transition-transform active:translate-y-px'

export function ButtonLink({ variant = 'primary', className, children, ...props }) {
  return (
    <a
      className={cn(
        buttonBase,
        variant === 'primary' && 'bg-accent font-semibold text-accent-fg hover:bg-accent/90',
        variant === 'outline' && 'border border-border-strong text-fg hover:bg-surface',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function Tag({ className, children }) {
  return (
    <span className={cn('rounded-md border px-2 py-1 font-mono text-xs', className)}>{children}</span>
  )
}
