// apis/postapi.ts
import axios from 'axios';

export const addPost = async (data: FormData) => {
  try {
    const response = await axios.post<{ message: string; postId: string }>(
      'http://localhost:5000/api/posts/addpost', // Change this to your actual endpoint for adding posts
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
