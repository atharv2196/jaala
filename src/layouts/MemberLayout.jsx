import { Outlet } from 'react-router-dom'
import MemberHeader from '../components/MemberHeader'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function MemberLayout() {
    return (
        <div className="app member-area">
            <MemberHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    )
}
