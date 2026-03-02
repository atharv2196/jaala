import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import blogsData from '../data/blogs.json'

export default function BlogPost() {
    const { id } = useParams()
    const navigate = useNavigate()
    const blog = blogsData.find(b => b.id === parseInt(id))

    if (!blog) return <div>Blog not found</div>

    return (
        <section className="page-section">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <article className="blog-post">
                    <h1>{blog.title}</h1>
                    <p className="blog-meta">{blog.author} • {blog.date} • {blog.readTime}</p>
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                    <div className="blog-content">
                        <p>{blog.content}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
