import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Instagram, Facebook } from 'lucide-react'
import useAuthStore from '../store/authStore'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = login(email, password)
        if (result.success) {
            navigate('/member/profile')
        }
    }

    return (
        <div className="auth-page">
            <motion.div
                className="auth-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="auth-header">
                    <Link to="/" className="auth-logo">Jaala</Link>
                    <h1>Welcome Back</h1>
                    <p>Login to access your exclusive member benefits</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label><Mail size={18} /> Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label><Lock size={18} /> Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>

                    <div className="auth-divider">or continue with</div>

                    <div className="social-login">
                        <button type="button" className="btn btn-ghost">
                            <Instagram size={20} /> Instagram
                        </button>
                        <button type="button" className="btn btn-ghost">
                            <Facebook size={20} /> Facebook
                        </button>
                    </div>

                    <p className="auth-footer">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </motion.div>
        </div>
    )
}
