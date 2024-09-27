// views/AddPostPage.tsx
import React, { useState } from 'react';
import { addPost } from '../apis/postapi'; // Import the addPost API function
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Input from '../components/Input'; // Import the Input component

const AddPostPage: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate(); // Get navigate function

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!description || !image) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('image', image);

      const response = await addPost(formData); // Send the form data to the API
      setSuccessMessage(`Post added successfully! Post ID: ${response.postId}`);
      setDescription('');
      setImage(null);
      navigate('/postlist')

      // Optionally navigate back or to another page
       // Navigate to the homepage or another relevant page
    } catch (error) {
      console.error('Error adding post:', error);
      setError('Failed to add post. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <Input 
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter post description"
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {successMessage && <div className="text-green-500">{successMessage}</div>}
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostPage;
