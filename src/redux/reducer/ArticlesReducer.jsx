import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  newArticles: [],
};

export const ArticlesReducer = createSlice({
  name: "ArticlesReducer",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      state.articles.push(action.payload);
    },
    getArticles: (state, action) => {
      state.newArticles = [...state.articles, ...action.payload];
    },
  },
});

export const makeArticle = (data, file) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    console.log(data);
    console.log(formData);
    formData.append("data", JSON.stringify(data));
    formData.append("file", file);
    try {
      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      alert("Your article has been created!");

    } catch (error) {
      console.log(error);
      alert("Your article has not been created!");
    }
  }
}

export const { addToBookmark } = ArticlesReducer.actions;
export default ArticlesReducer.reducer;