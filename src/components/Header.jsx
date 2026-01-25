import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#" className="header-logo" data-cursor-hover>
        <span className="logo-text">Jaala</span>
      </a>

      <nav className="header-nav">
        <a href="#categories" className="nav-link">Collections</a>
        <a href="#our-story" className="nav-link">About Us</a>
        <a href="#categories" className="nav-link">Lookbook</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#shop" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', marginLeft: '1rem', border: '1px solid var(--gold)' }}>Shop Now</a>
      </nav>

      <button
        type="button"
        className="header-menu-btn"
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
        data-cursor-hover
      >
        <MenuIcon open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="header-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              <a href="#categories" onClick={() => setOpen(false)} className="mobile-link">Collections</a>
              <a href="#our-story" onClick={() => setOpen(false)} className="mobile-link">About Us</a>
              <a href="#categories" onClick={() => setOpen(false)} className="mobile-link">Lookbook</a>
              <a href="#contact" onClick={() => setOpen(false)} className="mobile-link">Contact</a>
              <a href="#shop" onClick={() => setOpen(false)} className="mobile-link" style={{ color: 'var(--gold)' }}>Shop Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function MenuIcon({ open }) {
  return (
    <span className="menu-icon">
      <span className={open ? 'open' : ''} />
      <span className={open ? 'open' : ''} />
      <span className={open ? 'open' : ''} />
    </span>
  )
}
