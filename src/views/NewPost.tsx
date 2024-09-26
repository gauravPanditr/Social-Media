// views/AddPostPage.tsx
import React, { useState } from 'react';
import { addPost } from '../apis/postapi'; // Import the addPost API function

const AddPostPage: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!image) {
      setError('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await addPost(formData); // Call the addPost function
      setSuccessMessage('Post added successfully!');
      setDescription('');
      setImage(null);
      return response;
    } catch (error) {
      console.error('Error adding post:', error);
      setError('Failed to add post. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostPage;
