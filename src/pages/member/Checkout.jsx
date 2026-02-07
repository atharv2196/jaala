import useCartStore from '../../store/cartStore'

export default function Checkout() {
    const items = useCartStore(state => state.items)
    const getTotal = useCartStore(state => state.getTotal())
    const clearCart = useCartStore(state => state.clearCart)

    const handleCheckout = () => {
        alert('Order placed successfully!')
        clearCart()
    }

    return (
        <section className="page-section">
            <div className="container">
                <h1 className="section-title">Checkout</h1>
                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    {items.map(item => (
                        <div key={item.id}>
                            <p>{item.name} x {item.quantity} = ₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                    ))}
                    <h3>Total: ₹{getTotal.toLocaleString('en-IN')}</h3>
                    <button onClick={handleCheckout} className="btn btn-primary">
                        Place Order
                    </button>
                </div>
            </div>
        </section>
    )
}
