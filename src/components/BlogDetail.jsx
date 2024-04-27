// src/pages/BlogDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/blogs/api/posts/${id}/`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post details:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  return (
    <div>
      {blogPost && (
        <div>
          <h2>{blogPost.title}</h2>
          <p>Author: {blogPost.content.author}</p>
          <p>Date: {new Date(blogPost.created_at).toLocaleString()}</p>
          {/* Add additional content fields here */}
        </div>
      )}
    </div>
  );
};

export default BlogDetailsPage;
