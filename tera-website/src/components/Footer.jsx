import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo-mark">T</span>
            <span className="logo-text">TERA</span>
            <span className="logo-sub">Semiconductor</span>
          </div>
          <p className="footer__tagline">
            Advanced semiconductor manufacturing solutions from the heart of Brazil.
            Precision, reliability, and innovation — engineered for your success.
          </p>
          <div className="footer__badges">
            <span className="badge">ISO 9001 Certified</span>
            <span className="badge">IATF 16949</span>
            <span className="badge">RoHS Compliant</span>
          </div>
        </div>

        <div className="footer__links-group">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Tera</Link></li>
            <li><Link to="/about#mission">Our Mission</Link></li>
            <li><Link to="/about#location">Location</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Technology</h4>
          <ul>
            <li><Link to="/technology">Process Capabilities</Link></li>
            <li><Link to="/technology#memory">Memory Products</Link></li>
            <li><Link to="/technology#packaging">Packaging & Testing</Link></li>
            <li><Link to="/technology#design">Design Services</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Markets</h4>
          <ul>
            <li><Link to="/markets#automotive">Automotive</Link></li>
            <li><Link to="/markets#iot">IoT & Consumer</Link></li>
            <li><Link to="/markets#industrial">Industrial</Link></li>
            <li><Link to="/markets#medical">Medical</Link></li>
          </ul>
        </div>

        <div className="footer__contact-col">
          <h4>Contact</h4>
          <address>
            <p>Polo Industrial de Manaus</p>
            <p>Manaus, Amazonas — Brazil</p>
          </address>
          <a href="mailto:sales@terasemi.com.br" className="footer__email">
            sales@terasemi.com.br
          </a>
          <Link to="/contact" className="btn-primary-dark footer__cta">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Tera Semiconductor Ltda. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/legal#privacy">Privacy Policy</Link>
            <Link to="/legal#terms">Terms of Use</Link>
            <Link to="/legal#cookies">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
