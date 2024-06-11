import { apiSlice } from "../api/apiSlice";

export const logoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => ({
        url: `logo/all`,
        method: "GET",
      }),
      providesTags: ["logo"],
    }),
    addLogo: builder.mutation({
      query: (formData) => ({
        url: `logo/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
    updateLogoById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `logo/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const {
  useGetLogosQuery,
  useUpdateLogoByIdMutation,
  useAddLogoMutation,
} = logoApi;
