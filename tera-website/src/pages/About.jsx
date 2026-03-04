import { Link } from 'react-router-dom'
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

const values = [
  {
    icon: '🎯',
    title: 'Precision',
    desc: 'Every process step is optimized for repeatability and consistency — from ≤2 µm wire bond accuracy to full 3D ball scan inspection on every unit.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We act as an extension of our customers\' engineering teams — transparent, collaborative, and committed to mutual success.',
  },
  {
    icon: '🔬',
    title: 'Innovation',
    desc: 'inTera Tecnologia, our dedicated R&D entity, continuously develops new process capabilities under Brazil\'s PADIS semiconductor incentive programme.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    desc: 'ISO 14001 and ISO 50001 certified. Manufacturing in Manaus gives us access to predominantly hydroelectric power — enabling a greener semiconductor supply chain.',
  },
  {
    icon: '🏆',
    title: 'Excellence',
    desc: 'Four active ISO certifications covering quality, environment, occupational health and energy management — audited annually, not just claimed.',
  },
  {
    icon: '🌍',
    title: 'Brazilian Pride',
    desc: 'Rooted in Manaus since 2015, part of the Digitron Group, and committed to building Latin America\'s most trusted semiconductor assembly operation.',
  },
]

const certifications = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management',
    valid: 'Valid to 30 Nov 2026',
    color: 'teal',
  },
  {
    code: 'ISO 14001:2015',
    title: 'Environmental Management',
    valid: 'Valid to 01 Dec 2026',
    color: 'teal',
  },
  {
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    valid: 'Valid to 30 Aug 2027',
    color: 'teal',
  },
  {
    code: 'ISO 50001:2018',
    title: 'Energy Management',
    valid: 'Valid to 02 Jun 2027',
    color: 'teal',
  },
  {
    code: 'PADIS',
    title: 'Brazilian Semiconductor Incentive',
    valid: 'Programa de Incentivos ao Setor de Semicondutores',
    color: 'blue',
  },
  {
    code: 'RBA Member',
    title: 'Responsible Business Alliance',
    valid: 'Ethical & sustainable supply chain',
    color: 'blue',
  },
]

const timeline = [
  { year: 'Oct 2015', event: 'TERA Semiconductor founded within the Digitron Group in Manaus, Amazonas. "Trusted Engineering & Reliable Assembly" — built to serve Brazil and the Americas.' },
  { year: '2016', event: 'Cleanroom becomes operational. ISO 9001:2015 Quality Management certification achieved. First package assembly lines qualified.' },
  { year: '2019', event: 'ISO 14001:2015 Environmental Management certification achieved, formalising our commitment to responsible manufacturing.' },
  { year: '2021', event: 'ISO 45001:2018 Occupational Health & Safety certification achieved. Workforce safety standards reach international benchmark.' },
  { year: '2022', event: 'inTera Tecnologia R&D entity established — dedicated scientific research and development under the PADIS incentive programme.' },
  { year: '2024', event: 'ISO 50001:2018 Energy Management certification achieved. Four active ISO certifications now cover quality, environment, safety and energy.' },
  { year: '2025', event: 'Production reaches 5 million units per month. 20% of cleanroom area remains available for new customer programmes and equipment expansion.' },
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
            Trusted Engineering.<br />
            Reliable Assembly.
          </h1>
          <p className="page-hero__subtitle">
            TERA Semiconductor — part of the Digitron Group — is a fully automated semiconductor package assembly and test facility headquartered in Manaus, Brazil, inside the Zona Franca de Manaus special economic zone.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="about-section" id="mission">
        <div className="container about-intro">
          <div className="about-intro__text">
            <span className="section-label">Our Mission</span>
            <div className="accent-line" />
            <h2 className="section-title">Brazil's Premier Semiconductor Assembly House</h2>
            <p>
              Founded in October 2015, TERA — which stands for <strong>Trusted Engineering &amp; Reliable Assembly</strong> — was built on a single conviction: that world-class semiconductor back-end manufacturing belongs in Latin America. Operating within the Digitron Group and the Zona Franca de Manaus, we combine a fully automated 18-step assembly process with four active ISO certifications to deliver finished, tested semiconductor packages at scale.
            </p>
            <p style={{ marginTop: 16 }}>
              Our 3,700 m² facility houses both a Class 1K and a Class 10K cleanroom, capable of producing 5 million units per month. With 20% of our cleanroom area still available for new equipment, we are actively expanding capacity alongside our customers.
            </p>
            <p style={{ marginTop: 16 }}>
              Research and development is conducted through <strong>inTera Tecnologia</strong>, our dedicated R&amp;D entity, under Brazil's PADIS semiconductor incentive programme. As a member of the Responsible Business Alliance, we hold ourselves to the highest standards of ethical and sustainable manufacturing.
            </p>
          </div>

          <div className="about-intro__stats">
            <div className="about-stat">
              <span className="about-stat__value">2015</span>
              <span className="about-stat__label">Founded</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">46</span>
              <span className="about-stat__label">Employees</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">5M</span>
              <span className="about-stat__label">Units / Month</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">3,700 m²</span>
              <span className="about-stat__label">Facility Area</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">4</span>
              <span className="about-stat__label">ISO Certifications</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">18</span>
              <span className="about-stat__label">Process Steps</span>
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

      {/* Certifications */}
      <section className="about-section about-section--dark" id="certifications">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">Certifications &amp; Programmes</span>
            <div className="accent-line" />
            <h2 className="section-title light">Verified Quality at Every Level</h2>
            <p className="section-subtitle light">
              Four active ISO certifications — quality, environment, health &amp; safety, and energy — plus membership in Brazil's PADIS semiconductor incentive programme and the Responsible Business Alliance.
            </p>
          </div>
          <div className="cert-grid">
            {certifications.map(({ code, title, valid }) => (
              <div key={code} className="cert-card">
                <div className="cert-card__check">
                  <CheckIcon />
                </div>
                <div>
                  <span className="cert-card__code">{code}</span>
                  <span className="cert-card__title">{title}</span>
                  <span className="cert-card__valid">{valid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="section-label">Company History</span>
            <div className="accent-line" />
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From a vision in 2015 to Manaus's most advanced semiconductor assembly operation.
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

      {/* Location */}
      <section className="about-section about-section--gray" id="location">
        <div className="container location-grid">
          <div>
            <span className="section-label">Location</span>
            <div className="accent-line" />
            <h2 className="section-title">Manaus, Amazonas — Brazil</h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              Located within the Zona Franca de Manaus (ZFM) — Brazil's special economic free trade zone established in 1967 — TERA benefits from significant tax incentives under PADIS and PPB programmes, while sitting just minutes from an international airport and harbor.
            </p>
            <div className="location-facts">
              <div className="location-fact">
                <strong>Address</strong>
                <span>Av. Torquato Tapajós #7503, Tarumã, Manaus/AM — CEP 69041-025</span>
              </div>
              <div className="location-fact">
                <strong>Airport</strong>
                <span>10 min / 8.4 km from Eduardo Gomes International Airport (MAO)</span>
              </div>
              <div className="location-fact">
                <strong>Harbor</strong>
                <span>25 km from Manaus Harbor — access to sea freight routes</span>
              </div>
              <div className="location-fact">
                <strong>Domestic Shipping</strong>
                <span>São Paulo ~3 days · Bahia ~5 days · Rio Grande do Sul ~5 days</span>
              </div>
              <div className="location-fact">
                <strong>Economic Zone</strong>
                <span>Zona Franca de Manaus (ZFM) — tax incentives via PADIS &amp; PPB programmes</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              Get in Touch <ArrowRight />
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
          <h2>Partner with Tera</h2>
          <p>Contact our team to discuss how TERA can support your semiconductor assembly and test requirements.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">Our Technology</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
