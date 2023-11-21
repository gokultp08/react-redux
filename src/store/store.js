import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counter";
import postsReducer from "../reducer/posts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
