import { Link } from 'react-router-dom'
import './About.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const values = [
  {
    icon: '🎯',
    title: 'Precision',
    desc: 'Every process step is optimized for repeatability, consistency, and performance down to the atomic level.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We act as an extension of our customers\' engineering teams — transparent, collaborative, and committed to mutual success.',
  },
  {
    icon: '🔬',
    title: 'Innovation',
    desc: 'Continuous R&D investment drives process improvements and new product capabilities that keep our customers ahead of competition.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    desc: 'Manufacturing in Manaus gives us access to Brazil\'s abundant renewable energy, enabling a greener semiconductor supply chain.',
  },
  {
    icon: '🏆',
    title: 'Excellence',
    desc: 'Our quality management system exceeds industry benchmarks, from wafer yield metrics to on-time delivery performance.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    desc: 'While rooted in Brazil, we serve customers across the Americas, Europe, and Asia with full logistics support.',
  },
]

const timeline = [
  { year: '2010', event: 'Tera Semiconductor founded in Manaus, Amazonas, Brazil.' },
  { year: '2013', event: 'First production line operational; 180nm CMOS process certified.' },
  { year: '2016', event: 'ISO 9001 certification achieved. 110nm process node introduced.' },
  { year: '2018', event: 'Expansion of fab capacity to 30,000 wafer starts per month.' },
  { year: '2020', event: 'IATF 16949 certification for automotive-grade production.' },
  { year: '2022', event: 'eMMC 5.1 and UFS 3.1 memory product lines launched.' },
  { year: '2024', event: '28nm process node achieves production-ready status.' },
  { year: '2026', event: 'Expansion phase II begins; targeting 3D NAND integration.' },
]

const leadership = [
  {
    name: 'Dr. Ana Carvalho',
    title: 'Chief Executive Officer',
    bio: 'Former VP at a leading European foundry, Dr. Carvalho holds a PhD in Materials Science from USP and brings 22 years of semiconductor industry experience.',
    initials: 'AC',
  },
  {
    name: 'Ricardo Mendes',
    title: 'Chief Technology Officer',
    bio: 'Pioneer in sub-40nm CMOS process development with 15 patents. Former research director at IMEC Belgium before joining Tera to lead its advanced process program.',
    initials: 'RM',
  },
  {
    name: 'Fernanda Souza',
    title: 'Chief Operating Officer',
    bio: 'Operations executive with expertise in lean manufacturing and semiconductor yield improvement. Led capacity expansion programs for fabs across two continents.',
    initials: 'FS',
  },
  {
    name: 'Carlos Lima',
    title: 'VP, Sales & Business Development',
    bio: '20 years of global semiconductor sales experience, with deep relationships across major OEMs in automotive, mobile, and industrial segments.',
    initials: 'CL',
  },
]

export default function About() {
  return (
    <div className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">About Tera</span>
          <h1 className="page-hero__title">
            Built in Brazil.<br />
            Built for the World.
          </h1>
          <p className="page-hero__subtitle">
            Tera Semiconductor is a leading independent semiconductor foundry headquartered in Manaus, Brazil. We combine advanced process technology with a relentless commitment to quality to deliver the chips that power tomorrow's products.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="about-section" id="mission">
        <div className="container about-intro">
          <div className="about-intro__text">
            <span className="section-label">Our Mission</span>
            <div className="accent-line" />
            <h2 className="section-title">Enabling the Next Generation of Innovation</h2>
            <p>
              Tera was founded on a simple but powerful belief: that world-class semiconductor manufacturing doesn't have to be confined to Silicon Valley or East Asia. By establishing our foundry operations in Manaus — Brazil's technology hub — we've created a unique supply chain advantage for customers seeking to diversify their manufacturing footprint.
            </p>
            <p style={{ marginTop: 16 }}>
              Our mission is to be the preferred strategic manufacturing partner for semiconductor companies worldwide, delivering first-class process technology, superior quality, and the agility that only a dedicated foundry can provide.
            </p>
            <p style={{ marginTop: 16 }}>
              Today, Tera operates one of Latin America's most advanced semiconductor fabrication facilities, with capacity across logic, memory, and specialty process nodes ranging from 28nm to 180nm. Our customer base spans global OEMs in automotive, mobile, industrial, and medical markets.
            </p>
          </div>
          <div className="about-intro__stats">
            <div className="about-stat">
              <span className="about-stat__value">2010</span>
              <span className="about-stat__label">Founded</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">850+</span>
              <span className="about-stat__label">Employees</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">30K</span>
              <span className="about-stat__label">Wafer Starts / Month</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">40+</span>
              <span className="about-stat__label">Countries Served</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">5</span>
              <span className="about-stat__label">Process Nodes</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">99.6%</span>
              <span className="about-stat__label">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-section--gray">
        <div className="container">
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Our Values</span>
            <div className="accent-line" style={{ margin: '0 auto 16px' }} />
            <h2 className="section-title">What Drives Us Every Day</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <span className="value-card__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section about-section--dark">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">Company History</span>
            <div className="accent-line" />
            <h2 className="section-title light">Our Journey</h2>
            <p className="section-subtitle light">
              From a vision in 2010 to one of Latin America's premier semiconductor foundries.
            </p>
          </div>
          <div className="timeline">
            {timeline.map(({ year, event }, i) => (
              <div key={year} className={`timeline-item${i % 2 === 0 ? '' : ' timeline-item--right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{year}</span>
                  <p>{event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-section">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">Leadership</span>
            <div className="accent-line" />
            <h2 className="section-title">Experienced Industry Veterans</h2>
            <p className="section-subtitle">
              Our leadership team brings decades of combined semiconductor experience from the world's top foundries, chipmakers, and research institutions.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map(({ name, title, bio, initials }) => (
              <div key={name} className="leader-card">
                <div className="leader-avatar">{initials}</div>
                <h3>{name}</h3>
                <span className="leader-title">{title}</span>
                <p>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="about-section about-section--gray" id="location">
        <div className="container location-grid">
          <div>
            <span className="section-label">Location</span>
            <div className="accent-line" />
            <h2 className="section-title">Manaus, Amazonas — Brazil</h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              Tera's state-of-the-art fabrication facility is located in the Polo Industrial de Manaus (PIM) — Brazil's largest industrial park — strategically positioned in the heart of the Amazon region.
            </p>
            <div className="location-facts">
              <div className="location-fact">
                <strong>Fab Area</strong>
                <span>120,000 m² — cleanroom + support facilities</span>
              </div>
              <div className="location-fact">
                <strong>Cleanroom Class</strong>
                <span>ISO Class 5 (100) for critical lithography areas</span>
              </div>
              <div className="location-fact">
                <strong>Power Source</strong>
                <span>98% hydroelectric — among the greenest fabs globally</span>
              </div>
              <div className="location-fact">
                <strong>Access</strong>
                <span>Direct airport access — Eduardo Gomes International (MAO)</span>
              </div>
              <div className="location-fact">
                <strong>Tax Incentive Zone</strong>
                <span>Zona Franca de Manaus — strategic fiscal advantages for customers</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              Visit Our Facility <ArrowRight />
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
              <span className="map-sublabel">Polo Industrial de Manaus</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Partner with Tera</h2>
          <p>Contact our business development team to discuss how Tera can support your semiconductor manufacturing needs.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">Our Technology</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
