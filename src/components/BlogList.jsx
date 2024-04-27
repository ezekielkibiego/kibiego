import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogListPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/blogs/api/posts/');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Blog Posts</h1>
      {blogPosts && blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post.id} className="card mb-4">
            {post.content && post.content.image && (
              <img src={post.content.image} className="card-img-top" alt="Blog Cover" style={{ maxHeight: '300px', objectFit: 'cover' }} />
            )}
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">Author: {post.content && post.content.author}</p>
              <p className="card-text">Topic: {post.content && post.content.topic}</p>
              <p className="card-text">Description: {post.content && post.content.description}</p>
              <p className="card-text">Category: {post.content && post.content.category}</p>
              <p className="card-text">Tags: {post.content && post.content.tags}</p>
              {post.content && post.content.steps && (
                <div>
                  <p className="card-text">Steps:</p>
                  <ul>
                    {post.content.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="card-text">Date: {new Date(post.created_at).toLocaleString()}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogListPage;
