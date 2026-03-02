import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'mens',
    title: 'Mens',
    desc: 'Tailored silhouettes and refined essentials.',
    image: '/assets/mens.webp',
    color: '#8B7355',
  },
  {
    id: 'womens',
    title: 'Womens',
    desc: 'Effortless drapes and structured separates.',
    image: '/assets/womens.webp',
    color: '#C9A227',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    desc: 'Leather, silk, and statement pieces.',
    image: '/assets/accessories.webp',
    color: '#D4AF37',
  },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="categories" className="categories" ref={ref}>
      <motion.div
        className="categories-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">Categories</span>
        <h2 className="section-title">Explore by purpose</h2>
      </motion.div>

      <div className="categories-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            className="category-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ '--category-color': cat.color }}
          >
            <Link to={`/products?category=${cat.id}`} className="category-link">
              <div className="category-img-container">
                <img src={cat.image} alt={cat.title} className="category-img" loading="lazy" />
                <div className="category-overlay" />
                <div className="category-color-accent" />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
