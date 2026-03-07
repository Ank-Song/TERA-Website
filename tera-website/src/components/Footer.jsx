import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LangContext'
import './Footer.css'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo-mark">T</span>
            <span className="logo-text">TERA</span>
            <span className="logo-sub">Semiconductor</span>
          </div>
          <p className="footer__tagline">{t('footer.tagline')}</p>
          <div className="footer__badges">
            <span className="badge">ISO 9001 Certified</span>
            <span className="badge">IATF 16949</span>
            <span className="badge">RoHS Compliant</span>
          </div>
          <div className="footer__social">
            <a href="https://linkedin.com/company/tera-semiconductor" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Tera on LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:sales@terasemi.com.br" className="footer__social-link" aria-label="Email Tera">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="footer__links-group">
          <h4>{t('footer.company_col')}</h4>
          <ul>
            <li><Link to="/about">{t('footer.links.about_tera')}</Link></li>
            <li><Link to="/about#mission">{t('footer.links.our_mission')}</Link></li>
            <li><Link to="/about#location">{t('footer.links.location')}</Link></li>
            <li><Link to="/contact">{t('footer.links.careers')}</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>{t('footer.technology_col')}</h4>
          <ul>
            <li><Link to="/technology">{t('footer.links.process_capabilities')}</Link></li>
            <li><Link to="/technology#memory">{t('footer.links.memory_products')}</Link></li>
            <li><Link to="/technology#packaging">{t('footer.links.packaging_testing')}</Link></li>
            <li><Link to="/technology#design">{t('footer.links.design_services')}</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>{t('footer.markets_col')}</h4>
          <ul>
            <li><Link to="/markets#automotive">{t('footer.links.automotive')}</Link></li>
            <li><Link to="/markets#iot">{t('footer.links.iot_consumer')}</Link></li>
            <li><Link to="/markets#industrial">{t('footer.links.industrial')}</Link></li>
            <li><Link to="/markets#medical">{t('footer.links.medical')}</Link></li>
          </ul>
        </div>

        <div className="footer__contact-col">
          <h4>{t('footer.contact_col')}</h4>
          <address>
            <p>Polo Industrial de Manaus</p>
            <p>Manaus, Amazonas — Brazil</p>
          </address>
          <a href="mailto:sales@terasemi.com.br" className="footer__email">
            sales@terasemi.com.br
          </a>
          <Link to="/contact" className="btn-primary-dark footer__cta">
            {t('footer.links.request_quote')}
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{t('footer.copyright')}</p>
          <div className="footer__legal">
            <Link to="/legal#privacy">{t('footer.privacy_policy')}</Link>
            <Link to="/legal#terms">{t('footer.terms_of_use')}</Link>
            <Link to="/legal#cookies">{t('footer.cookie_settings')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
