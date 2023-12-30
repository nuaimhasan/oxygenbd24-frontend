import { apiSlice } from "../api/apiSlice";

export const impactsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImpacts: builder.query({
      query: () => ({
        url: "/impacts",
      }),
      providesTags: ["impacts"],
    }),
    updateImpact: builder.mutation({
      query: ({ id, data }) => ({
        url: `/impacts/update-impact/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["impacts"],
    }),
    addImpact: builder.mutation({
      query: (data) => ({
        url: `/impacts/add-impact`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["impacts"],
    }),
    deleteImpact: builder.mutation({
      query: (id) => ({
        url: `/impacts/delete-impact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["impacts"],
    }),
    getImpactById: builder.query({
      query: (id) => ({
        url: `/impacts/${id}`,
      }),
      providesTags: ["impacts"],
    }),
  }),
});

export const {
  useGetImpactsQuery,
  useUpdateImpactMutation,
  useAddImpactMutation,
  useDeleteImpactMutation,
  useGetImpactByIdQuery,
} = impactsApi;
