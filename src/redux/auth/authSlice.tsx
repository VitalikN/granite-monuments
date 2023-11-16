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
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.admin.email = action.payload.email;
        state.admin.id = action.payload.id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.admin = {
          email: null,
          id: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addMatcher(authApi.endpoints.current.matchPending, (state) => {
        state.isRefreshing = true;
      })
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.admin = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(authApi.endpoints.current.matchRejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { clearToken } = authSlice.actions;
export default persisteAuthReducer;
