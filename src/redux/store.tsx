import { configureStore } from "@reduxjs/toolkit";
import persisteAuthReducer from "./auth/authSlice";
import { authApi } from "./auth/authAPI";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { monumentsApi } from "./monuments/monumentsApi";

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [monumentsApi.reducerPath]: monumentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, monumentsApi.middleware),
});

export const persistor = persistStore(store);

export default store;
