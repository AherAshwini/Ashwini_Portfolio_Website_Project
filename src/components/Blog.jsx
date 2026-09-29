import { posts, blogProfileUrl } from '../data/blog.js'
import { ArrowUpRightIcon, MediumIcon } from './Icons.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Blog.css'

export default function Blog() {
  const revealRef = useScrollReveal()

  return (
    <section id="blog" className="blog">
      <div className="container">
        <span className="eyebrow">Writing</span>
        <h2 className="section-heading">Blog</h2>
        <p className="section-sub">Notes on wireless AI, speech processing, and applied machine learning.</p>

        {posts.length > 0 ? (
          <div className="blog__grid reveal" ref={revealRef}>
            {posts.map((post) => (
              <article className="blog__card" key={post.url}>
                <h3 className="blog__title">{post.title}</h3>
                {post.description && <p className="blog__desc">{post.description}</p>}
                <div className="blog__meta">
                  {post.date && <span>{post.date}</span>}
                  {post.readingTime && <span>{post.readingTime}</span>}
                  {post.tag && <span className="tag">{post.tag}</span>}
                </div>
                <a href={post.url} className="blog__link" target="_blank" rel="noopener noreferrer">
                  Read on Medium
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog__empty reveal" ref={revealRef}>
            <MediumIcon width={26} height={26} />
            <p>
              I write about wireless AI, speech processing, and applied machine learning on Medium.
            </p>
            <a href={blogProfileUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read on Medium
              <ArrowUpRightIcon width={16} height={16} />
            </a>
          </div>
        )}

        {posts.length > 0 && (
          <div className="blog__all">
            <a href={blogProfileUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View All Posts
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
