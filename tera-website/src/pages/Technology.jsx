import { Link } from 'react-router-dom'
import './Technology.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const processes = [
  {
    node: '28nm',
    type: 'High-Performance Logic',
    status: 'Production',
    apps: 'Mobile SoC, AI Inference, High-Speed Interfaces',
    specs: ['FinFET-inspired planar CMOS', 'Low-power variants available', 'Multi-Vt support', '10+ metal layers'],
  },
  {
    node: '40nm',
    type: 'Embedded Memory',
    status: 'Production',
    apps: 'Automotive, Industrial MCU, Smart Card',
    specs: ['eFlash & eSRAM integration', 'HV options up to 12V', 'AEC-Q100 Grade 1', 'Extended temp −40°C to 125°C'],
  },
  {
    node: '55nm',
    type: 'Mixed-Signal',
    status: 'Production',
    apps: 'Power Management, RF Front-End, Sensor Interface',
    specs: ['Precision analog & RF', 'MIM/MOM capacitors', 'Thick-metal inductor', 'Low-noise transistors'],
  },
  {
    node: '110nm',
    type: 'Specialty CMOS',
    status: 'Production',
    apps: 'CIS, Display Driver, IoT Edge',
    specs: ['Pixel sensor process', 'BSI-compatible', 'Deep-trench isolation', 'ESD-robust I/O library'],
  },
  {
    node: '180nm',
    type: 'High-Voltage CMOS',
    status: 'Production',
    apps: 'Power IC, Motor Driver, Energy Harvesting',
    specs: ['BCD process (Bipolar-CMOS-DMOS)', '5V – 40V devices', 'Isolated DMOS options', 'Robust latch-up immunity'],
  },
]

const memoryProducts = [
  {
    name: 'eMMC 5.1',
    desc: 'Embedded MultiMediaCard storage for smartphones, tablets, and embedded Linux platforms requiring high sequential throughput and low latency boot.',
    specs: [
      'Up to 256 GB density',
      'Sequential Read: 300 MB/s',
      'Sequential Write: 150 MB/s',
      'HS400 interface mode',
      'Built-in wear leveling & ECC',
      '-25°C to 85°C operation',
    ],
    tag: 'Most Popular',
  },
  {
    name: 'UFS 3.1',
    desc: 'Universal Flash Storage for flagship mobile and automotive infotainment with the highest random IOPS and multi-stream write capability.',
    specs: [
      'Up to 512 GB density',
      'Sequential Read: 1,200 MB/s',
      'Sequential Write: 500 MB/s',
      'Gear 4 dual lane',
      'HS-G4 interface',
      'Hardware Cryptography (AES-256)',
    ],
    tag: 'Flagship',
  },
  {
    name: 'Industrial NAND',
    desc: 'SLC and 3D pSLC NAND optimized for extended endurance in harsh environments — industrial automation, medical devices, and automotive ADAS.',
    specs: [
      'Up to 128 GB SLC',
      '100K P/E cycle endurance',
      'Pwrite: < 1 μs (pSLC)',
      'BBM with extended block pool',
      'ONFI 4.2 interface',
      'AEC-Q100 qualification path',
    ],
    tag: 'Industrial Grade',
  },
  {
    name: 'Low-Power LPDDR5X',
    desc: 'Mobile DRAM for ultra-thin form factor devices with best-in-class power efficiency and bandwidth for AI workloads at the edge.',
    specs: [
      'Up to 16 GB per package',
      '8533 Mbps data rate',
      'LPDDR5X JEDEC compliance',
      '< 1 mA deep sleep',
      'On-die ECC',
      'x16 / x32 bus width',
    ],
    tag: 'New',
  },
]

const packageTypes = [
  { name: 'BGA / PoP', desc: 'Ball Grid Array with Package-on-Package stacking for high-density mobile and IoT applications.' },
  { name: 'QFN / QFP', desc: 'Quad Flat No-lead and Flat Pack for cost-effective automotive and industrial designs.' },
  { name: 'WLCSP', desc: 'Wafer-Level Chip Scale Package delivering the smallest footprint for wearables and medical implants.' },
  { name: 'LGA / SOP', desc: 'Land Grid Array and Small Outline Package for memory modules and legacy-compatible upgrades.' },
  { name: 'Flip-Chip', desc: 'High-I/O density interconnect for high-performance processor and FPGA applications.' },
  { name: 'Custom CoWoS', desc: 'Chip-on-Wafer-on-Substrate multi-die integration for HPC and AI accelerator designs.' },
]

const testServices = [
  'Wafer Sort (CP) — full parametric & functional',
  'Final Test (FT) — HTOL, LTOL, temp cycling',
  'Burn-In & Reliability Qualification',
  'Failure Analysis & Cross-Section SEM',
  'ATE: Advantest T2000 & Teradyne Ultraflex',
  'On-Site Failure Analysis Lab',
]

export default function Technology() {
  return (
    <div className="tech-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__grid" />
          <div className="page-hero__glow" />
        </div>
        <div className="container page-hero__inner">
          <span className="section-label">Technology</span>
          <h1 className="page-hero__title">
            Precision Process Technology<br />
            for Every Application
          </h1>
          <p className="page-hero__subtitle">
            From 28nm logic to 180nm high-voltage CMOS, Tera's process portfolio spans the full spectrum of semiconductor applications — backed by rigorous quality systems and dedicated engineering support.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Requirements <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Process Capabilities */}
      <section className="tech-section" id="process">
        <div className="container">
          <span className="section-label">Process Technology</span>
          <div className="accent-line" />
          <h2 className="section-title">Advanced CMOS Process Nodes</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Our process portfolio covers logic, memory, mixed-signal, and specialty applications. Each node is fully characterized, PDK-ready, and supported by a comprehensive design enablement package.
          </p>

          <div className="process-table">
            <div className="process-table__header">
              <span>Node</span>
              <span>Technology Type</span>
              <span>Status</span>
              <span>Target Applications</span>
              <span>Key Features</span>
            </div>
            {processes.map(({ node, type, status, apps, specs }) => (
              <div key={node} className="process-row">
                <div className="process-row__node">{node}</div>
                <div>
                  <strong>{type}</strong>
                </div>
                <div>
                  <span className="status-badge status-badge--production">{status}</span>
                </div>
                <div className="process-row__apps">{apps}</div>
                <div className="process-row__specs">
                  {specs.map(s => (
                    <span key={s} className="spec-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Products */}
      <section className="tech-section tech-section--gray" id="memory">
        <div className="container">
          <span className="section-label">Memory Products</span>
          <div className="accent-line" />
          <h2 className="section-title">eMMC, UFS & NAND Flash</h2>
          <p className="section-subtitle" style={{ marginBottom: 52 }}>
            Tera's memory product portfolio delivers industry-standard interfaces with competitive density, endurance, and reliability specifications for mobile, automotive, and industrial markets.
          </p>

          <div className="mem-grid">
            {memoryProducts.map(({ name, desc, specs, tag }) => (
              <div key={name} className="mem-card">
                {tag && <span className="mem-card__tag">{tag}</span>}
                <h3>{name}</h3>
                <p>{desc}</p>
                <ul className="mem-specs">
                  {specs.map(s => (
                    <li key={s}>
                      <span className="check"><CheckIcon /></span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mem-card__cta">
                  Get Datasheet <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Testing */}
      <section className="tech-section tech-section--dark" id="packaging">
        <div className="container">
          <span className="section-label">Packaging & Testing</span>
          <div className="accent-line" />
          <h2 className="section-title light">Complete Back-End Services</h2>
          <p className="section-subtitle light" style={{ marginBottom: 52 }}>
            We provide full OSAT (Outsourced Semiconductor Assembly and Test) services, enabling customers to receive finished, tested components from a single supply chain partner.
          </p>

          <div className="pkg-grid">
            <div className="pkg-packages">
              <h3>Package Formats</h3>
              <div className="pkg-cards">
                {packageTypes.map(({ name, desc }) => (
                  <div key={name} className="pkg-card">
                    <span className="pkg-card__name">{name}</span>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pkg-test">
              <h3>Test & Reliability Services</h3>
              <ul className="test-list">
                {testServices.map(s => (
                  <li key={s}>
                    <span className="check check--dark"><CheckIcon /></span>
                    {s}
                  </li>
                ))}
              </ul>

              <div className="cert-strip">
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>ISO 9001:2015</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>IATF 16949</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>AEC-Q100</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>RoHS / REACH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="tech-section" id="design">
        <div className="container tech-design">
          <div>
            <span className="section-label">Design Enablement</span>
            <div className="accent-line" />
            <h2 className="section-title">From Concept to First Silicon</h2>
            <p className="section-subtitle">
              Our design enablement team provides the PDK, IP library, reference flows, and hands-on support to help you successfully tape out on Tera process technology.
            </p>
            <ul className="design-list">
              {[
                'Complete PDK with EDA-certified design rules',
                'Standard cell, I/O, and memory IP libraries',
                'DFM analysis and signoff support',
                'Mask data preparation (MDP) and OPC',
                'Co-design with customer\'s fabless team',
                'Simulation models (SPICE, Verilog-A)',
              ].map(item => (
                <li key={item}>
                  <span className="check check--teal"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 32 }}>
              Start Your Design Engagement <ArrowRight />
            </Link>
          </div>
          <div className="design-visual" aria-hidden="true">
            <div className="design-card">
              <div className="design-card__header">
                <span>TERA PDK v4.2</span>
                <span className="design-status">● Active</span>
              </div>
              {[
                ['Process Node', '28nm CMOS'],
                ['EDA Support', 'Cadence, Synopsys, Mentor'],
                ['IP Library', '450+ cells'],
                ['DRC Rules', '1,200+'],
                ['LVS Netlists', 'Included'],
                ['SPICE Models', 'TT/SS/FF/SF/FS'],
                ['Tape-out Lead', '12–16 weeks'],
              ].map(([k, v]) => (
                <div key={k} className="design-row">
                  <span className="design-key">{k}</span>
                  <span className="design-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tech-cta">
        <div className="container tech-cta__inner">
          <h2>Ready to Evaluate Our Process Technology?</h2>
          <p>Request a PDK evaluation kit or schedule a technical briefing with our process engineers.</p>
          <div className="tech-cta__btns">
            <Link to="/contact" className="btn-primary">Request PDK Access <ArrowRight /></Link>
            <Link to="/contact" className="btn-outline">Schedule a Briefing</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
