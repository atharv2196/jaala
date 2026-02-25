import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } }
}

export default function PublicLayout() {
    const location = useLocation()

    return (
        <div className="app">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <Footer />
            <ChatWidget />
        </div>
    )
}
