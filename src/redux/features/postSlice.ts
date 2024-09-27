// src/redux/features/posts/postSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../types/postypes';
import { fetchAllPosts, likeOrUnlikePost } from '../../apis/postapi';

// Thunk to fetch all posts
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const posts = await fetchAllPosts();
  return posts;
});

// Thunk to like/unlike a post
export const likePost = createAsyncThunk(
  'posts/likePost',
  async ({ postId, userId }: { postId: string; userId: string }) => {
    await likeOrUnlikePost(postId, userId);
    return { postId, userId };
  }
);

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch posts';
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const { postId, userId } = action.payload;
        state.posts = state.posts.map((post) =>
          post._id === postId
            ? {
                ...post,
                likes: post.likes.some((like) => like.user === userId)
                  ? post.likes.filter((like) => like.user !== userId)
                  : [...post.likes, { user: userId }],
              }
            : post
        );
      });
  },
});

export default postSlice.reducer;
