import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
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
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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
            <button className="icon-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/member/notifications" className="icon-btn" aria-label="Notifications">
                  <Bell size={20} />
                </Link>
                <Link to="/member/profile" className="icon-btn" aria-label="Profile">
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

        <div className="header-mobile-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && <span className="badge">{itemCount}</span>}
          </button>
          <button
            type="button"
            className="header-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ position: 'relative', zIndex: open ? 1002 : 'auto' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="header-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav-links">
              <Link to="/products" onClick={() => setOpen(false)}>Collections</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
              <Link to="/blogs" onClick={() => setOpen(false)}>Stories</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
            {!isAuthenticated && (
              <Link to="/login" onClick={() => setOpen(false)} className="btn btn-primary mobile-login-btn">Login</Link>
            )}
            {isAuthenticated && (
              <div className="mobile-member-links">
                <Link to="/member/profile" onClick={() => setOpen(false)}>Profile</Link>
                <Link to="/member/orders" onClick={() => setOpen(false)}>Orders</Link>
                <Link to="/member/notifications" onClick={() => setOpen(false)}>Notifications</Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
