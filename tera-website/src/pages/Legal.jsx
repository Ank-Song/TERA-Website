import { useLanguage } from '../i18n/LangContext'
import './Legal.css'

export default function Legal() {
  const { t } = useLanguage()

  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">{t('legal.hero.label')}</span>
          <h1 className="page-hero__title">{t('legal.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('legal.hero.subtitle')}</p>
        </div>
      </section>

      <div className="legal-body container">

        {/* ── Privacy Policy ───────────────────────────── */}
        <section id="privacy" className="legal-section">
          <h2>{t('legal.privacy.heading')}</h2>
          <p className="legal-effective">Effective Date: January 1, 2025</p>

          <h3>1. Who We Are</h3>
          <p>
            Tera Semiconductor Ltda. ("Tera", "we", "us") is a semiconductor assembly and test company headquartered at
            Polo Industrial de Manaus, Manaus, Amazonas, Brazil. This Privacy Policy explains how we
            collect, use, and protect personal data submitted through this website.
          </p>

          <h3>2. Data We Collect</h3>
          <p>When you submit a contact or quote request form, we collect:</p>
          <ul>
            <li>Name, job title, and company name</li>
            <li>Business email address and phone number</li>
            <li>Country or region</li>
            <li>Inquiry details and project information you voluntarily provide</li>
          </ul>
          <p>We do not collect payment data, government IDs, or sensitive personal information through this website.</p>

          <h3>3. How We Use Your Data</h3>
          <p>We use the information you submit solely to:</p>
          <ul>
            <li>Respond to your inquiry and provide requested information</li>
            <li>Evaluate potential business relationships</li>
            <li>Comply with applicable legal and regulatory obligations</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

          <h3>4. Data Retention</h3>
          <p>
            Inquiry data is retained for up to 3 years to support ongoing business correspondence,
            after which it is securely deleted or anonymized unless a contractual relationship exists.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict
            processing of your personal data. To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@terasemi.com.br">privacy@terasemi.com.br</a>.
          </p>

          <h3>6. Security</h3>
          <p>
            All form submissions are transmitted over HTTPS. We apply reasonable administrative and
            technical safeguards to protect data against unauthorized access or disclosure.
          </p>

          <h3>7. Contact</h3>
          <p>
            For privacy questions or requests: <a href="mailto:privacy@terasemi.com.br">privacy@terasemi.com.br</a>
            <br />
            {/* TODO: Replace with the name of your actual Data Protection Officer if required under LGPD */}
            Data Controller: Tera Semiconductor Ltda., Polo Industrial de Manaus, Manaus–AM, Brazil.
          </p>
        </section>

        <div className="legal-divider" />

        {/* ── Terms of Use ─────────────────────────────── */}
        <section id="terms" className="legal-section">
          <h2>{t('legal.terms.heading')}</h2>
          <p className="legal-effective">Effective Date: January 1, 2025</p>

          <h3>1. Acceptance</h3>
          <p>
            By accessing this website, you agree to these Terms of Use. If you do not agree, please
            do not use the site.
          </p>

          <h3>2. Purpose of This Website</h3>
          <p>
            This website is a B2B marketing and inquiry platform operated by Tera Semiconductor Ltda.
            It is intended for business professionals evaluating semiconductor assembly and test services. It is
            not directed at consumers.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            All content on this site — including text, graphics, logos, and technical descriptions — is
            the property of Tera Semiconductor Ltda. or its licensors and is protected by applicable
            copyright and trademark laws. You may not reproduce, redistribute, or create derivative
            works without prior written permission.
          </p>

          <h3>4. No Warranty</h3>
          <p>
            Technical specifications and capabilities described on this site are provided for informational
            purposes and are subject to change without notice. Tera makes no warranty that the information
            is complete, accurate, or up-to-date. All business engagements are governed by separately
            executed written agreements.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, Tera shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of, or inability to use, this website.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            {/* TODO: Confirm jurisdiction with your legal counsel */}
            These Terms are governed by the laws of Brazil. Disputes shall be subject to the exclusive
            jurisdiction of the courts of Manaus, Amazonas, Brazil.
          </p>

          <h3>7. Changes</h3>
          <p>
            We may update these Terms at any time. Continued use of the site following changes constitutes
            acceptance of the revised Terms.
          </p>
        </section>

        <div className="legal-divider" />

        {/* ── Cookie Settings ──────────────────────────── */}
        <section id="cookies" className="legal-section">
          <h2>{t('legal.cookies.heading')}</h2>
          <p className="legal-effective">Last updated: January 1, 2025</p>

          <h3>Cookies We Use</h3>
          <p>This website currently uses only technically necessary cookies required for the site to function:</p>

          <div className="cookie-table">
            <div className="cookie-row cookie-row--header">
              <span>Cookie</span>
              <span>Purpose</span>
              <span>Duration</span>
            </div>
            <div className="cookie-row">
              <span><code>session</code></span>
              <span>Maintains your browsing session</span>
              <span>Session</span>
            </div>
          </div>

          <p style={{ marginTop: 20 }}>
            {/* TODO: Update this section if/when you add analytics (e.g. Google Analytics, Plausible) */}
            We do not currently use analytics, advertising, or tracking cookies. If this changes, we will
            update this policy and add a consent banner before any non-essential cookies are placed.
          </p>

          <h3>How to Manage Cookies</h3>
          <p>
            You can control cookies through your browser settings. Disabling all cookies may affect
            site functionality. For guidance, visit{' '}
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>.
          </p>
        </section>

        <div className="legal-contact-note">
          <p>
            {t('legal.contact_note')}{' '}
            <a href="mailto:privacy@terasemi.com.br">privacy@terasemi.com.br</a>
          </p>
        </div>

      </div>
    </div>
  )
}
