import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = '/assets/hero-bg.webp'
    if (img.complete) {
      setImgLoaded(true)
    } else {
      img.onload = () => setImgLoaded(true)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.div
          className="hero-bg-img"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: imgLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(/assets/hero-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.5)' }} />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Premium Clothing · India
        </motion.p>
        <h1 className="hero-title">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Timeless
          </motion.span>
          <motion.span
            className="gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Elegance
          </motion.span>
        </h1>
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Curated collections for the discerning. Crafted with integrity, made to last.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <a href="#categories" className="btn btn-primary" data-cursor-hover>
            Explore
          </a>
          <a href="#our-story" className="btn btn-ghost" data-cursor-hover>
            Our Story
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <ScrollIcon />
      </motion.div>
    </section>
  )
}

function ScrollIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}
