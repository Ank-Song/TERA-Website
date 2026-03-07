import { useState } from 'react'
import { useLanguage, useStrings } from '../i18n/LangContext'
import './Contact.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()
  const s = useStrings()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    market: '',
    volume: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = t('contact.errors.first_name')
    if (!form.lastName.trim()) e.lastName = t('contact.errors.last_name')
    if (!form.company.trim()) e.company = t('contact.errors.company')
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.errors.email')
    if (!form.subject) e.subject = t('contact.errors.subject')
    if (!form.message.trim() || form.message.length < 20) e.message = t('contact.errors.message')
    if (!form.consent) e.consent = t('contact.errors.consent')
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)

    // ─────────────────────────────────────────────────────────────────
    // Web3Forms forwards submissions to your email inbox — free, no backend.
    // Setup (one-time, ~2 minutes):
    //   1. Go to https://web3forms.com and enter your email address
    //   2. Copy the Access Key they send you
    //   3. Create  tera-website/.env.local  and add:
    //        VITE_WEB3FORMS_KEY=your-access-key-here
    //   4. Restart the dev server — form will start sending real emails
    // ─────────────────────────────────────────────────────────────────
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

    if (!accessKey) {
      console.warn(
        '[Contact Form] VITE_WEB3FORMS_KEY is not set.\n' +
        'Get a free key at https://web3forms.com and add it to .env.local'
      )
      setLoading(false)
      setErrors({ submit: t('contact.errors.not_configured') })
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Tera Website] ${form.subject || 'New Inquiry'} — ${form.company}`,
          from_name: `${form.firstName} ${form.lastName}`,
          'Full Name':     `${form.firstName} ${form.lastName}`,
          'Company':       form.company,
          'Job Title':     form.jobTitle || '—',
          'Email':         form.email,
          'Phone':         form.phone || '—',
          'Country':       form.country || '—',
          'Subject':       form.subject,
          'Target Market': form.market || '—',
          'Est. Volume':   form.volume || '—',
          'Message':       form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setErrors({ submit: data.message || t('contact.errors.network') })
      }
    } catch {
      setErrors({ submit: t('contact.errors.network') })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">{t('contact.hero.label')}</span>
          <h1 className="page-hero__title">
            {t('contact.hero.title').split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="page-hero__subtitle">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">

          {/* Sidebar Info */}
          <aside className="contact-sidebar">
            <div className="sidebar-card">
              <h3>{t('contact.sidebar.sales_title')}</h3>
              <a href="mailto:sales@terasemi.com.br" className="sidebar-link">
                sales@terasemi.com.br
              </a>
              <p className="sidebar-note">{t('contact.sidebar.sales_note')}</p>
            </div>

            <div className="sidebar-card">
              <h3>{t('contact.sidebar.tech_title')}</h3>
              <a href="mailto:tech@terasemi.com.br" className="sidebar-link">
                tech@terasemi.com.br
              </a>
              <p className="sidebar-note">{t('contact.sidebar.tech_note')}</p>
            </div>

            <div className="sidebar-card">
              <h3>{t('contact.sidebar.hq_title')}</h3>
              <address>
                <strong>Tera Semiconductor Ltda.</strong><br />
                Polo Industrial de Manaus<br />
                Av. Presidente Kennedy, s/n<br />
                Manaus, Amazonas<br />
                CEP 69075-000 — Brazil
              </address>
            </div>

            <div className="sidebar-card">
              <h3>{t('contact.sidebar.hours_title')}</h3>
              <p className="sidebar-note">{t('contact.sidebar.hours_weekdays')}</p>
              <p className="sidebar-note">{t('contact.sidebar.hours_fab')}</p>
            </div>

            <div className="sidebar-response">
              <div className="response-icon">⚡</div>
              <div>
                <strong>{t('contact.sidebar.response_label')}</strong>
                <p>{t('contact.sidebar.response_note')}</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h2>{t('contact.success.title')}</h2>
                <p>{t('contact.success.body')}</p>
                <p style={{ marginTop: 12, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {t('contact.success.ref_label')} <strong>TERA-{Date.now().toString(36).toUpperCase()}</strong>
                </p>
                <button
                  className="btn-primary"
                  style={{ marginTop: 32 }}
                  onClick={() => { setSubmitted(false); setForm({ firstName:'',lastName:'',company:'',jobTitle:'',email:'',phone:'',country:'',subject:'',market:'',volume:'',message:'',consent:false }) }}
                >
                  {t('contact.success.submit_another')}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-section-title">{t('contact.form.section_contact')}</div>

                <div className="form-row">
                  <div className={`form-group${errors.firstName ? ' form-group--error' : ''}`}>
                    <label htmlFor="firstName">{t('contact.form.first_name')} *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Ana"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                    />
                    {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                  </div>
                  <div className={`form-group${errors.lastName ? ' form-group--error' : ''}`}>
                    <label htmlFor="lastName">{t('contact.form.last_name')} *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Silva"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                    {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group${errors.company ? ' form-group--error' : ''}`}>
                    <label htmlFor="company">{t('contact.form.company')} *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="ACME Semiconductors Inc."
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                    {errors.company && <span className="form-error">{errors.company}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle">{t('contact.form.job_title')}</label>
                    <input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      placeholder="VP Engineering"
                      value={form.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                    <label htmlFor="email">{t('contact.form.business_email')} *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ana@company.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+55 92 9999-0000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">{t('contact.form.country')}</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Brazil"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-divider" />
                <div className="form-section-title">{t('contact.form.section_inquiry')}</div>

                <div className="form-row">
                  <div className={`form-group${errors.subject ? ' form-group--error' : ''}`}>
                    <label htmlFor="subject">{t('contact.form.subject')} *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">{t('contact.form.select_topic')}</option>
                      {s.contact.form.subjects.map(subj => (
                        <option key={subj} value={subj}>{subj}</option>
                      ))}
                    </select>
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="market">{t('contact.form.market')}</label>
                    <select id="market" name="market" value={form.market} onChange={handleChange}>
                      <option value="">{t('contact.form.select_market')}</option>
                      {s.contact.form.markets.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="volume">{t('contact.form.volume')}</label>
                  <select id="volume" name="volume" value={form.volume} onChange={handleChange}>
                    <option value="">{t('contact.form.select_volume')}</option>
                    {s.contact.form.volumes.map(v => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                  <label htmlFor="message">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please describe your project requirements, process node of interest, timeline, and any specific qualification needs (e.g., AEC-Q100, ISO 13485)…"
                    value={form.message}
                    onChange={handleChange}
                  />
                  <span className="form-hint">
                    {t('contact.form.char_count').replace('{n}', form.message.length)}
                  </span>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <div className={`form-group form-group--checkbox${errors.consent ? ' form-group--error' : ''}`}>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                    />
                    <span>
                      {t('contact.form.consent_before')}
                      <a href="/legal">{t('contact.form.consent_link')}</a>
                      {t('contact.form.consent_after')}
                    </span>
                  </label>
                  {errors.consent && <span className="form-error">{errors.consent}</span>}
                </div>

                {errors.submit && (
                  <div className="form-submit-error">
                    ⚠ {errors.submit}
                  </div>
                )}

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.send_inquiry')} <ArrowRight />
                    </>
                  )}
                </button>

                <p className="form-privacy">{t('contact.form.privacy_note')}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
