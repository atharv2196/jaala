import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'

export default function MemberHeader() {
    const user = useAuthStore(state => state.user)
    const logout = useAuthStore(state => state.logout)

    return (
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
        </header>
    )
}
