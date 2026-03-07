import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage, useStrings } from '../i18n/LangContext'
import './Home.css'

/* ── Scroll-reveal hook ─────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('[data-reveal], [data-reveal-left], [data-reveal-right], [data-reveal-scale]')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Icon components (inline SVG) ──────────────────── */
const ChipIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="10" height="10" rx="1"/>
    <path d="M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2C17 3 12 2 5 7"/>
  </svg>
)
const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const SpeedIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const FlaskIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6l1 8H8L9 3zM6 21h12a1 1 0 0 0 .78-1.62l-3.78-5H9l-3.78 5A1 1 0 0 0 6 21z"/>
  </svg>
)
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const CARD_ICONS = [ChipIcon, FlaskIcon, ShieldIcon, SpeedIcon]
const DIFF_ICONS = [ChipIcon, ShieldIcon, LeafIcon, GlobeIcon, SpeedIcon, FlaskIcon]
const MARKET_ICONS = ['🚗', '📡', '📱', '⚙️', '🏥']

export default function Home() {
  useScrollReveal()
  const { t } = useLanguage()
  const s = useStrings()

  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Trusted Engineering.<br />
            <span className="hero__accent">Reliable Assembly.</span>
          </h1>
        </div>

        <div className="hero__bottom-bar">
          <a href="#capabilities" className="hero__bottom-link">
            {t('home.hero.explore_tech')} <span className="hero__bottom-arrow">↓</span>
          </a>
          <Link to="/contact" className="hero__bottom-link">
            {t('home.hero.contact_us')} <span className="hero__bottom-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ── CAPABILITIES OVERVIEW ──────────────────────── */}
      <section id="capabilities" className="capabilities section" data-reveal>
        <div className="container">
          <div className="capabilities__header">
            <div>
              <span className="section-label">{t('home.capabilities.label')}</span>
              <div className="accent-line" />
              <h2 className="section-title">
                {t('home.capabilities.title').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
            </div>
            <p className="section-subtitle">{t('home.capabilities.subtitle')}</p>
          </div>

          <div className="capabilities__grid">
            {s.home.capabilities.cards.map((card, i) => {
              const Icon = CARD_ICONS[i]
              return (
                <div key={i} className={`cap-card${i === 0 ? ' cap-card--featured' : ''}`} style={{'--card-index': i}}>
                  <div className="cap-card__icon"><Icon /></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <Link to="/technology" className="cap-card__link">{card.link} <ArrowRight /></Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MARKETS ────────────────────────────────────── */}
      <section className="markets-section section section--dark" data-reveal-scale>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">{t('home.markets.label')}</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center' }}>
              {t('home.markets.title')}
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              {t('home.markets.subtitle')}
            </p>
          </div>

          <div className="markets-grid">
            {s.home.markets.items.map((item, i) => (
              <div key={i} className="market-card" style={{'--card-index': i}}>
                <span className="market-card__icon">{MARKET_ICONS[i]}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="markets-cta">
            <Link to="/markets" className="btn-primary-dark">{t('home.markets.view_all')} <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY TERA ────────────────────────────────────── */}
      <section className="why-tera section section--dark" data-reveal>
        <div className="why-tera__bg" aria-hidden="true">
          <div className="why-tera__glow" />
        </div>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">{t('home.why_tera.label')}</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center' }}>
              {t('home.why_tera.title')}
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 52px' }}>
              {t('home.why_tera.subtitle')}
            </p>
          </div>

          <div className="diff-grid">
            {s.home.why_tera.items.map((item, i) => {
              const Icon = DIFF_ICONS[i]
              return (
                <div key={i} className="diff-card" style={{'--card-index': i}}>
                  <div className="diff-card__icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ────────────────────────────────────── */}
      <section className="partners section section--dark" data-reveal-scale>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">{t('home.partners.label')}</span>
            <div className="accent-line" style={{ margin: '0 auto 16px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}>
              {t('home.partners.title')}
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
              {t('home.partners.subtitle')}
            </p>
          </div>
          <p className="partners-nda">{t('home.partners.nda_note')}</p>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section className="cta-banner" data-reveal>
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container cta-banner__inner">
          <div>
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn-primary">{t('home.cta.request_quote')} <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">{t('home.cta.view_technology')}</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
