import blogsData from '../data/blogs.json'
import { Link } from 'react-router-dom'

export default function Blogs() {
    return (
        <section className="page-section">
            <div className="container">
                <h1 className="section-title">Stories & Insights</h1>
                <div className="blogs-grid">
                    {blogsData.map(blog => (
                        <Link key={blog.id} to={`/blogs/${blog.id}`} className="blog-card">
                            <div className="blog-img-wrapper" style={{ background: `linear-gradient(135deg, ${blog.color} 0%, ${blog.color}dd 100%)` }}>
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="blog-info">
                                <h3>{blog.title}</h3>
                                <p>{blog.excerpt}</p>
                                <span className="blog-meta">{blog.author} • {blog.readTime}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
