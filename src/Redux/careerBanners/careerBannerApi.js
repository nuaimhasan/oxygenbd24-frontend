import { apiSlice } from "../api/apiSlice";

export const careerBannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCareerBanners: builder.query({
      query: () => ({
        url: "/careerBanners",
      }),
      providesTags: ["careerBanner"],
    }),
    updateCareerBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/careerBanners/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["careerBanner"],
    }),
    createCareerBanner: builder.mutation({
      query: (formData) => ({
        url: `/careerBanners/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["careerBanner"],
    }),
  }),
});

export const {
  useGetCareerBannersQuery,
  useCreateCareerBannerMutation,
  useUpdateCareerBannerMutation,
} = careerBannerApi;
