import { apiSlice } from "../api/apiSlice";

export const newsCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewsCategory: builder.mutation({
      query: (data) => ({
        url: `/news-category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["news-category"],
    }),
    getNewsCategories: builder.query({
      query: () => ({
        url: `/news-category`,
      }),
      providesTags: ["news-category"],
    }),
    getNewsCategory: builder.query({
      query: (id) => ({
        url: `/news-category/${id}`,
      }),
      providesTags: ["news-category"],
    }),
    updateNewsCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/news-category/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["news-category"],
    }),
    deleteNewsCategory: builder.mutation({
      query: (id) => ({
        url: `/news-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["news-category"],
    }),
  }),
});

export const {
  useAddNewsCategoryMutation,
  useGetNewsCategoriesQuery,
  useGetNewsCategoryQuery,
  useUpdateNewsCategoryMutation,
  useDeleteNewsCategoryMutation,
} = newsCategoryApi;
