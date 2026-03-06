import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technology from './pages/Technology'
import About from './pages/About'
import Markets from './pages/Markets'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ── Global particle canvas — fixed behind all pages ── */
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
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    class Particle {
      constructor() {
        this.x = Math.random() * (W || window.innerWidth)
        this.y = Math.random() * (H || window.innerHeight)
        this.angle = Math.random() * Math.PI * 2
        this.speed = 0.18 + Math.random() * 0.16
        this.turn  = (Math.random() - 0.5) * 0.005
        this.r     = 0.9 + Math.random() * 1.2
        this.alpha = 0.20 + Math.random() * 0.45
      }
      update() {
        this.angle += this.turn
        const vx = Math.cos(this.angle) * this.speed
        const vy = Math.sin(this.angle) * this.speed
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
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [canvasRef])
}

function ParticleBackground() {
  const ref = useRef(null)
  useParticleCanvas(ref)
  return <canvas ref={ref} className="particle-bg" aria-hidden="true" />
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ParticleBackground />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
