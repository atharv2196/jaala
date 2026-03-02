import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import useAuthStore from './store/authStore'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import MemberLayout from './layouts/MemberLayout'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Events from './pages/Events'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Member Pages
import Profile from './pages/member/Profile'
import MemberProducts from './pages/member/MemberProducts'
import MemberProductDetail from './pages/member/MemberProductDetail'
import MemberEvents from './pages/member/MemberEvents'
import Notifications from './pages/member/Notifications'
import Orders from './pages/member/Orders'
import Checkout from './pages/member/Checkout'

import './components/Preloader.css'
import './App.css'
import './pages/premium-styles.css'

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onPreloadComplete = useCallback(() => setLoaded(true), [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Preloader onComplete={onPreloadComplete} />
      {loaded && (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="events" element={<Events />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogPost />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Member Routes */}
          <Route path="/member" element={<ProtectedRoute><MemberLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/member/profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="products" element={<MemberProducts />} />
            <Route path="products/:id" element={<MemberProductDetail />} />
            <Route path="events" element={<MemberEvents />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="orders" element={<Orders />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  )
}
