import axios from 'axios';

// Function to add a new post
export const addPost = async (data: FormData) => {
  try {
    const response = await axios.post<{ message: string; postId: string }>(
      'http://localhost:5000/api/posts/addpost',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
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

// Function to fetch all posts
export const fetchAllPosts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts/getallposts');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// Function to like or unlike a post
export const likeOrUnlikePost = async (postId: string, userId: string) => {
  try {
    await axios.post('http://localhost:5000/api/posts/likeorunlikepost', {
      postid: postId,
      userid: userId,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const addComment = async (commentData: { postid: string; userid: string; comment: string }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/posts/addcomment', commentData);
    return response.data; // Adjust this return based on what your API returns
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
