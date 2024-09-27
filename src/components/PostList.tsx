import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/userContext';
import { fetchAllPosts, likeOrUnlikePost, addComment } from '../apis/postapi';
import { Post } from '../types/postypes'; 

const PostsList: React.FC = () => {
  const { userId } = useUserContext(); 
  const [posts, setPosts] = useState<Post[]>([]); 
  const [error, setError] = useState<string | null>(null); 
  const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({}); 

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchAllPosts(); 
        setPosts(fetchedPosts); // Set posts in state
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts.'); // Show error message
      }
    };

    getPosts(); 
  }, []);

  const handleLikeOrUnlike = async (postId: string) => {
    console.log('Current userId:', userId); 
    if (!userId) {
      alert('You need to be logged in to like or unlike a post.');
      return;
    }

    try {
      console.log('Sending request to like/unlike post:', { postId, userId });
      await likeOrUnlikePost(postId, userId); 
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: post.likes.some(like => like.user === userId)
                ? post.likes.filter(like => like.user !== userId)
                : [...post.likes, { user: userId }]
              } 
            : post
        )
      );
    } catch (error) {
      console.error('Failed to like/unlike post:', error);
      alert('Failed to like/unlike the post.'); 
    }
  };

  
  const handleCommentChange = (postId: string, value: string) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value })); // Update comment input state
  };

  // Function to handle comment submission
  const handleCommentSubmit = async (postId: string) => {
    console.log('Current userId:', userId); // Log userId
    if (!userId) {
      alert('You need to be logged in to add a comment.'); // Alert if user is not logged in
      return; 
    }

    const comment = commentInputs[postId]; 
    if (comment) {
      try {
        await addComment({ postid: postId, userid: userId, comment }); // Call the API to add a comment
        setCommentInputs((prev) => ({ ...prev, [postId]: '' })); // Clear input after submit
        const updatedPosts = await fetchAllPosts(); // Refetch posts to update comments
        setPosts(updatedPosts); // Update posts in state
      } catch (error) {
        console.error('Failed to add comment:', error);
        alert('Failed to add comment.');
      }
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
          <div>
            <input
              type="text"
              placeholder="Add a comment"
              value={commentInputs[post._id] || ''}
              onChange={(e) => handleCommentChange(post._id, e.target.value)} // Update comment input
              className="border rounded p-2 mt-2"
            />
            <button
              onClick={() => handleCommentSubmit(post._id)} // Handle comment submission
              className="bg-green-500 text-white rounded px-2 py-1 hover:bg-green-600 mt-2"
            >
              Submit
            </button>
          </div>
          <div>
  {post.comments.map((comment) => (
    <p key={comment.user._id}>
      <strong>{comment.user.username}: </strong>
      {comment.comment}
    </p>
  ))}
</div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
