import axios from 'axios';

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

export const fetchAllPosts = async () => {
  const response = await axios.get('http://localhost:5000/api/posts/getallposts');
   console.log(response);
   
  return response.data; 
};

export const likeOrUnlikePost = async (postId: string, userId: string) => {
  await axios.post('http://localhost:5000/api/posts/likeorunlikepost', {
    postid: postId,
    userid: userId,
  });
};



