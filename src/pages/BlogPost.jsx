import { useParams } from 'react-router-dom'
import blogsData from '../data/blogs.json'

export default function BlogPost() {
    const { id } = useParams()
    const blog = blogsData.find(b => b.id === parseInt(id))

    if (!blog) return <div>Blog not found</div>

    return (
        <section className="page-section">
            <div className="container">
                <article className="blog-post">
                    <h1>{blog.title}</h1>
                    <p className="blog-meta">{blog.author} • {blog.date} • {blog.readTime}</p>
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-content">
                        <p>{blog.content}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
