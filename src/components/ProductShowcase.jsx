import { motion } from 'framer-motion'
import { useRef } from 'react'

const products = [
    {
        id: 1,
        name: "The Midnight Suit",
        price: "$2,499",
        image: "/assets/product-suit.png",
        tag: "Bestseller"
    },
    {
        id: 2,
        name: "Emerald Silk Gown",
        price: "$1,895",
        image: "/assets/product-dress.png",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Chrono Heritage",
        price: "$5,250",
        image: "/assets/accessories.png",
        tag: "Limited Edition"
    }
]

export default function ProductShowcase() {
    const ref = useRef(null)

    return (
        <section id="shop" className="product-showcase" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Selected Works</span>
                    <h2 className="section-title">Featured Collection</h2>
                </motion.div>

                <div className="products-grid">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        >
                            <div className="product-img-wrapper">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                                {product.tag && <span className="product-tag">{product.tag}</span>}
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
