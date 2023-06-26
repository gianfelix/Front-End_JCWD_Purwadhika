import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    password: "",
  },
  login: false,
  username: [],
  email: [],
  phone: [],
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // state.user = { ...action.payload };
      state.login = true;
      localStorage.setItem("token", action.payload);
    },
    logoutSuccess: (state) => {
      // state.user = initialState.user;
      state.login = false;
      localStorage.removeItem("token");
    },
    userName: (state, action) => {
      state.username.push(action.payload);
    },
    userEmail(state,action){
      state.email.push(action.payload);
    },
    userPhone(state,action){
      state.phone.push(action.payload);
    }
  },
});

export const { loginSuccess, logoutSuccess, userName, userEmail, userPhone } = AuthReducer.actions;

export default AuthReducer.reducer;
