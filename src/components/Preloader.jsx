import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO_MS = 3200
const EXIT_MS = 600

// Preload hero background and other critical images during the preloader phase
const imagesToPreload = [
  '/assets/hero-bg.webp',
  '/assets/heritage-logo.webp',
  '/assets/mens.webp',
  '/assets/womens.webp',
  '/assets/accessories.webp',
]

function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image()
    img.src = url
  })
}

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('black')
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Start preloading other images while the preloader is showing
    preloadImages(imagesToPreload)

    const t1 = setTimeout(() => setPhase('logo'), 400)
    const t2 = setTimeout(() => setPhase('exit'), LOGO_MS - EXIT_MS)
    const t3 = setTimeout(() => setExiting(true), LOGO_MS)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {!exiting && (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Black phase */}
          <motion.div
            className="preloader-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'exit' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Logo container - visible after black */}
          <motion.div
            className="preloader-logo-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: phase === 'logo' || phase === 'exit' ? 1 : 0,
              scale: phase === 'logo' || phase === 'exit' ? 1 : 0.92,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/assets/logo.webp"
              alt="Jaala"
              className="preloader-logo"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: phase === 'logo' ? 1 : phase === 'exit' ? 0.7 : 0,
                scale: phase === 'logo' ? 1 : 0.9,
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: phase === 'logo' ? 0.1 : 0 }}
            />
            <motion.span
              className="preloader-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === 'logo' ? 1 : 0,
                y: phase === 'logo' ? 0 : 10,
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Premium Clothing
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
