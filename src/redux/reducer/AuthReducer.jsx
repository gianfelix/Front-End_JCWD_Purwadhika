import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    imgProfile: "",
    isVerified: false,
    role: false,
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
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, isVerified, role } =
        action.payload;
      state.user = {
        id,
        username,
        email,
        phone,
        imgProfile,
        isVerified,
        role,
      };
    },
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
    userEmail(state, action) {
      state.email.push(action.payload);
    },
    userPhone(state, action) {
      state.phone.push(action.payload);
    },
    keepLoginSuccess: (state) => {
      state.login = true;
    },
  },
});


export const login = (data) => {
  return async (dispatch) => {
    const { email, username, phone, password } = data;

    const res = await axios.post(
      "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
      {
        username: username,
        email: email,
        phone: phone,
        password: password,
      }
    );

    const token = res.data.token;
    localStorage.setItem("token", token);
    dispatch(loginSuccess());
    dispatch(setUser(res.data.isAccountExist));
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );
      dispatch(setUser(res.data));
      dispatch(keepLoginSuccess());
    }
  };
};



export const { loginSuccess, logoutSuccess, userName, userEmail, userPhone, keepLoginSuccess, setUser  } =
  AuthReducer.actions;
export default AuthReducer.reducer;
