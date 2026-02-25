import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useAuthStore from '../store/authStore'

export default function MemberHeader() {
    const [open, setOpen] = useState(false)
    const user = useAuthStore(state => state.user)
    const logout = useAuthStore(state => state.logout)
    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location.pathname])

    return (
        <>
        <header className="header">
            <Link to="/" className="header-logo">
                <span className="logo-text">Jaala</span>
            </Link>

            <nav className="header-nav">
                <Link to="/member/profile" className="nav-link">Profile</Link>
                <Link to="/member/products" className="nav-link">Products</Link>
                <Link to="/member/events" className="nav-link">Events</Link>
                <Link to="/member/notifications" className="nav-link">Notifications</Link>
                <Link to="/member/orders" className="nav-link">Orders</Link>
                <button onClick={logout} className="btn btn-ghost">Logout</button>
            </nav>

            <div className="header-mobile-actions">
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
        </header>

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
                        <Link to="/member/profile" onClick={() => setOpen(false)}>Profile</Link>
                        <Link to="/member/products" onClick={() => setOpen(false)}>Products</Link>
                        <Link to="/member/events" onClick={() => setOpen(false)}>Events</Link>
                        <Link to="/member/notifications" onClick={() => setOpen(false)}>Notifications</Link>
                        <Link to="/member/orders" onClick={() => setOpen(false)}>Orders</Link>
                    </nav>
                    <button
                        onClick={() => { setOpen(false); logout(); }}
                        className="btn btn-ghost mobile-login-btn"
                        style={{ marginTop: '1.5rem' }}
                    >
                        Logout
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}
