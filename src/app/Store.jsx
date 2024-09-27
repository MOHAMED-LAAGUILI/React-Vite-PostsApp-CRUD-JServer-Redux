import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./Service Api/postApi";

export const Store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});