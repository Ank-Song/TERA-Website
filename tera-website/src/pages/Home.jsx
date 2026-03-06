import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
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

/* ── Particle canvas hook ───────────────────────────── */
function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, particles, animId
    const mouse = { x: -9999, y: -9999 }

    const COUNT = () => window.innerWidth < 768 ? 45 : 85
    const CONNECT = 145
    const MOUSE_R = 120

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() {
        this.x = Math.random() * (W || window.innerWidth)
        this.y = Math.random() * (H || window.innerHeight)
        this.angle = Math.random() * Math.PI * 2
        this.speed = 0.18 + Math.random() * 0.16   // very slow — long graceful paths
        this.turn  = (Math.random() - 0.5) * 0.005  // tiny arc curvature
        this.r     = 0.9 + Math.random() * 1.2
        this.alpha = 0.20 + Math.random() * 0.45
      }
      update() {
        this.angle += this.turn
        const vx = Math.cos(this.angle) * this.speed
        const vy = Math.sin(this.angle) * this.speed
        // soft mouse repulsion
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < MOUSE_R * MOUSE_R) {
          const d = Math.sqrt(d2)
          const f = (MOUSE_R - d) / MOUSE_R * 0.45
          this.x += (dx / d) * f
          this.y += (dy / d) * f
        }
        this.x += vx
        this.y += vy
        // wrap edges for continuous paths
        if (this.x < -6) this.x = W + 6
        else if (this.x > W + 6) this.x = -6
        if (this.y < -6) this.y = H + 6
        else if (this.y > H + 6) this.y = -6
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`
        ctx.fill()
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: COUNT() }, () => new Particle())
    }

    function frame() {
      ctx.clearRect(0, 0, W, H)

      // draw connections beneath particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,200,232,${(1 - dist / CONNECT) * 0.26})`
            ctx.lineWidth = 0.55
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(frame)
    }

    init()
    frame()

    const onResize = () => {
      resize()
      particles.forEach(p => { p.x = Math.random() * W; p.y = Math.random() * H })
    }
    const hero = canvas.parentElement
    const onMove = e => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('resize', onResize)
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [canvasRef])
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

export default function Home() {
  useScrollReveal()
  useCounterAnimation()
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef)

  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

        <div className="hero__center">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Semiconductor Assembly &amp; Test &nbsp;·&nbsp; Manaus, Brazil
          </div>

          <h1 className="hero__title">
            Trusted Engineering.<br />
            <span className="hero__accent">Reliable Assembly.</span>
          </h1>

          <p className="hero__subtitle">
            Fully automated semiconductor package assembly and test —
            four ISO certifications, 5M units/month capacity from the heart of Brazil.
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
            <p className="section-subtitle light" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
              From Tier-1 automotive suppliers to fast-growing IoT innovators — global OEMs rely on TERA for critical semiconductor manufacturing.
            </p>
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
