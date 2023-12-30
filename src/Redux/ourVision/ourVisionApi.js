import { apiSlice } from "../api/apiSlice";

export const ourVisionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOurVisions: builder.query({
      query: () => ({
        url: "/our-vision",
      }),
      providesTags: ["our-vision"],
    }),
    updateOurVision: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/our-vision/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["our-vision"],
    }),
    createOurVision: builder.mutation({
      query: (formData) => ({
        url: `/our-vision/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["our-vision"],
    }),
  }),
});

export const {
  useGetOurVisionsQuery,
  useCreateOurVisionMutation,
  useUpdateOurVisionMutation,
} = ourVisionApi;
