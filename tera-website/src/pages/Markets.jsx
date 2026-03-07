import { Link } from 'react-router-dom'
import { useLanguage, useStrings } from '../i18n/LangContext'
import './Markets.css'

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

/* Technical metadata hardcoded — text from i18n */
const MARKETS_META = [
  { id: 'automotive', icon: '🚗', growth: '12% CAGR', tam: '$68B' },
  { id: 'iot',        icon: '📡', growth: '22% CAGR', tam: '$53B' },
  { id: 'mobile',     icon: '📱', growth: '8% CAGR',  tam: '$45B' },
  { id: 'industrial', icon: '⚙️', growth: '9% CAGR',  tam: '$29B' },
  { id: 'medical',    icon: '🏥', growth: '15% CAGR', tam: '$11B' },
]

export default function Markets() {
  const { t } = useLanguage()
  const s = useStrings()

  return (
    <div className="markets-page">

      {/* Page Hero */}
      <section className="page-hero mkt-page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">{t('markets.hero.label')}</span>
          <h1 className="page-hero__title">
            {t('markets.hero.title').split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="page-hero__subtitle">{t('markets.hero.subtitle')}</p>
        </div>
      </section>

      {/* Market Overview Strip */}
      <div className="market-overview">
        <div className="container market-overview__inner">
          {MARKETS_META.map(({ id, icon, growth }, i) => (
            <a key={id} href={`#${id}`} className="market-pill">
              <span>{icon}</span>
              <span>{s.markets.items[i].name}</span>
              <span className="market-pill__stat">{growth}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Individual Market Sections */}
      {MARKETS_META.map(({ id, icon, growth, tam }, i) => {
        const item = s.markets.items[i]
        return (
          <section key={id} id={id} className="mkt-section" data-market={id}>
            <div className="container mkt-grid">
              <div className="mkt-content">
                <div className="mkt-eyebrow">
                  <span className="mkt-icon">{icon}</span>
                  <span className="section-label" style={{ marginBottom: 0 }}>{item.name}</span>
                </div>
                <h2 className="mkt-title">{item.tagline}</h2>
                <p className="mkt-desc">{item.desc}</p>

                <div className="mkt-cols">
                  <div>
                    <h4>{t('markets.labels.key_requirements')}</h4>
                    <ul className="mkt-list">
                      {item.requirements.map(r => (
                        <li key={r}>
                          <span className="mkt-check"><CheckIcon /></span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>{t('markets.labels.tera_products')}</h4>
                    <ul className="mkt-products">
                      {item.products.map(p => (
                        <li key={p}>
                          <span className="mkt-tag">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mkt-metrics">
                  <div className="mkt-metric">
                    <span className="mkt-metric__val">{growth}</span>
                    <span className="mkt-metric__label">{t('markets.labels.market_growth')}</span>
                  </div>
                  <div className="mkt-metric">
                    <span className="mkt-metric__val">{tam}</span>
                    <span className="mkt-metric__label">{t('markets.labels.tam')}</span>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary-dark">
                  {t('markets.labels.discuss')} {item.name} {t('markets.labels.requirements')} <ArrowRight />
                </Link>
              </div>

              <div className="mkt-visual" aria-hidden="true">
                <div className="mkt-visual__card">
                  <div className="mkt-visual__icon">{icon}</div>
                  <div className="mkt-visual__name">{item.name} Segment</div>
                  <div className="mkt-visual__bar-wrap">
                    <div className="mkt-visual__bar" style={{'--pct': '78%'}}>
                      <span>Performance</span><span>78%</span>
                    </div>
                    <div className="mkt-visual__bar" style={{'--pct': '92%'}}>
                      <span>Reliability</span><span>92%</span>
                    </div>
                    <div className="mkt-visual__bar" style={{'--pct': '65%'}}>
                      <span>Cost Efficiency</span><span>65%</span>
                    </div>
                    <div className="mkt-visual__bar" style={{'--pct': '85%'}}>
                      <span>Yield</span><span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="mkt-cta">
        <div className="container mkt-cta__inner">
          <h2>{t('markets.cta.title')}</h2>
          <p>{t('markets.cta.subtitle')}</p>
          <div className="mkt-cta__btns">
            <Link to="/contact" className="btn-primary">{t('markets.cta.contact_sales')} <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">{t('markets.cta.view_technology')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
