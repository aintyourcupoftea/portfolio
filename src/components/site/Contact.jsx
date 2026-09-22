import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contact, profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Button, Panel, Readout } from './primitives'

const fieldClass =
  'well w-full rounded border border-seam-strong px-3.5 text-base text-lamp placeholder:text-lamp-dim transition-colors focus:border-go md:text-[15px]'

function Field({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-display text-[15px] font-medium uppercase tracking-[0.08em] text-lamp-soft">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-mono text-[11px] tracking-[0.02em] text-fault">
          {error}
        </p>
      )}
    </div>
  )
}

// CAPCOM: the one channel that talks to the operator.
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
    { label: 'EMAIL', text: profile.email, href: `mailto:${profile.email}` },
    { label: 'LINKEDIN', text: profile.linkedin.replace('https://www.', ''), href: profile.linkedin },
    { label: 'GITHUB', text: profile.github.replace('https://', ''), href: profile.github },
  ]

  const channel = status === 'sending' ? 'TRANSMITTING' : status === 'sent' ? 'RECEIVED' : status === 'failed' ? 'FAULT' : 'OPEN'

  return (
    <Panel
      id="capcom"
      heading="CAPCOM"
      readout={
        <>
          CHANNEL <span className={cn(status === 'failed' ? 'text-fault' : status === 'sending' ? 'legend-amber' : 'phosphor')}>{channel}</span>
        </>
      }
      className="pt-6 md:pt-8"
    >
      <div className="grid lg:grid-cols-11">
        <div className="flex flex-col gap-6 border-b border-seam px-5 py-7 md:px-8 md:py-9 lg:col-span-5 lg:border-b-0 lg:border-r">
          <h3 className="max-w-[16ch] font-display text-[34px] font-semibold uppercase leading-[0.95] tracking-[0.02em] text-lamp md:text-[44px]">
            {contact.headline}
          </h3>
          <p className="max-w-[44ch] text-[16px] leading-relaxed text-lamp-soft md:text-[17px]">{contact.body}</p>
          <ul className="flex flex-col divide-y divide-seam border-y border-seam">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex min-h-12 items-center gap-4 py-2 text-[15px] text-lamp transition-colors hover:text-go"
                >
                  <Readout className="w-[76px] shrink-0 text-lamp-dim">{l.label}</Readout>
                  <span className="break-all">{l.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5 px-5 py-7 md:px-8 md:py-9 lg:col-span-6"
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
          <Button type="submit" disabled={status === 'sending'} className="mt-1">
            {status === 'sending' ? 'Transmitting' : 'Send message'}
          </Button>
          <p role="status" aria-live="polite" className="min-h-5 text-sm text-lamp-soft">
            {status === 'sent' && 'Received. Thanks, I usually reply within a day.'}
            {status === 'failed' && `Delivery failed. Email me directly at ${profile.email}.`}
          </p>
        </form>
      </div>
    </Panel>
  )
}
