import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import productsData from '../data/products.json'
import useCartStore from '../store/cartStore'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = productsData.find(p => p.id === parseInt(id))
    const addItem = useCartStore(state => state.addItem)

    if (!product) return <div>Product not found</div>

    return (
        <section className="page-section">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.images[0]} alt={product.name} />
                    </div>
                    <div className="product-detail-info">
                        <h1>{product.name}</h1>
                        <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
                        <p className="description">{product.description}</p>
                        <p className="details">{product.details}</p>
                        <button onClick={() => addItem(product)} className="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
