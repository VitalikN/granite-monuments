import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authApi } from "./authAPI";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: {
      email: null,
      id: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    clearToken: (state) => {
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    startTokenRefresh: (state) => {
      state.isRefreshing = true;
    },

    completeTokenRefresh: (state) => {
      state.isRefreshing = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.admin.email = action.payload.email;
        state.admin.id = action.payload.id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }
    );
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { clearToken } = authSlice.actions;
export default persisteAuthReducer;
