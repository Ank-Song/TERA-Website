import { Link } from 'react-router-dom'
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

const markets = [
  {
    id: 'automotive',
    icon: '🚗',
    name: 'Automotive',
    tagline: 'The Road Ahead Runs on Tera Silicon',
    desc: 'Modern vehicles contain hundreds of semiconductor chips. From engine control units to ADAS cameras, the automotive industry demands the most rigorous reliability standards in the world. Tera meets and exceeds these standards with our IATF 16949-certified processes and AEC-Q100 qualified product families.',
    requirements: [
      'Zero-defect quality targets',
      'Extended temperature operation (−40°C to 150°C)',
      'Functional Safety (ISO 26262) support',
      'Long product lifecycle commitments (15+ years)',
      'PPAP documentation and traceability',
    ],
    products: ['eMMC 5.1 Automotive Grade', '40nm embedded Flash MCU', 'Power Management ICs', 'LIDAR Signal Processing'],
    growth: '12% CAGR',
    tam: '$68B',
  },
  {
    id: 'iot',
    icon: '📡',
    name: 'IoT & Consumer',
    tagline: 'Connecting the World, One Chip at a Time',
    desc: 'The Internet of Things market demands ultra-low power consumption, small form factors, and cost-competitive solutions at massive volumes. Tera\'s optimized low-power process nodes and WLCSP packaging enable our customers to build edge devices that run for years on a single battery charge.',
    requirements: [
      'Ultra-low power standby (< 1 µA)',
      'Cost-optimized die area',
      'High-volume production flexibility',
      'Integrated connectivity (BLE, Wi-Fi, Zigbee ready)',
      'OTA update security features',
    ],
    products: ['IoT SoC enablement', 'Low-power SRAM / Flash', 'Sensor interface ASICs', 'Energy harvesting ICs'],
    growth: '22% CAGR',
    tam: '$53B',
  },
  {
    id: 'mobile',
    icon: '📱',
    name: 'Mobile',
    tagline: 'Performance That Fits in Your Pocket',
    desc: 'Smartphones and tablets push the boundaries of semiconductor performance and power efficiency. Tera\'s eMMC 5.1 and UFS 3.1 memory products deliver the storage bandwidth needed for 4K video, AI on-device inference, and fast app launches — all within the tight thermal budgets of thin mobile devices.',
    requirements: [
      'High sequential read/write bandwidth',
      'Low idle power consumption',
      'Compact BGA packaging',
      'Hardware encryption support',
      'Wear leveling and extended endurance',
    ],
    products: ['eMMC 5.1 (up to 256 GB)', 'UFS 3.1 (up to 512 GB)', 'LPDDR5X mobile DRAM', 'Display driver ICs'],
    growth: '8% CAGR',
    tam: '$45B',
  },
  {
    id: 'industrial',
    icon: '⚙️',
    name: 'Industrial',
    tagline: 'Engineered for the Harshest Environments',
    desc: 'Industrial applications place extreme demands on semiconductor reliability — wide temperature ranges, exposure to vibration and humidity, and operational lifetimes measured in decades, not years. Tera\'s industrial-grade process nodes and packaging options are designed to keep factories, infrastructure, and energy systems running without interruption.',
    requirements: [
      'Temperature range: −55°C to 125°C',
      'High endurance (SLC NAND: 100K P/E cycles)',
      'EMI hardening and ESD protection',
      'Long-term product availability (10+ years)',
      'IEC 61508 SIL support paths',
    ],
    products: ['Industrial NAND Flash', 'Power conversion ICs', 'Motor control ASICs', 'PLC interface chips'],
    growth: '9% CAGR',
    tam: '$29B',
  },
  {
    id: 'medical',
    icon: '🏥',
    name: 'Medical',
    tagline: 'Precision Manufacturing for Life-Critical Devices',
    desc: 'Medical device semiconductors must meet extraordinary standards for quality, reliability, and traceability. From implantable sensors to imaging equipment, Tera provides the manufacturing discipline and documentation rigor required by FDA 21 CFR Part 820, ISO 13485, and CE marking requirements.',
    requirements: [
      'ISO 13485 quality management system',
      'Full material traceability (lot-level)',
      'Biocompatibility requirements support',
      'Ultra-low leakage for implantable devices',
      'Change notification protocols',
    ],
    products: ['Implantable sensor ICs', 'Diagnostic imaging ASICs', 'Infusion pump controllers', 'Patient monitoring SoCs'],
    growth: '15% CAGR',
    tam: '$11B',
  },
]

export default function Markets() {
  return (
    <div className="markets-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">Markets</span>
          <h1 className="page-hero__title">
            Serving the Industries<br />
            That Shape the Future
          </h1>
          <p className="page-hero__subtitle">
            From automotive safety systems to life-critical medical devices, Tera's process technology and memory products power innovation across five critical verticals — each with unique requirements we understand deeply.
          </p>
        </div>
      </section>

      {/* Market Overview Strip */}
      <div className="market-overview">
        <div className="container market-overview__inner">
          {markets.map(({ id, icon, name, growth, tam }) => (
            <a key={id} href={`#${id}`} className="market-pill">
              <span>{icon}</span>
              <span>{name}</span>
              <span className="market-pill__stat">{growth}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Individual Market Sections */}
      {markets.map(({ id, icon, name, tagline, desc, requirements, products, growth, tam }, i) => (
        <section key={id} id={id} className={`mkt-section${i % 2 !== 0 ? ' mkt-section--alt' : ''}`}>
          <div className="container mkt-grid">
            <div className="mkt-content">
              <div className="mkt-eyebrow">
                <span className="mkt-icon">{icon}</span>
                <span className="section-label" style={{ marginBottom: 0 }}>{name}</span>
              </div>
              <h2 className="mkt-title">{tagline}</h2>
              <p className="mkt-desc">{desc}</p>

              <div className="mkt-cols">
                <div>
                  <h4>Key Requirements</h4>
                  <ul className="mkt-list">
                    {requirements.map(r => (
                      <li key={r}>
                        <span className="mkt-check"><CheckIcon /></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Tera Products</h4>
                  <ul className="mkt-products">
                    {products.map(p => (
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
                  <span className="mkt-metric__label">Market Growth Rate</span>
                </div>
                <div className="mkt-metric">
                  <span className="mkt-metric__val">{tam}</span>
                  <span className="mkt-metric__label">Total Addressable Market</span>
                </div>
              </div>

              <Link to="/contact" className="btn-primary-dark">
                Discuss {name} Requirements <ArrowRight />
              </Link>
            </div>

            <div className="mkt-visual" aria-hidden="true">
              <div className="mkt-visual__card">
                <div className="mkt-visual__icon">{icon}</div>
                <div className="mkt-visual__name">{name} Segment</div>
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
      ))}

      {/* CTA */}
      <section className="mkt-cta">
        <div className="container mkt-cta__inner">
          <h2>Find the Right Solution for Your Market</h2>
          <p>Our applications engineers have deep vertical expertise. Let's discuss your specific requirements, qualification needs, and volume targets.</p>
          <div className="mkt-cta__btns">
            <Link to="/contact" className="btn-primary">Contact Sales <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">View Technology</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
