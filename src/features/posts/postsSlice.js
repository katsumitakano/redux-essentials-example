import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      const post = action.payload;
      state.push(post);
    }
  }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
