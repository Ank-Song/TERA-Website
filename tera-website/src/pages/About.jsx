import { Link } from 'react-router-dom'
import { useLanguage, useStrings } from '../i18n/LangContext'
import './About.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const VALUE_ICONS = ['🎯', '🤝', '🔬', '🌱', '🏆', '🌍']

/* Certifications — code hardcoded, title/valid from i18n */
const CERT_CODES = [
  { code: 'ISO 9001:2015', color: 'teal' },
  { code: 'ISO 14001:2015', color: 'teal' },
  { code: 'ISO 45001:2018', color: 'teal' },
  { code: 'ISO 50001:2018', color: 'teal' },
  { code: 'PADIS', color: 'blue' },
  { code: 'RBA Member', color: 'blue' },
]

/* Timeline — year hardcoded, event from i18n */
const TIMELINE_YEARS = ['Oct 2015', '2016', '2019', '2021', '2022', '2024', '2025']

export default function About() {
  const { t } = useLanguage()
  const s = useStrings()

  return (
    <div className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">{t('about.hero.label')}</span>
          <h1 className="page-hero__title">
            Trusted Engineering.<br />
            Reliable Assembly.
          </h1>
          <p className="page-hero__subtitle">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="about-section" id="mission">
        <div className="container about-intro">
          <div className="about-intro__text">
            <span className="section-label">{t('about.mission.label')}</span>
            <div className="accent-line" />
            <h2 className="section-title light">{t('about.mission.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('about.mission.body1') }} />
            <p style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: t('about.mission.body2') }} />
            <p style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: t('about.mission.body3') }} />
          </div>

          <div className="about-intro__stats">
            <div className="about-stat">
              <span className="about-stat__value">2015</span>
              <span className="about-stat__label">{t('about.stats.founded')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">46</span>
              <span className="about-stat__label">{t('about.stats.employees')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">5M</span>
              <span className="about-stat__label">{t('about.stats.units_month')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">3,700 m²</span>
              <span className="about-stat__label">{t('about.stats.facility_area')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">4</span>
              <span className="about-stat__label">{t('about.stats.iso_certs')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">18</span>
              <span className="about-stat__label">{t('about.stats.process_steps')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-section--gray">
        <div className="container">
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">{t('about.values.label')}</span>
            <div className="accent-line" style={{ margin: '0 auto 16px' }} />
            <h2 className="section-title">{t('about.values.title')}</h2>
          </div>
          <div className="values-grid">
            {s.about.values.items.map((item, i) => (
              <div key={i} className="value-card">
                <span className="value-card__icon">{VALUE_ICONS[i]}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-section about-section--dark" id="certifications">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">{t('about.certifications.label')}</span>
            <div className="accent-line" />
            <h2 className="section-title light">{t('about.certifications.title')}</h2>
            <p className="section-subtitle light">{t('about.certifications.subtitle')}</p>
          </div>
          <div className="cert-grid">
            {CERT_CODES.map(({ code }, i) => {
              const cert = s.about.certifications.items[i]
              return (
                <div key={code} className="cert-card">
                  <div className="cert-card__check">
                    <CheckIcon />
                  </div>
                  <div>
                    <span className="cert-card__code">{code}</span>
                    <span className="cert-card__title">{cert.title}</span>
                    <span className="cert-card__valid">{cert.valid}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">{t('about.timeline.label')}</span>
            <div className="accent-line" />
            <h2 className="section-title light">{t('about.timeline.title')}</h2>
            <p className="section-subtitle light">{t('about.timeline.subtitle')}</p>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            {TIMELINE_YEARS.map((year, i) => (
              <div key={year} className="timeline-item">
                <div className="timeline-content" data-year={year.split(' ').pop()}>
                  <span className="timeline-year">{year}</span>
                  <p>{s.about.timeline.items[i].event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="about-section" id="location">
        <div className="container location-grid">
          <div>
            <span className="section-label">{t('about.location.label')}</span>
            <div className="accent-line" />
            <h2 className="section-title">{t('about.location.title')}</h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              {t('about.location.subtitle')}
            </p>
            <div className="location-facts">
              <div className="location-fact">
                <strong>{t('about.location.facts.address_label')}</strong>
                <span>{t('about.location.facts.address_val')}</span>
              </div>
              <div className="location-fact">
                <strong>{t('about.location.facts.airport_label')}</strong>
                <span>{t('about.location.facts.airport_val')}</span>
              </div>
              <div className="location-fact">
                <strong>{t('about.location.facts.harbor_label')}</strong>
                <span>{t('about.location.facts.harbor_val')}</span>
              </div>
              <div className="location-fact">
                <strong>{t('about.location.facts.shipping_label')}</strong>
                <span>{t('about.location.facts.shipping_val')}</span>
              </div>
              <div className="location-fact">
                <strong>{t('about.location.facts.zone_label')}</strong>
                <span>{t('about.location.facts.zone_val')}</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              {t('about.cta.contact_us')} <ArrowRight />
            </Link>
          </div>
          <div className="map-placeholder" aria-label="Map of Manaus, Brazil">
            <div className="map-placeholder__inner">
              <div className="map-pin">
                <svg width="32" height="40" viewBox="0 0 24 30" fill="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 18 12 18S24 21 24 12c0-6.627-5.373-12-12-12z" fill="var(--teal)"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                </svg>
              </div>
              <span className="map-label">Manaus, Brazil</span>
              <span className="map-sublabel">Av. Torquato Tapajós #7503</span>
              <span className="map-sublabel" style={{ fontSize: '0.72rem', opacity: 0.6 }}>CEP 69041-025 · Zona Franca de Manaus</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>{t('about.cta.title')}</h2>
          <p>{t('about.cta.subtitle')}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">{t('about.cta.contact_us')} <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">{t('about.cta.our_technology')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
