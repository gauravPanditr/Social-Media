// src/components/PostsList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { getPosts, likePost } from '../redux/features/postSlice';
import { useUserContext } from '../context/userContext';

const PostsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { userId } = useUserContext(); // Get userId from context
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getPosts()); // Fetch posts on component mount
  }, [dispatch]);

  const handleLikeOrUnlike = (postId: string) => {
    if (!userId) {
      alert('You need to be logged in to like or unlike a post.');
      return;
    }
    dispatch(likePost({ postId, userId }));
  };

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post._id} className="post border rounded p-4 mb-4">
          <img src={post.image} alt="Post" className="mb-2" />
          <p>{post.description}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleLikeOrUnlike(post._id)}
              className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600"
            >
              {post.likes.some((like) => like.user === userId) ? 'Unlike' : 'Like'}
            </button>
            <span>{post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
