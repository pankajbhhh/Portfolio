import { useState } from 'react'
import { profile } from '../data/portfolioData'

// mailto: only works when the computer has a default mail app set up, so we
// always offer Gmail (opens in a browser tab) and a copy button as well.
const gmailLink = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}` +
  `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

const mailtoLink = (subject = '', body = '') =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for browsers/pages where the Clipboard API is blocked
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch { ok = false }
    document.body.removeChild(ta)
    return ok
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState(null) // set after a successful submit
  const [copied, setCopied] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const flash = (what) => {
    setCopied(what)
    setTimeout(() => setCopied(''), 2200)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`
    const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
    setDraft({ subject, body })
    // Opens Gmail compose in a new tab (allowed because it runs inside the click)
    window.open(gmailLink(subject, body), '_blank', 'noopener,noreferrer')
  }

  const copyEmail = async () => flash((await copyText(profile.email)) ? 'email' : 'failed')
  const copyMessage = async () =>
    flash((await copyText(`To: ${profile.email}\nSubject: ${draft.subject}\n\n${draft.body}`)) ? 'message' : 'failed')

  return (
    <section id="contact" className="side-card contact-card reveal">
      <div className="contact-card__globe" aria-hidden="true">
        <span className="contact-card__globe-ring" />
        <span className="contact-card__globe-ring contact-card__globe-ring--2" />
        <span className="contact-card__globe-dot">🌐</span>
      </div>

      <div className="contact-card__content">
        <div className="panel-head">
          <h3>Get In Touch</h3>
        </div>
        <p className="contact-card__sub">Let’s work together on your next project.</p>

        <div className="contact__quick">
          <a className="quick-btn quick-btn--primary" href={gmailLink()} target="_blank" rel="noopener noreferrer">
            Email me on Gmail
          </a>
          <a className="quick-btn" href={mailtoLink()}>Open mail app</a>
          <button type="button" className="quick-btn" onClick={copyEmail}>
            {copied === 'email' ? 'Copied ✓' : 'Copy email'}
          </button>
        </div>

        <ul className="contact__list">
          <li><span>Email</span><strong>{profile.email}</strong></li>
          <li><span>Phone</span><strong><a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a></strong></li>
          <li><span>Location</span><strong>{profile.location}</strong></li>
          <li>
            <span>Availability</span>
            <strong className="contact__status"><i className="dot dot--live" />{profile.availability}</strong>
          </li>
        </ul>

        <form className="contact__form" onSubmit={onSubmit} noValidate>
          <div className="contact__row">
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input id="name" value={form.name} onChange={update('name')} placeholder="Jane Doe" autoComplete="name" />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="jane@company.com" autoComplete="email" />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" value={form.subject} onChange={update('subject')} placeholder="Java Developer opportunity" />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} value={form.message} onChange={update('message')} placeholder="Tell me a bit about the opportunity..." />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary contact__submit">Send Message →</button>
          <p className="contact__hint">Opens Gmail in a new tab with your message ready to send.</p>
        </form>

        {draft && (
          <div className="contact__next" role="status">
            <strong>Gmail didn’t open?</strong> Use one of these instead:
            <div className="contact__quick contact__quick--tight">
              <a className="quick-btn quick-btn--primary" href={gmailLink(draft.subject, draft.body)} target="_blank" rel="noopener noreferrer">Open Gmail</a>
              <a className="quick-btn" href={mailtoLink(draft.subject, draft.body)}>Open mail app</a>
              <button type="button" className="quick-btn" onClick={copyMessage}>
                {copied === 'message' ? 'Copied ✓' : 'Copy message'}
              </button>
            </div>
            {copied === 'failed' && <span className="field__error">Couldn’t copy — please select the text manually.</span>}
          </div>
        )}
      </div>
    </section>
  )
}