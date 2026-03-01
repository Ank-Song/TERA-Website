import { Link } from 'react-router-dom'
import './Home.css'

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

/* ── Market data ────────────────────────────────────── */
const markets = [
  {
    icon: '🚗',
    title: 'Automotive',
    desc: 'AEC-Q100 qualified components for ADAS, infotainment, and EV powertrains with stringent reliability requirements.',
  },
  {
    icon: '📡',
    title: 'IoT & Consumer',
    desc: 'Low-power, high-density memory solutions enabling the next generation of connected devices and smart home products.',
  },
  {
    icon: '📱',
    title: 'Mobile',
    desc: 'High-performance eMMC and NAND Flash optimized for smartphones, tablets, and mobile computing platforms.',
  },
  {
    icon: '⚙️',
    title: 'Industrial',
    desc: 'Robust semiconductor solutions engineered for extreme temperatures, vibration, and long operational lifecycles.',
  },
  {
    icon: '🏥',
    title: 'Medical',
    desc: 'Precision-grade chips for diagnostic equipment, patient monitoring systems, and implantable medical devices.',
  },
]

/* ── Differentiators ────────────────────────────────── */
const differentiators = [
  {
    Icon: ChipIcon,
    title: 'Advanced Process Nodes',
    desc: 'Access to leading-edge process technology delivering optimal performance, power, and area for your product requirements.',
  },
  {
    Icon: ShieldIcon,
    title: 'Quality Assurance',
    desc: 'ISO 9001 and IATF 16949 certified processes with rigorous testing at every stage of fabrication.',
  },
  {
    Icon: LeafIcon,
    title: 'Sustainability Commitment',
    desc: 'Environmentally responsible manufacturing leveraging Brazil\'s renewable energy infrastructure for a greener supply chain.',
  },
  {
    Icon: GlobeIcon,
    title: 'Strategic Location',
    desc: 'Operating from Manaus\'s Polo Industrial provides logistical advantages and access to Latin American markets.',
  },
  {
    Icon: SpeedIcon,
    title: 'Fast Time-to-Market',
    desc: 'Streamlined design-to-tape-out workflow and dedicated program management teams minimize your development cycle.',
  },
  {
    Icon: FlaskIcon,
    title: 'R&D Partnership',
    desc: 'Collaborative engineering support from our experienced team to optimize your design for our process technology.',
  },
]

/* ── Stats ──────────────────────────────────────────── */
const stats = [
  { value: '28nm+', label: 'Leading Process Node' },
  { value: '99.6%', label: 'Yield Excellence' },
  { value: '15+', label: 'Product Families' },
  { value: '24/7', label: 'Fab Operations' },
]

/* ── Placeholder clients ──────────────────────────────  */
const clients = ['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E', 'Partner F']

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>

        <div className="hero__inner container">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__dot" />
              Semiconductor Foundry Services
            </div>
            <h1 className="hero__title">
              Advanced Semiconductor<br />
              Manufacturing in the<br />
              <span className="hero__accent">Heart of Brazil</span>
            </h1>
            <p className="hero__subtitle">
              Tera delivers precision semiconductor fabrication — from eMMC and NAND Flash to custom ASICs — with the quality standards global OEMs demand, from our state-of-the-art facility in Manaus.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">
                Request a Quote <ArrowRight />
              </Link>
              <Link to="/technology" className="btn-outline">
                Explore Technology
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__chip-wrap">
              <div className="hero__chip">
                <div className="hero__chip-inner">
                  <div className="hero__chip-core" />
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`hero__chip-pin pin--${i}`} />
                  ))}
                </div>
                <div className="hero__chip-label">TERA-MEM-5G</div>
              </div>
              <div className="hero__orbit hero__orbit--1" />
              <div className="hero__orbit hero__orbit--2" />
            </div>
          </div>
        </div>

        <div className="hero__stats">
          <div className="container hero__stats-inner">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES OVERVIEW ──────────────────────── */}
      <section className="capabilities section">
        <div className="container">
          <div className="capabilities__header">
            <div>
              <span className="section-label">Core Capabilities</span>
              <div className="accent-line" />
              <h2 className="section-title">Built for High-Volume,<br />High-Reliability Production</h2>
            </div>
            <p className="section-subtitle">
              From design consultation through wafer fabrication, packaging, and final test, Tera provides a complete foundry ecosystem under one roof.
            </p>
          </div>

          <div className="capabilities__grid">
            <div className="cap-card cap-card--featured">
              <div className="cap-card__icon"><ChipIcon /></div>
              <h3>Memory Fabrication</h3>
              <p>eMMC 5.1, UFS 3.1, and NAND Flash production optimized for mobile and industrial applications with competitive density and speed specifications.</p>
              <Link to="/technology#memory" className="cap-card__link">
                Learn more <ArrowRight />
              </Link>
            </div>
            <div className="cap-card">
              <div className="cap-card__icon"><FlaskIcon /></div>
              <h3>Process Technology</h3>
              <p>Advanced CMOS process nodes from 28nm to 180nm supporting a broad range of performance and cost targets for consumer, automotive, and industrial markets.</p>
              <Link to="/technology" className="cap-card__link">
                Learn more <ArrowRight />
              </Link>
            </div>
            <div className="cap-card">
              <div className="cap-card__icon"><ShieldIcon /></div>
              <h3>Packaging & Test</h3>
              <p>Full back-end services including wafer sort, assembly in BGA/QFN/WLCSP packages, and final electrical and reliability testing to customer specs.</p>
              <Link to="/technology#packaging" className="cap-card__link">
                Learn more <ArrowRight />
              </Link>
            </div>
            <div className="cap-card">
              <div className="cap-card__icon"><SpeedIcon /></div>
              <h3>Design Services</h3>
              <p>IP integration, DFM analysis, and mask data preparation to accelerate your path from verified RTL to first silicon.</p>
              <Link to="/technology" className="cap-card__link">
                Learn more <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETS ────────────────────────────────────── */}
      <section className="markets-section section section--gray">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Markets We Serve</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Powering Innovation Across Industries
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              Our process technology and memory products serve the most demanding applications in five critical verticals.
            </p>
          </div>

          <div className="markets-grid">
            {markets.map(({ icon, title, desc }) => (
              <div key={title} className="market-card">
                <span className="market-card__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="markets-cta">
            <Link to="/markets" className="btn-primary-dark">
              View All Markets <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY TERA ────────────────────────────────────── */}
      <section className="why-tera section section--dark">
        <div className="why-tera__bg" aria-hidden="true">
          <div className="why-tera__glow" />
        </div>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Why Choose Tera</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center' }}>
              Your Strategic Manufacturing Partner
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 52px' }}>
              We combine world-class process technology with the agility of a dedicated partner focused on your program's success.
            </p>
          </div>

          <div className="diff-grid">
            {differentiators.map(({ Icon, title, desc }) => (
              <div key={title} className="diff-card">
                <div className="diff-card__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ────────────────────────────────────── */}
      <section className="partners section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Trusted Partners</span>
            <div className="accent-line" style={{ margin: '0 auto 16px' }} />
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Industry-leading companies trust Tera for their critical semiconductor manufacturing needs.
            </p>
          </div>
          <div className="partners-strip">
            {clients.map(name => (
              <div key={name} className="partner-logo">
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className="partners-note">
            * Client names are illustrative placeholders pending NDA clearance.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to Bring Your Design to Silicon?</h2>
            <p>Talk to our engineering team about your process requirements, volume, and timeline.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn-primary">
              Request a Quote <ArrowRight />
            </Link>
            <Link to="/technology" className="btn-outline">
              View Technology
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
