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
import { adminMonumentsApi } from "./adminMonumentsApi/adminMonumentsApi";

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [monumentsApi.reducerPath]: monumentsApi.reducer,
    [adminMonumentsApi.reducerPath]: adminMonumentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      monumentsApi.middleware,
      adminMonumentsApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
