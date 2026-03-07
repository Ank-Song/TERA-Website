import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LangContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggle } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/technology', label: t('nav.technology') },
    { to: '/markets', label: t('nav.markets') },
    { to: '/about', label: t('nav.about') },
  ]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="TERA Semiconductor"
            className="logo-img"
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
          />
          <span className="logo-text-fallback">
            <span className="logo-mark">T</span>
            <span className="logo-text">TERA</span>
            <span className="logo-sub">Semiconductor</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Language toggle (desktop) */}
        <div className="lang-toggle">
          <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => lang !== 'en' && toggle()}>EN</button>
          <span className="lang-sep">|</span>
          <button className={`lang-btn${lang === 'pt' ? ' active' : ''}`} onClick={() => lang !== 'pt' && toggle()}>PT</button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {/* Language toggle (mobile) */}
        <div className="lang-toggle">
          <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => lang !== 'en' && toggle()}>EN</button>
          <span className="lang-sep">|</span>
          <button className={`lang-btn${lang === 'pt' ? ' active' : ''}`} onClick={() => lang !== 'pt' && toggle()}>PT</button>
        </div>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `navbar__mobile-link${isActive ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
