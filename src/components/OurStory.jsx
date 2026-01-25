import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="our-story" className="our-story" ref={ref}>
      <div className="story-grid">
        <motion.div
          className="story-visual"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="story-img-container" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/assets/heritage-logo.jpg" alt="Jaala Heritage" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        </motion.div>

        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Heritage</span>
          <h2 className="section-title">A legacy of uncompromising luxury</h2>
          <p className="story-p">
            Established for the discerning few, Jaala represents the pinnacle of modern Indian luxury. We weave narratives of heritage into contemporary silhouettes, creating pieces that defy the passage of time.
          </p>
          <p className="story-p">
            Our atelier brings together master craftsmen and visionary designers. We source the finest silks, rare wools, and heritage textiles, treating each fabric with the reverence it commands.
          </p>
          <div className="story-signatures" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Bespoke</h4>
              <p style={{ color: 'var(--gold-muted)', fontSize: '0.8rem' }}>Tailored to perfection</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Timeless</h4>
              <p style={{ color: 'var(--gold-muted)', fontSize: '0.8rem' }}>Beyond seasons</p>
            </div>
          </div>
          <a href="#contact" className="btn btn-ghost" style={{ marginTop: '2.5rem' }}>
            Discover Our World
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function OrnamentSVG() {
  return (
    <svg viewBox="0 0 200 200" className="ornament-svg" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="70" />
      <path d="M100 30 Q130 70 100 100 Q70 130 100 170" />
      <path d="M30 100 Q70 70 100 100 Q130 130 170 100" />
      <path d="M55 55 Q85 85 115 55 Q145 85 145 115" />
      <path d="M55 145 Q85 115 115 145 Q85 175 55 145" />
    </svg>
  )
}
