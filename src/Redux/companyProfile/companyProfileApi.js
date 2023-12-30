import { apiSlice } from "../api/apiSlice";

export const companyProfileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanyProfiles: builder.query({
      query: () => ({
        url: "/company-profile",
      }),
      providesTags: ["company-profile"],
    }),
    updateCompanyProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/company-profile/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["company-profile"],
    }),
    createCompanyProfile: builder.mutation({
      query: (formData) => ({
        url: `/company-profile/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["company-profile"],
    }),
  }),
});

export const {
  useGetCompanyProfilesQuery,
  useCreateCompanyProfileMutation,
  useUpdateCompanyProfileMutation,
} = companyProfileApi;
