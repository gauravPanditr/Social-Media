import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/userContext';
import { fetchAllPosts, likeOrUnlikePost } from '../apis/postapi';
import { Post } from '../types/postypes'; 

const PostsList: React.FC = () => {
  const { userId } = useUserContext(); 
  const [posts, setPosts] = useState<Post[]>([]); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchAllPosts(); // Fetch posts from API
        setPosts(fetchedPosts); // Set posts in state
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts.'); // Show error message
      }
    };

    getPosts(); 
  }, []);

  const handleLikeOrUnlike = async (postId: string) => {
    console.log('Current userId:', userId); // Log userId
    if (!userId) {
      alert('You need to be logged in to like or unlike a post.');
      return;
    }

    try {
      console.log('Sending request to like/unlike post:', { postId, userId });
      await likeOrUnlikePost(postId, userId); // Like or unlike the post
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: post.likes.some(like => like.user === userId)
                ? post.likes.filter(like => like.user !== userId)
                : [...post.likes, { user: userId }]
              } // Toggle like
            : post
        )
      );
    } catch (error) {
      console.error('Failed to like/unlike post:', error);
      alert('Failed to like/unlike the post.'); 
    }
  };

  return (
    <div className="post-list">
      {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
      {posts.map((post) => (
        <div key={post._id} className="post border rounded p-4 mb-4">
          <img src={post.image} alt="Post" className="mb-2" />
          <p>{post.description}</p>
          <div className="flex justify-between items-center">
            <button 
              onClick={() => handleLikeOrUnlike(post._id)} 
              className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600"
            >
              {post.likes.some(like => like.user === userId) ? 'Unlike' : 'Like'}
            </button>
            <span>{post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
