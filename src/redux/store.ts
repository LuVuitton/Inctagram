import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "api/auth.api";
import { profileApi } from "../api/profile.api";
import { postsApi } from "../api/posts.api";
import { oAuthGitHub } from "../api/gitHubOauth.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [oAuthGitHub.reducerPath]: oAuthGitHub.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      postsApi.middleware,
      oAuthGitHub.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
