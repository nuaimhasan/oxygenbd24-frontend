import { apiSlice } from "../api/apiSlice";

export const impactSectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImpactSections: builder.query({
      query: () => ({
        url: "/impactSection",
      }),
      providesTags: ["impactSection"],
    }),
    updateImpactSection: builder.mutation({
      query: ({ id, data }) => ({
        url: `/impactSection/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["impactSection"],
    }),
    addImpactSection: builder.mutation({
      query: (data) => ({
        url: `/impactSection/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["impactSection"],
    }),
  }),
});

export const {
  useGetImpactSectionsQuery,
  useUpdateImpactSectionMutation,
  useAddImpactSectionMutation,
} = impactSectionApi;
