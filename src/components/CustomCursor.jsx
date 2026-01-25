import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], [data-cursor-link]')) setHover(true)
    }
    const onOut = (e) => {
      if (!e.relatedTarget?.closest('a, button, [data-cursor-hover], [data-cursor-link]')) setHover(false)
    }

    const el = document.documentElement
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    if (window.matchMedia('(hover: hover)').matches) {
      document.body.classList.add('cursor-active')
    }

    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove('cursor-active')
    }
  }, [visible])

  if (!visible) return null

  const spring = { type: 'spring', stiffness: 500, damping: 28 }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ left: pos.x, top: pos.y }}
        transition={spring}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          left: pos.x,
          top: pos.y,
          scale: hover ? 1.8 : 1,
          borderColor: hover ? 'var(--gold)' : 'var(--gold-muted)',
        }}
        transition={{
          left: spring,
          top: spring,
          scale: { type: 'spring', stiffness: 400, damping: 25 },
          borderColor: { duration: 0.2 },
        }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
