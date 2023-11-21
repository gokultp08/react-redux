import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "hiiii" }];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ id: action.payload });
    },
  },
});

export const { add } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
