import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import useAuthStore from '../store/authStore'

export default function CartDrawer({ open, onClose }) {
    const items = useCartStore(state => state.items)
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const removeItem = useCartStore(state => state.removeItem)
    const getTotal = useCartStore(state => state.getTotal())
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    >
                        <div className="cart-header">
                            <h2>Shopping Cart</h2>
                            <button onClick={onClose} className="close-btn">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {items.length === 0 ? (
                                <div className="cart-empty">
                                    <p>Your cart is empty</p>
                                    <Link to="/products" onClick={onClose} className="btn btn-primary">
                                        Explore Collections
                                    </Link>
                                </div>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.images[0]} alt={item.name} />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                                            <div className="cart-item-actions">
                                                <div className="quantity-controls">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                        <Minus size={16} />
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <button onClick={() => removeItem(item.id)} className="remove-btn">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total:</span>
                                    <span className="total-amount">₹{getTotal.toLocaleString('en-IN')}</span>
                                </div>
                                {isAuthenticated ? (
                                    <Link to="/member/checkout" onClick={onClose} className="btn btn-primary btn-block">
                                        Proceed to Checkout
                                    </Link>
                                ) : (
                                    <div className="guest-actions">
                                        <button className="btn btn-ghost btn-block">Email Cart</button>
                                        <Link to="/login" onClick={onClose} className="btn btn-primary btn-block">
                                            Login to Checkout
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
