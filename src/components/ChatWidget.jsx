import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatWidget() {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        { id: 1, text: 'Welcome to Jaala! How may I assist you today?', sender: 'bot' }
    ])

    const sendMessage = () => {
        if (!message.trim()) return

        const newMessage = { id: Date.now(), text: message, sender: 'user' }
        setMessages([...messages, newMessage])
        setMessage('')

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: 'Thank you for your message. Our team will assist you shortly. In the meantime, feel free to explore our exclusive collections.',
                sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
        }, 1000)
    }

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    >
                        <div className="chat-header">
                            <h3>Jaala Concierge</h3>
                            <button onClick={() => setOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="chat-messages">
                            {messages.map(msg => (
                                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                                    <p>{msg.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            />
                            <button onClick={sendMessage}>
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chat-fab"
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {open ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </>
    )
}
