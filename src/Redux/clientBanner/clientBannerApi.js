import { apiSlice } from "../api/apiSlice";

export const clientBannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allClientBanners: builder.query({
      query: () => ({
        url: "/clientBanner/all",
      }),
      providesTags: ["clientBanner"],
    }),
    updateClientBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/clientBanner/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["clientBanner"],
    }),
    addClientBanner: builder.mutation({
      query: (formData) => ({
        url: `/clientBanner/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["clientBanner"],
    }),
  }),
});

export const {
  useAllClientBannersQuery,
  useUpdateClientBannerMutation,
  useAddClientBannerMutation,
} = clientBannerApi;
