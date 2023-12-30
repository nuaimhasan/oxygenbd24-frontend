import { apiSlice } from "../api/apiSlice";

export const careerFormApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCareerForms: builder.query({
      query: () => ({
        url: "/careerForms",
      }),
      providesTags: ["careerForm"],
    }),
    createCareerForm: builder.mutation({
      query: (data) => ({
        url: `/careerForms/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["careerForm"],
    }),
    deleteForm: builder.mutation({
      query: (id) => ({
        url: `/careerForms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["careerForm"],
    }),
    getCareerFormById: builder.query({
      query: (id) => ({
        url: `/careerForms/${id}`,
      }),
      providesTags: ["careerForm"],
    }),
  }),
});

export const {
  useGetCareerFormsQuery,
  useCreateCareerFormMutation,
  useDeleteFormMutation,
  useGetCareerFormByIdQuery,
} = careerFormApi;
