import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSliceAPI = createApi({
  reducerPath: "blogApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fe-react-agency-api-dash.vercel.app/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (page) => `users?page=${page}&limit=20`,
    })
  }),
});
export const { useGetAllUserQuery } = userSliceAPI;