import { apiSlice } from "../api/apiSlice";

export const bannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: `/banner/all`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),

    addBanner: builder.mutation({
      query: (banner) => ({
        url: `/banner/add`,
        method: "POST",
        body: banner,
      }),
      invalidatesTags: ["banner"],
    }),

    updateBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/banner/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useGetBannerQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
} = bannerApi;
