import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/posts"
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/"
    })
  })
});

export const { useGetAllPostsQuery } = postApi;