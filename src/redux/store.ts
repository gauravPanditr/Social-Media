// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postSlice';

const store = configureStore({
  reducer: {
    posts: postReducer, // Register the post slice
  },
});

export default store;

// Types for useSelector and useDispatch hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
