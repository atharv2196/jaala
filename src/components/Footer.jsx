import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="footer-logo" data-cursor-hover>
          Jaala
        </a>
        <p className="footer-tagline">Premium Clothing · India</p>
        <nav className="footer-nav">
          <a href="#our-story" data-cursor-hover>Our Story</a>
          <a href="#categories" data-cursor-hover>Categories</a>
          <a href="#contact" data-cursor-hover>Contact</a>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} Jaala. All rights reserved.</p>
      </div>
    </footer>
  )
}
