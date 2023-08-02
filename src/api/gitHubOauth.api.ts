import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const CLIENT_ID_GITHUB = "d2436b394abf3fe0582f";
const CLIENT_SECRET = "fe9d42b9ca7e45b6fa4a3f9c0a8e2a47a3ddd6ba";
export let oAuthGitHub = createApi({
  reducerPath: "oAuthGitHub",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://github.com/login/oauth/access_token",
    credentials: "include",
    headers: { Accept: "application/json" },
  }),
  endpoints: (builder) => ({
    oAuthGitHub: builder.mutation<{ accessToken: string }, { code: string }>({
      query: ({ code }) => {
        return {
          url: ``,
          method: "POST",
          params: {
            client_id: CLIENT_ID_GITHUB,
            client_secret: CLIENT_SECRET,
            code,
          },
        };
      },
    }),
  }),
});

export let { useOAuthGitHubMutation } = oAuthGitHub;
