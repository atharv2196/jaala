import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import productsData from '../data/products.json'
import useCartStore from '../store/cartStore'

// Unique color palette for each product (20 different colors)
const productColors = [
    '#8B4513', '#2E5266', '#6B4423', '#9B6B4F', '#4A5D23',
    '#7D5A3B', '#5C4033', '#3E2723', '#4E342E', '#6D4C41',
    '#795548', '#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8',
    '#6B5B4F', '#8B7355', '#A0826D', '#B8956A', '#C9A66B'
]

export default function Products() {
    const [searchParams] = useSearchParams()
    const categoryParam = searchParams.get('category')
    const [filter, setFilter] = useState(categoryParam || 'all')
    const addItem = useCartStore(state => state.addItem)

    useEffect(() => {
        if (categoryParam) {
            setFilter(categoryParam)
        }
    }, [categoryParam])

    const filtered = filter === 'all'
        ? productsData
        : productsData.filter(p => p.category === filter)

    return (
        <section className="page-section products-page">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title">Our Collections</h1>
                    <p className="section-desc">Discover luxury craftsmanship</p>
                </div>

                <div className="filter-buttons">
                    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                    <button onClick={() => setFilter('mens')} className={filter === 'mens' ? 'active' : ''}>Men's</button>
                    <button onClick={() => setFilter('womens')} className={filter === 'womens' ? 'active' : ''}>Women's</button>
                    <button onClick={() => setFilter('accessories')} className={filter === 'accessories' ? 'active' : ''}>Accessories</button>
                </div>

                <div className="products-grid premium">
                    {filtered.map((product, index) => {
                        const colorIndex = (product.id - 1) % productColors.length
                        const productColor = productColors[colorIndex]

                        return (
                            <div key={product.id} className="product-card premium-card">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="product-img-wrapper premium-img"
                                    style={{ background: `linear-gradient(135deg, ${productColor} 0%, ${productColor}cc 100%)` }}
                                >
                                    <img src={product.images[0]} alt={product.name} loading="lazy" />
                                    {product.tags?.includes('new') && <span className="product-tag new-tag">New</span>}
                                    {product.tags?.includes('exclusive') && <span className="product-tag exclusive-tag">Exclusive</span>}
                                    <div className="product-hover-overlay">
                                        <span className="view-details">View Details</span>
                                    </div>
                                </Link>
                                <div className="product-info premium-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                                    <p className="product-category">{product.category === 'mens' ? "Men's" : product.category === 'womens' ? "Women's" : "Accessories"}</p>
                                    <button
                                        onClick={() => addItem(product)}
                                        className="btn btn-primary btn-sm add-to-cart-btn"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
