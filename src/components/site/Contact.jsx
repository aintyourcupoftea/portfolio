import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contact, profile } from '@/content/profile'
import { cn } from '@/lib/utils'
import { Frame, Gate, Key, Scene, Slate } from './primitives'

function Field({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="t-slate text-[10.5px] text-ink-soft">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="t-slate text-[10.5px] text-signal-ink">
          {error}
        </p>
      )}
    </div>
  )
}

// The close: the fullest light on the page, and the one action it all leads to.
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
    { label: 'LinkedIn', text: profile.linkedin.replace('https://www.linkedin.com/', ''), href: profile.linkedin },
    { label: 'GitHub', text: profile.github.replace('https://', ''), href: profile.github },
  ]

  return (
    <Scene id="contact" lamp="46 26 152" className="pb-16 md:pb-24">
      <Frame>
        <Gate className="grid lg:grid-cols-12">
          <div className="flex flex-col gap-7 px-6 py-10 md:px-10 md:py-14 lg:col-span-5">
            <h2 className="t-head max-w-[14ch] text-[38px] md:text-[48px] lg:text-[54px]">
              {contact.headline}
            </h2>
            <p className="t-lead max-w-[42ch] text-[16px] text-ink-soft md:text-[17px]">{contact.body}</p>

            <ul className="flex flex-col border-t rule-plate">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-5 border-b rule-plate text-[15px] text-ink transition-colors hover:text-signal-ink"
                  >
                    <Slate className="w-[68px] shrink-0 text-ink-faint">{l.label}</Slate>
                    <span className="t-body break-words">{l.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-6 border-t rule-plate px-6 py-10 md:px-10 md:py-14 lg:col-span-7 lg:border-l lg:border-t-0"
          >
            <Field label="Name" id="name" error={errors.name?.message}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="slot t-body h-12 px-3.5 text-base md:text-[15px]"
                aria-invalid={!!errors.name}
                {...register('name', { required: 'Enter your name so I know who is writing.' })}
              />
            </Field>
            <Field label="Email" id="email" error={errors.email?.message}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="slot t-body h-12 px-3.5 text-base md:text-[15px]"
                aria-invalid={!!errors.email}
                {...register('email', {
                  required: 'Enter an email address so I can reply.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'That address is missing an @ or a domain.',
                  },
                })}
              />
            </Field>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" {...register('botcheck')} />
            <Field label="Message" id="message" error={errors.message?.message}>
              <textarea
                id="message"
                rows={5}
                placeholder="What are you building, and where does it run?"
                className="slot t-body resize-y px-3.5 py-3 text-base md:text-[15px]"
                aria-invalid={!!errors.message}
                {...register('message', { required: 'Add a line or two about the role.' })}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Key type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending' : 'Send message'}
              </Key>
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  't-body min-h-5 text-[14px]',
                  status === 'failed' ? 'text-signal-ink' : 'text-ink-soft'
                )}
              >
                {status === 'sent' && 'Received. I usually reply within a day.'}
                {status === 'failed' && `That did not send. Email me directly at ${profile.email}.`}
              </p>
            </div>
          </form>
        </Gate>
      </Frame>
    </Scene>
  )
}
