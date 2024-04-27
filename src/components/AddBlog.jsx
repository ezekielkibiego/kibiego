import React from 'react';
import BlogForm from './BlogForm';
import axios from 'axios';

const CreateBlogPage = () => {
  const handleSubmit = async (formData, imageFile) => {
    try {
      console.log('Form data:', formData); // Log formData before sending

      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('author', formData.author);
      formDataToSubmit.append('topic', formData.topic);
      formDataToSubmit.append('description', formData.description);
      formData.steps.forEach((step, index) => {
        formDataToSubmit.append(`steps[${index}]`, step);
      });
      formDataToSubmit.append('image', imageFile); // Append the image file to FormData
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('tags', formData.tags);

      const response = await axios.post('http://127.0.0.1:8000/blogs/api/posts/', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure proper content type for file upload
        },
      });

      console.log('Blog post created:', response.data);
      // Optionally, redirect or display a success message upon successful submission
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBlogPage;
