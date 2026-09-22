import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contact, profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Reveal, Section } from './primitives'

const fieldClass =
  'w-full rounded border border-border-strong bg-bg px-3.5 text-base text-fg placeholder:text-muted/70 md:text-[15px]'

function Field({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[13px] text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio message from ${data.name}`,
          from_name: data.name,
          ...data,
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message || 'Delivery failed')
      setStatus('sent')
      reset()
    } catch {
      setStatus('failed')
    }
  }

  const links = [
    { label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', text: profile.linkedin.replace('https://www.', ''), href: profile.linkedin },
    { label: 'GitHub', text: profile.github.replace('https://', ''), href: profile.github },
  ]

  return (
    <Section id="contact" className="grid items-start gap-6 pb-14 pt-16 md:grid-cols-11 md:gap-24 md:pb-24 md:pt-28">
      <Reveal className="flex flex-col gap-5 md:col-span-5 md:gap-6">
        <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] text-fg-strong md:text-[40px]">
          {contact.headline}
        </h2>
        <p className="text-base leading-normal text-muted md:text-[17px]">{contact.body}</p>
        <div className="flex flex-col gap-1 pt-1 text-[15px] md:gap-3 md:pt-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2.5 text-fg transition-colors hover:text-accent"
            >
              <span className="w-16 font-mono text-xs text-muted md:w-[72px]">{l.label}</span>
              <span className="break-all">{l.text}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-5 md:gap-5 md:p-8"
        >
          <Field label="Name" id="name" error={errors.name?.message}>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={cn(fieldClass, 'h-12')}
              aria-invalid={!!errors.name}
              {...register('name', { required: 'Name is required' })}
            />
          </Field>
          <Field label="Email" id="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={cn(fieldClass, 'h-12')}
              aria-invalid={!!errors.email}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
              })}
            />
          </Field>
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" {...register('botcheck')} />
          <Field label="Message" id="message" error={errors.message?.message}>
            <textarea
              id="message"
              rows={5}
              placeholder="What are you building, and where does it run?"
              className={cn(fieldClass, 'resize-y py-3')}
              aria-invalid={!!errors.message}
              {...register('message', { required: 'Message is required' })}
            />
          </Field>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="h-12 rounded bg-accent text-[15px] font-semibold text-accent-fg transition-transform hover:bg-accent/90 active:translate-y-px disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending' : 'Send message'}
          </button>
          <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">
            {status === 'sent' && 'Thanks, your message is on its way. I usually reply within a day.'}
            {status === 'failed' && `Something went wrong. Email me directly at ${profile.email}.`}
          </p>
        </form>
      </Reveal>
    </Section>
  )
}
