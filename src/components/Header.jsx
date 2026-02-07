import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Bell, User, Menu, X } from 'lucide-react'
import useAuthStore from '../store/authStore'
import useCartStore from '../store/cartStore'
import CartDrawer from './CartDrawer'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const user = useAuthStore(state => state.user)
  const itemCount = useCartStore(state => state.getItemCount())
  const navigate = useNavigate()

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="header-logo">
          <span className="logo-text">Jaala</span>
        </Link>

        <nav className="header-nav">
          <Link to="/products" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/blogs" className="nav-link">Stories</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          <div className="header-actions">
            <button className="icon-btn" onClick={() => setCartOpen(true)}>
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/member/notifications" className="icon-btn">
                  <Bell size={20} />
                </Link>
                <Link to="/member/profile" className="icon-btn">
                  <User size={20} />
                </Link>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', marginLeft: '1rem' }}>
                Login
              </Link>
            )}
          </div>
        </nav>

        <button
          type="button"
          className="header-menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="header-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link to="/products" onClick={() => setOpen(false)}>Collections</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
              <Link to="/blogs" onClick={() => setOpen(false)}>Stories</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
              {!isAuthenticated && (
                <Link to="/login" onClick={() => setOpen(false)} style={{ color: 'var(--gold)' }}>Login</Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
