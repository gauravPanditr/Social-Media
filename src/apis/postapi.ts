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
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const fetchAllPosts = async () => {
  const response = await axios.get('http://localhost:5000/api/posts/getallposts');
   console.log(response);
   
  return response.data; // Adjust based on your API response structure
};

export const likeOrUnlikePost = async (postId: string, userId: string) => {
  await axios.post('http://localhost:5000/api/posts/likeorunlikepost', {
    postid: postId,
    userid: userId,
  });
};