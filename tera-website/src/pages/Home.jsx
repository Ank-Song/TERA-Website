import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'

/* ── Circuit board canvas animation (enhanced) ───────── */
function CircuitCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame
    const CELL = 72  // slightly tighter grid
    const PULSE_COUNT = 28
    const BUS_EVERY = 4  // every 4th line is a "bus" (brighter)

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Pulse types: 'normal' teal, 'fast' white, 'burst' bright cyan
    function randomPulse(canvas) {
      const cols = Math.ceil(canvas.width / CELL)
      const rows = Math.ceil(canvas.height / CELL)
      const horiz = Math.random() > 0.5
      const c = Math.floor(Math.random() * (horiz ? cols - 1 : cols))
      const r = Math.floor(Math.random() * (horiz ? rows : rows - 1))
      const typeRoll = Math.random()
      const type = typeRoll < 0.08 ? 'fast' : typeRoll < 0.2 ? 'burst' : 'normal'
      return {
        x: c * CELL,
        y: r * CELL,
        dx: horiz ? CELL : 0,
        dy: horiz ? 0 : CELL,
        progress: Math.random(),
        speed: type === 'fast' ? 0.014 + Math.random() * 0.012
              : type === 'burst' ? 0.006 + Math.random() * 0.006
              : 0.003 + Math.random() * 0.007,
        alpha: type === 'fast' ? 0.5 + Math.random() * 0.3
              : 0.22 + Math.random() * 0.32,
        tail: type === 'fast' ? 0.08 + Math.random() * 0.06
            : type === 'burst' ? 0.22 + Math.random() * 0.1
            : 0.2 + Math.random() * 0.18,  // longer tails
        type,
      }
    }

    const pulses = Array.from({ length: PULSE_COUNT }, () => randomPulse(canvas))

    function draw() {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const cols = Math.ceil(W / CELL) + 1
      const rows = Math.ceil(H / CELL) + 1

      // Bus lines (every BUS_EVERY cols/rows are slightly brighter)
      ctx.shadowBlur = 0
      for (let c = 0; c <= cols; c++) {
        const isBus = c % BUS_EVERY === 0
        ctx.strokeStyle = isBus ? 'rgba(0,180,216,0.09)' : 'rgba(0,180,216,0.04)'
        ctx.lineWidth = isBus ? 1 : 0.7
        ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, H); ctx.stroke()
      }
      for (let r = 0; r <= rows; r++) {
        const isBus = r % BUS_EVERY === 0
        ctx.strokeStyle = isBus ? 'rgba(0,180,216,0.09)' : 'rgba(0,180,216,0.04)'
        ctx.lineWidth = isBus ? 1 : 0.7
        ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(W, r * CELL); ctx.stroke()
      }

      // Node dots — larger at bus intersections
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const isBusNode = c % BUS_EVERY === 0 && r % BUS_EVERY === 0
          ctx.fillStyle = isBusNode ? 'rgba(0,180,216,0.22)' : 'rgba(0,180,216,0.11)'
          ctx.beginPath()
          ctx.arc(c * CELL, r * CELL, isBusNode ? 2.8 : 1.6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Pulses
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i]
        p.progress += p.speed

        if (p.progress >= 1) {
          pulses[i] = randomPulse(canvas)
          pulses[i].progress = 0
          continue
        }

        const tailStart = Math.max(0, p.progress - p.tail)
        const x1 = p.x + p.dx * tailStart
        const y1 = p.y + p.dy * tailStart
        const x2 = p.x + p.dx * p.progress
        const y2 = p.y + p.dy * p.progress

        // Choose colors by type
        const [trailR, trailG, trailB] = p.type === 'fast'
          ? [220, 240, 255]
          : p.type === 'burst'
          ? [0, 220, 255]
          : [0, 180, 216]
        const [headR, headG, headB] = p.type === 'fast'
          ? [255, 255, 255]
          : [72, 202, 228]

        const grad = ctx.createLinearGradient(x1, y1, x2, y2)
        grad.addColorStop(0, `rgba(${trailR},${trailG},${trailB},0)`)
        grad.addColorStop(1, `rgba(${trailR},${trailG},${trailB},${p.alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = p.type === 'fast' ? 1.5 : 2
        ctx.shadowBlur = p.type === 'burst' ? 14 : 8
        ctx.shadowColor = `rgba(${trailR},${trailG},${trailB},${p.alpha * 0.5})`
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        const headR2 = p.type === 'burst' ? 3.5 : 2.5
        ctx.shadowBlur = p.type === 'burst' ? 20 : 14
        ctx.shadowColor = `rgba(${headR},${headG},${headB},${p.alpha})`
        ctx.fillStyle = `rgba(${headR},${headG},${headB},${p.alpha})`
        ctx.beginPath()
        ctx.arc(x2, y2, headR2, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
}

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

/* ── Animated counter hook ──────────────────────────── */
function useCounterAnimation() {
  const hasRun = useRef(false)
  useEffect(() => {
    const statsEl = document.querySelector('.hero__stats')
    if (!statsEl) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasRun.current) {
        hasRun.current = true
        document.querySelectorAll('[data-count]').forEach(el => {
          const target = parseFloat(el.dataset.count)
          const suffix = el.dataset.suffix || ''
          const duration = 1500
          const start = performance.now()
          const isInt = Number.isInteger(target)
          const step = ts => {
            const progress = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = target * eased
            el.textContent = (isInt ? Math.floor(current) : current.toFixed(1)) + suffix
            if (progress < 1) requestAnimationFrame(step)
            else el.textContent = (isInt ? target : target.toFixed(1)) + suffix
          }
          requestAnimationFrame(step)
        })
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(statsEl)
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
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

/* ── Market data ────────────────────────────────────── */
const markets = [
  { icon: '🚗', title: 'Automotive', desc: 'AEC-Q100 qualified components for ADAS, infotainment, and EV powertrains with stringent reliability requirements.' },
  { icon: '📡', title: 'IoT & Consumer', desc: 'Low-power, high-density memory solutions enabling the next generation of connected devices and smart home products.' },
  { icon: '📱', title: 'Mobile', desc: 'High-performance eMMC and NAND Flash optimized for smartphones, tablets, and mobile computing platforms.' },
  { icon: '⚙️', title: 'Industrial', desc: 'Robust semiconductor solutions engineered for extreme temperatures, vibration, and long operational lifecycles.' },
  { icon: '🏥', title: 'Medical', desc: 'Precision-grade chips for diagnostic equipment, patient monitoring systems, and implantable medical devices.' },
]

/* ── Differentiators ────────────────────────────────── */
const differentiators = [
  { Icon: ChipIcon,  title: 'Fully Automated Assembly',   desc: 'An 18-step fully automated back-end process — from tape application through final test — ensures consistent quality at 5 million units per month.' },
  { Icon: ShieldIcon, title: 'Four ISO Certifications',   desc: 'ISO 9001, 14001, 45001 and 50001 certified. Every process step is controlled, documented and audited — quality you can verify, not just trust.' },
  { Icon: LeafIcon,  title: 'Sustainability Commitment',  desc: 'ISO 14001 and 50001 certified for environmental and energy management. Manaus operates on predominantly hydroelectric power — one of the greenest supply chains in the Americas.' },
  { Icon: GlobeIcon, title: 'Zona Franca Advantage',      desc: "Operating inside Brazil's Zona Franca de Manaus (ZFM) special economic zone delivers tax incentives via PADIS and PPB programs — and São Paulo delivery in ~3 days." },
  { Icon: SpeedIcon, title: 'Class 1K Cleanroom',         desc: '894 m² Class 1K and 1,142 m² Class 10K cleanroom — with 20% capacity still available for new customer programs and equipment.' },
  { Icon: FlaskIcon, title: 'Dedicated R&D Entity',       desc: "inTera Tecnologia, our in-house R&D arm, drives continuous process development under Brazil's PADIS semiconductor incentive programme." },
]

/* ── Partners (anonymized until NDA clearance) ──────── */
const clients = [
  'Tier-1 Automotive OEM',
  'Global Mobile Chipset Maker',
  'Industrial Controls Leader',
  'Consumer Electronics Brand',
  'Medical Device Manufacturer',
  'IoT Platform Provider',
]

export default function Home() {
  useScrollReveal()
  useCounterAnimation()

  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <CircuitCanvas />

        <div className="hero__center">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Semiconductor Assembly &amp; Test &nbsp;·&nbsp; Manaus, Brazil
          </div>

          <h1 className="hero__title">
            Trusted Engineering.<br />
            <span className="hero__accent">Reliable Assembly.</span>
          </h1>

          <p className="hero__group">TERA Semiconductor &mdash; Part of the Digitron Group</p>

          <p className="hero__subtitle">
            Fully automated semiconductor package assembly and test — eMMC, eMCP, BGA, and LPDDR —
            with four ISO certifications and 5M units/month capacity from the heart of Brazil.
          </p>

          <div className="hero__certs">
            <span className="hero__cert">✓ ISO 9001</span>
            <span className="hero__cert">✓ ISO 14001</span>
            <span className="hero__cert">✓ ISO 45001</span>
            <span className="hero__cert">✓ ISO 50001</span>
          </div>

          <div className="hero__actions">
            <Link to="/contact" className="btn-primary">
              Request a Quote <ArrowRight />
            </Link>
            <Link to="/technology" className="btn-outline">
              Explore Technology
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          <div className="container hero__stats-inner">
            <div className="hero__stat">
              <span className="hero__stat-value">Est. 2015</span>
              <span className="hero__stat-label">Founded</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value" data-count="46" data-suffix="">46</span>
              <span className="hero__stat-label">Employees</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value" data-count="5" data-suffix="M">5M</span>
              <span className="hero__stat-label">Units / Month</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">3,700 m²</span>
              <span className="hero__stat-label">Facility Area</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <ChevronDown />
        </div>
      </section>

      {/* ── CAPABILITIES OVERVIEW ──────────────────────── */}
      <section className="capabilities section" data-reveal>
        <div className="container">
          <div className="capabilities__header">
            <div>
              <span className="section-label">Core Capabilities</span>
              <div className="accent-line" />
              <h2 className="section-title">Built for High-Volume,<br />High-Reliability Production</h2>
            </div>
            <p className="section-subtitle">
              From bare wafer through package assembly, test, and final inspection — TERA handles the complete back-end process under one roof, at scale.
            </p>
          </div>

          <div className="capabilities__grid">
            <div className="cap-card cap-card--featured" style={{'--card-index': 0}}>
              <div className="cap-card__icon"><ChipIcon /></div>
              <h3>Package Assembly</h3>
              <p>18-step fully automated back-end process — tape application, back grind, die saw, die bond, wire bond, molding, laser marking, and packaging — at 5M units/month.</p>
              <Link to="/technology" className="cap-card__link">Learn more <ArrowRight /></Link>
            </div>
            <div className="cap-card" style={{'--card-index': 1}}>
              <div className="cap-card__icon"><FlaskIcon /></div>
              <h3>Package Portfolio</h3>
              <p>eMMC (153-ball), eMCP (221-ball), BGA (252/272/132-ball), and LPDDR (200-ball) packages in 1× to 8× die configurations. NAND sources: Toshiba, Micron, Samsung.</p>
              <Link to="/technology" className="cap-card__link">Learn more <ArrowRight /></Link>
            </div>
            <div className="cap-card" style={{'--card-index': 2}}>
              <div className="cap-card__icon"><ShieldIcon /></div>
              <h3>Cleanroom &amp; Capacity</h3>
              <p>894 m² Class 1K and 1,142 m² Class 10K cleanroom. Maximum 5,000,000 units per month, with 20% of cleanroom area still available for new customer programs.</p>
              <Link to="/technology" className="cap-card__link">Learn more <ArrowRight /></Link>
            </div>
            <div className="cap-card" style={{'--card-index': 3}}>
              <div className="cap-card__icon"><SpeedIcon /></div>
              <h3>Quality &amp; Compliance</h3>
              <p>ISO 9001, 14001, 45001, and 50001 certified. PADIS and PPB Brazilian incentive programmes. Responsible Business Alliance (RBA) member.</p>
              <Link to="/technology" className="cap-card__link">Learn more <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETS ────────────────────────────────────── */}
      <section className="markets-section section section--dark" data-reveal-scale>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Markets We Serve</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center' }}>
              Powering Innovation Across Industries
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              Our assembly and test services power critical applications in five demanding verticals.
            </p>
          </div>

          <div className="markets-grid">
            {markets.map(({ icon, title, desc }, i) => (
              <div key={title} className="market-card" style={{'--card-index': i}}>
                <span className="market-card__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="markets-cta">
            <Link to="/markets" className="btn-primary-dark">View All Markets <ArrowRight /></Link>
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
            <span className="section-label">Why Choose TERA</span>
            <div className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center' }}>
              Your Strategic Manufacturing Partner
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 52px' }}>
              World-class assembly capability with the agility of a dedicated partner — inside Brazil's premier free trade zone.
            </p>
          </div>

          <div className="diff-grid">
            {differentiators.map(({ Icon, title, desc }, i) => (
              <div key={title} className="diff-card" style={{'--card-index': i}}>
                <div className="diff-card__icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ────────────────────────────────────── */}
      <section className="partners section section--dark" data-reveal-scale>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-label">Trusted By Industry Leaders</span>
            <div className="accent-line" style={{ margin: '0 auto 16px' }} />
            <h2 className="section-title light" style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}>
              The Partner of Choice Across Five Verticals
            </h2>
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              From Tier-1 automotive suppliers to fast-growing IoT innovators — global OEMs rely on TERA for critical semiconductor manufacturing.
            </p>
          </div>
          <div className="partners-strip">
            {clients.map((name, i) => (
              <div key={name} className="partner-logo" style={{'--card-index': i}}>
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className="partners-nda">Client identities withheld under active NDA agreements.</p>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section className="cta-banner" data-reveal>
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to Partner with TERA?</h2>
            <p>Talk to our engineering team about your package requirements, volume, and timeline.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight /></Link>
            <Link to="/technology" className="btn-outline">View Technology</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
