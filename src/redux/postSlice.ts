import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '../types/postypes'; // Adjust the path as necessary
import { addPost } from '../apis/postapi'; // Adjust the path as necessary

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

// Async thunk to create a new post
export const createNewPost = createAsyncThunk<Post, Post>(
    'posts/createNewPost',
    async (post: Post, { rejectWithValue }) => {
        try {
            const response = await addPost(post);
            return response; // Ensure the response data is returned
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to create post");
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload); // Add the new post to the state
                state.loading = false;
            })
            .addCase(createNewPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set the error message
            });
    },
});

export default postsSlice.reducer;
