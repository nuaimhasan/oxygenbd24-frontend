import { apiSlice } from "../api/apiSlice";

export const bannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => ({
        url: "/banner/allBanners",
      }),
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
