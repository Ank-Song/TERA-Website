import { useState } from 'react'
import './Contact.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const SUBJECTS = [
  'Process Technology Inquiry',
  'Memory Product Inquiry (eMMC / UFS / NAND)',
  'Packaging & Test Services',
  'Design Enablement / PDK Access',
  'Volume Pricing & Capacity',
  'Automotive / Industrial Qualification',
  'General Business Inquiry',
  'Other',
]

const MARKETS = [
  'Automotive',
  'IoT / Consumer',
  'Mobile',
  'Industrial',
  'Medical / Healthcare',
  'Other',
]

export default function Contact() {
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
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.subject) e.subject = 'Please select a subject'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters'
    if (!form.consent) e.consent = 'You must agree to proceed'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate network delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
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
          <span className="section-label">Contact Us</span>
          <h1 className="page-hero__title">
            Start a Conversation<br />
            with Our Team
          </h1>
          <p className="page-hero__subtitle">
            Whether you're evaluating foundry partners, requesting a quote, or seeking technical information — our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">

          {/* Sidebar Info */}
          <aside className="contact-sidebar">
            <div className="sidebar-card">
              <h3>Sales & Business Development</h3>
              <a href="mailto:sales@terasemi.com.br" className="sidebar-link">
                sales@terasemi.com.br
              </a>
              <p className="sidebar-note">For quotes, capacity, and commercial inquiries.</p>
            </div>

            <div className="sidebar-card">
              <h3>Technical Support</h3>
              <a href="mailto:tech@terasemi.com.br" className="sidebar-link">
                tech@terasemi.com.br
              </a>
              <p className="sidebar-note">For process, PDK, and design enablement questions.</p>
            </div>

            <div className="sidebar-card">
              <h3>Headquarters</h3>
              <address>
                <strong>Tera Semiconductor Ltda.</strong><br />
                Polo Industrial de Manaus<br />
                Av. Presidente Kennedy, s/n<br />
                Manaus, Amazonas<br />
                CEP 69075-000 — Brazil
              </address>
            </div>

            <div className="sidebar-card">
              <h3>Operating Hours</h3>
              <p className="sidebar-note">Mon – Fri: 08:00 – 18:00 (BRT, UTC-4)</p>
              <p className="sidebar-note">Fab operations: 24/7</p>
            </div>

            <div className="sidebar-response">
              <div className="response-icon">⚡</div>
              <div>
                <strong>Response SLA</strong>
                <p>We respond to all inquiries within 1 business day.</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h2>Message Received</h2>
                <p>
                  Thank you for reaching out to Tera Semiconductor. A member of our team will review your inquiry and respond within one business day.
                </p>
                <p style={{ marginTop: 12, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Reference: <strong>TERA-{Date.now().toString(36).toUpperCase()}</strong>
                </p>
                <button
                  className="btn-primary"
                  style={{ marginTop: 32 }}
                  onClick={() => { setSubmitted(false); setForm({ firstName:'',lastName:'',company:'',jobTitle:'',email:'',phone:'',country:'',subject:'',market:'',volume:'',message:'',consent:false }) }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-section-title">Contact Information</div>

                <div className="form-row">
                  <div className={`form-group${errors.firstName ? ' form-group--error' : ''}`}>
                    <label htmlFor="firstName">First Name *</label>
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
                    <label htmlFor="lastName">Last Name *</label>
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
                    <label htmlFor="company">Company *</label>
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
                    <label htmlFor="jobTitle">Job Title</label>
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
                    <label htmlFor="email">Business Email *</label>
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
                    <label htmlFor="phone">Phone Number</label>
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
                  <label htmlFor="country">Country / Region</label>
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
                <div className="form-section-title">Inquiry Details</div>

                <div className="form-row">
                  <div className={`form-group${errors.subject ? ' form-group--error' : ''}`}>
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a topic…</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="market">Target Market</label>
                    <select id="market" name="market" value={form.market} onChange={handleChange}>
                      <option value="">Select market…</option>
                      {MARKETS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="volume">Estimated Annual Volume</label>
                  <select id="volume" name="volume" value={form.volume} onChange={handleChange}>
                    <option value="">Select volume range…</option>
                    <option>Prototype / NRE only</option>
                    <option>{'< 10K units/year'}</option>
                    <option>10K – 100K units/year</option>
                    <option>100K – 1M units/year</option>
                    <option>{'> 1M units/year'}</option>
                    <option>Not yet determined</option>
                  </select>
                </div>

                <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please describe your project requirements, process node of interest, timeline, and any specific qualification needs (e.g., AEC-Q100, ISO 13485)…"
                    value={form.message}
                    onChange={handleChange}
                  />
                  <span className="form-hint">{form.message.length} / 2000 characters</span>
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
                      I consent to Tera Semiconductor processing my data to respond to this inquiry, in accordance with the <a href="#">Privacy Policy</a>. *
                    </span>
                  </label>
                  {errors.consent && <span className="form-error">{errors.consent}</span>}
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Inquiry <ArrowRight />
                    </>
                  )}
                </button>

                <p className="form-privacy">
                  Your information is transmitted securely and never shared with third parties. By submitting this form you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
