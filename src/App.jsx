import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Categories from './components/Categories'
import ProductShowcase from './components/ProductShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './components/Preloader.css'
import './App.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const onPreloadComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={onPreloadComplete} />
      {loaded && (
        <div className="app">
          <Header />
          <main>
            <Hero />
            <OurStory />
            <Categories />
            <ProductShowcase />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
