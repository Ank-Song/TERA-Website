import { Link } from 'react-router-dom'
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

/* 18-step assembly process */
const processSteps = [
  { abbr: 'TA',  name: 'Tape Application' },
  { abbr: 'BG',  name: 'Back Grinding' },
  { abbr: 'LG',  name: 'Laser Grooving' },
  { abbr: 'DS',  name: 'Die Saw' },
  { abbr: 'SPB', name: 'Substrate Pre-Bake' },
  { abbr: 'DB',  name: 'Die Bond' },
  { abbr: 'DBC', name: 'Die Bond Cure' },
  { abbr: 'PLM', name: 'Plasma Clean' },
  { abbr: 'WB',  name: 'Wire Bond' },
  { abbr: 'MD',  name: 'Molding' },
  { abbr: 'PMC', name: 'Post Mold Cure' },
  { abbr: 'LM',  name: 'Laser Marking' },
  { abbr: 'HPW', name: 'High Pressure Wash' },
  { abbr: 'BM',  name: 'Ball Mount' },
  { abbr: 'SGL', name: 'Singulation' },
  { abbr: 'BS',  name: 'Ball Scan Inspection' },
  { abbr: 'FT',  name: 'Final Test' },
  { abbr: 'PK',  name: 'Packaging' },
]

/* Highlight steps that are key differentiators */
const highlightSteps = new Set(['WB', 'DB', 'BS', 'FT'])

/* Package portfolio */
const packages = [
  {
    name: 'eMMC',
    pkgType: 'emmc',
    balls: '153-ball',
    size: '11.5 × 13 mm',
    die: '1× to 4× die',
    desc: 'Embedded MultiMediaCard — the industry-standard solution for mobile, tablet, and embedded Linux platforms.',
    nand: 'Toshiba BiCS2/3/4/5 · Micron B16A/17A/27B/B47R/B57T · Samsung K9A/V5/V6/V8 · SanDisk G1ZED3D',
    tag: 'Most Popular',
    qual: false,
  },
  {
    name: 'eMCP',
    pkgType: 'emcp',
    balls: '221-ball',
    size: '11.5 × 13 mm',
    die: '1× to 4× die',
    desc: 'Embedded Multi-Chip Package combining NAND and DRAM in a single footprint — 8+6 Gb, 16+8 Gb, and 32+16 Gb configurations.',
    nand: 'NAND: Samsung K9A/V5/V6 · Toshiba BiCS3/5 / DRAM: Micron B16A/17A/27B/47R',
    tag: null,
    qual: false,
  },
  {
    name: 'BGA',
    pkgType: 'bga',
    balls: '252 / 272-ball',
    size: '14 × 18 mm',
    die: '1× to 4× die',
    desc: 'Ball Grid Array for high-density storage applications. Compatible with Samsung AFG, Toshiba BiCS3/4/5, and Micron NAND.',
    nand: 'Samsung AFG · Toshiba BiCS3/4/5 · Micron B16A/27B/B47R',
    tag: null,
    qual: false,
  },
  {
    name: 'BGA (High-Density)',
    pkgType: 'bgahd',
    balls: '132-ball',
    size: '12 × 18 mm',
    die: '4× to 8× die',
    desc: 'High-die-count BGA for maximum storage density. Supports Micron Z42M and Z42N NAND flash.',
    nand: 'Micron Z42M · Z42N',
    tag: null,
    qual: true,
  },
  {
    name: 'LPDDR',
    pkgType: 'lpddr',
    balls: '200-ball',
    size: '10 × 14.5 mm',
    die: '2× to 4× die',
    desc: 'Low-Power DDR mobile DRAM for smartphones, tablets, and automotive infotainment systems.',
    nand: null,
    tag: null,
    qual: true,
  },
]

/* Key equipment highlights */
const equipment = [
  {
    step: 'Wire Bond',
    maker: 'KNS — Connx IConn PLUS',
    specs: [
      '≤ 2.0 µm bond accuracy (3σ)',
      '35 µm pitch · 0.8 mil gold wire',
      'Package up to 90 × 300 mm',
    ],
  },
  {
    step: 'Die Bond',
    maker: 'Fastford DB8308',
    specs: [
      '≤ 5 µm placement accuracy (3σ)',
      '200 mm & 300 mm wafer support',
      'Die thickness from 60 µm',
    ],
  },
  {
    step: 'Ball Scan Inspection',
    maker: 'Koh Young KOCi 3D',
    specs: [
      'Full top / bottom / side inspection',
      '2D + 3D camera system',
      'CIS coplanarity measurement',
    ],
  },
  {
    step: 'Singulation',
    maker: 'Disco DFD 6X63',
    specs: [
      '~30,000 units / hour throughput',
      'Substrates up to 260 × 330 mm',
      'Product changeover < 10 min',
    ],
  },
]

/* Certifications */
const certifications = [
  { code: 'ISO 9001:2015', title: 'Quality Management', valid: 'Valid to 30 Nov 2026' },
  { code: 'ISO 14001:2015', title: 'Environmental Management', valid: 'Valid to 01 Dec 2026' },
  { code: 'ISO 45001:2018', title: 'Occupational Health & Safety', valid: 'Valid to 30 Aug 2027' },
  { code: 'ISO 50001:2018', title: 'Energy Management', valid: 'Valid to 02 Jun 2027' },
  { code: 'PADIS', title: 'Brazilian Semiconductor Incentive', valid: 'Programa de Incentivos ao Setor de Semicondutores' },
  { code: 'RBA Member', title: 'Responsible Business Alliance', valid: 'Ethical & sustainable supply chain' },
]

export default function Technology() {
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
          <span className="section-label">Technology</span>
          <h1 className="tech-hero__title">
            Fully Automated Assembly<br />
            &amp; Test — Start to Finish
          </h1>
          <p className="tech-hero__subtitle">
            An 18-step back-end semiconductor process — from bare wafer to finished, tested package — executed inside a Class 1K and Class 10K cleanroom at 5 million units per month.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Requirements <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── Assembly Process Flow ───────────────────────── */}
      <section className="tech-section" id="process">
        <div className="container">
          <span className="section-label">Process Technology</span>
          <div className="accent-line" />
          <h2 className="section-title">18-Step Back-End Assembly Process</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Every unit follows a controlled, fully automated sequence — from wafer preparation through final electrical test and shipping packaging. Steps marked with a gold border are key precision differentiators.
          </p>

          <div className="process-grid">
            {processSteps.map(({ abbr, name }, i) => (
              <div
                key={abbr}
                className={`process-cell${highlightSteps.has(abbr) ? ' process-cell--key' : ''}`}
              >
                <span className="process-cell__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="process-cell__abbr">{abbr}</span>
                <span className="process-cell__name">{name}</span>
              </div>
            ))}
          </div>

          <div className="process-grid__legend">
            <span className="process-grid__legend-dot" />
            Gold border = precision-critical step
          </div>
        </div>
      </section>

      {/* ── Package Portfolio ───────────────────────────── */}
      <section className="tech-section tech-section--gray" id="packages">
        <div className="container">
          <span className="section-label">Package Portfolio</span>
          <div className="accent-line" />
          <h2 className="section-title">eMMC, eMCP, BGA &amp; LPDDR</h2>
          <p className="section-subtitle" style={{ marginBottom: 52 }}>
            TERA assembles and tests five package families, supporting a broad range of NAND flash and DRAM die sources. Configurations under active qualification are marked below.
          </p>

          <div className="pkg-portfolio">
            {packages.map(({ name, pkgType, balls, size, die, desc, nand, tag, qual }) => (
              <div key={name} className={`pkg-pkg-card${qual ? ' pkg-pkg-card--qual' : ''}`} data-pkg={pkgType}>
                <div className="pkg-pkg-card__header">
                  <h3>{name}</h3>
                  <div className="pkg-pkg-card__badges">
                    {tag && <span className="pkg-badge pkg-badge--popular">{tag}</span>}
                    {qual && <span className="pkg-badge pkg-badge--qual">Qualification</span>}
                  </div>
                </div>
                <div className="pkg-pkg-card__meta">
                  <span>{balls}</span>
                  <span>{size}</span>
                  <span>{die}</span>
                </div>
                <p>{desc}</p>
                {nand && (
                  <p className="pkg-pkg-card__sources">
                    <strong>Die sources:</strong> {nand}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cleanroom & Capacity ─────────────────────────── */}
      <section className="tech-section tech-section--dark" id="cleanroom">
        <div className="container">
          <span className="section-label">Cleanroom &amp; Capacity</span>
          <div className="accent-line" />
          <h2 className="section-title light">Class 1K + Class 10K Facility</h2>
          <p className="section-subtitle light" style={{ marginBottom: 52 }}>
            Two controlled cleanroom zones, particle-monitored continuously, with 20% capacity available for new customer equipment and programme ramp.
          </p>

          <div className="cleanroom-grid">
            {/* Stats cards */}
            <div className="cleanroom-stats">
              <div className="cr-stat">
                <span className="cr-stat__val">894 m²</span>
                <span className="cr-stat__label">Class 1K Cleanroom</span>
                <span className="cr-stat__note">≤ 1,000 particles (≥0.5 µm) / ft³</span>
              </div>
              <div className="cr-stat">
                <span className="cr-stat__val">1,142 m²</span>
                <span className="cr-stat__label">Class 10K Cleanroom</span>
                <span className="cr-stat__note">≤ 10,000 particles (≥0.5 µm) / ft³</span>
              </div>
              <div className="cr-stat cr-stat--accent">
                <span className="cr-stat__val">5,000,000</span>
                <span className="cr-stat__label">Units / Month Capacity</span>
                <span className="cr-stat__note">Maximum production capacity</span>
              </div>
              <div className="cr-stat">
                <span className="cr-stat__val">20%</span>
                <span className="cr-stat__label">Available for Expansion</span>
                <span className="cr-stat__note">Vacant cleanroom area ready for new equipment</span>
              </div>
            </div>

            {/* Equipment highlights */}
            <div className="cleanroom-equip">
              <h3>Key Production Equipment</h3>
              <div className="equip-cards">
                {equipment.map(({ step, maker, specs }) => (
                  <div key={step} className="equip-card">
                    <div className="equip-card__header">
                      <span className="equip-card__step">{step}</span>
                      <span className="equip-card__maker">{maker}</span>
                    </div>
                    <ul className="equip-card__specs">
                      {specs.map(s => (
                        <li key={s}>
                          <span className="check check--dark"><CheckIcon /></span>
                          {s}
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
          <span className="section-label">Quality &amp; Compliance</span>
          <div className="accent-line" />
          <h2 className="section-title light">Four ISO Certifications. One Supply Chain.</h2>
          <p className="section-subtitle light" style={{ marginBottom: 52 }}>
            Every process step is controlled and audited under an integrated management system covering quality, environment, occupational health &amp; safety, and energy — all active and current.
          </p>

          <div className="tech-cert-grid">
            {certifications.map(({ code, title, valid }) => (
              <div key={code} className="tech-cert-card">
                <div className="tech-cert-card__check">
                  <CheckIcon />
                </div>
                <div>
                  <span className="tech-cert-card__code">{code}</span>
                  <span className="tech-cert-card__title">{title}</span>
                  <span className="tech-cert-card__valid">{valid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tech-cta">
        <div className="container tech-cta__inner">
          <h2>Ready to Qualify Your Product at TERA?</h2>
          <p>Request a technical briefing, facility overview, or sample run to evaluate our assembly and test capabilities.</p>
          <div className="tech-cta__btns">
            <Link to="/contact" className="btn-primary">Request a Briefing <ArrowRight /></Link>
            <Link to="/contact" className="btn-outline">Download Quality Pack</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
