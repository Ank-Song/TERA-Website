import { Link } from 'react-router-dom'
import { useLanguage, useStrings } from '../i18n/LangContext'
import './Technology.css'

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

/* 18-step assembly process — abbrs hardcoded, names from i18n */
const PROCESS_ABBRS = ['TA','BG','LG','DS','SPB','DB','DBC','PLM','WB','MD','PMC','LM','HPW','BM','SGL','BS','FT','PK']

/* Highlight steps that are key differentiators */
const highlightSteps = new Set(['WB', 'DB', 'BS', 'FT'])

/* Package portfolio — technical specs hardcoded */
const PACKAGES_SPEC = [
  { name: 'eMMC',            pkgType: 'emmc',  balls: '153-ball',       size: '11.5 × 13 mm', die: '1× to 4× die', nand: 'Toshiba BiCS2/3/4/5 · Micron B16A/17A/27B/B47R/B57T · Samsung K9A/V5/V6/V8 · SanDisk G1ZED3D', qual: false },
  { name: 'eMCP',            pkgType: 'emcp',  balls: '221-ball',       size: '11.5 × 13 mm', die: '1× to 4× die', nand: 'NAND: Samsung K9A/V5/V6 · Toshiba BiCS3/5 / DRAM: Micron B16A/17A/27B/47R', qual: false },
  { name: 'BGA',             pkgType: 'bga',   balls: '252 / 272-ball', size: '14 × 18 mm',   die: '1× to 4× die', nand: 'Samsung AFG · Toshiba BiCS3/4/5 · Micron B16A/27B/B47R', qual: false },
  { name: 'BGA (High-Density)', pkgType: 'bgahd', balls: '132-ball',   size: '12 × 18 mm',   die: '4× to 8× die', nand: 'Micron Z42M · Z42N', qual: true },
  { name: 'LPDDR',           pkgType: 'lpddr', balls: '200-ball',       size: '10 × 14.5 mm', die: '2× to 4× die', nand: null, qual: true },
]

/* Key equipment — maker/specs hardcoded, step label from i18n */
const EQUIPMENT_SPECS = [
  { maker: 'KNS — Connx IConn PLUS', specs: ['≤ 2.0 µm bond accuracy (3σ)', '35 µm pitch · 0.8 mil gold wire', 'Package up to 90 × 300 mm'] },
  { maker: 'Fastford DB8308',         specs: ['≤ 5 µm placement accuracy (3σ)', '200 mm & 300 mm wafer support', 'Die thickness from 60 µm'] },
  { maker: 'Koh Young KOCi 3D',       specs: ['Full top / bottom / side inspection', '2D + 3D camera system', 'CIS coplanarity measurement'] },
  { maker: 'Disco DFD 6X63',          specs: ['~30,000 units / hour throughput', 'Substrates up to 260 × 330 mm', 'Product changeover < 10 min'] },
]

/* Certifications — code hardcoded, title/valid from i18n */
const CERT_CODES = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 50001:2018', 'PADIS', 'RBA Member']

export default function Technology() {
  const { t } = useLanguage()
  const s = useStrings()

  return (
    <div className="tech-page">

      {/* Page Hero — Blueprint style */}
      <section className="tech-hero">
        <div className="tech-hero__bg" aria-hidden="true">
          <div className="tech-hero__grid" />
          <div className="tech-hero__glow" />
          <div className="tech-hero__coords">
            <span className="tech-hero__coord tech-hero__coord--tl">X: 03°06′S / Y: 60°01′W</span>
            <span className="tech-hero__coord tech-hero__coord--tr">TERA-FACILITY-01</span>
            <span className="tech-hero__coord tech-hero__coord--bl">CLASS 1K · CLASS 10K</span>
            <span className="tech-hero__coord tech-hero__coord--br">UNIT CAP: 5,000,000 / MO</span>
          </div>
        </div>
        <div className="container tech-hero__inner">
          <span className="section-label">{t('technology.hero.label')}</span>
          <h1 className="tech-hero__title">
            {t('technology.hero.title').split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <><br />&amp; </>}</span>
            ))}
          </h1>
          <p className="tech-hero__subtitle">{t('technology.hero.subtitle')}</p>
          <Link to="/contact" className="btn-primary">
            {t('technology.hero.cta')} <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── Assembly Process Flow ───────────────────────── */}
      <section className="tech-section" id="process">
        <div className="container">
          <span className="section-label">{t('technology.process.label')}</span>
          <div className="accent-line" />
          <h2 className="section-title">{t('technology.process.title')}</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            {t('technology.process.subtitle')}
          </p>

          <div className="process-grid">
            {PROCESS_ABBRS.map((abbr, i) => (
              <div
                key={abbr}
                className={`process-cell${highlightSteps.has(abbr) ? ' process-cell--key' : ''}`}
              >
                <span className="process-cell__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="process-cell__abbr">{abbr}</span>
                <span className="process-cell__name">{s.technology.process.steps[i].name}</span>
              </div>
            ))}
          </div>

          <div className="process-grid__legend">
            <span className="process-grid__legend-dot" />
            {t('technology.process.legend')}
          </div>
        </div>
      </section>

      {/* ── Package Portfolio ───────────────────────────── */}
      <section className="tech-section tech-section--gray" id="packages">
        <div className="container">
          <span className="section-label">{t('technology.packages.label')}</span>
          <div className="accent-line" />
          <h2 className="section-title">{t('technology.packages.title')}</h2>
          <p className="section-subtitle" style={{ marginBottom: 52 }}>
            {t('technology.packages.subtitle')}
          </p>

          <div className="pkg-portfolio">
            {PACKAGES_SPEC.map((spec, i) => {
              const copy = s.technology.packages.items[i]
              return (
                <div key={spec.name} className={`pkg-pkg-card${spec.qual ? ' pkg-pkg-card--qual' : ''}`} data-pkg={spec.pkgType}>
                  <div className="pkg-pkg-card__header">
                    <h3>{spec.name}</h3>
                    <div className="pkg-pkg-card__badges">
                      {copy.tag && <span className="pkg-badge pkg-badge--popular">{t('technology.packages.badge_popular')}</span>}
                      {spec.qual && <span className="pkg-badge pkg-badge--qual">{t('technology.packages.badge_qual')}</span>}
                    </div>
                  </div>
                  <div className="pkg-pkg-card__meta">
                    <span>{spec.balls}</span>
                    <span>{spec.size}</span>
                    <span>{spec.die}</span>
                  </div>
                  <p>{copy.desc}</p>
                  {spec.nand && (
                    <p className="pkg-pkg-card__sources">
                      <strong>{t('technology.packages.die_sources')}</strong> {spec.nand}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Cleanroom & Capacity ─────────────────────────── */}
      <section className="tech-section tech-section--dark" id="cleanroom">
        <div className="container">
          <span className="section-label">{t('technology.cleanroom.label')}</span>
          <div className="accent-line" />
          <h2 className="section-title light">{t('technology.cleanroom.title')}</h2>
          <p className="section-subtitle light" style={{ marginBottom: 52 }}>
            {t('technology.cleanroom.subtitle')}
          </p>

          <div className="cleanroom-grid">
            {/* Stats cards */}
            <div className="cleanroom-stats">
              <div className="cr-stat">
                <span className="cr-stat__val">894 m²</span>
                <span className="cr-stat__label">{t('technology.cleanroom.stats.class1k_label')}</span>
                <span className="cr-stat__note">{t('technology.cleanroom.stats.class1k_note')}</span>
              </div>
              <div className="cr-stat">
                <span className="cr-stat__val">1,142 m²</span>
                <span className="cr-stat__label">{t('technology.cleanroom.stats.class10k_label')}</span>
                <span className="cr-stat__note">{t('technology.cleanroom.stats.class10k_note')}</span>
              </div>
              <div className="cr-stat cr-stat--accent">
                <span className="cr-stat__val">5,000,000</span>
                <span className="cr-stat__label">{t('technology.cleanroom.stats.capacity_label')}</span>
                <span className="cr-stat__note">{t('technology.cleanroom.stats.capacity_note')}</span>
              </div>
              <div className="cr-stat">
                <span className="cr-stat__val">20%</span>
                <span className="cr-stat__label">{t('technology.cleanroom.stats.expansion_label')}</span>
                <span className="cr-stat__note">{t('technology.cleanroom.stats.expansion_note')}</span>
              </div>
            </div>

            {/* Equipment highlights */}
            <div className="cleanroom-equip">
              <h3>{t('technology.cleanroom.key_equipment')}</h3>
              <div className="equip-cards">
                {EQUIPMENT_SPECS.map((eq, i) => (
                  <div key={i} className="equip-card">
                    <div className="equip-card__header">
                      <span className="equip-card__step">{s.technology.cleanroom.equipment[i].step}</span>
                      <span className="equip-card__maker">{eq.maker}</span>
                    </div>
                    <ul className="equip-card__specs">
                      {eq.specs.map(spec => (
                        <li key={spec}>
                          <span className="check check--dark"><CheckIcon /></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality & Certifications ─────────────────────── */}
      <section className="tech-section tech-section--cert" id="quality">
        <div className="container">
          <span className="section-label">{t('technology.quality.label')}</span>
          <div className="accent-line" />
          <h2 className="section-title light">{t('technology.quality.title')}</h2>
          <p className="section-subtitle light" style={{ marginBottom: 52 }}>
            {t('technology.quality.subtitle')}
          </p>

          <div className="tech-cert-grid">
            {CERT_CODES.map((code, i) => {
              const cert = s.technology.quality.certs[i]
              return (
                <div key={code} className="tech-cert-card">
                  <div className="tech-cert-card__check">
                    <CheckIcon />
                  </div>
                  <div>
                    <span className="tech-cert-card__code">{code}</span>
                    <span className="tech-cert-card__title">{cert.title}</span>
                    <span className="tech-cert-card__valid">{cert.valid}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tech-cta">
        <div className="container tech-cta__inner">
          <h2>{t('technology.cta.title')}</h2>
          <p>{t('technology.cta.subtitle')}</p>
          <div className="tech-cta__btns">
            <Link to="/contact" className="btn-primary">{t('technology.cta.request_briefing')} <ArrowRight /></Link>
            <Link to="/contact" className="btn-outline">{t('technology.cta.download_quality')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
