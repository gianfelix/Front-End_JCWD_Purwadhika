import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  articles: [],
};

export const ArticlesReducer = createSlice({
  name: "ArticlesReducer",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      state.articles.push(action.payload);
    },
  },
});

export const { addToBookmark } = ArticlesReducer.actions;
export default ArticlesReducer.reducer;
