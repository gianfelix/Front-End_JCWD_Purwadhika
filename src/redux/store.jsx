import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducer/AuthReducer";
import ArticlesReducer from "./reducer/ArticlesReducer";

export const store = configureStore({
  reducer: {
    
    AuthReducer: AuthReducer,
    ArticlesReducer: ArticlesReducer
  },
});
