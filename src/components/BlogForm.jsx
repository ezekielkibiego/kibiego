import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: {
      author: '',
      topic: '',
      description: '',
      image: null,
      category: '',
      tags: '',
      steps: ['', '', '']
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      content: {
        ...prevData.content,
        [name]: value
      }
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      content: {
        ...prevData.content,
        image: file
      }
    }));
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...formData.content.steps];
    updatedSteps[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      content: {
        ...prevData.content,
        steps: updatedSteps
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { title, content } = formData;

      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', title);
      formDataToSubmit.append('content', JSON.stringify(content)); // Serialize content object to JSON string

      // Append image file if it's not null
      if (content.image) {
        formDataToSubmit.append('image', content.image);
      }

      // Append other fields
      formDataToSubmit.append('category', content.category);
      formDataToSubmit.append('tags', content.tags);

      // Append steps if it's an array
      if (Array.isArray(content.steps)) {
        content.steps.forEach((step, index) => {
          formDataToSubmit.append(`steps[${index}]`, step);
        });
      }

      const response = await axios.post('http://127.0.0.1:8000/blogs/api/posts/', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Blog post created:', response.data);

      // Reset form data after successful submission
      setFormData({
        title: '',
        content: {
          author: '',
          topic: '',
          description: '',
          image: null,
          category: '',
          tags: '',
          steps: ['', '', '']
        }
      });

      if (onSubmit) {
        onSubmit(response.data);
      }
    } catch (error) {
      console.error('Error creating blog post:', error);

      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }

      alert('Failed to create blog post. Please check your input and try again.');
    }
  };


  return (
    <div className="container mt-4">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" name="author" value={formData.content.author} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input type="text" className="form-control" id="topic" name="topic" value={formData.content.topic} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={formData.content.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image Upload</label>
          <input type="file" className="form-control" id="image" name="image" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name="category" value={formData.content.category} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags (comma-separated)</label>
          <input type="text" className="form-control" id="tags" name="tags" value={formData.content.tags} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="steps" className="form-label">Steps</label>
          {formData.content.steps.map((step, index) => (
            <input
              key={index}
              type="text"
              className="form-control mb-2"
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
          ))}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
