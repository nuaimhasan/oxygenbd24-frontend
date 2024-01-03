import { apiSlice } from "../api/apiSlice";

export const newsEventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewsEvents: builder.query({
      query: (query) => ({
        url: "/news-events",
        method: "GET",
        params: query,
      }),
      providesTags: ["news-events"],
    }),
    updateNewsEvent: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/news-events/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["news-events"],
    }),
    createNewsEvent: builder.mutation({
      query: (formData) => ({
        url: `/news-events/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["news-events"],
    }),
    deleteNewsEventById: builder.mutation({
      query: (id) => ({
        url: `/news-events/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["news-events"],
    }),
    getNewsEventById: builder.query({
      query: (id) => ({
        url: `/news-events/${id}`,
      }),
      providesTags: ["news-events"],
    }),
    getNewsEventBySlug: builder.query({
      query: (slug) => ({
        url: `/news-events/slug/${slug}`,
      }),
      providesTags: ["news-events"],
    }),
  }),
});

export const {
  useGetNewsEventsQuery,
  useCreateNewsEventMutation,
  useUpdateNewsEventMutation,
  useDeleteNewsEventByIdMutation,
  useGetNewsEventByIdQuery,
  useGetNewsEventBySlugQuery
} = newsEventApi;
